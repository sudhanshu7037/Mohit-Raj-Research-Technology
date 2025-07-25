import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLaptopCode,
  FaNetworkWired,
  FaFilm,
  FaChartLine,
  FaServer,
  FaBook,
  FaVideo,
  FaLock,
  FaDatabase,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const ServicesDropdown = ({ openDropdown, setOpenDropdown }) => {
  const isOpen = openDropdown === "services";
  const [activeService, setActiveService] = useState(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown("services");
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 1000); // 1 seconds delay
  };

  const serviceCategories = [
    {
      icon: <FaLaptopCode className="text-xl text-red-700" />,
      title: "Software Development",
      path: "/SoftwareDevelopment",
      items: [
        "Software Consulting & Transformation",
        "ERP Software Development",
        "Custom Software Development",
        "E-Commerce Platform Development",
        "Web Application Development",
        "Mobile Application Development",
        "Software Testing & QA",
        "Performance Engineering",
        "Migration & Re-engineering",
        "Software Maintenance & Support",
      ],
    },
    {
      icon: <FaNetworkWired className="text-xl text-red-700" />,
      title: "Development, Hosting & Promotion",
      path: "/DevelopmentHosting",
      items: [
        "Web Development Services",
        "Cloud Hosting Solutions",
        "Website Promotion & SEO",
        "Server Management",
        "Content Delivery Network (CDN) Integration",
        "Domain Registration & Management",
        "E-Marketing Campaigns",
        "Website Maintenance",
      ],
    },
    {
      icon: <FaNetworkWired className="text-xl text-red-700" />,
      title: "Hardware & Networking",
      path: "/HardwareNetworking",
      items: [
        "Local Area Network (LANs)",
        "Wide Area Network (WAN)",
        "Wireless Networking",
        "Corporate Internet",
        "Structured Cabling & Rack Setup",
        "System Integration",
        "Network Security Configuration",
        "Wi-Fi Installation & Optimization",
        "Router, Switch & Firewall Configuration",
      ],
    },
    {
      icon: <FaFilm className="text-xl text-red-700" />,
      title: "Multimedia & Animation",
      path: "/MultimediaAnimation",
      items: [
        "Multimedia DVD / CDROM",
        "Multimedia Presentation",
        "Interactive Demo",
        "Interactive Flash Development",
        "DVD Authoring",
        "CBT Development",
        "Creative Design Services",
        "Video Production",
        "3D Animation",
        "3D Modeling",
        "Broadcast Design",
        "Virtual Reality",
        "Special Effects",
        "User Interface (UI) Design",
        "Interactive Web Design",
        "Graphics Design",
        "Brochure Design",
        "Corporate Identity",
        "Design Print Media",
      ],
    },
    {
      icon: <FaFilm className="text-xl text-red-700" />,
      title: "Digital marketing",
      path: "/DigitalMarketing",
      items: [
        " Search Engine Optimization (SEO)",
        "Pay-Per-Click Advertising (PPC)",
        "Email-Marketing",
        "Content Marketing:-",
        "Online Reputation Management (ORM)",
        "Influencer Marketing",
        
        
      ],
    },
    {
      icon: <FaServer className="text-xl text-red-700" />,
      title: "Data Centers Development",
      path: "/DataCentersDevelopment",
      items: [
        "Web Servers",
        "Application Servers",
        "Database Server",
        "Staging Server",
        "Backup Server",
        "Directory Server, DNS & DHCP Server",
        "Firewall Server",
        "Management Server",
        "Helpdesk System",
        "Intrusion Detection Server",
        "Proxy Server",
      ],
    },
    {
      icon: <FaBook className="text-xl text-red-700" />,
      title: "E-Learning",
      path: "/Elearning",
      items: [
        "E-Learning Consultancy",
        "E-Learning Lectures Development",
        "Content Development (Multilingual)",
        "Instructional Designing",
        "WBT development",
        "CBT development",
        "Online test",
        "Media production",
        "Scenario based learning",
        "Simulation based CBT/WBT Development",
      ],
    },
    {
      icon: <FaVideo className="text-xl text-red-700" />,
      title: "Video Conferencing",
      path: "/VideoConferencing",
      items: [
        "Reservation Based Video Conference",
        "Reservation Less Video Conference",
        "Point-To-Point service",
        "Multi-Point Service",
        "Point-To-Multi-Point Service",
        "Telepresence Systems",
        "Integrated VC Rooms",
        "Set-top or appliance VC Systems",
      ],
    },
    {
      icon: <FaLock className="text-xl text-red-700" />,
      title: "Security & Surveillance",
      path: "/SecuritySurvillance",
      items: [
        "Banking",
        "Education",
        "Gaming",
        "Government",
        "Healthcare",
        "Hotel & Leisure",
        "Oil and Gas",
        "Retail",
        "Transportation",
        "Security Gates",
        "Car Park Barriers",
        "Access Control Systems",
        "Door Systems",
        "Security Shutters",
      ],
    },
    {
      icon: <FaDatabase className="text-xl text-red-700" />,
      title: "Data Digitization",
      path: "/DataDigitization",
      items: [
        " OMR/OCR Sheets Processing",
        "Data Scanning and  Indexing services",
        "Data Conversion Services",
        "Data Editing",
        ".Data Entry Services",
        "Data Processing Services",
        ".Data transcription Services",
        "Data Digitization Services",
        " Form Filling Services",
        "Scanning Services",
      ],
    },
    {
      icon: <FaDatabase className="text-xl text-red-700" />,
      title: "Remote Infrastructure",
      path: "/RemoteInfrastructure",
      items: [
        "Remote Monitoring",
        "Remote Infrastructure Management",
        "Remote Operations",
      ],
    },
  ];

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="text-md font-semibold cursor-pointer hover:text-yellow-500 flex items-center gap-1">
        WHAT WE DO
        <MdKeyboardArrowDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {isOpen && (
        <div className="fixed left-1/2 top-[120px] transform -translate-x-1/2 w-[90vw] md:w-[80vw] bg-[#fdf1f4] shadow-xl z-50 rounded-md px-4 py-6 border border-red-200 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/4 bg-[#fbeaec] p-4 rounded-md shadow-inner">
              <h2 className="text-xl font-bold text-red-800 mb-4">Our Services</h2>
              <p className="text-sm text-black mb-6">
                MRTPL provides a wide range of IT services to meet diverse business needs.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition">
                Contact Us
              </button>
            </div>

            <div className="lg:w-3/4 flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3 space-y-2 border-r border-red-300 bg-blue-100 rounded-md p-2">
                {serviceCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-all text-blue-800 text-sm font-semibold underline-offset-4 hover:underline decoration-2 decoration-blue-600 ${
                      activeService === idx ? "bg-white shadow-md underline" : "hover:bg-red-100"
                    }`}
                    onMouseEnter={() => setActiveService(idx)}
                    onClick={() => navigate(cat.path)}
                  >
                    {cat.icon}
                    <span>{cat.title}</span>
                  </div>
                ))}
              </div>

              <div className="md:w-2/3 px-4">
                {activeService !== null && (
                  <ul className="space-y-2">
                    {serviceCategories[activeService].items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-white rounded px-3 py-2 text-sm text-gray-800 hover:text-orange-600 transition cursor-pointer"
                      >
                        {item}
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

export default ServicesDropdown;
