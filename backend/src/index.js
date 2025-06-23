const express = require('express');
const connectdb = require("./config/database.js");
 
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
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
