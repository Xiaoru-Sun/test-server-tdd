const express = require("express");
const mongoose = require("mongoose");
const app = new express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://xrssun:3W0uGdjh5gec8dKX@cluster0.z60yugb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("database connection established");
  })
  .catch(() => {
    console.error();
  });

// Calling Schema class
const Schema = mongoose.Schema;

// Creating Structure of the collection
const collection_structure = new Schema({
  name: String,
  email: String,
  password: String,
});

// Creating collection
//Mongoose pluralizes the model name to determine the collection name
const collection = mongoose.model("Test", collection_structure);

// collection
//   .create({
//     name: "Xiaoru",
//     email: "xxx@gmail.com",
//     password: "34q045q",
//   })
//   .then(() => {
//     console.log("data inserted");
//   })
//   .catch(() => {
//     console.error();
//   });

// collection.findOne({ name: "Xiaoru" }).then((res) => {
//   console.log("founded", res);
// });

app.get("", (req, res) => {
  res.status(200).send("Server is working?!");
});

app.get("/lll", (req, res) => {
  collection.findOne({ name: "Xiaoru" }).then((ans) => {
    console.log("founded", ans);
    res.status(200).send(ans);
  });
});

app.listen(3000, () => {
  console.log("listening on server 3000");
});
