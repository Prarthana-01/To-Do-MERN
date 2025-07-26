const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = "mongodb+srv://prarthanaravikumar47:DK2r1hw71WaznlV7@cluster0.7ihvtth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log("MongoDB Connnected");
  } catch (error) {
    console.error(error.message);
  }
};
module.exports = connectDB;
