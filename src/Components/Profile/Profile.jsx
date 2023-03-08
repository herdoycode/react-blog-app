import React from "react";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.entities.users.user);
  return (
    <div className="profile">
      <img src={user?.avatar} alt="" />
      <div className="profile__content">
        <h3>{user?.name}</h3>
        <h5> {user?.email} </h5>
      </div>
      <div className="profile__edit">
        <ModeEditOutlinedIcon color="inherit" />
      </div>
    </div>
  );
};

export default Profile;
