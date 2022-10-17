import { createSlice } from "@reduxjs/toolkit";

const axios = require("axios").default;

export const adminSignUpSlice = createSlice({
  name: "admin",
  initialState: {
    admin: {
      signedUp: false,
    },
  },
  reducers: {
    adminSignUp: (state, action) => {
      axios
        .post("http://localhost:5000/admin/signup", {
          name: state.admin.name,
          companyName: state.admin.companyName,
          phoneNumber: state.admin.phoneNumber,
          email: state.admin.email,
          password: state.admin.password,
        })
        .then((res) => {
          console.log("Posting Data", res);
        })
        .catch((err) => console.log(err));
    },
  },
});

export const { adminSignUp } = adminSignUpSlice.actions;

export const selectAdmin = (state) => state.admin.admin;

export default adminSignUpSlice.reducer;
