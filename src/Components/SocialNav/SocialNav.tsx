import React from "react";
import { Facebook, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import "./SocialNav.css";

const SocialNav = () => {
  return (
    <div className="social__nav">
      <div className="social__icon">
        <a target="_blank" href="https://www.facebook.com/herdoycode">
          <Facebook />
        </a>
      </div>
      <div className="social__icon">
        <a target="_blank" href="https://www.instagram.com/herdoyalmamun/">
          <Instagram />
        </a>
      </div>
      <div className="social__icon">
        <a target="_blank" href="https://github.com/herdoycode">
          <GitHub />
        </a>
      </div>
      <div className="social__icon">
        <a
          target="_blank"
          href="https://bd.linkedin.com/in/herdoy-almamun-272a1a225"
        >
          <LinkedIn />
        </a>
      </div>
    </div>
  );
};

export default SocialNav;
