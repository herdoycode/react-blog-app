import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero__wrapper">
      <div className="container">
        <div className="hero">
          <div className="hero__left">
            <div className="hero__content">
              <h1>Create Your Blog</h1>
              <p>
                This is a blog application, You can read blogs and also post
                your blog
              </p>
              <button
                onClick={() => navigate("/signup")}
                className="btn btn__primary"
              >
                Signup to Start
              </button>
            </div>
          </div>
          <div className="hero__right">
            <img src="/img/hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
