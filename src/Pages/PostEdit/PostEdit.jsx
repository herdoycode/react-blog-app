import "./PostEdit.css";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPost, updatePost } from "../../store/posts";
import { toast } from "react-toastify";

const PostEdit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    categoryId: "",
    thumbnail: "",
  });
  const [value, setValue] = useState("");
  const categorys = useSelector((state) => state.entities.categorys.list);
  const posts = useSelector((state) => state.entities.posts.list);
  const user = useSelector((state) => state.entities.users.user);

  useEffect(() => {
    if (id !== "new") dispatch(getPost(id));
  }, [id]);

  const post = useSelector((state) => state.entities.posts.post);

  useEffect(() => {
    if (id === "new") return;

    try {
      const { title, content, thumbnail, category } = post;
      setData({ title, thumbnail, categoryId: category?._id });
      setValue(content);
    } catch (error) {
      console.log(error);
    }
  }, [posts]);

  const handleChange = ({ target: input }) => {
    const dataClone = { ...data };
    dataClone[input.name] = input.value;
    setData(dataClone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id === "new") {
      dispatch(
        addPost({
          title: data.title,
          thumbnail: data.thumbnail,
          content: value,
          categoryId: data.categoryId,
          authorId: user._id,
        })
      );
    } else {
      dispatch(
        updatePost(id, {
          title: data.title,
          thumbnail: data.thumbnail,
          content: value,
          categoryId: data.categoryId,
        })
      );
    }
  };

  const result = useSelector((state) => state.entities.posts.result);

  useEffect(() => {
    if (result) {
      id === "new"
        ? toast.success("Post Created.")
        : toast.warning("Post updated!");
      setTimeout(() => (window.location = "/control"), 1500);
    }
  }, [result]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="post__edit">
          <input
            value={data.title}
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Title..."
          />
          <select
            value={data.categoryId}
            name="categoryId"
            className="category__select"
            onChange={handleChange}
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
            placeholder="Write Your Content..."
            value={value}
            onChange={setValue}
          />
          <input
            value={data.thumbnail}
            name="thumbnail"
            type="text"
            onChange={handleChange}
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
