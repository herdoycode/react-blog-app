import config from "../../src/config.json";
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "comments",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    commentsRequested: (comments, action) => {
      comments.loading = true;
    },
    catetorysRecived: (comments, action) => {
      comments.list = action.payload;
      comments.loading = false;
    },
    commentsRequestFailed: (comments, action) => {
      comments.loading = false;
    },
    commentAdded: (comments, action) => {
      comments.list.push(action.payload);
    },
  },
});

export default slice.reducer;

const {
  catetorysRecived,
  commentsRequestFailed,
  commentsRequested,
  commentAdded,
} = slice.actions;

const url = config.comments;

export const loadComments = (postId) =>
  apiCallBegan({
    url: url + "/" + postId,
    onStart: commentsRequested.type,
    onSuccess: catetorysRecived.type,
    onError: commentsRequestFailed.type,
  });

export const addComment = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data,
    onSuccess: commentAdded.type,
  });
