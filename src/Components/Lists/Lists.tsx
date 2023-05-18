import React from "react";
import "./Lists.css";
import { Link } from "react-router-dom";

const Lists = () => {
  return (
    <ul className="lists">
      <li className="list__item">
        <Link to="/contact" className="list__link">
          Contact
        </Link>
      </li>
      <li className="list__item">
        <Link to="/login" className="list__link">
          Login
        </Link>
      </li>
      <li className="list__item">
        <Link to="/signup" className="list__link">
          Signup
        </Link>
      </li>
    </ul>
  );
};

export default Lists;
