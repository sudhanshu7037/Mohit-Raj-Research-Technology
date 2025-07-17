// controllers/adminController.js
import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateUserId } from "../utils/generateUserId.js";
// import { protect, authenticateAdmin } from "../middlewares/authMiddleware.js";
 // Helper to generate EMP001 etc.


export const registerAdmin = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if Admin already exists
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      return res.status(409).json({
        message: "Admin already registered with this email.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new User({
      userId: await generateUserId(),
      firstName,
      lastName,
      email,
      password: hashedPassword,
      userType: "Admin",
      isActive: true,
    });

    await admin.save();
    res.status(201).json({ message: "Admin registered successfully." });
  } catch (err) {
    console.error("Admin registration error 👉", err);
    res.status(500).json({ message: "Admin registration failed.", error: err.message });
  }
};



export const getPendingUsers = async (req, res) => {
  const users = await User.find({ userType: "Pending", isActive: false });
  res.json(users);
};

export const activateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { isActive: true });
  res.json({ message: "User activated" });
};
export const deactivateUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Set isActive to false
    user.isActive = false;
    await user.save();

    res.status(200).json({ message: "User deactivated." });
  } catch (error) {
    console.error("Error deactivating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};  

export const assignRole = async (req, res) => {
  const { userType } = req.body;
  if (!userType) return res.status(400).json({ message: "userType required" });

  await User.findByIdAndUpdate(req.params.id, { userType });
  res.json({ message: `Role assigned: ${userType}` });
};

export const resetPassword = async (req, res) => {
  const { newPassword } = req.body;
  if (!newPassword) return res.status(400).json({ message: "New password required" });

  const hashed = await bcrypt.hash(newPassword, 10);
  await User.findByIdAndUpdate(req.params.id, { password: hashed });
  res.json({ message: "Password reset successfully" });
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};
