import React, { useState, FormEvent } from "react";
import { Search } from "@mui/icons-material";
import "./SearchBox.css";
import usePostQueryStore from "../../store";

const SearchBox = () => {
  const setSearchText = usePostQueryStore((s) => s.setSearchText);
  const searchText = usePostQueryStore((s) => s.postQuery.searchText);

  return (
    <div className="search__box">
      <Search className="search__icon" />
      <form>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          type="text"
        />
      </form>
    </div>
  );
};

export default SearchBox;
