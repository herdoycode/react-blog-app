import React from "react";
import Category from "../Category/Category";
import RecentPosts from "../RecentPosts/RecentPosts";
import SearchBox from "../SearchBox/SearchBox";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SearchBox />
      <Category />
      <RecentPosts />
    </div>
  );
};

export default Sidebar;
