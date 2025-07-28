// routes/roleRoutes.js

import express from "express";

import {
  setRolePermissions,
  getAllRolePermissions,
  getPermissionsByUserId,
  deletePermissionById,
  updateSpecificPermission,
  bulkSetPermissions,
} from "../controllers/roleController.js";

const router = express.Router();
router.post("/set-permissions", setRolePermissions);
router.get("/permissions", getAllRolePermissions);
router.get("/permissions/:userId", getPermissionsByUserId);
router.delete("/permissions/:id", deletePermissionById);
router.patch("/permissions/update", updateSpecificPermission);
router.post("/permissions/bulk", bulkSetPermissions);

export default router;
