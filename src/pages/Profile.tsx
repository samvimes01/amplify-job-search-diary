import {
  AccountSettings,
  Button,
  Flex,
  Input,
  Label,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { useAmplifyClient } from "../store";

function Profile() {
  const { user } = useAuthenticator((context) => [context.user]);

  const getOpenAiKey = useAmplifyClient((state) => state.getOpenAiKey);
  const setOpenAiKey = useAmplifyClient((state) => state.setOpenAiKey);

  const [key, setApiKey] = useState<string>("");

  useEffect(() => {
    getOpenAiKey()
      .then((key) => setApiKey(key))
      .catch(console.error);
  }, [getOpenAiKey]);

  const handleSuccess = () => {
    alert("password is successfully changed!");
  };
  const onKeyInput = () => {
    setOpenAiKey(key).catch(console.error);
  };
  return (
    <>
      <h2>Details</h2>
      {user && (
        <div>
          <div>
            <b>Username:</b> {user?.username}
          </div>
          <div>
            <b>Email:</b> {user.signInDetails?.loginId}
          </div>
        </div>
      )}
      <br />
      <Flex columnGap="8rem" rowGap="large" wrap="wrap">
        <Flex direction="column" gap="small" minWidth="340px">
          <h2>Preferences</h2>
          <Label htmlFor="gpt_api_key">OpenAI API key:</Label>
          <Input
            id="gpt_api_key"
            name="gpt_api_key"
            value={key}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <Button onClick={onKeyInput} maxWidth="fit-content">
            Save
          </Button>
          <br />
        </Flex>
        <Flex direction="column" gap="small" minWidth="340px">
          <h2>Change Password</h2>
          <AccountSettings.ChangePassword onSuccess={handleSuccess} />
        </Flex>
      </Flex>
    </>
  );
}

export default Profile;
