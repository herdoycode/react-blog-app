import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./posts";
import categorysReducer from "./categorys";
import usersReducer from "./users";
import commentsReducer from "./comments";

export default combineReducers({
  posts: postsReducer,
  categorys: categorysReducer,
  users: usersReducer,
  comments: commentsReducer,
});
