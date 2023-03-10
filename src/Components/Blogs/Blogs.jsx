import "./Blogs.css";
import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";

const Blogs = ({ posts }) => {
  return (
    <div className="container">
      <div className="blogs">
        <div>
          <Posts posts={posts} />
        </div>
        <div>
          <Sidebar posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
