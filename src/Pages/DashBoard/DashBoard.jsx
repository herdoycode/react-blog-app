import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./DashBoard.css";
import Pagination from "../../Components/Pagination/Pagination";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, filterFpost, loadPosts } from "../../store/posts";
import { loadCategorys } from "../../store/categorys";

const DashBoard = () => {
  const [pagesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadPosts());
    dispatch(loadCategorys());
  }, []);

  const user = useSelector((state) => state.entities.users.user);
  const posts = useSelector((state) => state.entities.posts.list);
  const categorys = useSelector((state) => state.entities.categorys.list);

  const handleDelete = (post) => {
    dispatch(deletePost(post._id));
  };

  const indexOfLastPost = currentPage * pagesPerPage;
  const indexOfFirstPost = indexOfLastPost - pagesPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="dashboard">
          <div className="db__left">
            <div className="profile">
              <img src={user?.avatar} alt="" />
              <div className="profile__content">
                <h3>{user?.name}</h3>
                <h5> {user?.email} </h5>
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
                  <option onClick={() => dispatch(filterFpost("all"))} value="">
                    All posts
                  </option>
                  {categorys.map((c) => (
                    <option
                      onClick={() => dispatch(filterFpost(c.name))}
                      key={c._id}
                      value=""
                    >
                      {c.name}
                    </option>
                  ))}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
