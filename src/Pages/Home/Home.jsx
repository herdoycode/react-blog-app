import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Copyright/Copyright";
import Call from "../../Components/Call/Call";
import Blogs from "../../Components/Blogs/Blogs";
import { useSelector } from "react-redux";

const Home = () => {
  const posts = useSelector((state) => state.entities.posts.list);
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
