const mongoose = require("mongoose");

const user_structure = new mongoose.Schema({
  id: Number,
  email: String,
  password: String,
  firstName: String,
  lastName: String,
});

const Users = mongoose.model("user", user_structure);

module.exports = Users;
