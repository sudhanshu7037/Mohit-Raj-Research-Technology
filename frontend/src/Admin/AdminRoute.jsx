// AdminRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")); // Or get from context
  const token = localStorage.getItem("token");

  const isAdmin = user?.role === "admin"; // ✅ Role check
  const isAuthenticated = !!token;

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default AdminRoute;
