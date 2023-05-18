import React from "react";
import { Search } from "@mui/icons-material";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search__box">
      <Search className="search__icon" />
      <input placeholder="Search..." type="text" />
      <button className="btn btn__primary">Search</button>
    </div>
  );
};

export default SearchBox;
