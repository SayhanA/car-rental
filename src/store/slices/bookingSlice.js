import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickupDate: null,
  returnDate: null,
  carInfo: null,
  pickupLocation: "",
  returnLocation: "",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setDates: (state, action) => {
      state.pickupDate = action.payload.pickupDate;
      state.returnDate = action.payload.returnDate;
    },
    setCar: (state, action) => {
      state.carInfo = action.payload;
    },
    setLocation: (state, action) => {
      state.pickupLocation = action.payload.pickupLocation;
      state.returnLocation = action.payload.returnLocation;
    },
    resetBooking: () => initialState,
  },
});

export const { setDates, setCar, setLocation, resetBooking } =
  bookingSlice.actions;

export default bookingSlice.reducer;
