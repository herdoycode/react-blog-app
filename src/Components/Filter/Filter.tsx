import React from "react";
import useCategorys from "./../../hooks/useCategorys";
import Loading from "./../Loading/Loading";

const Filter = () => {
  const { data: categorys, isLoading, error } = useCategorys();
  if (isLoading) return <Loading />;
  if (error) return <p>{error.message}</p>;
  return (
    <div className="filter">
      <p>Filter by Category:</p>
      <select name="" id="">
        <option value="">All posts</option>
        {categorys?.map((c) => (
          <option key={c._id} value="">
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
