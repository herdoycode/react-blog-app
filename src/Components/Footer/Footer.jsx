import FooterTitle from "../FooterTitle/FooterTitle";
import Lists from "../Lists/Lists";
import SocialNav from "../SocialNav/SocialNav";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="container">
        <div className="footer">
          <div className="footer__item">
            <FooterTitle title={"About Us"} />
            <div className="footer__about">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                excepturi repellendus saepe rem, corporis inventore a numquam.
              </p>
            </div>
            <SocialNav />
          </div>
          <div className="footer__item">
            <FooterTitle title={"Out Links"} />
            <div className="footer__links">
              <Lists />
            </div>
          </div>
          <div className="footer__item">
            <FooterTitle title={"Out Services"} />
            <div className="footer__links">
              <Lists />
            </div>
          </div>
          <div className="footer__item">
            <FooterTitle title={"Other Links"} />
            <div className="footer__links">
              <Lists />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
