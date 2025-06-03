import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SoftwareDevelopment = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const softwareServices = [
    "ERP Solutions",
    "Custom Application Development",
    "Application Management",
    "Migration & Re-engineering",
    "Performance Engineering",
    "Software Testing",
    "Software Maintenance & Support",
  ];

  const serviceRoutes = {
    "ERP Solutions": "/ErpSolutions",
    "Custom Application Development": "/customApplication",
    "Application Management": "/application-management",
    "Migration & Re-engineering": "/migration-reengineering",
    "Performance Engineering": "/performance-engineering",
    "Software Testing": "/software-testing",
    "Software Maintenance & Support": "/maintenance-support",
  };

  const handleServiceClick = (service) => {
    const route = serviceRoutes[service];
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-[95px]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-white shadow-md p-4">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center px-3 py-2 text-left font-semibold text-gray-900 hover:bg-gray-100 rounded-md"
          >
            Software Development
            <span>{open ? '▲' : '▼'}</span>
          </button>

          {open && (
            <ul className="ml-3 mt-2 space-y-2">
              {softwareServices.map((service, index) => (
                <li
                  key={index}
                  onClick={() => handleServiceClick(service)}
                  className="text-sm px-3 py-1 rounded-md cursor-pointer text-gray-800 hover:bg-gray-200"
                >
                  {service}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <p className="text-gray-500">Click on a service to learn more.</p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
