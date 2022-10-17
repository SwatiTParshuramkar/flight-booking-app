import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";

import Nav from "./Navbar";

import { useSnackbar } from "notistack";

const axios = require("axios").default;

const AdminSignUp = () => {
  const [name, setName] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/admin/signup", {
        name,
        companyName,
        email,
        phoneNumber,
        password,
      })
      .then((res) => {
        if (res.data.status === "Success") {
          navigate("/admin/signin");
          enqueueSnackbar("Successfully Signed In");
        }
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.result.toString());
      });
  };

  return (
    <div>
      <Nav />
      <Grid>
        <Grid align="center">
          <Paper
            className="form"
            elevation={20}
            sx={{ padding: "30px 20px", width: "700px", margin: "100px auto" }}
          >
            <Avatar sx={{ backgroundColor: "crimson" }}>
              <LockOutlinedIcon />
            </Avatar>
            <h1>FLIGHT TICKET APP</h1>
            <h2>Admin Sign Up</h2>

            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              style={{
                paddingRight: "50px",
                paddingLeft: "50px",
                paddingBottom: "30px",
              }}
            >
              <TextField
                fullWidth
                required
                sx={{ paddingTop: "30px" }}
                variant="standard"
                id="name"
                type="text"
                label="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                required
                id="companyName"
                type="text"
                onChange={(e) => setCompanyName(e.target.value)}
                label="Company Name"
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
                  color="primary"
                >
                  Sign Up
                </Button>
              </Grid>
            </form>
            <a href="/user/signin">Already have an account?</a>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminSignUp;
