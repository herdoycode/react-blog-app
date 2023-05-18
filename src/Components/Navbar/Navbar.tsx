import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav__wrapper">
        <div className="container nav">
          <NavLink to="/" className="nav__brand">
            Blog
          </NavLink>
          <ul className="nav__menu">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" className="nav__link">
                Contact
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/login" className="nav__link">
                Login
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/signup" className="nav__link">
                Signup
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/control" className="nav__link">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="fix-height"></div>
    </>
  );
};

export default Navbar;
