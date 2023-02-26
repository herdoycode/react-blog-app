import config from "../../config.json";
import axios from "axios";
import { useEffect, useState } from "react";
import SidebarTitle from "../SidebarTitle/SidebarTitle";
import "./Category.css";

const Category = () => {
  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchCategorys = async () => {
      const { data } = await axios.get(config.dbUrl + "/" + "categorys");
      setCategorys(data);
    };
    fetchCategorys();
  }, []);

  return (
    <div className="category">
      <SidebarTitle title={"Category"} />
      <div className="categorys">
        {categorys.map((c) => (
          <div key={c._id} className="category__item">
            <span> {c.name} </span> <span className="category__count">90</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
