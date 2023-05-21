import React from "react";
import { Skeleton } from "@mui/material";
import "./PostSkeleton.css";

const PostSkeleton = () => {
  const posts = Array.from(Array(4).keys());

  return (
    <div className="post__skeleton__wrapper">
      {posts.map((p) => (
        <div key={p} className="post__skeleton">
          <div className="mb-3">
            <Skeleton variant="rectangular" width={"100%"} height={200} />
          </div>
          <div className="p-2">
            <div className="mb-4">
              <Skeleton variant="rectangular" width={"100%"} height={40} />
            </div>
            <Skeleton variant="rectangular" width={"100%"} height={20} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSkeleton;
