import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../store/posts";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";

const PostTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.entities.posts.list);

  const [pagesPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * pagesPerPage;
  const indexOfFirstPost = indexOfLastPost - pagesPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  const handleDelete = (post) => {
    dispatch(deletePost(post._id));
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <button
          onClick={() => navigate("/post/edit/new")}
          className="btn btn-primary"
        >
          New Post
        </button>
        <Filter />
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr key={post._id}>
              <td> {post.title} </td>
              <td> {post.category.name} </td>
              <td>
                <button
                  onClick={() => navigate(`/post/edit/${post._id}`)}
                  className="btn btn-primary"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(post)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {posts.length > pagesPerPage && (
        <Pagination
          count={posts.length}
          paginate={paginate}
          pagesPerPage={pagesPerPage}
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      )}
    </>
  );
};

export default PostTable;
