const express = require("express");
const mongoose = require("mongoose");
const app = new express();
const routes = require("./routes");
const cors = require("cors");

// One is the base endpoint, and the other is the contents of the routes.
// app.use("/api", routes);
app.use(cors);

require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, {
  dbName: "tests",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//Get the database connection instance
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

// Handle connection events
database.once("connected", () => {
  console.log("database connected");
});

app.get("", (req, res) => {
  res.status(200).send("Server working now");
});

app.get("/products", (req, res) => {
  let products = mongoose.connection.db("store").collection("products");
  res.status(200).send(products);
});

app.listen(3000, () => {
  console.log("listening on 3000...");
});
