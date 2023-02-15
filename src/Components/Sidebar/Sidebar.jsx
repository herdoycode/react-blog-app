import "./Sidebar.css";
import SearchBox from "../SearchBox/SearchBox";
import Category from "../Category/Category";
import RecentPosts from "../RecentPosts/RecentPosts";
import Tags from "../Tags/Tags";
const Sidebar = ({ posts }) => {
  return (
    <div className="sidebar">
      <SearchBox />
      <Category />
      <RecentPosts posts={posts} />
      <Tags />
    </div>
  );
};

export default Sidebar;
