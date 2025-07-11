import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        formData,
        { withCredentials: true }
      );

      if (res.data.user.role !== "admin") {
        return setError("Access Denied: You are not an admin.");
      }

      setSuccess("Login Successful");
      localStorage.setItem("admin", JSON.stringify(res.data.user));
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/02/92/90/56/360_F_292905667_yFUJNJPngYeRNlrRL4hApHWxuYyRY4kN.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Admin Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded mb-3"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded mb-4"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {/* Register link */}
        <p className="text-sm text-center mt-4 text-gray-700">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
