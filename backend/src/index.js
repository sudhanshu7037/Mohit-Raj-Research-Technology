const express = require("express");
const connectdb = require("./config/database.js");
const cors = require("cors");
const cookiesParser = require("cookie-parser");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cookiesParser());
app.use(express.json());

// middleware
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ Allow frontend origin
    credentials: true, // Agar cookies use kar rahe ho future me
  })
);

// import routes
const authRouter = require("./routes/auth.js");
const openRoutes = require("./routes/openRoutes.js");
const { isAdmin } = require("./middleware/auth.js");
const adminRoutes = require("./routes/adminRoutes.js");

// use route
app.use("/", authRouter);
app.use("/", openRoutes);
app.use("/", isAdmin, adminRoutes);

connectdb()
  .then(() => {
    console.log("db connected successfully");
    app.listen(PORT, () => {
      console.log("server is running port no 4000....");
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });
