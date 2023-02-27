import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.entities.users.user);

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
          </ul>
        </div>
      </div>
      <div className="fix-height"></div>
    </>
  );
};

export default Navbar;
