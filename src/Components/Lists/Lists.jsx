import "./Lists.css";

const Lists = () => {
  return (
    <ul className="lists">
      <li className="list__item">
        <a href="#" className="list__link">
          Home
        </a>
      </li>
      <li className="list__item">
        <a href="#" className="list__link">
          About us
        </a>
      </li>
      <li className="list__item">
        <a href="#" className="list__link">
          Services
        </a>
      </li>
      <li className="list__item">
        <a href="#" className="list__link">
          Team
        </a>
      </li>
    </ul>
  );
};

export default Lists;
