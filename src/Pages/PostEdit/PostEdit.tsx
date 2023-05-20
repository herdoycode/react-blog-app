import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import Post from "../../entities/Post";
import useAddPost from "../../hooks/useAddPost";
import apiClient from "../../services/apiClient";
import Loading from "./../../Components/Loading/Loading";
import useCategorys from "./../../hooks/useCategorys";
import "./PostEdit.css";
import useEditPost from "../../hooks/useEditPost";
import AuthContext from "../../auth/AuthContext";

const PostEdit = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  const { id } = useParams();
  const redirect = () => navigate("/control");
  const addPost = useAddPost(redirect);

  const editPost = useEditPost(id!, redirect);
  const { data: categorys } = useCategorys();

  const [title, setTitle] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [categoryId, setCategoryId] = useState<string>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (id === "new") return;

    setLoading(true);
    apiClient
      .get<Post>(`posts/${id}`)
      .then(({ data }) => {
        setTitle(data.title!);
        setThumbnail(data?.thumbnail!);
        setCategoryId(data.category?._id);
        setValue(data?.content!);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (error) return <p>{error}</p>;

  if (loading) return <Loading />;

  return (
    <>
      <div className="post__edit">
        <div className="container">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              id === "new"
                ? addPost.mutate({
                    title,
                    thumbnail,
                    content: value,
                    categoryId,
                    authorId: user._id,
                  })
                : editPost.mutate({
                    title,
                    thumbnail,
                    content: value,
                    categoryId,
                  });
            }}
          >
            <input
              className="form-control mb-3"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title..."
            />
            <select
              onChange={(e) => setCategoryId(e.target.value)}
              className="form-select mb-3"
              value={categoryId}
            >
              <option defaultValue="">Select...</option>
              {categorys?.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
            <input
              className="form-control mb-3"
              type="text"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              placeholder="Thumbnail..."
            />

            <div className="mb-3">
              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                placeholder="Post Content..."
              />
            </div>
            <button type="submit" className="btn btn btn-primary w-100">
              {id === "new" ? "Post" : "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostEdit;
