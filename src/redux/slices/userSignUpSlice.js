import { createSlice } from "@reduxjs/toolkit";

const axios = require("axios").default;

export const userSignUpSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  },
  reducers: {
    userSignUp: (state, action) => {
      state.user = action.payload;
      axios
        .post("http://localhost:5000/user/signup", {
          firstName: state.user.firstName,
          lastName: state.user.lastName,
          phoneNumber: state.user.phoneNumber,
          email: state.user.email,
          password: state.user.password,
        })
        .then((res) => console.log("Posting Data", res))
        .catch((err) => console.log(err));
    },
  },
});

export const { userSignUp } = userSignUpSlice.actions;

export const selectuser = (state) => state.user.user;

export default userSignUpSlice.reducer;
