import "./Sidebar.css";
import SearchBox from "../SearchBox/SearchBox";
import Category from "../Category/Category";
import Archives from "../Archives/Archives";
import RecentPosts from "../RecentPosts/RecentPosts";
import Tags from "../Tags/Tags";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SearchBox />
      <Category />
      <RecentPosts />
      <Archives />
      <Tags />
    </div>
  );
};

export default Sidebar;
