import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AuthContext from "../../auth/AuthContext";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import usePostQueryStore from "../../store";

const Navbar = () => {
  const { user } = useContext(AuthContext) || "";
  const setCategoryId = usePostQueryStore((s) => s.setCategoryId);
  const navigate = useNavigate();
  return (
    <>
      <div className="nav__wrapper nav fixed-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div
                className="nav__brand navbar-brand"
                onClick={() => {
                  navigate("/");
                  setCategoryId("");
                }}
              >
                BLOG
              </div>
              <button
                className="toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <MenuIcon className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                  <li className="nav__item">
                    <NavLink to="/" className="nav__link nav-link">
                      Home
                    </NavLink>
                  </li>

                  {!user && (
                    <>
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
                    </>
                  )}
                  <li className="nav__item">
                    <NavLink to="/contact" className="nav__link nav-link">
                      Contact
                    </NavLink>
                  </li>
                  {user && (
                    <>
                      <li className="nav__item">
                        <NavLink to="/control" className="nav__link nav-link">
                          Dashboard
                        </NavLink>
                      </li>
                      <li className="nav__item">
                        <NavLink to="/logout" className="nav__link nav-link">
                          Logout
                        </NavLink>
                      </li>
                      <li className="nav__link nav-link">
                        <div className="user__avatar ms-2">
                          <img src={user.avatar} alt="User Avatar" />
                        </div>
                      </li>
                    </>
                  )}
                  <li className="nav__item ms-3">
                    <ThemeSwitch />
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
