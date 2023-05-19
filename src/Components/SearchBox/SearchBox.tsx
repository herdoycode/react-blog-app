import React from "react";
import { Search } from "@mui/icons-material";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="search__box">
      <Search className="search__icon" />
      <input placeholder="Search..." type="text" />
    </div>
  );
};

export default SearchBox;
