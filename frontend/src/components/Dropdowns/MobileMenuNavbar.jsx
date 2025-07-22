import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  FaUniversity,
  FaHospitalAlt,
  FaBuilding,
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaVideo,
  FaMicrophoneAlt,
  FaShieldAlt,
  FaPaintBrush,
  FaLandmark,
  FaBroadcastTower,
  FaFlask,
  FaBoxOpen,
  FaIndustry,
  FaStore,
  
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const MobileMenuNavbar = ({ openSubMenu, toggleSubMenu }) => {
  const navigate = useNavigate();

  return (
    <div className="md:hidden bg-white text-black px-6 py-4 space-y-4 shadow-lg z-50">
      <ul className="space-y-3 font-medium border-t">
        <li className="cursor-pointer hover:text-blue-600 border-b pb-2">
          WHO WE ARE
        </li>

          {/* OUR SERVICES */}
        <li className="border-b pb-2">
          <div
            className="flex justify-between items-center cursor-pointer hover:text-blue-600"
            onClick={() => toggleSubMenu("services")}
          >
            <span>WHAT WE DO</span>
            <MdKeyboardArrowDown />
          </div>

          {openSubMenu.services && (
            <ul className="ml-4 mt-3 space-y-4 text-sm text-gray-800 font-normal">
              <li
                onClick={() => navigate("/SoftwareDevelopment")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaUniversity className="text-red-600" />
                  Software Development
                </div>
              </li>

              <li
                onClick={() =>
                  navigate("/DevelopmentHosting")
                }
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaHospitalAlt className="text-green-600" />
                  Development, Hosting & Promotion
                </div>
              </li>

              <li
                onClick={() => navigate("/HardwareNetworking")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaBuilding className="text-blue-600" />
                Hardware & Networking
                </div>
              </li>

              <li
                onClick={() => navigate("/MultimediaAnimation")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaBook className="text-purple-600" />
                  Multimedia & Animation  
                </div>
              </li>

              <li
                onClick={() => navigate("/DigitalMarketing")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaChalkboardTeacher className="text-orange-500" />
                 Digital marketing
                </div>
              </li>

              <li
                onClick={() => navigate("/DataCentersDevelopment")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaVideo className="text-cyan-600" />
                  Data Centers Development
                </div>
              </li>

              <li
                onClick={() => navigate("/Elearning")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaMicrophoneAlt className="text-pink-600" />
                  E-Learning
                </div>
              </li>

              <li
                onClick={() => navigate("/VideoConferencing")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaShieldAlt className="text-gray-600" />
                 Video Conferencing
                </div>
              </li>

              <li
                onClick={() => navigate("/SecuritySurvillance")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaPaintBrush className="text-fuchsia-600" />
                Security & Surveillance
                </div>
              </li>

              <li
                onClick={() => navigate("/DataDigitization")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaLandmark className="text-red-700" />
                  Data Digitization
                </div>
              </li>

              <li
                onClick={() => navigate("/RemoteInfrastructure")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaBroadcastTower className="text-indigo-600" />
                  Remote Infrastructure
                </div>
              </li>
            </ul>
          )}
        </li>
        {/* OUR PRODUCTS */}
        <li className="border-b pb-2">
          <div
            className="flex justify-between items-center cursor-pointer hover:text-blue-600"
            onClick={() => toggleSubMenu("products")}
          >
            <span>OUR PRODUCTS</span>
            <MdKeyboardArrowDown />
          </div>

          {openSubMenu.products && (
            <ul className="ml-4 mt-3 space-y-4 text-sm text-gray-800 font-normal">
              {/* Education Domain */}
              <li>
                <div
                  className="flex items-center justify-between cursor-pointer text-base border-b pb-2 hover:text-blue-600"
                  onClick={() => toggleSubMenu("education")}
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <FaUniversity className="text-red-600" />
                    Education Domain
                  </span>
                  <MdKeyboardArrowDown />
                </div>
                {openSubMenu.education && (
                  <ul className="ml-6 mt-2 space-y-1 text-gray-700 border-l border-gray-200 pl-3">
                    {[
                      {
                        name: "University Automation Software",
                        path: "/products/university-automation",
                      },
                      {
                        name: "Engineering College Management",
                        path: "/products/engineering-college",
                      },
                      {
                        name: "College/Institute Management",
                        path: "/products/college-management",
                      },
                      {
                        name: "School Management System",
                        path: "/products/school-management",
                      },
                      {
                        name: "Online Examination System",
                        path: "/products/online-exam",
                      },
                      {
                        name: "Entrance Exam System",
                        path: "/products/entrance-exam",
                      },
                      {
                        name: "Smart Learning (SLCMS)",
                        path: "/products/slcms",
                      },
                      {
                        name: "Library Management System",
                        path: "/products/library-management",
                      },
                    ].map((item) => (
                      <li
                        key={item.name}
                        onClick={() => navigate(item.path)}
                        className="cursor-pointer hover:underline hover:text-blue-600"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Medical Domain */}
              <li>
                <div
                  className="flex items-center justify-between cursor-pointer text-base border-b pb-2 hover:text-blue-600"
                  onClick={() => toggleSubMenu("medical")}
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <FaHospitalAlt className="text-green-600" />
                    Medical Domain
                  </span>
                  <MdKeyboardArrowDown />
                </div>
                {openSubMenu.medical && (
                  <ul className="ml-6 mt-2 space-y-1 text-gray-700 border-l border-gray-200 pl-3">
                    {[
                      {
                        name: "Hospital Management System",
                        path: "/products/hms",
                      },
                      {
                        name: "Laboratory Information System",
                        path: "/products/lis",
                      },
                      {
                        name: "Radiology Information System",
                        path: "/products/ris",
                      },
                    ].map((item) => (
                      <li
                        key={item.name}
                        onClick={() => navigate(item.path)}
                        className="cursor-pointer hover:underline hover:text-blue-600"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Corporate Domain */}
              <li>
                <div
                  className="flex items-center justify-between cursor-pointer text-base border-b pb-2  hover:text-blue-600"
                  onClick={() => toggleSubMenu("corporate")}
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <FaBuilding className="text-blue-600" />
                    Corporate Domain
                  </span>
                  <MdKeyboardArrowDown />
                </div>
                {openSubMenu.corporate && (
                  <ul className="ml-6 mt-2 space-y-1 text-gray-700 border-l border-gray-200 pl-3">
                    {[
                      {
                        name: "Customer Relationship Management",
                        path: "/products/crm",
                      },
                      {
                        name: "Enterprise Resource Planning",
                        path: "/products/erp",
                      },
                      { name: "HR Management System", path: "/products/hrms" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        onClick={() => navigate(item.path)}
                        className="cursor-pointer hover:underline hover:text-blue-600"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Public Sector */}
              <li>
                <div
                  className="flex items-center justify-between cursor-pointer text-base border-b pb-2 hover:text-blue-600"
                  onClick={() => toggleSubMenu("public")}
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <FaUsers className="text-purple-600" />
                    Public Sector
                  </span>
                  <MdKeyboardArrowDown />
                </div>
                {openSubMenu.public && (
                  <ul className="ml-6 mt-2 space-y-1 text-gray-700 border-l border-gray-200 pl-3">
                    {[
                      {
                        name: "e-Governance Solutions",
                        path: "/products/e-governance",
                      },
                      {
                        name: "Public Works Monitoring",
                        path: "/products/public-works",
                      },
                    ].map((item) => (
                      <li
                        key={item.name}
                        onClick={() => navigate(item.path)}
                        className="cursor-pointer hover:underline hover:text-blue-600"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        {/* OUR SOLUTION */}

        <li className="border-b pb-2">
          <div
            className="flex justify-between items-center cursor-pointer hover:text-blue-600"
            onClick={() => toggleSubMenu("solutions")}
          >
            <span>SOLUTIONS</span>
            <MdKeyboardArrowDown />
          </div>

          {openSubMenu.solutions && (
            <ul className="ml-4 mt-3 space-y-4 text-sm text-gray-800 font-normal">
              <li
                onClick={() => navigate("/solutions/university-digitalization")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaUniversity className="text-red-600" />
                  University Digitalization
                </div>
              </li>

              <li
                onClick={() =>
                  navigate("/solutions/medical-college-digitalization")
                }
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaHospitalAlt className="text-green-600" />
                  Medical College Digitalization
                </div>
              </li>

              <li
                onClick={() => navigate("/solutions/mrtion-digital-education")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaBuilding className="text-blue-600" />
                  MRTiON Digital Education
                </div>
              </li>

              <li
                onClick={() => navigate("/solutions/library-digitalization")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaBook className="text-purple-600" />
                  Library Digitalization
                </div>
              </li>

              <li
                onClick={() => navigate("/solutions/smart-learning")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaChalkboardTeacher className="text-orange-500" />
                  Smart Learning
                </div>
              </li>

              <li
                onClick={() => navigate("/solutions/conference-room")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaVideo className="text-cyan-600" />
                  Conference Room Solutions
                </div>
              </li>

              <li
                onClick={() => navigate("/solutions/auditorium")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaMicrophoneAlt className="text-pink-600" />
                  Auditorium Solutions
                </div>
              </li>

              <li
                onClick={() => navigate("/solutions/security-surveillance")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaShieldAlt className="text-gray-600" />
                  Security & Surveillance
                </div>
              </li>

              <li
                onClick={() => navigate("/solutions/multimedia-animation")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaPaintBrush className="text-fuchsia-600" />
                  Multimedia & Animation
                </div>
              </li>

              <li
                onClick={() => navigate("/solutions/police-automation")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaLandmark className="text-red-700" />
                  Police Automation
                </div>
              </li>

              <li
                onClick={() => navigate("/solutions/audio-video-broadcasting")}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
                  <FaBroadcastTower className="text-indigo-600" />
                  Audio Video Broadcasting
                </div>
              </li>
            </ul>
          )}
        </li>
          {/* OUR INDUSTRIES */}
      <li className="border-b pb-2">
  <div
    className="flex justify-between items-center cursor-pointer hover:text-blue-600"
    onClick={() => toggleSubMenu("industries")}
  >
    <span>INDUSTRIES</span>
    <MdKeyboardArrowDown />
  </div>

  {openSubMenu.industries && (
    <ul className="ml-4 mt-3 space-y-4 text-sm text-gray-800 font-normal">
      <li
        onClick={() => navigate("/Education")}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
          <FaUniversity className="text-red-600" />
          Education
        </div>
      </li>

      <li
        onClick={() => navigate("/Healthcare")}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
          <FaHospitalAlt className="text-green-600" />
          Healthcare
        </div>
      </li>

      <li
        onClick={() => navigate("/Banking")}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
          <FaLandmark className="text-blue-600" />
          Banking
        </div>
      </li>

      <li
        onClick={() => navigate("/Manufacturing")}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
          <FaIndustry className="text-purple-600" />
          Manufacturing
        </div>
      </li>

      <li
        onClick={() => navigate("/Retail")}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
          <FaStore className="text-orange-500" />
          Retail
        </div>
      </li>

      <li
        onClick={() => navigate("/LifeSciences")}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
          <FaFlask className="text-cyan-600" />
          Life Sciences
        </div>
      </li>

      <li
        onClick={() => navigate("/ConsumerGoods")}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-2 font-semibold text-base border-b pb-2 hover:text-blue-600">
          <FaBoxOpen className="text-pink-600" />
          Consumer Goods
        </div>
      </li>
    </ul>
  )}
</li>
        <li className="cursor-pointer hover:text-blue-600 border-b pb-2"
        
          onClick={() => navigate("/blog")}
        >
          BLOGS

          
        </li>
        <li className="cursor-pointer hover:text-blue-600 border-b pb-2"
        
        
          onClick={() => navigate("/career")}
        > 
          CAREER
        </li>
        <li className="cursor-pointer hover:text-blue-600 border-b pb-2"
        
          onClick={() => navigate("/contact")}
        > 
          CONTACT US
        </li>
      </ul>

      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md font-semibold transition duration-200">
        GET A FREE QUOTE
      </button>
    </div>
  );
};

export default MobileMenuNavbar;
