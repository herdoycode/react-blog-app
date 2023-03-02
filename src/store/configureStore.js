import { configureStore } from "@reduxjs/toolkit";
import api from "./middlewares/api";
import error from "./middlewares/error";
import reducer from "./reducer";

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      api,
      error,
    ],
  });
}
