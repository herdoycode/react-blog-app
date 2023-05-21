import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../Components/Footer/Footer";

const Layout = () => {
  React.useEffect(() => {
    const body = document.querySelector("body");
    // body?.setAttribute("data-theme", "dark");
  }, []);
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
