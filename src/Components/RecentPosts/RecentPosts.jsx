import moment from "moment";
import "./RecentPosts.css";
import SidebarTitle from "../SidebarTitle/SidebarTitle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RecentPosts = () => {
  const navigate = useNavigate();

  let posts = useSelector((state) => state.entities.posts.list);

  posts = posts.slice(0, 4);

  return (
    <div>
      <SidebarTitle title={"Recent Posts"} />

      {posts?.map((post) => (
        <div
          onClick={() => navigate(`/post/${post?._id}`)}
          key={post?._id}
          className="recent__posts"
        >
          <img src={post?.thumbnail} alt="" />
          <div className="recent__post__content">
            <p> {post?.title} </p>
            <span> {moment(post?.createdAt).format("ll")} </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
