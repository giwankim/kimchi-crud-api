require("dotenv").config({ path: "./envs/.env.development" });
// require("dotenv").config({path: './envs/.env.production'});
const express = require("express");
const mongoose = require("mongoose");
const restaurantRouter = require("./routes/restaurant");
const manufacturerRouter = require("./routes/manufacturer");

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/kimchi";

const app = express();

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB connected at ${MONGO_URI}`);
  })
  .catch((error) => {
    console.log(`Error connecting to ${MONGO_URI}:`, error);
  });

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/restaurant", restaurantRouter);
app.use("/manufacturer", manufacturerRouter);

// server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
