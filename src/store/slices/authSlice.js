import { createSlice } from "@reduxjs/toolkit";
import { authApis, login } from "../../apis/auth/authApis";

const initialState = {
  user: null,
  accessToken: null,
  role: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.role = null;
    },

    setCredentials: (state, action) => {
      const { user, accessToken, role } = action.payload;

      state.user = user;
      state.accessToken = accessToken;
      state.role = role;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.role = action.payload.user.role;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const refreshToken = async (dispatch) => {
  try {
    const { accessToken } = await authApis.refreshAccessToken();
    dispatch(authSlice.actions.setCredentials({ accessToken }));
    return { accessToken };
  } catch (error) {
    dispatch(authApis.logoutApi());
    throw error;
  }
};

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
