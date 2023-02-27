import "./PostEdit.css";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCategorys } from "../../store/categorys";
import { addPost, loadPosts, updatePost } from "../../store/posts";

const PostEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const categorys = useSelector((state) => state.entities.categorys.list);
  const posts = useSelector((state) => state.entities.posts.list);
  const user = useSelector((state) => state.entities.users.user);

  useEffect(() => {
    dispatch(loadCategorys());
    dispatch(loadPosts());
  }, [id]);

  useEffect(() => {
    if (id === "new") return;

    try {
      const post = posts.find((p) => p._id === id);
      setTitle(post?.title);
      setValue(post?.content);
      setThumbnail(post?.thumbnail);
      setCategory(post?.category?._id);
    } catch (error) {
      console.log(error);
    }
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (id === "new") {
        dispatch(
          addPost({
            title: title,
            content: value,
            authorId: user._id,
            thumbnail: thumbnail,
            categoryId: category,
          })
        );
      } else {
        dispatch(
          updatePost(id, {
            title,
            thumbnail,
            content: value,
            categoryId: category,
          })
        );
      }
      navigate("/control");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="post__edit">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title..."
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category__select"
          >
            <option value="" disabled>
              Select...
            </option>
            {categorys.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
          <ReactQuill
            className="react__quil"
            theme="snow"
            placeholder="Write Your Content..."
            value={value}
            onChange={setValue}
          />
          <input
            onChange={(e) => setThumbnail(e.target.value)}
            value={thumbnail}
            type="text"
            placeholder="Thumbnail Url..."
          />
          <button onClick={handleSubmit} className="btn btn__primary w-100">
            {id === "new" ? "Post" : "Update"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PostEdit;
