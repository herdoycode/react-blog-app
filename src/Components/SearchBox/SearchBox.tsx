import React, { useState, FormEvent } from "react";
import { Search } from "@mui/icons-material";
import "./SearchBox.css";
import usePostQueryStore from "../../store";

const SearchBox = () => {
  const [text, setText] = useState<string>("");
  const setSearchText = usePostQueryStore((s) => s.setSearchText);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchText(text);
  };
  return (
    <div className="search__box">
      <Search className="search__icon" />
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search..."
          type="text"
        />
      </form>
    </div>
  );
};

export default SearchBox;
