require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const restaurantRouter = require("./routes/restaurant");
const manufacturerRouter = require("./routes/manufacturer");

const app = express();

const DB_STRING = "mongodb://localhost/kimchi" || process.env.DB_STRING;
mongoose
  .connect(DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB connected at ${DB_STRING}`);
  })
  .catch((error) => {
    console.log(`Error connecting to ${DB_STRING}`);
  });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/restaurant", restaurantRouter);
app.use("/manufacturer", manufacturerRouter);

// server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
