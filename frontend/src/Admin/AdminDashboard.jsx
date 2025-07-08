import React, { useState ,useEffect } from "react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);
  const [contentMenuOpen, setContentMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/";
  };

  useEffect(() => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (!admin || admin.role !== "admin") {
    window.location.href = "/admin/login";
  }
}, []);   

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <h1 className="text-xl font-bold">📊 Welcome to Dashboard</h1>;
      case "addUser":
        return <h1 className="text-xl font-bold">➕ Add User</h1>;
      case "editUser":
        return <h1 className="text-xl font-bold">✏️ Edit User</h1>;
      case "deleteUser":
        return <h1 className="text-xl font-bold">❌ Delete User</h1>;
      case "addRole":
        return <h1 className="text-xl font-bold">➕ Add Role</h1>;
      case "editRole":
        return <h1 className="text-xl font-bold">✏️ Edit Role</h1>;
      case "deleteRole":
        return <h1 className="text-xl font-bold">❌ Delete Role</h1>;
      case "addContent":
        return <h1 className="text-xl font-bold">➕ Add Content</h1>;
      case "editContent":
        return <h1 className="text-xl font-bold">✏️ Edit Content</h1>;
      case "deleteContent":
        return <h1 className="text-xl font-bold">❌ Delete Content</h1>;
      default:
        return <h1 className="text-xl font-bold">Welcome!</h1>;
    }
  };

  return (
    <>
      {/* Optional: Background Image */}
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgC0Fn1KABBcuGNP3DJxvxnUAb7N7s-nQHg&s"
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r shadow-md p-4 flex flex-col">
          <h2 className="text-blue-700 text-xl font-bold mb-6">Admin Panel</h2>

          {/* Dashboard */}
          <button
            onClick={() => setActiveTab("dashboard")}
            className="text-left hover:text-blue-600 mb-2"
          >
            📊 Dashboard
          </button>

          {/* User Management */}
          <div>
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex justify-between w-full hover:text-blue-600"
            >
              <span>👥 User Management</span>
              <span>{userMenuOpen ? "▲" : "▼"}</span>
            </button>
            {userMenuOpen && (
              <div className="ml-4 mt-2 space-y-1">
                <button
                  onClick={() => setActiveTab("addUser")}
                  className="block w-full text-left hover:text-blue-500"
                >
                  ➕ Add User
                </button>
                <button
                  onClick={() => setActiveTab("editUser")}
                  className="block w-full text-left hover:text-blue-500"
                >
                  ✏️ Edit User
                </button>
                <button
                  onClick={() => setActiveTab("deleteUser")}
                  className="block w-full text-left hover:text-blue-500"
                >
                  ❌ Delete User
                </button>
              </div>
            )}
          </div>

          {/* Role Management */}
          <div className="mt-4">
            <button
              onClick={() => setRoleMenuOpen(!roleMenuOpen)}
              className="flex justify-between w-full hover:text-blue-600"
            >
              <span>🛡️ Role Management</span>
              <span>{roleMenuOpen ? "▲" : "▼"}</span>
            </button>
            {roleMenuOpen && (
              <div className="ml-4 mt-2 space-y-1">
                <button
                  onClick={() => setActiveTab("addRole")}
                  className="block w-full text-left hover:text-blue-500"
                >
                  ➕ Add Role
                </button>
                <button
                  onClick={() => setActiveTab("editRole")}
                  className="block w-full text-left hover:text-blue-500"
                >
                  ✏️ Edit Role
                </button>
                <button
                  onClick={() => setActiveTab("deleteRole")}
                  className="block w-full text-left hover:text-blue-500"
                >
                  ❌ Delete Role
                </button>
              </div>
            )}
          </div>

          {/* Content Management */}
          <div className="mt-4">
            <button
              onClick={() => setContentMenuOpen(!contentMenuOpen)}
              className="flex justify-between w-full hover:text-blue-600"
            >
              <span>📝 Content Management</span>
              <span>{contentMenuOpen ? "▲" : "▼"}</span>
            </button>
            {contentMenuOpen && (
              <div className="ml-4 mt-2 space-y-1">
                <button
                  onClick={() => setActiveTab("addContent")}
                  className="block w-full text-left hover:text-blue-500"
                >
                  ➕ Add Content
                </button>
                <button
                  onClick={() => setActiveTab("editContent")}
                  className="block w-full text-left hover:text-blue-500"
                >
                  ✏️ Edit Content
                </button>
                <button
                  onClick={() => setActiveTab("deleteContent")}
                  className="block w-full text-left hover:text-blue-500"
                >
                  ❌ Delete Content
                </button>
              </div>
            )}
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="text-left text-red-600 hover:underline mt-auto"
          >
            ↩️ Logout
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">{renderContent()}</div>
      </div>
    </>
  );
};

export default AdminDashboard;
