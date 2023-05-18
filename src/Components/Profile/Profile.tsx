import React from "react";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

const Profile = () => {
  const user = {
    name: "herdoy",
    avatar: "https://i.ibb.co/hYTJZXx/me-removebg-preview.jpg",
    email: "herdoy1@gmail.com",
  };

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
