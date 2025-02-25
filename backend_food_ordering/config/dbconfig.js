import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connection_url = process.env.MONGO_URI;

const connectDB = async (req, res) => {
  try {
    await mongoose.connect(connection_url).then(() => {
      console.log("Database connected successfully");
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
