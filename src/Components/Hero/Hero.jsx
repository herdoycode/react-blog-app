import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__wrapper">
      <div className="container">
        <div className="hero">
          <div className="hero__left">
            <div className="hero__content">
              <h1>This is title</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="btn btn__primary">Open Now</button>
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
