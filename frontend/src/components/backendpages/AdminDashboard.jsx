import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/admin/login";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border-l-4 border-blue-500 shadow p-4 rounded">
          <h2 className="text-xl font-semibold">Job Applications</h2>
          <p className="text-gray-600">View and manage received job applications.</p>
        </div>

        <div className="bg-white border-l-4 border-green-500 shadow p-4 rounded">
          <h2 className="text-xl font-semibold">Contact Messages</h2>
          <p className="text-gray-600">People who contacted your company.</p>
        </div>

        <div className="bg-white border-l-4 border-yellow-500 shadow p-4 rounded">
          <h2 className="text-xl font-semibold">Blog Posts</h2>
          <p className="text-gray-600">Manage blog content for the website.</p>
        </div>

        <div className="bg-white border-l-4 border-purple-500 shadow p-4 rounded">
          <h2 className="text-xl font-semibold">Download Catalogues</h2>
          <p className="text-gray-600">Upload/download solution catalogues.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
