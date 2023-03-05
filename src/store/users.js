import config from "../../src/config.json";
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "users",
  initialState: {
    user: null,
    jwt: null,
  },
  reducers: {
    registered: (users, action) => {
      users.user = action.payload;
    },
    setJwt: (users, action) => {
      localStorage.setItem("token", action.payload["x-auth-token"]);
      users.jwt = action.payload["x-auth-token"];
    },
    getUser: (users, action) => {
      users.user = action.payload;
    },
  },
});

const { registered, getUser, setJwt } = slice.actions;
const url = config.users;

export const userRegistered = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data,
    onSuccess: registered.type,
    getHeaders: setJwt.type,
  });

export const fetchUser = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    onSuccess: getUser.type,
  });

export default slice.reducer;
