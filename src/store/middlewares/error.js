import * as actions from "../api";
import { toast } from "react-toastify";

const error = (store) => (next) => (action) => {
  if (action.type === actions.apiCallFailed.type) toast.error(action.payload);
  next(action);
};

export default error;
