import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../auth/AuthContext";
import useAddComment from "../../hooks/useAddComment";
import Spinner from "../Spenner/Spinner";

const schema = Joi.object({
  text: Joi.string().min(5).max(300).required().label("Comment"),
});

interface FormData {
  text: string;
}

interface Props {
  postId: string;
}

const CommentBox = ({ postId }: Props) => {
  const { user } = useContext(AuthContext);
  const reload = () => {
    window.location.reload();
  };
  const addComment = useAddComment(reload);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  return (
    <div className="comments">
      <h2 className="mb-5">Put your comment</h2>
      <div className="comment__box mb-5">
        <form
          onSubmit={handleSubmit((data) => {
            addComment.mutate({ postId, userId: user._id, ...data });
          })}
        >
          <textarea
            {...register("text")}
            rows={4}
            placeholder="Your comment..."
          ></textarea>
          {errors.text && (
            <p className="text-danger"> {errors.text.message} </p>
          )}
          <button type="submit" className="btnn">
            {addComment.isLoading ? <Spinner /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentBox;
