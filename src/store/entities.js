import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./posts";
import categorysReducer from "./categorys";

export default combineReducers({
  posts: postsReducer,
  categorys: categorysReducer,
});
