import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "./slices/authModalSlice";
import authReducer from "./slices/authSlice";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authModal: authModalReducer,
    counter: counterReducer,
  },
});
