import React, { useState } from 'react';

const SoftwareDevelopment = () => {
  const [open, setOpen] = useState(true); // Toggle sidebar
  const [activeService, setActiveService] = useState(null); // Selected service

  const softwareServices = [
    "Domain name Registration",
    "Custom Application Development",
    "Application Management",
    "Migration & Re-engineering",
    "Performance Engineering",
    "Software Testing",
    "Software Maintenance & Support",
  ];

  const serviceDetails = {
    
  

    "ERP Solutions": "Our ERP solutions integrate core business processes to improve efficiency and decision-making.",
    "Custom Application Development": "We build tailor-made applications based on your unique business needs and goals.",
    "Application Management": "We manage your applications to ensure peak performance, availability, and scalability.",
    "Migration & Re-engineering": "We help modernize legacy systems through smart migration and re-engineering.",
    "Performance Engineering": "Optimize system performance through our testing, tuning, and monitoring services.",
    "Software Testing": "Ensure software quality and reliability with our automated and manual testing services.",
    "Software Maintenance & Support": "Ongoing support and maintenance to keep your software secure and updated.",
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
            Development, Hosting & Promotion of Websites
            <span>{open ? '▲' : '▼'}</span>
          </button>

          {open && (
            <ul className="ml-3 mt-2 space-y-2">
              {softwareServices.map((service, index) => (
                <li
                  key={index}
                  onClick={() => setActiveService(service)}
                  className={`text-sm px-3 py-1 rounded-md cursor-pointer ${
                    activeService === service
                      ? 'bg-blue-100 text-blue-800 font-medium'
                      : 'text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {service}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {activeService || "Welcome to Software Services"}
          </h1> */}
          <p className="text-gray-600 text-lg">
            {activeService ? serviceDetails[activeService] :""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;    