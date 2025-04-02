const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sohambiswas001:shiv321@backend.gpsnod7.mongodb.net/Backend"
  );
};

module.exports = connectDB;
