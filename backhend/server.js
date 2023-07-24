const express = require("express");
var app = express();
const colors = require("colors");
const dotenv = require("dotenv").config();
var cors = require('cors');
app.use(cors());
const PORT = process.env.PORT;
var hostname = "127.0.0.1";
const { errorHandler } = require("./middleware/errorMiddleware");

const connectDb = require("./config/db");
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

//api call
app.use("/api/build", require("./routes/buildRoutes"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(PORT, () => {
  console.log(`listening on ${hostname}: ${PORT}`);
});
