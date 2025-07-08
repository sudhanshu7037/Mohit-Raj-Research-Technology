
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER API
exports.registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // first user becomes admin
    const isFirstUser = (await User.countDocuments()) === 0;

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role: isFirstUser ? "admin" : "user", // ✅ First user is admin
    });

    const token = await newUser.getJWT();

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        _id: newUser._id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};

// LOGIN API
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials please register" });

    const isMatch = await user.validatePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials " });

    const token = await user.getJWT();
     // ✅ Set token in cookie
    res.cookie("token", token, {
      httpOnly: true,         // ❌ Cannot access via JavaScript
      secure: false,          // ✅ Set to true only in HTTPS (prod)
      sameSite: "lax",        // ✅ Protects against CSRF
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });


    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

// LOGOUT API (Client-side only: just delete token)
exports.logoutUser = async (req, res) => {
  res
    .status(200)
    .json({ message: "Logout successful (delete token on client)" });
};

