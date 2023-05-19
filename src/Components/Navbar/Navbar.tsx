import React from "react";
import "./Navbar.css";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav__wrapper nav fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div
                className="nav__brand navbar-brand"
                onClick={() => navigate("/")}
              >
                BLOG
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                  <li className="nav__item">
                    <NavLink to="/" className="nav__link nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink to="/contact" className="nav__link nav-link">
                      Contact
                    </NavLink>
                  </li>

                  <li className="nav__item">
                    <NavLink to="/login" className="nav__link nav-link">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink to="/signup" className="nav__link nav-link">
                      Signup
                    </NavLink>
                  </li>

                  <li className="nav__item">
                    <NavLink to="/control" className="nav__link nav-link">
                      Dashboard
                    </NavLink>
                  </li>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="nav__height"></div>
      </div>
    </>
  );
};

export default Navbar;
