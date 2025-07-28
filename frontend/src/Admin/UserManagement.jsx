import React from "react";
import {
  Search,
  Filter,
  Plus,
  Trash2,
  Pencil,
  Download,
  User,
} from "lucide-react";

const userData = [
  {
    name: "John Smith",
    email: "john.smith@gmail.com",
    username: "jonny77",
    status: "Active",
    role: "Admin",
    joined: "March 12, 2023",
    lastActive: "1 minute ago",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Olivia Bennett",
    email: "ollyben@gmail.com",
    username: "olly659",
    status: "Inactive",
    role: "User",
    joined: "June 27, 2022",
    lastActive: "1 month ago",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  // ... Add more dummy users as needed
];

const statusColors = {
  Active: "bg-green-500",
  Inactive: "bg-gray-400",
  Banned: "bg-red-500",
  Pending: "bg-blue-900",
  Suspended: "bg-orange-400",
};

const UserManagement = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
        User Management
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Manage all users in one place. Control access, assign roles, and monitor activity.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
        <div className="flex gap-3 flex-wrap">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <select className="py-2 px-4 border rounded-lg">
            <option>Role</option>
            <option>Admin</option>
            <option>User</option>
            <option>Guest</option>
          </select>
          <select className="py-2 px-4 border rounded-lg">
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Banned</option>
          </select>
          <select className="py-2 px-4 border rounded-lg">
            <option>Date</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg">
            <Download size={16} />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
            <Plus size={16} />
            Add User
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow rounded-lg border">
        <table className="min-w-full table-auto text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-600 font-semibold">
            <tr>
              <th className="px-4 py-3">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3">Full Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Joined Date</th>
              <th className="px-4 py-3">Last Active</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  {user.name}
                </td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.username}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-white text-xs font-semibold px-2 py-1 rounded-full ${
                      statusColors[user.status] || "bg-gray-500"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3">{user.role}</td>
                <td className="px-4 py-3">{user.joined}</td>
                <td className="px-4 py-3">{user.lastActive}</td>
                <td className="px-4 py-3 flex gap-2">
                  <Pencil size={16} className="text-blue-600 cursor-pointer" />
                  <Trash2 size={16} className="text-red-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
