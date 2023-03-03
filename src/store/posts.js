import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "posts",
  initialState: {
    result: null,
    list: [],
    loading: false,
  },
  reducers: {
    postRequested: (posts, action) => {
      posts.loading = true;
    },
    postRecived: (posts, action) => {
      posts.list = action.payload;
      posts.loading = false;
    },
    postRequestFailed: (posts, action) => {
      posts.loading = false;
    },
    postAdded: (posts, action) => {
      posts.result = action.payload;
      posts.list.push(action.payload);
    },
    postUpdated: (posts, action) => {
      const { postId, data } = action.payload;
      const index = posts.list.findIndex((post) => post._id === postId);
      posts.result = action.payload;
      posts.list[index] = data;
    },
    postDeleted: (posts, action) => {
      const { id } = action.payload;
      const index = posts.list.findIndex((post) => post._id === id);
      posts.list.splice(index, 1);
    },
  },
});

export default slice.reducer;

const {
  postRecived,
  postRequestFailed,
  postRequested,
  postAdded,
  postUpdated,
  postDeleted,
} = slice.actions;

const url = "/posts";

export const loadPosts = () =>
  apiCallBegan({
    url,
    onStart: postRequested.type,
    onSuccess: postRecived.type,
    onError: postRequestFailed.type,
  });

export const addPost = (post) =>
  apiCallBegan({
    url,
    method: "post",
    onStart: postRequested.type,
    data: post,
    onSuccess: postAdded.type,
    onError: postRequestFailed.type,
  });

export const updatePost = (postId, data) =>
  apiCallBegan({
    url: url + "/" + postId,
    method: "put",
    data,
    onSuccess: postUpdated.type,
  });

export const deletePost = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "delete",
    onSuccess: postDeleted.type,
  });
