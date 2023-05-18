import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Contact from "./Pages/Contact/Contact";
import Post from "./Pages/Post/Post";
import PostEdit from "./Pages/PostEdit/PostEdit";
import Layout from "./Pages/Layout/Layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "post/:id", element: <PostEdit /> },
      { path: "posts/:id", element: <Post /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "control", element: <DashBoard /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
export default routes;
