import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav__wrapper">
        <div className="container nav">
          <div className="nav__brand">Blog</div>
          <ul className="nav__menu">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
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
            <li className="nav__item get__quote">
              <NavLink to="/" className="nav__link">
                {">"} Get A Quote
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
