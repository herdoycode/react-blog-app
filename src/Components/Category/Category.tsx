import React from "react";
import SidebarTitle from "../SidebarTitle/SidebarTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Category.css";
import useCategorys from "./../../hooks/useCategorys";
import usePostQueryStore from "../../store";

const Category = () => {
  const setCategoryId = usePostQueryStore((s) => s.setCategoryId);
  const selectedCategory = usePostQueryStore((s) => s.postQuery.categoryId);
  const { data: categorys, error } = useCategorys();
  if (error) return <p>{error.message}</p>;
  return (
    <div className="category">
      <SidebarTitle title={"Categorys"} />
      <div className="categorys">
        <div
          onClick={() => setCategoryId("")}
          className="category__item"
          style={{ cursor: "pointer" }}
        >
          <span>All Category</span>
          <span className="category__count">
            <CheckCircleIcon color="inherit" />
          </span>
        </div>
        {categorys?.map((c) => (
          <div
            onClick={() => setCategoryId(c._id)}
            key={c._id}
            className={
              selectedCategory === c._id
                ? "category__item category-active"
                : "category__item"
            }
            style={{ cursor: "pointer" }}
          >
            <span>{c.name}</span>
            <span className="category__count">
              <CheckCircleIcon color="inherit" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
