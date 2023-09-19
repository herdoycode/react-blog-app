import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageTable from "../../Components/MessageTable/MessageTable";
import PostTable from "../../Components/PostsTable/PostTable";
import Profile from "../../Components/Profile/Profile";
import AuthContext from "../../auth/AuthContext";
import "./DashBoard.css";

const DashBoard = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  const actions = [
    { id: 1, name: "Profile" },
    { id: 2, name: "Posts" },
    { id: 3, name: "Messages" },
  ];
  const [action, setAction] = useState("");

  const renderItems = (action: string) => {
    switch (action) {
      case "Profile":
        return <Profile />;
      case "Posts":
        return <PostTable />;
      case "Messages":
        return <MessageTable />;
      default:
        return <PostTable />;
    }
  };
  return (
    <>
      <div className="container">
        <div className="dashboard">
          <div className="db__left">
            <ul className="list-group">
              {actions.map((action, index) => (
                <li
                  key={index}
                  style={{
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                  }}
                  className="list-group-item nav_text"
                  onClick={() => setAction(action.name)}
                >
                  {action.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="db__right">{renderItems(action)}</div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
