import { createSlice } from "@reduxjs/toolkit";

export const userSignInSlice = createSlice({
  name: "userSignIn",

  initialState: {
    user: {
      email: "",
      loggedIn: "",
    },
  },
  reducers: {
    userSignIn: (state, action) => {
      state.user.email = action.payload.email;
      state.user.loggedIn = true;
    },
  },
});

export const { userSignIn } = userSignInSlice.actions;

export const selectAdmin = (state) => state.user.user;

export default userSignInSlice.reducer;
