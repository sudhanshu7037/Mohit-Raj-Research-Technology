import dotenv from "dotenv";
import User from "./models/User.js";
dotenv.config();
const createAdmin = async () => {
  const existingAdmin = await User.findOne({ username: "admin" });
  if (existingAdmin) {
    console.log("⚠️ Admin already exists");
    process.exit(0);
  }

  const admin = new User({
    username: "admin",
    password: "admin123", // Strong password recommended
    role: "admin",
  });

  await admin.save();
  console.log("✅ Admin created successfully");
  process.exit();
};

createAdmin();
