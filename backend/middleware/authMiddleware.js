// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";
import User from "../models/user.js";

/**
 * Protect middleware: Validates JWT from either cookie or Authorization header.
 */
export const protect = async (req, res, next) => {
  try {
    // Try to get token from cookie or header
    const token =
      req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from DB
    const user = await User.findById(decoded.id).select("-password"); // remove password

    if (!user || !user.isActive) {
      return res.status(403).json({ message: "Access denied: Inactive or invalid user" });
    }

    req.user = user; // Attach user to request
    next(); // Move to next middleware
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

/**
 * Admin middleware: Checks if the user role is 'admin'
 */
export const authenticateAdmin = (req, res, next) => {
  // This should run only after protect middleware
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized: User not authenticated" });
  }

  if (req.user.userType !== "Admin") {
    return res.status(403).json({ message: "Access denied: Admins only" });
  }

  next(); // Access granted
};
