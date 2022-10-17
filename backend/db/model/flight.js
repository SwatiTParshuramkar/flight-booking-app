

// const date = require("@hapi/joi/lib/types/date");
const mongoose = require("mongoose");

const FlightSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
    minlength: 3,
  },
  rate: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  seats: {
    type: Object,
    required: true,
  },
  arrival: {
    type: String,
    lowercase: true,
  },
  destination: {
    type: String,
    lowercase: true,
  },
});

const flight = new mongoose.model("flight", FlightSchema);
module.exports = flight;
