import React from "react";

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Nnavbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
};

export default Layout;
