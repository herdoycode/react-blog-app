import "./Post.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Call from "../../Components/Call/Call";
import Footer from "../../Components/Footer/Footer";
import Copyright from "../../Components/Copyright/Copyright";

const Post = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="post__wrapper">
        <div className="container">
          <div className="single__post">
            <div className="single__post__left"></div>
            <div className="single__post__right">
              <Sidebar />
            </div>
          </div>
        </div>
        <Call />
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default Post;
