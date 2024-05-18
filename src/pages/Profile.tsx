import { AccountSettings, useAuthenticator } from "@aws-amplify/ui-react";

function Profile() {
  const { user } = useAuthenticator((context) => [context.user]);

  const handleSuccess = () => {
    alert("password is successfully changed!");
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
      <h2>Change Password</h2>
      <AccountSettings.ChangePassword onSuccess={handleSuccess} />
    </>
  );
}

export default Profile;
