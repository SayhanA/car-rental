import axios from "axios";
import baseURL from "./baseURL";

const api = axios.create({
  baseURL: `${baseURL}/api/v1`,
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
