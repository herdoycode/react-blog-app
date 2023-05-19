import "./PostEdit.css";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useCategorys from "../../hooks/useCategorys";
import Loading from "../../Components/Loading/Loading";

const PostEdit = () => {
  const { data: categorys, error, isLoading } = useCategorys();
  if (isLoading) return <Loading />;
  if (error) return <p> {error.message} </p>;
  return (
    <>
      <div className="container">
        <div className="post__edit">
          <input type="text" name="title" placeholder="Title..." />
          <select name="categoryId" className="category__select">
            <option value="" selected disabled>
              Select...
            </option>
            {categorys?.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
          <ReactQuill
            className="react__quil"
            placeholder="Write Your Content..."
          />
          <input name="thumbnail" type="text" placeholder="Thumbnail Url..." />
          <button className="btn btn-primary w-100">Post</button>
        </div>
      </div>
    </>
  );
};

export default PostEdit;
