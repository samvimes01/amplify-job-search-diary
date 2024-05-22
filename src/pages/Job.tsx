import {
  Button,
  Flex,
  Grid,
  Icon,
  Input,
  Label,
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import FileList from "../components/FileList";
import { useAmplifyClient } from "../store";
import { JobItem } from "../store/job_item";

const IconSave = () => {
  return (
    <Icon
      ariaLabel=""
      pathData="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM19 19H5V5H16.17L19 7.83V19ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM6 6H15V10H6V6Z"
    />
  );
};

function Job() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm<JobItem>();
  const hasOpenAiKey = useAmplifyClient((state) => state.hasOpenAiKey);
  const getCvText = useAmplifyClient((state) => state.getCvText);
  const createJob = useAmplifyClient((state) => state.createJob);
  const getPrefs = useAmplifyClient((state) => state.getPrefs);

  const [hasGPT, setHasGPT] = useState(false);
  useEffect(() => {
    hasOpenAiKey()
      .then((has) => setHasGPT(!!has))
      .catch(console.error);
  }, [hasOpenAiKey]);
  const { cvText, name, description } = useWatch({ control });
  const hasGPTValues = !!cvText && !!name && !!description;

  const [cvFile, setCvFile] = useState<string>("");
  const [cvContents, setCvContents] = useState<string>("");

  useEffect(() => {
    getCvText(cvFile).then(setCvContents).catch(console.error);
  }, [cvFile]);

  const onFileSelect = (path: string): void => {
    setValue("cvFile", path);
    setCvFile(path);
  };
  const onSubmit: SubmitHandler<JobItem> = (data) => {
    createJob(data);
  };
  const client = useAmplifyClient((state) => state.client);

  const generateCover = async () => {
    const { name: userName } = await getPrefs();
    const { cvText, name, description } = getValues();
    const { data } = await client.queries.generateCover({
      prompt: JSON.stringify({
        userName,
        cvText,
        name,
        description,
      }),
    });
    if (data) {
      setValue("coverLetterText", data);
    }
  };


  return (
    <>
      <Grid
        columnGap="1rem"
        rowGap="2rem"
        templateColumns="repeat(auto-fill, 49%)"
        templateRows="1fr"
      >
        <View minWidth="380px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gap="1rem">
              <Input
                placeholder="cv filename"
                type="hidden"
                {...register("cvFile")}
                readOnly
              />
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
              </div>

              <TextAreaField
                rows={5}
                label="Description"
                {...register("description")}
              />

              <TextAreaField rows={5} label="CV Text" {...register("cvText")} />
              <TextAreaField
                rows={5}
                label="Cover Letter"
                value={getValues("coverLetterText")}
                {...register("coverLetterText")}
              />

              <Button
                type="button"
                disabled={!hasGPT || !hasGPTValues}
                onClick={generateCover}
              >
                Generate Cover Letter
              </Button>

              <Button type="submit" variation="primary" gap="0.4rem">
                <IconSave /> Save
              </Button>
            </Flex>
          </form>
        </View>
        <View>
          <FileList selected={cvFile} onClick={onFileSelect} />
          {cvFile && (
            <>
              <Flex justifyContent="space-between" alignItems="center">
                <Label>CV contents</Label>
                <Button onClick={() => setValue("cvText", cvContents)}>
                  Copy to form
                </Button>
              </Flex>
              <TextAreaField rows={12} label="" readOnly value={cvContents} />
            </>
          )}
        </View>
      </Grid>
    </>
  );
}

export default Job;
