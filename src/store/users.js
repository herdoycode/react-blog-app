import config from "../../src/config.json";
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "users",
  initialState: {
    user: null,
    jwt: null,
    loading: false,
  },
  reducers: {
    registerRequested: (users, action) => {
      users.loading = true;
    },
    registered: (users, action) => {
      users.user = action.payload;
      users.loading = false;
    },
    setJwt: (users, action) => {
      localStorage.setItem("token", action.payload["x-auth-token"]);
      users.jwt = action.payload["x-auth-token"];
      users.loading = false;
    },
    getUser: (users, action) => {
      users.user = action.payload;
    },
    registerRequesFailed: (users, action) => {
      users.loading = false;
    },
  },
});

const { registered, getUser, setJwt, registerRequesFailed, registerRequested } =
  slice.actions;
const url = config.users;

export const userRegistered = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data,
    onStart: registerRequested.type,
    onSuccess: registered.type,
    getHeaders: setJwt.type,
    onError: registerRequesFailed.type,
  });

export const fetchUser = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    onSuccess: getUser.type,
  });

export default slice.reducer;
