import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommentCount from "../CommentCount/CommentCount";
import Pagination from "../Pagination/Pagination";
import PostSkeleton from "../PostSkeleton/PostSkeleton";
import usePosts from "./../../hooks/usePosts";
import "./Posts.css";

const Posts = () => {
  const { data: posts, isLoading, error } = usePosts();

  const navigate = useNavigate();
  const [pagesPerPage] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const indexOfLastPost = currentPage * pagesPerPage;
  const indexOfFirstPost = indexOfLastPost - pagesPerPage;

  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  if (isLoading) return <PostSkeleton />;

  if (error) return <p> {error?.message} </p>;

  return (
    <>
      <div className="posts">
        {currentPosts?.map((post) => (
          <div key={post._id} className="post">
            <div className="post__img">
              <img src={post.thumbnail} alt="" />
              <div className="post__content">
                <h2 onClick={() => navigate(`/posts/${post._id}`)}>
                  {post.title}
                </h2>
              </div>
              <div className="post__info">
                <div className="post__time">
                  <AccessAlarmsOutlinedIcon className="post__icon" />
                  <span> {moment(post.createdAt).format("ll")} </span>
                </div>
                <div className="post__author">
                  <Person2OutlinedIcon className="post__icon" />
                  <span>by {post.author?.name}</span>
                </div>
                <CommentCount postId={post._id!} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination__container">
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
      </div>
    </>
  );
};

export default Posts;
