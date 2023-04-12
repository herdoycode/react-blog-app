import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Copyright/Copyright";
import Call from "../../Components/Call/Call";
import Blogs from "../../Components/Blogs/Blogs";
import { useSelector } from "react-redux";

const Home = () => {
  const { list, loading } = useSelector((state) => state.entities.posts);
  return (
    <>
      <Navbar />
      <Hero />
      <Blogs posts={list} loading={loading} />
      <Call />
      <Footer />
      <Copyright />
    </>
  );
};

export default Home;
