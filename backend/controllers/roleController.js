// controllers/roleController.js
export const setRolePermissions = async (req, res) => {
  const { userId, mainMenu, subMenu, permissions } = req.body;

  try {
    // Check if already exists
    const existing = await RolePermission.findOne({ userId, mainMenu, subMenu });

    if (existing) {
      existing.permissions = permissions;
      await existing.save();
    } else {
      await RolePermission.create({ userId, mainMenu, subMenu, permissions });
    }

    res.status(200).json({ success: true, message: "Permissions set successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};
