import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import moment from "moment";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Call from "../../Components/Call/Call";
import RecentPosts from "../../Components/RecentPosts/RecentPosts";
import "./Post.css";
import usePost from "../../hooks/usePost";
import Loading from "../../Components/Loading/Loading";
import CommentBox from "../../Components/CommentBox/CommentBox";
import Comments from "../../Components/Comments/Comments";
import AuthContext from "../../auth/AuthContext";

const Post = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const { data, error, isLoading } = usePost(id!);

  if (isLoading) return <Loading />;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div className="post__wrapper">
        <div className="container">
          <button
            onClick={() => navigate("/")}
            className="btn btn__primary my-5 back"
          >
            <KeyboardBackspaceIcon />
          </button>
        </div>
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
                    <p>{data.author?.name}</p>
                  </div>
                </div>
              </div>
              <h2> {data.title} </h2>
              <hr />
              <div
                className="my-5"
                dangerouslySetInnerHTML={{ __html: data.content! }}
              />
              {user && <hr />}
              <div className="w-100">
                {user && <CommentBox postId={data._id!} />}
              </div>
              <hr />
              <div className="mb-4">
                <Comments postId={data._id!} />
              </div>
            </div>
            <div className="single__post__right">
              <RecentPosts />
            </div>
          </div>
        </div>
        <Call />
      </div>
    </>
  );
};

export default Post;
