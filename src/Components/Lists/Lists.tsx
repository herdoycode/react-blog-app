import React from "react";
import { Link } from "react-router-dom";
import "./Lists.css";

const Lists = () => {
  return (
    <ul className="lists">
      <li className="list__item">
        <Link to="/contact" style={{ color: "inherit" }} className="list__link">
          Contact
        </Link>
      </li>
      <li className="list__item">
        <Link to="/login" style={{ color: "inherit" }} className="list__link">
          Login
        </Link>
      </li>
      <li className="list__item">
        <Link to="/signup" style={{ color: "inherit" }} className="list__link">
          Signup
        </Link>
      </li>
    </ul>
  );
};

export default Lists;
