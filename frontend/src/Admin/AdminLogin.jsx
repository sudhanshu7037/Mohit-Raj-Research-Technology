import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // reset previous error

    try {
      const response = await axios.post(
        "http://localhost:4000/api/admin/login-admin",
        {
          email,
          password,
        }
      );
       console.log("Login successful:", response.data);
       localStorage.setItem("token", response.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(
        "Login failed:",
        err.response?.data?.message || err.message
      );
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600 text-md">
          Don’t have an account?
          <span className="text-blue-600 hover:underline cursor-pointer font-bold text-md">
            {" "}
            Register
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
