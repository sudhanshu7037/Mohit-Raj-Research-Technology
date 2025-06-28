const express = require("express");
const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const { validateRegisterData } = require("../utils/validation.js");

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  try {
    validateRegisterData(req);
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(400).json({ message: error.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("email not present in db");
    }
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      // Create a token for the user
      const token = await user.getJWT();
        res.cookie("token", token, {
        httpOnly: true,
        secure: false, 
        expires: new Date(Date.now() + 8 * 3600000),
      });

      res.status(200).json({
        message: "Login successful",
      });
    } else {
      throw new Error("passwas is not correct");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(400).json({ message: error.message });
  }
});

module.exports = authRouter;
