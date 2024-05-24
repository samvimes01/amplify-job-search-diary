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

  const getPrefs = useAmplifyClient((state) => state.getPrefs);
  const setPrefs = useAmplifyClient((state) => state.setPrefs);

  const [key, setApiKey] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    getPrefs()
      .then((p) => {
        setName(p.name)
        setApiKey(p.key)
      })
      .catch(console.error);
  }, [getPrefs]);

  const handleSuccess = () => {
    alert("preferences are successfully changed!");
  };
  const onSave = () => {
    if (!name) {
      alert("name is mandatory");
      return 
    }
    setPrefs(key, name).catch(console.error);
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
          <Label htmlFor="user_name">User full name</Label>
          <Input
            id="user_name"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label htmlFor="gpt_api_key">
            OpenAI API key (temporary not used):
          </Label>
          <Input
            id="gpt_api_key"
            name="gpt_api_key"
            value={key}
            disabled
            onChange={(e) => setApiKey(e.target.value)}
          />
          <Button onClick={onSave} maxWidth="fit-content" variation="primary">
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
