// routes/roleRoutes.js

import express from "express";

import { setRolePermissions } from "../controllers/roleController.js";

const router = express.Router();
router.post("/set-permissions", setRolePermissions);

export default router;
