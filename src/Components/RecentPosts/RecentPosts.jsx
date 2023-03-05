import config from "../../config.json";
import moment from "moment";
import "./RecentPosts.css";
import SidebarTitle from "../SidebarTitle/SidebarTitle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const RecentPosts = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(config.apiUrl + "/" + "posts");
      setPosts(data.slice(0, 4));
    };
    fetchPosts();
  }, []);

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
