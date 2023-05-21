import React from "react";
import useComments from "../../hooks/useComments";

interface Props {
  postId: string;
}

const Comments = ({ postId }: Props) => {
  const { data, error, isLoading } = useComments(postId);
  return (
    <div>
      <h2>Comments</h2>
      {data?.map((c) => (
        <div key={c._id} className="d-flex my-5">
          <div className="comment__user">
            <img src={c.user?.avatar} alt="" />
          </div>
          <div className="comment__info w-100">
            <h4>{c.user?.name}</h4>
            <p>{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
