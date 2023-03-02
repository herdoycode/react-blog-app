import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "posts",
  initialState: {
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
      posts.list.push(action.payload);
    },
    postUpdated: (posts, action) => {
      const { postId, data } = action.payload;
      const index = posts.list.findIndex((post) => post._id === postId);
      posts.list[index].title = data.title;
      posts.list[index].content = data.content;
      posts.list[index].thumbnail = data.thumbnail;
      posts.list[index].authorId = data.authorId;
      posts.list[index].catetoryId = data.catetoryId;
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
