import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Call from "../../Components/Call/Call";
import Blogs from "../../Components/Blogs/Blogs";

const Home = () => {
  return (
    <div className="wrapper">
      <Hero />
      <Blogs />
      <Call />
    </div>
  );
};

export default Home;
