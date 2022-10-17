import React, { useState, useEffect } from "react";

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import Nav from "./Nav";

import { useSnackbar } from "notistack";

const axios = require("axios").default;

const YourTickets = () => {
  const [tickets, setTickets] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const getTickets = () => {
    axios.defaults.headers.get["authorization"] = localStorage.userToken;
    axios
      .get("http://localhost:5000/user/ticket")
      .then((res) => {
        if (res.data.status === "Success") {
          setTickets(Object.values(res.data.result));
        } else {
          enqueueSnackbar("No flights Availble");
        }
      })
      .catch((err) => enqueueSnackbar(err.response.data.result.toString()));
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div>
      <Nav />
      <h1
        style={{
          paddingTop: "10%",
          textAlign: "center",
          fontSize: "400%",
          color: "crimson",
        }}
      >
        Here's Your Tickets
      </h1>
      {tickets.map((ticket) => {
        return (
          <Card
            elevation={10}
            sx={{
              minWidth: 275,
              margin: "5%",
            }}
          >
            <CardContent style={{ marginLeft: "10%" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                  {ticket.flight.toUpperCase()}
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
                    {ticket.rate}
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
                  Seat No :
                </span>
                <span color="text.secondary" style={{ fontSize: "1.3rem" }}>
                  {" "}
                  {ticket.seatNo}
                </span>
              </Typography>
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
                  {ticket.date}
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
                  Passenger:{" "}
                </span>{" "}
                <span color="text.secondary">
                  {" "}
                  {ticket.customerName.toUpperCase()}
                </span>
              </Typography>
              <Typography
                sx={{ fontSize: "1.3rem", fontWeight: 500, marginTop: "1%" }}
              >
                <span style={{ fontWeight: 1000 }}>From: </span>{" "}
                <span color="text.secondary">
                  {" "}
                  {ticket.arrival.toUpperCase()}
                </span>
              </Typography>{" "}
              <Typography
                sx={{ fontSize: "1.3rem", fontWeight: 500, marginTop: "1%" }}
              >
                <span style={{ fontWeight: 1000 }}>To: </span>{" "}
                <span color="text.secondary">
                  {" "}
                  {ticket.destiny.toUpperCase()}
                </span>
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default YourTickets;
