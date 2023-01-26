import SidebarTitle from "../SidebarTitle/SidebarTitle";
import "./Category.css";

const Category = () => {
  return (
    <div className="category">
      <SidebarTitle title={"Category"} />
      <div className="categorys">
        <div className="category__item">
          <span>Design</span> <span className="category__count">90</span>
        </div>
        <div className="category__item">
          <span>Design</span> <span className="category__count">90</span>
        </div>
        <div className="category__item">
          <span>Design</span> <span className="category__count">90</span>
        </div>
        <div className="category__item">
          <span>Design</span> <span className="category__count">90</span>
        </div>
      </div>
    </div>
  );
};

export default Category;
