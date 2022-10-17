const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const router = new express.Router();

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  companyName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 12,
  },
  email: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  yourFlight: {
    type: Array,
  },
});

const admin = new mongoose.model("admin", adminSchema);
module.exports = admin;
