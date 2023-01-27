import "./Blogs.css";
import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = ({ posts }) => {
  return (
    <div className="container">
      <div className="blogs">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Blogs;
