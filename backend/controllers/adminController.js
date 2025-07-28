// controllers/adminController.js
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateUserId } from "../utils/generateUserId.js";
import mongoose from "mongoose"; // for ObjectId validation

// ✅ Admin Register

export const registerAdmin = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if admin already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate unique userId
    const userId = await generateUserId();

    // Create new admin
    const admin = await User.create({
      userId,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      userType: "Admin",
      isActive: true,
    });

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, role: admin.userType },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Send response
    res.status(201).json({
      message: "Admin registered successfully.",
      token,
      admin: {
        userId: admin.userId,
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
        userType: admin.userType,
        isActive: admin.isActive,
      },
    });
  } catch (error) {
    console.error("Error in registerAdmin:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Admin Login with Cookie
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Email and password required." });

  try {
    const admin = await User.findOne({ email, userType: "Admin" });
    if (!admin) return res.status(404).json({ message: "Admin not found." });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials." });

    // ✅ Generate Token
    const token = jwt.sign({ id: admin._id, role: admin.userType }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "development", // Only send over HTTPS in development
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "Login successful.",
      admin: {
        userId: admin.userId,
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
        userType: admin.userType,
        isActive: admin.isActive,
      },
      token,
    });
  } catch (error) {
    console.error("Admin login error 👉", error);
    res.status(500).json({ message: "Admin login failed.", error: error.message });
  }
};

// ✅ Get Pending Users
export const getPendingUsers = async (req, res) => {
  try {
    const users = await User.find({ userType: "Pending", isActive: false });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
};
// ✅ Get All Registered Users
export const getAllRegisteredUsers = async (req, res) => {
  try {
    const users = await User.find({ userType: { $ne: "Pending" } })
      .select("firstName middleName lastName department designation isActive"); // fetch only needed fields

    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


// ✅ Activate User
export const activateUser = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).json({ message: "Invalid user ID" });

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        isActive: true,
        activateDate: new Date(),        // ✅ Activation timestamp
        deactivateDate: null             // (optional) clear deactivateDate
      },
      { new: true }
    );

    if (!updatedUser)
      return res.status(404).json({ message: "User not found" });

    res.json({ message: "User activated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Error activating user", error: err.message });
  }
};


// ✅ Deactivate User
export const deactivateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId))
      return res.status(400).json({ message: "Invalid user ID" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found." });

    user.isActive = false;
    await user.save();

    res.status(200).json({ message: "User deactivated", user });
  } catch (error) {
    console.error("Error deactivating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Assign Role
export const assignRole = async (req, res) => {
  try {
    const { userType } = req.body;
    if (!userType) return res.status(400).json({ message: "userType required" });

    const updated = await User.findByIdAndUpdate(req.params.id, { userType }, { new: true });
    if (!updated) return res.status(404).json({ message: "User not found" });

    res.json({ message: `Role assigned: ${userType}`, user: updated });
  } catch (err) {
    res.status(500).json({ message: "Failed to assign role", error: err.message });
  }
};

// ✅ Reset Password
export const resetPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    if (!newPassword) return res.status(400).json({ message: "New password required" });

    const hashed = await bcrypt.hash(newPassword, 10);
    const updated = await User.findByIdAndUpdate(req.params.id, { password: hashed });

    if (!updated) return res.status(404).json({ message: "User not found" });

    res.json({ message: "Password reset successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to reset password", error: err.message });
  }
};

// ✅ Delete User
export const deleteUser = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user", error: err.message });
  }
};
