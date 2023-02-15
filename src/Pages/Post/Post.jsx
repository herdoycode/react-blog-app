import config from "../../config.json";
import parse from "html-react-parser";
import moment from "moment";
import "./Post.css";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import Tags from "../../Components/Tags/Tags";
import Call from "../../Components/Call/Call";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Copyright/Copyright";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RecentPosts from "../../Components/RecentPosts/RecentPosts";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get(`${config.dbUrl}comments/${id}`);
      setComments(data);
    };
    fetchComments();
  }, [id]);

  console.log(comments);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(`${config.dbUrl}posts/${id}`);
      setPost(data);
    };
    fetchPosts();
  }, [id]);

  const handleComment = async (e) => {
    e.preventDefault();
    await axios.post(`${config.dbUrl}comments`, {
      postId: id,
      userId: "63e10752bfea5e20a83eb50e",
      text: comment,
    });
    window.location.reload();
  };

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
                <img src={post?.thumbnail} alt="" />
                <div className="post__info">
                  <div>
                    <AccessTimeIcon className="icon" />{" "}
                    <p>{moment(post.createdAt).format("ll")}</p>
                  </div>
                  <div>
                    <PermIdentityIcon className="icon" />
                    <p>{post?.author?.name}</p>
                  </div>
                </div>
              </div>
              <h2> {post?.title} </h2>
              <hr />
              <p className="mb-4"> {parse(`${post.content}`)}</p>
              <hr />
              <div className="comments">
                <h2 className="mb-5">Put your comment</h2>
                <div className="comment__box mb-5">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    cols="30"
                    rows="5"
                  ></textarea>
                  <button onClick={handleComment} className="btn btn__primary">
                    Comment
                  </button>
                </div>

                {comments.map((c) => (
                  <div key={c._id} className="comment">
                    <div className="comment__avatar">
                      <img src="https://i.ibb.co/M1kpGmK/me.jpg" alt="" />
                    </div>
                    <div className="comment__info">
                      <h5> {c.user.name} </h5>
                      <p> {c.text} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="single__post__right">
              <RecentPosts />
              <Tags />
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
