const express = require("express");
const connectdb = require("./config/database.js");
const authRoutes = require("./routes/authRoutes"); 
const cookieParser = require("cookie-parser");
const cors = require("cors");


require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookieParser()); 
app.use(express.json());


app.use(
  cors({
    origin: "http://localhost:5173", // ✅ Allow frontend origin
    credentials: true, // Agar cookies use kar rahe ho future me
  })
);


app.use("/api/auth", authRoutes); 




connectdb()
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });
