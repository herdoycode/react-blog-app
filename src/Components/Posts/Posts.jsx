import moment from "moment";
import parse from "html-react-parser";
import "./Posts.css";
import Pagination from "../Pagination/Pagination";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { useNavigate } from "react-router-dom";

const Posts = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <div key={post._id} className="post">
            <div className="post__img">
              <img src={post.thumbnail} alt="" />
              <div className="post__content">
                <h2 onClick={() => navigate(`post/${post._id}`)}>
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
                  <span>
                    by {post?.author?.name ? post?.author?.name : "Herdoy"}{" "}
                  </span>
                </div>
                <div className="post__comment__share">
                  <ModeCommentOutlinedIcon className="post__icon" />
                  <span> {post?.comment ? post.comment.length : 0} </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination__container">
        <Pagination />
      </div>
    </>
  );
};

export default Posts;
