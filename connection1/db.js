const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to Database ${mongoose.connection.host}`);
  } catch (err) {
    console.log(`error in ${err} `);
  }
};

module.exports = connectDB;
