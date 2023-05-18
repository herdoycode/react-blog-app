import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default Layout;
