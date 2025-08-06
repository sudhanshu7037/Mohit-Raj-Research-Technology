// index.mjs or index.js (with "type": "module" in package.json)

import express from "express";
import connectdb from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser());
app.use(express.json());

// middleware
 app.use(
   cors({
     origin: "http://localhost:5173", 
     credentials: true, 
   })
 );





connectdb()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });
