import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  UserCircle,
  ShieldCheck,
  FileText,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

const AdminDashboard = () => {
  const [openMenu, setOpenMenu] = useState({ user: false });
  const [activeSubTab, setActiveSubTab] = useState("");
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ firstname: "", email: "" });

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("userInfo");
    window.location.href = "/admin/login";
  };

  const toggleMenu = (key) => {
    setOpenMenu((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstname || !formData.email) return alert("All fields required");
    setUsers((prev) => [...prev, formData]);
    setFormData({ firstname: "", email: "" });
  };

  const renderContent = () => {
    if (activeSubTab === "add-user") {
      return (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add User</h2>
          <form onSubmit={handleUserSubmit} className="mb-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.firstname}
              onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add User
            </button>
          </form>

          {/* User list */}
          <div>
            <h3 className="text-xl font-semibold mb-2">User List</h3>
            {users.length === 0 ? (
              <p className="text-gray-500">No users added yet.</p>
            ) : (
              <ul className="space-y-2">
                {users.map((user, idx) => (
                  <li key={idx} className="p-3 bg-gray-100 rounded shadow">
                    <strong>{user.firstname}</strong> - {user.email}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
    }

    if (activeSubTab === "edit-user") {
      return <h2 className="text-2xl text-yellow-600">🛠️ Edit User Section (to be implemented)</h2>;
    }

    if (activeSubTab === "delete-user") {
      return <h2 className="text-2xl text-red-600">🗑️ Delete User Section (to be implemented)</h2>;
    }

    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Welcome to Admin Dashboard</h2>
        <p className="text-gray-600">Select a submenu from sidebar to manage users.</p>
      </div>
    );
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

      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <aside className="w-72 bg-white shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Admin Panel</h2>

          {/* User Management */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer text-gray-800 hover:text-blue-600 mb-2"
              onClick={() => toggleMenu("user")}
            >
              <div className="flex gap-2 items-center">
                <UserCircle className="w-5 h-5" />
                <span>User Management</span>
              </div>
              {openMenu.user ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </div>
            {openMenu.user && (
              <ul className="ml-6 text-sm space-y-2 text-gray-600">
                <li
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => setActiveSubTab("add-user")}
                >
                  ➕ Add User
                </li>
                <li
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => setActiveSubTab("edit-user")}
                >
                  ✏️ Edit User
                </li>
                <li
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => setActiveSubTab("delete-user")}
                >
                  🗑️ Delete User
                </li>
              </ul>
            )}
          </div>

          {/* Logout */}
          <div
            onClick={handleLogout}
            className="mt-8 text-red-600 hover:text-red-800 cursor-pointer flex items-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <LayoutDashboard className="w-7 h-7 text-blue-600" />
              Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="md:hidden block bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
          {renderContent()}
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
