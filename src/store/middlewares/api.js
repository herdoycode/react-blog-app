import config from "../../../src/config.json";
import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    const token = localStorage.getItem("token");

    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError, getHeaders } =
      action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL: config.apiUrl,
        headers: { "x-auth-token": token },
        url,
        method,
        data,
      });
      // General
      dispatch(actions.apiCallSuccess(response.data));
      // Specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
      // Specific
      if (getHeaders) dispatch({ type: getHeaders, payload: response.headers });
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error.response.data));
      // Specific
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
