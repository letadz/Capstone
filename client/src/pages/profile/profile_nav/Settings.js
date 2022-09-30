import React from "react";

const Settings = ({ user }) => {
  return (
    <div>
      <img src={user?.picture} alt="" />
      <span>
        {user?.first_name} {user.last_name}
      </span>
    </div>
  );
};

export default Settings;
