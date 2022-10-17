import React, { useState, useEffect } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import CloseIcon from "@mui/icons-material/Close";

import {
  Grid,
  Paper,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";

import Nav from "./Nav";

import { useSnackbar } from "notistack";

import { useParams, useNavigate } from "react-router-dom";

import Modal from "@mui/material/Modal";

const axios = require("axios").default;

const UserHome = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);
  const [flights, setFlights] = useState([]);
  const [flightId, setFlightId] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [tickets, settickets] = useState([]);
  const [seatNo, setSeatNo] = useState([]);
  const [modeOfPayment, setModeOfPayment] = useState("Cash");
  const [hideForm, setHideForm] = useState(true);
  const [passengerName, setPassengerName] = useState([]);

  const navigate = useNavigate();

  const paymentOption = ["Cash", "Online"];

  const seatSelected = (seat) => {
    setSeatNo([...seatNo, seat]);
  };

  const nameInput = (value) => {
    setPassengerName([...passengerName, value]);
  };

  const getTickets = (flightid) => {
    axios.defaults.headers.post["authorization"] = localStorage.userToken;
    axios
      .post("http://localhost:5000/user/flight/details", {
        flightid,
      })
      .then((res) => {
        if (res.data.status === "Success") {
          settickets(Object.values(res.data.result));
        }
      });
    // .catch((err) => enqueueSnackbar(err.response.data.result.toString()));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    axios.defaults.headers.post["authorization"] = localStorage.userToken;
    axios
      .post("http://localhost:5000/user/flight/booktickets", {
        id: flightId,
        seatNo,
        modeOfPayment,
        passengerName,
      })
      .then((res) => {
        if (res.data.status === "Success") {
          enqueueSnackbar(res.data.result.toString());
          navigate("/user/yourticket");
        }
      })
      .catch((err) => enqueueSnackbar(err.response.data.result.toString()));
  };

  useEffect(() => {
    getTickets(flightId);
  }, [flightId]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.defaults.headers.post["authorization"] = localStorage.userToken;
    axios
      .post("http://localhost:5000/user/flight/search", {
        from,
        to,
        date,
      })
      .then((res) => {
        if (res.data.status === "Success") {
          setFlights(Object.values(res.data.result));
        } else {
          enqueueSnackbar("No flights Availble");
        }
      })
      .catch((err) => enqueueSnackbar(err.response.data.result.toString()));
  };

  return (
    <div>
      <Nav />
      <Grid>
        <Grid align="center">
          <Paper
            className="form"
            elevation={20}
            sx={{
              padding: "30px 20px",
              width: "50%",
              margin: "100px auto",
            }}
          >
            <Avatar sx={{ backgroundColor: "crimson" }}>
              <LockOutlinedIcon />
            </Avatar>
            <h1>Flight Search</h1>

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
                id="fro,"
                type="text"
                required
                onChange={(e) => setFrom(e.target.value)}
                label="From"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                id="to"
                type="text"
                required
                onChange={(e) => setTo(e.target.value)}
                label="To"
                variant="standard"
              ></TextField>
              <TextField
                sx={{ paddingTop: "30px" }}
                fullWidth
                id="date"
                required
                type="date"
                onChange={(e) => setDate(e.target.value)}
                label="Date"
                variant="standard"
              ></TextField>
              <Grid sx={{ paddingTop: "50px" }}>
                <Button
                  sx={{ width: "30%", backgroundColor: "blue" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <div>
        {flights.map((flight) => {
          return (
            <Card
              elevation={10}
              sx={{
                minWidth: 275,
                margin: "5%",
              }}
            >
              <CardContent style={{ marginLeft: "10%" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {" "}
                  <Typography
                    variant="h5"
                    component="div"
                    style={{
                      fontWeight: 1000,
                      fontSize: "3rem",
                      color: "crimson",
                    }}
                  >
                    {flight.name.toUpperCase()}
                  </Typography>
                  <Typography variant="body2">
                    <span
                      style={{
                        fontWeight: 1000,
                        fontSize: "1.3rem",
                        fontSize: "2.5rem",
                        color: "crimson",
                      }}
                    >
                      {" "}
                      {flight.rate}
                    </span>
                    <br />
                  </Typography>
                </div>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    fontSize: "1.3rem",
                    marginTop: "1%",
                  }}
                  gutterBottom
                >
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      fontSize: "1.3rem",
                    }}
                  >
                    {" "}
                    Date:
                  </span>
                  <span color="text.secondary" style={{ fontSize: "1.3rem" }}>
                    {" "}
                    {flight.date}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 500,
                    fontSize: "1.3rem",
                    marginTop: "1%",
                  }}
                >
                  <span style={{ fontWeight: 1000, fontSize: "1.3rem" }}>
                    Timings:{" "}
                  </span>{" "}
                  <span color="text.secondary"> {flight.time}</span>
                </Typography>
                <Typography
                  sx={{ fontSize: "1.3rem", fontWeight: 500, marginTop: "1%" }}
                >
                  <span style={{ fontWeight: 1000 }}>From: </span>{" "}
                  <span color="text.secondary">
                    {" "}
                    {flight.arrival.toUpperCase()}
                  </span>
                </Typography>{" "}
                <Typography
                  sx={{ fontSize: "1.3rem", fontWeight: 500, marginTop: "1%" }}
                >
                  <span style={{ fontWeight: 1000 }}>To: </span>{" "}
                  <span color="text.secondary">
                    {" "}
                    {flight.destination.toUpperCase()}
                  </span>
                </Typography>
              </CardContent>
              <CardActions>
                <div style={{ paddingBottom: "2vh" }}>
                  <Button
                    sx={{
                      width: "20vh",
                      marginLeft: "150vh",
                      backgroundColor: "crimson",
                    }}
                    onClick={() => {
                      handleOpen();
                      setFlightId(flight._id);
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Book Ticket
                  </Button>
                </div>
              </CardActions>
            </Card>
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          {hideForm ? (
            <Paper
              elevation={20}
              sx={{
                padding: "30px 20px",
                width: "60%",
                margin: "100px auto",
                justifyContent: "space-around",
              }}
            >
              <span style={{ marginLeft: "95%" }}>
                <CloseIcon sx={{ fontSize: "2rem" }} onClick={handleClose} />
              </span>
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "5vh",
                }}
              >
                Choose The seat Number{" "}
              </h1>

              <Grid
                container
                spacing={1}
                item
                lg={10}
                sx={{ justifyContent: "space-between" }}
              >
                {tickets.map((ticket) => {
                  return (
                    <Grid>
                      <Button
                        id={ticket.seatNo}
                        sx={{
                          width: "100px",
                          marginLeft: "12vh",
                          marginBottom: "2vh",
                          backgroundColor: seatNo.includes(ticket.seatNo)
                            ? "primary"
                            : "crimson",
                        }}
                        disabled={ticket.isBooked}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={(e) => {
                          seatSelected(ticket.seatNo);
                        }}
                      >
                        {ticket.seatNo}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
              <Button
                onClick={() => {
                  setHideForm(false);
                }}
                sx={{
                  width: "500px",
                  marginLeft: "25%",
                  marginTop: "5%",
                  backgroundColor: "crimson",
                }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Proceed
              </Button>
            </Paper>
          ) : (
            <Paper
              elevation={20}
              sx={{
                padding: "30px 20px",
                width: "50%",
                margin: "100px auto",
                justifyContent: "space-around",
              }}
            >
              <span style={{ marginLeft: "95%" }}>
                <CloseIcon sx={{ fontSize: "2rem" }} onClick={handleClose} />
              </span>
              <Button
                onClick={() => {
                  setHideForm(true);
                }}
                sx={{ width: "200px", backgroundColor: "crimson" }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Go back to Seats
              </Button>
              <h1 style={{ textAlign: "center" }}>Book Ticket</h1>
              <form
                onSubmit={(e) => {
                  handleBooking(e);
                }}
                style={{
                  paddingRight: "50px",
                  paddingLeft: "50px",
                  paddingBottom: "30px",
                }}
              >
                {seatNo.map((seat) => {
                  return (
                    <TextField
                      sx={{ paddingTop: "30px" }}
                      fullWidth
                      id="Passenger Name"
                      required
                      type="text"
                      onChange={(e) => {
                        nameInput(e.target.value);
                      }}
                      label="Passenger Name"
                      variant="standard"
                    ></TextField>
                  );
                })}
                <FormLabel id="demo-radio-buttons-group-label">
                  Mode Of Payment
                </FormLabel>
                <RadioGroup
                  defaultValue="Cash"
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  onChange={(e) => {
                    setModeOfPayment(e.target.value);
                  }}
                >
                  <FormControlLabel
                    value="Cash"
                    control={<Radio />}
                    label="Cash"
                  />
                  <FormControlLabel
                    value="Online"
                    control={<Radio />}
                    label="Online"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>

                <Grid sx={{ paddingTop: "50px", paddingLeft: "30%" }}>
                  <Button
                    sx={{ width: "50%", backgroundColor: "crimson" }}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Book
                  </Button>
                </Grid>
              </form>
            </Paper>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default UserHome;
