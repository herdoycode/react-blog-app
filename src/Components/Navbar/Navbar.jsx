import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav__wrapper">
        <div className="container nav">
          <div className="nav__brand">Blog</div>
          <ul className="nav__menu">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Login
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Signup
              </a>
            </li>
            <li className="nav__item get__quote">
              <a href="#" className="nav__link">
                {">"} Get A Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fix-height"></div>
    </>
  );
};

export default Navbar;
