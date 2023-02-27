import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    loginRequested: (auth, action) => {
      auth.loading = true;
    },
    login: (auth, action) => {
      localStorage.setItem("token", action.payload);
    },
  },
});

const { login } = slice.actions;
const url = "/auth";

export const authLogin = (data) =>
  apiCallBegan({
    url,
    method: "post",
    data,
    onSuccess: login.type,
  });

export default slice.reducer;
