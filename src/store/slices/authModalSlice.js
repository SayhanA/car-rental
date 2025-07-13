import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentForm: "login",
};

const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    openAuthModal: (state, action) => {
      state.isOpen = true;
      state.currentForm = action.payload || "login";
    },

    closeAuthModal: (state) => {
      state.isOpen = false;
    },

    setAuthForm: (state, action) => {
      state.currentForm = action.payload;
    },

    goToPreviousForm: (state) => {
      const formOrder = [
        "login",
        "registration",
        "OTP",
        "forgotPassword",
        "resetPassword",
      ];

      const index = formOrder.indexOf(state.currentForm);
      if (index > 0) {
        state.currentForm = formOrder[index - 1];
      }
    },
  },
});

export const { openAuthModal, closeAuthModal, setAuthForm, goToPreviousForm } =
  authModalSlice.actions;

export default authModalSlice.reducer;
