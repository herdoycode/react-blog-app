import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterFpost } from "../../store/posts";

const Filter = () => {
  const dispatch = useDispatch();
  const categorys = useSelector((state) => state.entities.categorys.list);
  return (
    <div className="filter">
      <p>Filter by Category:</p>
      <select name="" id="">
        <option onClick={() => dispatch(filterFpost("all"))} value="">
          All posts
        </option>
        {categorys.map((c) => (
          <option
            onClick={() => dispatch(filterFpost(c.name))}
            key={c._id}
            value=""
          >
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
