// Flight booking database schema.

const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  seatNo: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
  },
  customerEmail: {
    type: String,
  },
  isBooked: {
    type: Boolean,
    required: true,
  },
  flight: {
    type: String,
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
  },
  flightId: {
    type: String,
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
  arrival: {
    type: String,
  },
  destiny: {
    type: String,
  },
  modeOfPayment: {
    type: String,
  },
});

const ticket = new mongoose.model("ticket", ticketSchema);
module.exports = ticket;
