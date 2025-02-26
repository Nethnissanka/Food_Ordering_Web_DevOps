import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const dbName = mongoose.connection.name;
    console.log(`Connected to database: ${dbName}`);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("DB Connection Failed:", error);
    process.exit(1); // Exit process if DB connection fails
  }
};
