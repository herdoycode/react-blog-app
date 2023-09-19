import React from "react";
import Blogs from "../../Components/Blogs/Blogs";
import Call from "../../Components/Call/Call";
import Hero from "../../Components/Hero/Hero";
import "./Home.css";

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
