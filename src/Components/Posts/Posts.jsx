import "./Posts.css";
import Pagination from "../Pagination/Pagination";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import { useNavigate } from "react-router-dom";

const Posts = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post">
          <div className="post__img">
            <img src={post.img} alt="" />
            <div className="post__content">
              <h2 onClick={() => navigate(`post/${post.id}`)}>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <div className="post__info">
              <div className="post__time">
                <AccessAlarmsOutlinedIcon className="post__icon" />
                <span>7 March 2023</span>
              </div>
              <div className="post__author">
                <Person2OutlinedIcon className="post__icon" />
                <span>by Herdoy</span>
              </div>
              <div className="post__comment__share">
                <ModeCommentOutlinedIcon className="post__icon" />
                <span>15</span>
                <ShareRoundedIcon className="post__icon" />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="pagination__container">
        <Pagination />
      </div>
    </div>
  );
};

export default Posts;
