import { createSlice } from "@reduxjs/toolkit";

export const flightListSlice = createSlice({
  name: "flightList",

  initialState: {
    flight: {},
  },
  reducers: {
    flightList: (state, action) => {
      state = action.payload;
    },
  },
});

export const { flightList } = flightListSlice.actions;

export const selectflight = (state) => state.flight.flight;

export default flightListSlice.reducer;
