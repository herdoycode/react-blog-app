import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "posts",
  initialState: {
    result: null,
    list: [],
    filtered: [],
    post: {},
    deleted: null,
    loading: false,
  },
  reducers: {
    postRequested: (posts, action) => {
      posts.loading = true;
    },
    postRecived: (posts, action) => {
      posts.list = action.payload;
      posts.filtered = action.payload;
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
    postGeted: (posts, action) => {
      posts.post = action.payload;
    },
    postDeleted: (posts, action) => {
      posts.deleted = action.payload;
      const { id } = action.payload;
      const index = posts.list.findIndex((post) => post._id === id);
      posts.list.splice(index, 1);
      setTimeout(() => (posts.deleted = null), 200);
    },
    postFiltered: (posts, action) => {
      const { category } = action.payload;
      switch (category) {
        case "all":
          posts.list = posts.filtered;
          break;
        default:
          posts.list = posts.filtered.filter(
            (p) => p.category.name === category
          );
      }
    },
    postSearched: (posts, action) => {
      const { title } = action.payload;
      posts.list = posts.filtered.filter((p) =>
        p.title.toLowerCase().startsWith(title.toLowerCase())
      );
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
  postGeted,
  postDeleted,
  postFiltered,
  postSearched,
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

export const getPost = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    onSuccess: postGeted.type,
  });

export const filterFpost = (category) => postFiltered({ category });
export const searchFpost = (title) => postSearched({ title });
