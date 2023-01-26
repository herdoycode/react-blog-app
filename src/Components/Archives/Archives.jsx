import SidebarTitle from "../SidebarTitle/SidebarTitle";
import "./Archives.css";

const Archives = () => {
  return (
    <div className="archive">
      <SidebarTitle title={"Archives"} />
      <div className="archives">
        <div className="archive__item">
          <span>Design</span> <span className="archive__count">90</span>
        </div>
        <div className="archive__item">
          <span>Design</span> <span className="archive__count">90</span>
        </div>
        <div className="archive__item">
          <span>Design</span> <span className="archive__count">90</span>
        </div>
      </div>
    </div>
  );
};

export default Archives;
