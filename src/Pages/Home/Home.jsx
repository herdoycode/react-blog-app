import config from "../../config.json";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Copyright/Copyright";
import Call from "../../Components/Call/Call";
import Blogs from "../../Components/Blogs/Blogs";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(config.dbUrl + "posts");
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Blogs posts={posts} />
      <Call />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
