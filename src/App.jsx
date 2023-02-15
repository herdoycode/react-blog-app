import { Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Post from "./Pages/Post/Post";
import PostEdit from "./Pages/PostEdit/PostEdit";
import Signup from "./Pages/Signup/Signup";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/control" element={<DashBoard />} />
      </Routes>
    </>
  );
};

export default App;
