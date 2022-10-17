import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";

import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

import Nav from "./AdminNav";

import { useSnackbar } from "notistack";

const axios = require("axios").default;

const UploadFlight = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [rate, setRate] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seatCount, setSeatCount] = useState("");
  const [arrival, setArrival] = useState("");
  const [destination, setDestination] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.headers.post["authorization"] = localStorage.adminToken;
    axios
      .post("http://localhost:5000/admin/flight/uploaddetails", {
        flightNumber,
        rate,
        date,
        seatCount,
        arrival,
        time,
        destination,
      })
      .then((res) => {
        if (res.data.status === "Success") {
          enqueueSnackbar(res.data.result.toString());
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
            elevation={20}
            sx={{
              padding: "30px 20px",
              width: "50%",
              margin: "100px auto",
            }}
          >
            <Avatar sx={{ backgroundColor: "crimson" }}>
              <ConnectingAirportsIcon/>
            </Avatar>
            <h1>Flight Upload</h1>

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
                id="flightNumber"
                type="text"
                label="flight Number"
                onChange={(e) => setFlightNumber(e.target.value)}
              />
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                required
                id="rate"
                type="number"
                onChange={(e) => setRate(e.target.value)}
                label="Rate"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                required
                id="date"
                type="date"
                onChange={(e) => setDate(e.target.value)}
                label="Date"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                required
                id="time"
                type="time"
                onChange={(e) => setTime(e.target.value)}
                label="Time"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                required
                id="seatCount"
                type="number"
                onChange={(e) => setSeatCount(e.target.value)}
                label="Seat Count"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                required
                id="arrival"
                type="text"
                onChange={(e) => setArrival(e.target.value)}
                label="Arrival"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                required
                id="destiation"
                type="text"
                onChange={(e) => setDestination(e.target.value)}
                label="Destination"
                variant="standard"
              ></TextField>
              <Grid sx={{ paddingTop: "50px" }}>
                <Button
                  sx={{ width: "40%", backgroundColor: "crimson" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Register Trip
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default UploadFlight;
