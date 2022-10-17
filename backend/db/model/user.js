const express = require("express");
const mongoose = require("mongoose");
const router = new express.Router();

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    lowercase: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 12,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = new mongoose.model("user", userSchema);
module.exports = user;
