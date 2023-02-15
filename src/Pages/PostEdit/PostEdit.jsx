import config from "../../config.json";
import "./PostEdit.css";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PostEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    if (id === "new") return;
    const fetchPost = async () => {
      const { data } = await axios.get(`${config.dbUrl}posts/${id}`);
      setTitle(data.title);
      setValue(data.content);
      setThumbnail(data.thumbnail);
      setCategory(data.category._id);
    };
    fetchPost();
  }, []);

  useEffect(() => {
    const fetchCategorys = async () => {
      const { data } = await axios.get(config.dbUrl + "categorys");
      setCategorys(data);
    };
    fetchCategorys();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (id === "new") {
        axios.post(config.dbUrl + "posts", {
          title: title,
          content: value,
          authorId: "63e10752bfea5e20a83eb50e",
          thumbnail: thumbnail,
          categoryId: category,
        });
      } else {
        axios.put(config.dbUrl + "posts/" + id, {
          title,
          thumbnail,
          content: value,
          categoryId: category,
        });
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
