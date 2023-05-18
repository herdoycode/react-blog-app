import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import moment from "moment";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Call from "../../Components/Call/Call";
import Copyright from "../../Components/Copyright/Copyright";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import RecentPosts from "../../Components/RecentPosts/RecentPosts";
import "./Post.css";
import usePost from "../../hooks/usePost";
import Loading from "../../Components/Loading/Loading";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = usePost(id!);

  if (isLoading) return <Loading />;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Navbar />
      <div className="container">
        <button
          onClick={() => navigate("/")}
          className="btn btn__primary my-5 back"
        >
          <KeyboardBackspaceIcon />
        </button>
      </div>
      <div className="post__wrapper">
        <div className="container">
          <div className="single__post">
            <div className="single__post__left">
              <div className="post__img__container">
                <img src={data.thumbnail} alt="" />
                <div className="post__info">
                  <div>
                    <AccessTimeIcon className="icon" />{" "}
                    <p>{moment(data.createdAt).format("ll")}</p>
                  </div>
                  <div>
                    <PermIdentityIcon className="icon" />
                    <p>{data.author.name}</p>
                  </div>
                </div>
              </div>
              <h2> {data.title} </h2>
              <hr />
              <div
                className="my-5"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              <hr />
              <div className="comments">
                <h2 className="mb-5">Put your comment</h2>
                <div className="comment__box mb-5">
                  <textarea></textarea>
                  <button className="btn btn__primary">Comment</button>
                </div>
              </div>
            </div>
            <div className="single__post__right">
              <RecentPosts />
            </div>
          </div>
        </div>
        <Call />
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default Post;
