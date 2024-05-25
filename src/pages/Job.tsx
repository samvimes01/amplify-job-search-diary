import {
  Alert,
  Button,
  Flex,
  Grid,
  Icon,
  Input,
  Label,
  Radio,
  RadioGroupField,
  TextAreaField,
  View,
} from "@aws-amplify/ui-react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import FileList from "../components/FileList";
import { useAmplifyClient } from "../store";
import { JobItem } from "../store/interface";

const IconSave = () => {
  return (
    <Icon
      ariaLabel=""
      pathData="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM19 19H5V5H16.17L19 7.83V19ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM6 6H15V10H6V6Z"
    />
  );
};

function Job() {
  const jobItem = useLoaderData() as JobItem;
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm<JobItem>({
    defaultValues: {
      // @ts-expect-error spread
      status: "new",
      ...jobItem,
    },
  });
  const navigate = useNavigate();
  const client = useAmplifyClient((state) => state.client);
  const getCvText = useAmplifyClient((state) => state.getCvText);
  const createJob = useAmplifyClient((state) => state.createJob);
  const updateJob = useAmplifyClient((state) => state.updateJob);
  const getPrefs = useAmplifyClient((state) => state.getPrefs);

  const [cvFile, setCvFile] = useState<string>(jobItem?.cvFile ?? "");
  const [cvContents, setCvContents] = useState<string>("");
  const [toast, setToast] = useState<string>("");
  const [generating, setGenerating] = useState<boolean>(false);

  const { cvText, name, description } = useWatch({ control });
  const hasGPTValues = !!cvText && !!name && !!description;

  useEffect(() => {
    getCvText(cvFile).then(setCvContents).catch(console.error);
  }, [cvFile]);

  const onFileSelect = (path: string): void => {
    const file = cvFile == path ? "" : path;
    setValue("cvFile", file);
    setCvFile(file);
  };
  const onSubmit: SubmitHandler<JobItem> = async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const saveFn = (jobItem as any)?.id ? updateJob : createJob;
    const { id, error } = await saveFn(data);
    setToast(error ? error : "Job Saved");
    if (id) {
      setValue("id", id);
      navigate(`/jobs/${id}`);
    }
  };

  const handleToastClose = (
    _: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setToast("");
  };

  const generateCover = async () => {
    setGenerating(true);
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
      setGenerating(false);
    }
  };
  const statuses = client.enums.JobStatus.values();

  return (
    <>
      <Grid
        columnGap="1rem"
        rowGap="2rem"
        templateColumns="repeat(auto-fill, minmax(49%, 1fr))"
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
                <Label htmlFor="company">Company</Label>
                <Input id="company" {...register("company")} />
              </div>

              <div>
                <Label htmlFor="name">
                  Name<sup>*</sup>
                </Label>
                <Input id="name" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
              </div>

              <div>
                <Label htmlFor="link">Job link</Label>
                <Input id="link" {...register("link")} />
              </div>

              <TextAreaField
                rows={5}
                label="Description"
                {...register("description")}
              />

              <TextAreaField rows={5} label="CV Text" {...register("cvText")} />
              <div>
                <Flex justifyContent="space-between" alignItems="center">
                  <Label htmlFor="coverLetterText">
                    Cover Letter (from name, description and CV)
                  </Label>
                  <Button
                    size="small"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        getValues("coverLetterText")
                      );
                    }}
                  >
                    <ContentCopyIcon fontSize="small" />
                  </Button>
                </Flex>
                <TextAreaField
                  rows={8}
                  label=""
                  value={getValues("coverLetterText")}
                  {...register("coverLetterText")}
                />
              </div>

              <Button
                type="button"
                isDisabled={!hasGPTValues || generating}
                onClick={generateCover}
              >
                Generate Cover Letter
              </Button>

              <RadioGroupField
                legend="Status: "
                direction="row"
                name="status"
              >
                {statuses.map((s) => (
                  <Radio key={s} value={s} {...register("status")}>
                    {s}
                  </Radio>
                ))}
              </RadioGroupField>

              <Button
                type="submit"
                variation="primary"
                colorTheme="success"
                gap="0.4rem"
                isDisabled={!getValues("name")}
              >
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
      <Snackbar
        open={!!toast}
        autoHideDuration={3000}
        onClose={handleToastClose}
      >
        <Alert variation={toast && toast == "Job Saved" ? "success" : "error"}>
          {toast}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Job;
