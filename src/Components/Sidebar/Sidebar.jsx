import "./Sidebar.css";
import SearchBox from "../SearchBox/SearchBox";
import Category from "../Category/Category";
import RecentPosts from "../RecentPosts/RecentPosts";

const Sidebar = ({ posts }) => {
  return (
    <div className="sidebar">
      <SearchBox />
      <Category />
      <RecentPosts posts={posts} />
    </div>
  );
};

export default Sidebar;
