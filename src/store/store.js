import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./slices/alertSlice";
import authModalReducer from "./slices/authModalSlice";
import authReducer from "./slices/authSlice";
import bookingReducer from "./slices/bookingSlice";
import counterReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authModal: authModalReducer,
    alert: alertReducer,
    booking: bookingReducer,
    counter: counterReducer,
  },
});
