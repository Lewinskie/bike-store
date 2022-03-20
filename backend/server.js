const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");

//CONNECTION TO mongoDB
connectDB();

//MIDDLEWARE
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//ROUTES


//PORT


//APP LISTENER

