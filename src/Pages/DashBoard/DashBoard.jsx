import config from "../../config.json";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./DashBoard.css";
import Pagination from "../../Components/Pagination/Pagination";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(config.dbUrl + "posts");
      setPosts(data.slice(0, 6));
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="dashboard">
          <div className="db__left">
            <div className="profile">
              <img src="/img/herdoy.jpg" alt="" />
              <div className="profile__content">
                <h2>Herdoy Almamun</h2>
                <h4>herdoy1@gmail.com</h4>
              </div>
              <div className="profile__edit">
                <ModeEditOutlinedIcon color="inherit" />
              </div>
            </div>
          </div>
          <div className="db__right">
            <div className="table__header">
              <h2>Your Posts</h2>
              <div className="filter">
                <p>Filter by Category:</p>
                <select name="" id="">
                  <option value="">Environment</option>
                  <option value="">Gaming</option>
                  <option value="">Programing</option>
                  <option value="">Sports</option>
                </select>
              </div>
            </div>
            <br />
            <button
              onClick={() => navigate("/post/edit/new")}
              className="btn btn-primary"
            >
              New Post
            </button>
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
                {posts.map((post) => (
                  <tr>
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
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
