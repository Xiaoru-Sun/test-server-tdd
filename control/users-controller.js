const User = require("../schema/userSchema");

async function getAllUsers(req, res) {
  try {
    console.log("controller running");
    const allUsers = await User.find({});
    // res.json(allUsers);
    console.log(allUsers);
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching song" });
  }
}

async function getOneUser(req, res) {
  try {
    console.log("getOneUser working");
    const { user_id } = req.params;
    const singleUser = await User.find({ id: +user_id });
    res.status(200).send(singleUser);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching song" });
  }
}
module.exports = { getAllUsers, getOneUser };
