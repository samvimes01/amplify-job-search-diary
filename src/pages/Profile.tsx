import {
  AccountSettings,
  Button,
  Flex,
  Heading,
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

  const [name, setName] = useState<string>("");

  useEffect(() => {
    getPrefs()
      .then((p) => {
        setName(p.name);
      })
      .catch(console.error);
  }, [getPrefs]);

  const handleSuccess = () => {
    alert("preferences are successfully changed!");
  };
  const onSave = () => {
    if (!name) {
      alert("name is mandatory");
      return;
    }
    setPrefs(name).catch(console.error);
  };
  return (
    <>
      <Heading level={3}>Details</Heading>
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
          <Heading level={3}>Preferences</Heading>
          <Label htmlFor="user_name">User full name</Label>
          <Input
            id="user_name"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={onSave} maxWidth="fit-content" variation="primary">
            Save
          </Button>
          <br />
        </Flex>
        <Flex direction="column" gap="small" minWidth="340px">
          <Heading level={3}>Change Password</Heading>
          <AccountSettings.ChangePassword onSuccess={handleSuccess} />
        </Flex>
      </Flex>
    </>
  );
}

export default Profile;
