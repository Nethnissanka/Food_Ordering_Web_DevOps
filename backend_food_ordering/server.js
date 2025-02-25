import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/dbconfig.js";
//app configuration
const app = express();

const port = process.env.PORT || 8800;

//middleware
app.use(express.json());
app.use(cors());

//db config
//mongoose.connect(process.env.MONGO_URI);

connectDB();
app.get("/", (req, res) => {
  res.status(200).send("api working succeed");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
