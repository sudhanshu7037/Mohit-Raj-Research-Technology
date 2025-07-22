// models/rolePermission.js

import mongoose from "mongoose";

const rolePermissionSchema = new mongoose.Schema({
  userId: { type: String, required: true },  // e.g., emp001
  mainMenu: { type: String, required: true }, // e.g., ADMIN
  subMenu: { type: String, required: true },  // e.g., Create Post Department Wise

  permissions: {
    access: { type: Boolean, default: false },
    edit: { type: Boolean, default: false },
    modify: { type: Boolean, default: false },
    delete: { type: Boolean, default: false },
    download: { type: Boolean, default: false },
  },
}, { timestamps: true });

export default mongoose.model("RolePermission", rolePermissionSchema);
