import React from "react";
import moment from "moment";
import "./RecentPosts.css";
import SidebarTitle from "../SidebarTitle/SidebarTitle";
import { Link, useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePosts";

const RecentPosts = () => {
  let { data: posts, error } = usePosts();
  const navigate = useNavigate();

  if (error) return <p>{error.message}</p>;

  posts = posts?.slice(0, 4);

  return (
    <div>
      <SidebarTitle title={"Recent Posts"} />

      {posts?.map((post) => (
        <div
          onClick={() => navigate(`/posts/${post._id}`)}
          key={post._id}
          className="recent__posts"
        >
          <img src={post.thumbnail} alt="" />
          <div className="recent__post__content">
            <p> {post.title} </p>
            <span> {moment(post.createdAt).format("ll")} </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
