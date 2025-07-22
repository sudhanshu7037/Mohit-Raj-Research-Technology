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
// app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

// middleware
 app.use(
   cors({
     origin: "http://localhost:5173", // ✅ Allow frontend origin
     credentials: true, // Agar cookies use kar rahe ho future me
   })
 );

// import routes
import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";


// api route
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/role", roleRoutes);

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
