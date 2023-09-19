import React, { useContext, useState } from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState<string>("nav__center");
  const [icon, setIcon] = useState<string>("toggle-icon");

  const { user } = useContext(AuthContext) || "";

  const handleToggle = () => {
    if (active === "nav__center") {
      setActive("nav__center nav-collapse");
    } else setActive("nav__center");

    // Icon Toggler
    if (icon === "toggle-icon") {
      setIcon("toggle-icon btnToggle");
    } else setIcon("toggle-icon");
  };

  return (
    <header className="header">
      <div className="nav__wrapper">
        <div className="container">
          <nav className="navbar">
            <div className="nav__left">
              <div className="nav__toggler">
                <div onClick={handleToggle} className={icon}>
                  <div className="toggle-icon-1"></div>
                  <div className="toggle-icon-2"></div>
                  <div className="toggle-icon-3"></div>
                </div>
              </div>
              <Link to="/" className="nav__brand">
                Blog
              </Link>
            </div>
            <div className={active}>
              <ul className="nav-menu">
                <li className="nav__item">
                  <NavLink to="/" className="nav__link">
                    Home
                  </NavLink>
                </li>
                {user && (
                  <>
                    <li className="nav__item">
                      <NavLink to="/control" className="nav__link">
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav__item">
                      <NavLink to="/logout" className="nav__link">
                        Logout
                      </NavLink>
                    </li>
                  </>
                )}
                {!user && (
                  <>
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
                  </>
                )}
                <li className="nav__item">
                  <NavLink to="/contact" className="nav__link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav__right">
              <div className="theme-switch">
                <ThemeSwitch />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
