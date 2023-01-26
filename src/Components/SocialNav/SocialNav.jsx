import { Facebook, GitHub, Instagram, Twitter } from "@mui/icons-material";
import "./SocialNav.css";

const SocialNav = () => {
  return (
    <div className="social__nav">
      <div className="social__icon">
        <Facebook />
      </div>
      <div className="social__icon">
        <Twitter />
      </div>
      <div className="social__icon">
        <Instagram />
      </div>
      <div className="social__icon">
        <GitHub />
      </div>
    </div>
  );
};

export default SocialNav;
