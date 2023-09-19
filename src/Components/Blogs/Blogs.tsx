import React from "react";
import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";
import "./Blogs.css";

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
