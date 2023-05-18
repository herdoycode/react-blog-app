import React from "react";
import "./PostSkeleton.css";

const PostSkeleton = () => {
  const posts = Array.from(Array(6).keys());

  return (
    <div className="post__skeleton__wrapper">
      {posts.map((p) => (
        <div key={p} className="post__skeleton">
          <div className="post__skeleton__img"></div>
          <div className="post__skeleton_info">
            <div className="post__skeleton__title"></div>
            <div className="post__skeleton__meta"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSkeleton;
