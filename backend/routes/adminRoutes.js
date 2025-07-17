  // routes/adminRoutes.js
import express from "express";
import {
  getPendingUsers,
  activateUser,
  assignRole,
  deleteUser,
  resetPassword,
  registerAdmin,
  deactivateUser,
} from "../controllers/adminController.js";
const router = express.Router();
router.post("/register-admin", registerAdmin);
router.get("/pending-users", getPendingUsers);
router.patch("/assign-role/:id", assignRole);
router.patch("/activate/:id", activateUser);
router.patch("/deactivate/:userId", deactivateUser);
router.patch("/reset-password/:id", resetPassword);
router.delete("/delete/:id", deleteUser);

export default router;
