import React, { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Plese Login</div>;

  return <div>Wellcome {user.username}</div>;
}

export default Profile;
