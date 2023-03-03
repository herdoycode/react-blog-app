import { Search } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchFpost } from "../../store/posts";
import "./SearchBox.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(searchFpost(value));
  }, [value]);

  return (
    <div className="search__box">
      <Search className="search__icon" />
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search..."
        type="text"
      />
      <button className="btn btn__primary">Search</button>
    </div>
  );
};

export default SearchBox;
