import React from "react";
import SidebarTitle from "../SidebarTitle/SidebarTitle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Category.css";
import useCategorys from "./../../hooks/useCategorys";
import usePostQueryStore from "../../store";

const Category = () => {
  const setCategoryId = usePostQueryStore((s) => s.setCategoryId);
  const { data: categorys, error } = useCategorys();
  if (error) return <p>{error.message}</p>;
  return (
    <div className="category">
      <SidebarTitle title={"Category"} />
      <div className="categorys">
        {categorys?.map((c) => (
          <div
            onClick={() => setCategoryId(c._id)}
            key={c._id}
            className="category__item"
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
