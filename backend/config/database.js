const mongoose = require("mongoose");
require("dotenv").config();
const connectdb = async()=>{
  await mongoose.connect(process.env.MONGO_URI);
}

module.exports = connectdb

