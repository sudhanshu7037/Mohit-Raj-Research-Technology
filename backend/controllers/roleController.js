import RolePermission from "../models/rolePermission.js";  // Make sure you import the model

export const setRolePermissions = async (req, res) => {
  try {
    const { userId, mainMenu, subMenu, permissions } = req.body;

    // Input validation
    if (!userId || !mainMenu || !subMenu || !permissions) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Check if the permission already exists
    const existing = await RolePermission.findOne({ userId, mainMenu, subMenu });

    if (existing) {
      existing.permissions = permissions;
      await existing.save();
      return res.status(200).json({ success: true, message: "Permissions updated successfully" });
    } else {
      await RolePermission.create({ userId, mainMenu, subMenu, permissions });
      return res.status(201).json({ success: true, message: "Permissions created successfully" });
    }
  } catch (error) {
    console.error("Permission Error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};



// ✅ Get all Role Permissions




export const getAllRolePermissions = async (req, res) => {
  try {
    const permissions = await RolePermission.find().populate("userId", "name email"); // optional: populate user info
    res.status(200).json({ success: true, permissions });
  } catch (error) {
    console.error("Get All Permissions Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch permissions" });
  }
};



// ✅ Get Role Permissions by User ID
export const getPermissionsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const permissions = await RolePermission.find({ userId });
    res.status(200).json({ success: true, permissions });
  } catch (error) {
    console.error("User Permission Fetch Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch user permissions" });
  }
};


// ✅ Delete Role Permission
export const deletePermissionById = async (req, res) => {
  try {
    const { id } = req.params;
    await RolePermission.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Permission deleted successfully" });
  } catch (error) {
    console.error("Delete Permission Error:", error);
    res.status(500).json({ success: false, message: "Failed to delete permission" });
  }
};
  //   Update Specific Permission Field (e.g., only 'edit' permission)


  export const updateSpecificPermission = async (req, res) => {
  try {
    const { userId, mainMenu, subMenu, permissionKey, value } = req.body;

    const role = await RolePermission.findOne({ userId, mainMenu, subMenu });

    if (!role) {
      return res.status(404).json({ success: false, message: "Permission not found" });
    }

    role.permissions[permissionKey] = value;
    await role.save();

    res.status(200).json({ success: true, message: "Permission updated successfully" });
  } catch (error) {
    console.error("Update Permission Error:", error);
    res.status(500).json({ success: false, message: "Failed to update permission" });
  }
};
 

//  Bulk set Role Permissions

export const bulkSetPermissions = async (req, res) => {
  try {
    const { userId, permissionsList } = req.body; // permissionsList = array of {mainMenu, subMenu, permissions}

    for (const perm of permissionsList) {
      const existing = await RolePermission.findOne({ userId, mainMenu: perm.mainMenu, subMenu: perm.subMenu });
      if (existing) {
        existing.permissions = perm.permissions;
        await existing.save();
      } else {
        await RolePermission.create({ userId, mainMenu: perm.mainMenu, subMenu: perm.subMenu, permissions: perm.permissions });
      }
    }

    res.status(200).json({ success: true, message: "Bulk permissions updated successfully" });
  } catch (error) {
    console.error("Bulk Set Permissions Error:", error);
    res.status(500).json({ success: false, message: "Failed to bulk update permissions" });
  }
};
