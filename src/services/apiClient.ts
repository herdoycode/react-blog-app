import axios from "axios";

export default axios.create({
  baseURL: "https://blog-api-node.onrender.com/api",
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA2MWMzYjVmZjJiNTlkYWQ4NWVlZTgiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjg0NDI0ODIwfQ.fA5XPviSnVFx4HHvnElMCSpcZq2wxJ9DGq6llqmtz4Q",
  },
});
