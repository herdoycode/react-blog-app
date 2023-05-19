import React, { useContext } from "react";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import AuthContext from "../../auth/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div className="profile">
      <img src={user.avatar} alt="" />
      <div className="profile__content">
        <h3>{user.name}</h3>
        <h5> {user.email} </h5>
      </div>
      <div className="profile__edit">
        <ModeEditOutlinedIcon color="inherit" />
      </div>
    </div>
  );
};

export default Profile;
