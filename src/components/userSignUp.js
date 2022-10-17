import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";

import Footer from "./Footer";

import { useSnackbar } from "notistack";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";

const axios = require("axios").default;

const UserSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/user/signup", {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      })
      .then((res) => {
        if (res.data.status === "Success") {
          navigate("/user/signin");
        } else {
          enqueueSnackbar(res.data.result.toString());
        }
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.result.toString());
      });
  };

  return (
    <div>
      <Navbar />
      <Grid>
        <Grid align="center">
          <Paper
            className="form"
            elevation={20}
            sx={{ padding: "30px 20px", width: "50%", margin: "100px auto" }}
          >
            <Avatar sx={{ backgroundColor: "crimson" }}>
              <LockOutlinedIcon />
            </Avatar>
            <h1>FLIGHT TICKET APP</h1>
            <h2>User Sign Up</h2>
            <a href="/admin/signup">For Admin Sign up and Sign In Click here</a>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              style={{
                paddingRight: "50px",
                paddingLeft: "50px",
                paddingBottom: "20px",
              }}
            >
              <TextField
                fullWidth
                required
                sx={{ paddingTop: "30px" }}
                variant="standard"
                id="firstName"
                type="text"
                label="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                required
                id="lastName"
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                label="Last Name"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                required
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                required
                id="phoneNumber"
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                label="Phone Number"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                required
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                variant="standard"
              ></TextField>
              <Grid sx={{ paddingTop: "50px" }}>
                <Button
                  sx={{ width: "500px", backgroundColor: "crimson" }}
                  type="submit"
                  variant="contained"
                >
                  Sign Up
                </Button>
              </Grid>
            </form>
            <a href="/user/signin">Already have an account?</a>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </div>

    // <div>
    //   <nav>
    //     <div class="nav-wrapper blue accent-3">
    //       <a href="#!" class="brand-logo center  ">
    //         Flight Ticket App
    //       </a>
    //     </div>
    //   </nav>
    //   <div class="row container">
    //     <h1
    //       class="center blue-text text-accent-3"
    //       style={{
    //         fontWeight: "bold",
    //       }}
    //     >
    //       User SignUp Page
    //     </h1>
    //     <a href="/admin/signup">
    //       <div
    //         className="col s12"
    //         style={{ paddingLeft: "11.250px" }}
    //         class="center"
    //       >
    //         <button
    //           style={{
    //             width: "350px",
    //             borderRadius: "3px",
    //             letterSpacing: "1.5px",
    //             marginTop: "1rem",
    //           }}
    //           type="submit"
    //           className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    //         >
    //           Admin Sign Up{" "}
    //         </button>
    //       </div>
    //     </a>

    //     <div class="row">
    //       <form
    //         class="col s12"
    //         onSubmit={(e) => {
    //           handleSubmit(e);
    //         }}
    //       >
    //         <div class="row">
    //           <div class="input-field col s6">
    //             <input
    //               id="firstName"
    //               type="text"
    //               class="validate"
    //               onChange={(e) => setFirstName(e.target.value)}
    //             ></input>
    //             <label for="firstName">First Name</label>
    //           </div>
    //           <div class="input-field col s6">
    //             <input
    //               id="lastName"
    //               type="text"
    //               class="validate"
    //               onChange={(e) => setLastName(e.target.value)}
    //             ></input>
    //             <label for="lastName">Last Name</label>
    //           </div>
    //         </div>
    //         <div class="row">
    //           <div class="input-field col s12">
    //             <input
    //               id="email"
    //               type="email"
    //               class="validate"
    //               onChange={(e) => setEmail(e.target.value)}
    //             ></input>
    //             <label for="email">Email</label>
    //           </div>
    //         </div>
    //         <div class="row">
    //           <div class="input-field col s12">
    //             <input
    //               id="phoneNumber"
    //               type="text"
    //               class="validate"
    //               onChange={(e) => setPhoneNumber(e.target.value)}
    //             ></input>
    //             <label for="phoneNumber">Phone Number</label>
    //           </div>
    //         </div>
    //         <div class="row">
    //           <div class="input-field col s12">
    //             <input
    // id="password"
    // type="password"
    // class="validate"
    // onChange={(e) => setPassword(e.target.value)}
    //             ></input>
    //             <label for="password">Password</label>
    //           </div>
    //         </div>
    //         <div
    //           className="col s12"
    //           style={{ paddingLeft: "11.250px" }}
    //           class="center"
    //         >
    //           <button
    //             style={{
    //               width: "350px",
    //               borderRadius: "3px",
    //               letterSpacing: "1.5px",
    //               marginTop: "1rem",
    //             }}
    //             type="submit"
    //             className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    //           >
    //             Sign Up
    //           </button>
    //         </div>
    //         <br></br>
    //       </form>

    //       <div class="center ">
    //         <a href="/user/signin" style={{ fontSize: "20px" }}>
    //           Already have an account?
    //         </a>
    //       </div>
    //     </div>
    //     <br></br>
    //   </div>
    //   <Footer />
    // </div>
  );
};

export default UserSignUp;
