import { createSlice } from "@reduxjs/toolkit";

export const adminSignInSlice = createSlice({
  name: "adminSignIn",

  initialState: {
    admin: {
      email: "",
      loggedIn: "",
    },
  },
  reducers: {
    adminSignIn: (state, action) => {
      state.admin.email = action.payload.email;
      state.admin.loggedIn = true;
    },
  },
});

export const { adminSignIn } = adminSignInSlice.actions;

export const selectAdmin = (state) => state.admin.admin;

export default adminSignInSlice.reducer;
