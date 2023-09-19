import { Search } from "@mui/icons-material";
import React from "react";
import usePostQueryStore from "../../store";
import "./SearchBox.css";

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
