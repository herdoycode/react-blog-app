import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import { posts } from "../../data";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Copyright/Copyright";
import Call from "../../Components/Call/Call";
import Blogs from "../../Components/Blogs/Blogs";

const Home = () => {
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
