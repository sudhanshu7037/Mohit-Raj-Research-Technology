const express = require('express');
const connectdb = require("./config/database.js");
const cors = require("cors"); 

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express(); 
  
// middleware
app.use(cors({
  origin: "http://localhost:5173", // ✅ Allow frontend origin
  credentials: true, // Agar cookies use kar rahe ho future me
}));
app.use(express.json());



// import routes
const authRouter = require("./routes/auth.js");

// use route
app.use("/", authRouter); 



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


