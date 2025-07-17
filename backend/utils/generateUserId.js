// utils/generateUserId.js
import User from "../models/user.js";

export const generateUserId = async () => {
  const lastUser = await User.findOne().sort({ createdAt: -1 });

  if (!lastUser) return "EMP001";

  const lastId = lastUser.userId || "EMP000";
  const number = parseInt(lastId.replace("EMP", ""));
  const newId = "EMP" + String(number + 1).padStart(3, "0");

  return newId;
};
