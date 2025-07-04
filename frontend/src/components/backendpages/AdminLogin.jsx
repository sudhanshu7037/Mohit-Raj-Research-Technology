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
      localStorage.setItem("userInfo", JSON.stringify(res.data.user));

      window.location.href = "/admin/dashboard";
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div>
        <img
          src="https://advisorhtml.websitelayout.net/img/banner/page-title.jpg"
          alt=""
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="bg-gray-100 flex justify-center pt-10 pb-20 min-h-[85vh]">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md p-8 rounded w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-6"> Login</h2>
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

          {/* Additional Links */}
          <div className="mt-4 text-center text-sm text-gray-600">
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register now
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
