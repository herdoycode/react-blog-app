import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import React from "react";
import useComments from "../../hooks/useComments";

interface Props {
  postId: string;
}

const CommentCount = ({ postId }: Props) => {
  const { data } = useComments(postId);
  return (
    <div className="post__comment__share">
      <ModeCommentOutlinedIcon className="post__icon" />
      <span> {data?.length} </span>
    </div>
  );
};

export default CommentCount;
