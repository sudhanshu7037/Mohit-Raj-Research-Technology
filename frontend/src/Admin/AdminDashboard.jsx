import React, { useState, useEffect } from "react";
import image1 from "../assets/homepageimages/careerpageimages/careerbanner.jpg";

import axios from "axios";

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [showSubmenu, setShowSubmenu] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleMainMenuClick = (menu) => {
    setShowSubmenu(menu === showSubmenu ? "" : menu);
    setActiveMenu(""); // reset content when switching main menu
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/admin/all-registered-users",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Fetched users:", res.data); // ✅ log this
        setUsers(res.data); // Make sure res.data is an array
      } catch (err) {
        console.error(
          "Error fetching users:",
          err.response?.data || err.message
        );
      }
    };

    fetchUsers();
  }, []);

  const handleSubMenuClick = (menu) => {
    setActiveMenu(menu);
    if (menu === "create-edit-user") {
      fetchUsers();
    }
  };

  return (
    <>
      <div>
        <img
          src={image1}
          className="w-full h-60 object-cover brightness-50"
          alt="Banner"
        />
      </div>

      <div className="flex h-[calc(100vh-15rem)] bg-gray-100">
        {/* Sidebar */}
        <div className="w-72 bg-white shadow-md p-4 overflow-y-auto">
          <h1 className="text-xl font-bold mb-4">Admin Panel</h1>

          <div className="space-y-2">
            {/* User Management */}
            <div>
              <div
                className={`cursor-pointer p-2 rounded ${
                  showSubmenu === "user-management"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleMainMenuClick("user-management")}
              >
                User Management
              </div>
              {showSubmenu === "user-management" && (
                <div className="ml-4 mt-1">
                  <div
                    className={`text-sm p-2 rounded cursor-pointer ${
                      activeMenu === "create-edit-user"
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleSubMenuClick("create-edit-user")}
                  >
                    Create & Edit User
                  </div>
                </div>
              )}
            </div>

            {/* Role Management */}
            <div>
              <div
                className={`cursor-pointer p-2 rounded ${
                  showSubmenu === "role-management"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleMainMenuClick("role-management")}
              >
                Role Management
              </div>
              {showSubmenu === "role-management" && (
                <div className="ml-4 mt-1 text-sm text-gray-700">
                  Add & Edit Roles
                </div>
              )}
            </div>

            {/* Static Menus */}
            <div className="cursor-pointer p-2 hover:bg-gray-200 rounded">
              Content Management
            </div>
            <div className="cursor-pointer p-2 hover:bg-gray-200 rounded">
              Message & Notice Management
            </div>
            <div className="cursor-pointer p-2 hover:bg-gray-200 rounded">
              Content Upload & Download
            </div>
            <div className="cursor-pointer p-2 hover:bg-gray-200 rounded">
              Configuration
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeMenu === "" && (
            <p className="text-gray-400 text-center mt-10">
              Please select a section from sidebar.
            </p>
          )}

          {/* Create & Edit User Section */}
          {activeMenu === "create-edit-user" && (
            <>
              <h2 className="text-2xl font-semibold mb-4">
                All Registered Users
              </h2>

              {loading && <p className="text-blue-500">Loading users...</p>}
              {error && <p className="text-red-500">{error}</p>}

              {!loading &&
                !error &&
                Array.isArray(users) &&
                users.length === 0 && (
                  <p className="text-red-400">No users found.</p>
                )}

              {!loading &&
                !error &&
                Array.isArray(users) &&
                users.length > 0 && (
                  <table className="min-w-full bg-white shadow rounded">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Fristname</th>
                        <th className="border px-4 py-2">Middlename</th>
                        <th className="border px-4 py-2">Lastname</th>
                        <th className="border px-4 py-2">Department</th>
                        <th className="border px-4 py-2">Designation</th>

                        <th className="border px-4 py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user._id || user.id}>
                          <td className="border px-4 py-2">{user.firstName}</td>
                          <td className="border px-4 py-2">
                            {user.middleName}
                          </td>
                          <td className="border px-4 py-2">{user.lastName}</td>
                          <td className="border px-4 py-2">
                            {user.department}
                          </td>
                          <td className="border px-4 py-2">
                            {user.designation}
                          </td>
                          <td className="border px-4 py-2">{user.isActive}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

              {/* Create User Form */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Create New User</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="block w-full p-2 border rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="block w-full p-2 border rounded"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="block w-full p-2 border rounded"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Create User
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
