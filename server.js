const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { usersRouter } = require("./routes/userRoutes");
const { getAllUsers, getOneUser } = require("./control/users-controller");
require("dotenv").config();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "trailblaze",
  })
  .then(() => {
    console.log("database connection established");
  })
  .catch(() => {
    console.error();
  });

app.get("/", async (req, res) => {
  res.status(200).send("welcome");
});

app.get("/users", getAllUsers);
app.get("/users/:user_id", getOneUser);
app.get("/activity");
// app.get("/users/:user_id", async (req, res) => {
//   const { user_id } = req.params;
//   const user = await client
//     .db("trailblaze")
//     .collection("users")
//     .findOne({ id: JSON.parse(user_id) });
//   res.status(200).send(user);
// });

app.listen(9090, () => console.log("App listening on port 9090!"));
