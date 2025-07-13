// apis/auth/authApis.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../config/axiosInstance";

// Thunk version of login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed",
      );
    }
  },
);

// Optional: keep other methods as is (for manual usage or refresh)
export const authApis = {
  async refreshAccessToken() {
    const response = await api.post("/auth/refresh");
    return response.data;
  },
  async logoutApi() {
    const response = await api.post("/auth/logout");
    return response.data;
  },
  async getUserProfile() {
    const response = await api.get("/auth/me");
    return response.data;
  },
};
