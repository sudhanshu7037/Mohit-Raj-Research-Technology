// controllers/authController.js
import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateUserId } from "../utils/generateUserId.js"; // Helper to generate EMP001 etc.

export const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      email,
      password,
      mobile,
      phone,
      gender,
      age,
      qualification,
      dateOfBirth,
      department,
      designation,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userId: await generateUserId(), // e.g., EMP001
      firstName,
      middleName,
      lastName,
      email,
      password: hashedPassword,
      mobile,
      phone,
      gender,
      age,
      qualification,
      dateOfBirth,
      department,
      designation,
      userType: "Pending", // default
      isActive: false, // default
    });

    await newUser.save();
    res.status(201).json({
      message: "Registration successful. Awaiting admin approval.",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error });
  }

};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  if (!user.isActive) return res.status(403).json({ message: "User is not activated" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id, role: user.userType }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({ token, user });
};


