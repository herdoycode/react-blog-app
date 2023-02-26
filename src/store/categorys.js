import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "categorys",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    categorysRequested: (categorys, action) => {
      categorys.loading = true;
    },
    catetorysRecived: (categorys, action) => {
      categorys.list = action.payload;
      categorys.loading = false;
    },
    categorysRequestFailed: (categorys, action) => {
      categorys.loading = false;
    },
  },
});

export default slice.reducer;

const {
  catetorysRecived,
  categorysRequestFailed: postRequestFailed,
  categorysRequested,
} = slice.actions;

const url = "/categorys";

export const loadCategorys = () =>
  apiCallBegan({
    url,
    onStart: categorysRequested.type,
    onSuccess: catetorysRecived.type,
    onError: postRequestFailed.type,
  });
