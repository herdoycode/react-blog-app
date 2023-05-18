import React from "react";
import "./Blogs.css";
import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = () => {
  return (
    <div className="container">
      <div className="blogs">
        <div>
          <Posts />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
