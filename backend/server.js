const express = require("express");

const app = express();

const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const router = new express.Router();

const connection = require("./db/conn");

const { json } = require("body-parser");

const userController = require("./routes/user");

const adminController = require("./routes/admin");

const path = require("path");

const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware

app.use(adminController);
app.use(userController);

app.use(express.json());

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log("Server is running" + process.env.PORT);
});
