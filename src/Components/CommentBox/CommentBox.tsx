import React from "react";

interface Props {
  postId: string;
}

const CommentBox = ({ postId }: Props) => {
  return (
    <div className="comments">
      <h2 className="mb-5">Put your comment</h2>
      <div className="comment__box mb-5">
        <textarea rows={4} placeholder="Your comment..."></textarea>
        <button className="btnn">Comment</button>
      </div>
    </div>
  );
};

export default CommentBox;
