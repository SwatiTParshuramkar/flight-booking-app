import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { adminSignIn } from "../redux/slices/adminSignInSlice";

import { useNavigate } from "react-router-dom";

import Nav from "./Navbar";

import { useSnackbar } from "notistack";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";

const axios = require("axios").default;

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/admin/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.status === "Success") {
          let token = res.data.result.token;
          localStorage.setItem("adminToken", token);
          navigate("/admin/home");
          dispatch(
            adminSignIn({
              email,
            })
          );
          enqueueSnackbar("Successfully logged In");
        }
      })
      .catch((err) => enqueueSnackbar(err.response.data.result.toString()));
  };

  return (
    <div>
      <Nav />
      <Grid >
        <Grid  align="center">
          <Paper className="form"
            elevation={20}
            sx={{ padding: "30px 20px", width: "50%", margin: "100px auto" }}
          >
            <Avatar >
              <LockOutlinedIcon />
            </Avatar>
            <h1>FLIGHT TICKET APP</h1>
            <h2>Admin Sign In</h2>

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
                sx={{ paddingTop: "30px" }}
                fullWidth
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                variant="standard"
              ></TextField>
              <Grid sx={{ paddingTop: "50px" }}>
                <Button
                  sx={{ width: "500px", backgroundColor: "blue" }}
                  type="submit"
                  variant="contained"
                >
                  Sign In
                </Button>
              </Grid>
            </form>
            <a className="link" href="/admin/signup">Don't have an account?</a>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminSignIn;
