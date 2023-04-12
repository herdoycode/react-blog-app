import config from "../config.json";
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "auth",
  initialState: {
    jwt: "",
    loading: false,
  },
  reducers: {
    loginRequested: (auth, action) => {
      auth.loading = true;
    },
    login: (auth, action) => {
      auth.jwt = action.payload;
      localStorage.setItem("token", action.payload);
      auth.loading = false;
    },
    loginRequestFailed: (auth, action) => {
      auth.loading = false;
    },
  },
});

const { login, loginRequested, loginRequestFailed } = slice.actions;

export const authLogin = (data) =>
  apiCallBegan({
    url: config.auth,
    method: "post",
    data,
    onStart: loginRequested.type,
    onSuccess: login.type,
    onError: loginRequestFailed.type,
  });

export default slice.reducer;
