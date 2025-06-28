import React, {  useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  UserCircle,
  FileText,
  Briefcase,
  Inbox,
  Download,
  LogOut,
  LayoutDashboard,
  Menu,
  X,
} from "lucide-react";
import ContactPage from "./ContactPage";

const AdminDashboard = () => {
  const [openMenu, setOpenMenu] = useState({});
  const [activeSubTab, setActiveSubTab] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("userInfo");
    window.location.href = "/admin/login";
  };

  const toggleMenu = (key) => {
    setOpenMenu((prev) => ({ ...prev, [key]: !prev[key] }));
  };

 

  const renderContent = () => {
    switch (activeSubTab) {
      case "add-blog":
        return <h2 className="text-2xl">📝 Add Blog (to be implemented)</h2>;
      case "view-jobs":
        return <h2 className="text-2xl">💼 View Jobs (to be implemented)</h2>;
      case "view-applications":
        return (
          <h2 className="text-2xl">📩 Job Applications (to be implemented)</h2>
        );
      case "view-contacts":
        return <ContactPage />
      case "catalogue":
        return (
          <h2 className="text-2xl">📦 Product Catalogue (to be implemented)</h2>
        );
      default:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to Admin Dashboard
            </h2>
            <p className="text-gray-600">
              Select a submenu from sidebar to manage content.
            </p>
          </div>
        );
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

      {/* Header for Mobile */}
      <div className="flex md:hidden justify-between items-center p-4 bg-white shadow">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-72 bg-white shadow-md p-6`}
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Admin Panel</h2>

          {/* Blog Management */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer text-gray-800 hover:text-blue-600 mb-2"
              onClick={() => toggleMenu("blog")}
            >
              <div className="flex gap-2 items-center">
                <FileText className="w-5 h-5" />
                <span>Blog Management</span>
              </div>
              {openMenu.blog ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </div>
            {openMenu.blog && (
              <ul className="ml-6 text-sm space-y-2 text-gray-600">
                <li
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => setActiveSubTab("add-blog")}
                >
                  ➕ Add Blog
                </li>
              </ul>
            )}
          </div>

          {/* Career / Jobs */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer text-gray-800 hover:text-blue-600 mb-2 mt-4"
              onClick={() => toggleMenu("jobs")}
            >
              <div className="flex gap-2 items-center">
                <Briefcase className="w-5 h-5" />
                <span>Careers</span>
              </div>
              {openMenu.jobs ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </div>
            {openMenu.jobs && (
              <ul className="ml-6 text-sm space-y-2 text-gray-600">
                <li
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => setActiveSubTab("view-jobs")}
                >
                  📋 View Jobs
                </li>
                <li
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => setActiveSubTab("view-applications")}
                >
                  📩 Applications
                </li>
              </ul>
            )}
          </div>

          {/* Contact Messages */}
          <div
            className="cursor-pointer flex gap-2 items-center mt-4 text-gray-800 hover:text-blue-600"
            onClick={() => setActiveSubTab("view-contacts")}
          >
            <Inbox className="w-5 h-5" />
            <span>Contact Messages</span>
          </div>

          {/* Catalogue */}
          <div
            className="cursor-pointer flex gap-2 items-center mt-4 text-gray-800 hover:text-blue-600"
            onClick={() => setActiveSubTab("catalogue")}
          >
            <Download className="w-5 h-5" />
            <span>Product Catalogue</span>
          </div>

          {/* Sidebar Logout (desktop) */}
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
          </div>
          {renderContent()}
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
