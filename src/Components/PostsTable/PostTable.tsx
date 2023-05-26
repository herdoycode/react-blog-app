import React, { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import usePosts from "./../../hooks/usePosts";
import Loading from "../Loading/Loading";
import useDeletePost from "../../hooks/useDeletePost";
import Spinner from "../Spenner/Spinner";

const PostTable = () => {
  const navigate = useNavigate();
  const deletePost = useDeletePost();
  const { data: posts, isLoading, error } = usePosts();

  const [pagesPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * pagesPerPage;
  const indexOfFirstPost = indexOfLastPost - pagesPerPage;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  if (isLoading) return <Loading />;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <button
          onClick={() => navigate("/post/new")}
          className="btn btn-primary btn-sm"
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
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts?.map((post) => (
            <tr key={post._id}>
              <td> {post.title} </td>
              <td>
                <button
                  onClick={() => navigate(`/post/${post._id}`)}
                  className="btn btn-primary btn-sm"
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  disabled={deletePost.isLoading}
                  onClick={() => deletePost.mutate(post)}
                  className="btn btn-danger btn-sm"
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
