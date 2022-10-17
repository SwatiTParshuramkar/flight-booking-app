/* This is the connection between the database*/
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://techcor:techcor1@cluster0.d2w95n1.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((e) => {
    console.log(e);
  });
