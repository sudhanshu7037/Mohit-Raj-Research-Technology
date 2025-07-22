// routes/authRoutes.js
import express from "express";
import { registerUser } from "../controllers/authController.js";
import { loginUser } from "../controllers/authController.js"; // Assuming you have a loginUser function
const router = express.Router();

router.post("/user/register", registerUser);
 // Public route
 // routes/authRoutes.js (add to the same file)
router.post("/user/login", loginUser);


export default router;
