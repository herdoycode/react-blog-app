import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Post from "./Pages/Post/Post";
import PostEdit from "./Pages/PostEdit/PostEdit";
import Signup from "./Pages/Signup/Signup";
import { useDispatch } from "react-redux";
import { fetchUser } from "./store/users";
import Logout from "./Pages/logout/Logout";
import { ToastContainer } from "react-toastify";
import Contact from "./Pages/Contact/Contact";
import { loadCategorys } from "./store/categorys";
import { loadComments } from "./store/comments";
import { loadPosts } from "./store/posts";
import { loadmessagess } from "./store/messages";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const id = jwtDecode(token)._id;
      dispatch(fetchUser(id));
    }
  }, []);

  useEffect(() => {
    dispatch(loadCategorys());
    dispatch(loadComments());
    dispatch(loadPosts());
    dispatch(loadmessagess());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/control" element={<DashBoard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
