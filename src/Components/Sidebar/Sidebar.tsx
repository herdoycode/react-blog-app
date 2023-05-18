import React from "react";
import "./Sidebar.css";
import SearchBox from "../SearchBox/SearchBox";
import Category from "../Category/Category";
import RecentPosts from "../RecentPosts/RecentPosts";

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
