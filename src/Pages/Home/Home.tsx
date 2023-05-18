import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Copyright/Copyright";
import Call from "../../Components/Call/Call";
import Blogs from "../../Components/Blogs/Blogs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Blogs />
      <Call />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
