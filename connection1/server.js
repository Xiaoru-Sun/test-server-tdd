const express = require("express");
// const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
// const db = connectDB();

//DOTENV
dotenv.config();
// MONGODB CONNECTION
connectDB();

//REST OBJECT
const app = express();
// app.use(cors());
app.use(express.json());

//Routes
app.get("movies", (req, res) => {
  //   const query = { name: { first: "Alan", last: "Turing" } };
  //   db.collection(gettingStarted.people)
  //     .findOne(query)
  //     .then((response) => {
  //       console.log(response);
  //     });
  res.status(200).json({
    success: true,
    message: "welcome to group 6 app",
  });
});

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});

module.exports = app;
