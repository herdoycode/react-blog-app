import config from "../../src/config.json";
import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "auth",
  initialState: {
    jwt: "",
  },
  reducers: {
    loginRequested: (auth, action) => {
      auth.loading = true;
    },
    login: (auth, action) => {
      auth.jwt = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

const { login } = slice.actions;

export const authLogin = (data) =>
  apiCallBegan({
    url: config.auth,
    method: "post",
    data,
    onSuccess: login.type,
  });

export default slice.reducer;
