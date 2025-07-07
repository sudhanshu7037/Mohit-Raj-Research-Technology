import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUniversity, FaHospital, FaBuilding, FaUsers } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProductsDropdown = ({ openDropdown, setOpenDropdown }) => {
  const isOpen = openDropdown === "products";
  const [activeDomain, setActiveDomain] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      setActiveDomain(null);
    }
  }, [isOpen]);

  const categories = [
    {
      icon: <FaUniversity className="text-2xl text-red-700" />,
      title: "Education Domain",
      items: [
        "University Automation Software",
        "Engineering College Management and Information System",
        "College/Institute Management Systems",
        "School Management System",
        "Online Examination Management System",
        "Entrance Exam Management and Information System",
        "Smart Learning & Content Management System (SLCMS)",
        "Library Management System",
      ],
    },
    {
      icon: <FaHospital className="text-2xl text-red-700" />,
      title: "Medical Domain",
      items: [
        "Medical College Management and Information System.",
        "Hospital Management & Information system.",
        "E-Hospital Management",
        "E-clinic Management",
        "Bioinformatics Management and Information System",
      ],
    },
    {
      icon: <FaBuilding className="text-2xl text-red-700" />,
      title: "Corporate Domain",
      items: [
        "E-Company System",
        "E- Business Management",
        "CRM Software",
        "Account Management System (Trulymax-S)",
        "Account Management System (Trulymax-M)",
        "Finance Account Management System (Trulymax-L)",
        "Human Resource Management System",
        "Inventory Management System",
        "Purchase Management System",
        "E-Banking Management System",
      ],
    },
    {
      icon: <FaUsers className="text-2xl text-red-700" />,
      title: "Public & Mixed Domain",
      items: [
        "Police Management System",
        "E-Govt.Office Management System",
        "Credit Cooperative Society Management Information System",
      ],
    },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown("products");
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 1000); // Delay of 1 second
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-md font-semibold cursor-pointer hover:text-yellow-500 flex items-center gap-1">
        OUR PRODUCTS
        <MdKeyboardArrowDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="fixed left-1/2 top-[120px] transform -translate-x-1/2 w-[80vw] bg-[#fdf1f4] shadow-xl z-50 rounded-md px-6 py-8 border border-red-200">
          <div className="flex justify-center">
            {/* Left Sidebar */}
            <div className="w-1/4 bg-[#fdeaea] p-6 rounded-md shadow-inner">
              <h2 className="text-xl font-bold text-red-800 mb-4">Our products</h2>
              <p className="text-sm text-black mb-6">
                MRTPL offers a variety of software solutions tailored to different sectors to enhance automation and efficiency.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition">
                Contact Us
              </button>
            </div>

            {/* Right Content */}
            <div className="flex w-3/4 px-6 justify-center">
              {/* Categories */}
              <div className="w-1/3 space-y-4 pr-4 border-r border-red-300 bg-blue-100 rounded-md p-2">
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-all ${
                      activeDomain === idx ? "bg-white shadow-lg" : "hover:bg-red-100"
                    }`}
                    onMouseEnter={() => setActiveDomain(idx)}
                  >
                    {cat.icon}
                    <h3 className="text-sm font-bold text-blue-700">{cat.title}</h3>
                  </div>
                ))}
              </div>

              {/* Subdomain Items */}
              <div className="w-2/3 pl-6">
                {activeDomain !== null && (
                  <ul className="space-y-2">
                    {categories[activeDomain].items.map((item, idx) => (
                      <li
                        key={idx}
                        className="bg-white rounded-md px-4 py-2 text-sm text-gray-800 hover:text-orange-600 hover:underline hover:underline-offset-2 hover:decoration-blue-600 transition cursor-pointer"
                      >
                        {activeDomain === 0 ? (
                          <Link to="/education" state={{ subdomain: item }}>
                            {item}
                          </Link>
                        ) : (
                          <span>{item}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDropdown;
