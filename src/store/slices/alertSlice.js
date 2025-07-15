import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: null,
  message: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.type = action.payload.type;
      state.children = action.payload.children;
    },
    clearAlert: (state) => {
      state.type = null;
      state.message = null;
    },
  },
});

export const { showAlert, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;
