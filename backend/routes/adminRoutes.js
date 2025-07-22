import express from "express";
import {
  registerAdmin,
  loginAdmin,
  getPendingUsers,
  activateUser,
  deactivateUser,
  assignRole,
  resetPassword,
  deleteUser
} from "../controllers/adminController.js";

import { protect, authenticateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

/* --------------------------- Public Routes --------------------------- */
router.post("/register-admin", registerAdmin);
router.post("/login-admin", loginAdmin);

/* ------------------------- Protected Admin Routes ------------------------- */
router.use(protect);           // ✅ User must be logged in
router.use(authenticateAdmin); // ✅ Must be admin

// Get all pending users
router.get("/pending-users", getPendingUsers);

// Assign role to user
router.patch("/assign-role/:id", assignRole);

// Activate a user
router.patch("/activate/:id", activateUser);

// Deactivate a user
router.patch("/deactivate/:userId", deactivateUser);

// Reset user password
router.patch("/reset-password/:id", resetPassword);

// Delete a user
router.delete("/delete/:id", deleteUser);

export default router;
