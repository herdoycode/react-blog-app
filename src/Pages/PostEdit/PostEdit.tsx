import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../Components/Spenner/Spinner";
import AuthContext from "../../auth/AuthContext";
import Post from "../../entities/Post";
import useAddPost from "../../hooks/useAddPost";
import useCategorys from "../../hooks/useCategorys";
import useEditPost from "../../hooks/useEditPost";
import apiClient from "../../services/apiClient";
import "./PostEdit.css";

const schema = Joi.object({
  title: Joi.string().max(300).required().label("Title"),
  thumbnail: Joi.string().min(5).max(200).required().label("Thumbnail"),
  content: Joi.string().max(6000).required().label("Content"),
  categoryId: Joi.string().max(300).required().label("Category"),
});

interface FormData {
  title: string;
  thumbnail: string;
  content: string;
  categoryId: string;
}

const PostEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) navigate("/");
  }, []);

  const { data: categorys } = useCategorys();
  const redirect = () => navigate("/control");
  const addPost = useAddPost(redirect);
  const editPost = useEditPost(id!, redirect);

  const [loading, setLoding] = useState<Boolean>(false);
  const [isLoading, setIsLoding] = useState<Boolean>(false);
  const {
    reset,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });

  useEffect(() => {
    register("content", { required: true, minLength: 15 });
  }, [register]);

  const onEditorStateChange = (editorState) => {
    setValue("content", editorState);
  };

  const content = watch("content");

  useEffect(() => {
    if (id === "new") return;

    setLoding(true);
    apiClient
      .get<Post>(`/posts/${id}`)
      .then(({ data }) => {
        reset({
          title: data.title,
          thumbnail: data.thumbnail,
          content: data.content,
          categoryId: data.category?._id,
        });
        setLoding(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoding(false);
      });
  }, [id]);

  return (
    <div className="login">
      <div className="edit__box">
        <h2 className="text-center mb-4">
          {" "}
          {id === "new" ? "Add New Post" : "Edit Your Post"}{" "}
        </h2>
        {loading ? (
          <Spinner />
        ) : (
          <form
            onSubmit={handleSubmit((data) => {
              setIsLoding(true);
              id === "new"
                ? addPost.mutate({ authorId: user._id, ...data })
                : editPost.mutate(data);
            })}
            className="w-100"
          >
            <div className="mb-3">
              <input
                {...register("title")}
                type="text"
                placeholder="Title..."
              />
              {errors.title && (
                <p className="text-danger"> {errors.title.message} </p>
              )}
            </div>
            <div className="mb-3">
              <input
                {...register("thumbnail")}
                type="text"
                placeholder="Thumbnail Url..."
              />
              {errors.thumbnail && (
                <p className="text-danger"> {errors.thumbnail.message} </p>
              )}
            </div>
            <div className="mb-3">
              <select {...register("categoryId")}>
                <option value="">Select</option>
                {categorys?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.categoryId && (
                <p className="text-danger"> {errors.categoryId.message} </p>
              )}
            </div>
            <div className="mb-3">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={onEditorStateChange}
                className="react__quill"
                placeholder="Content..."
              />
              {errors.content && (
                <p className="text-danger"> {errors.content.message} </p>
              )}
            </div>

            <button
              disabled={isLoading === true}
              type="submit"
              className="btnn"
            >
              {isLoading ? <Spinner /> : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PostEdit;
