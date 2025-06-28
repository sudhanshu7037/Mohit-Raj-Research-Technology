import React, { useState } from "react";
import axios from "axios";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/login", formData);
      localStorage.setItem("adminToken", res.data.token);
      window.location.href = "/admin/dashboard";
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white shadow-md p-8 rounded w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 mb-4 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 mb-4 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
