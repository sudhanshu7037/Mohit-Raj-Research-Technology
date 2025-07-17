// CorporateCompanySystem.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import {
  FaUsersCog, FaChartLine, FaBuilding, FaUserTie, FaFileAlt, FaClipboardList, FaLaptopCode,
  FaHandshake, FaCalendarCheck, FaMoneyBillWave, FaTasks, FaShieldAlt, FaServer
} from 'react-icons/fa';

const features = [
  {
    icon: <FaBuilding size={50} className="text-indigo-600" />,
    title: "Corporate Structure Management",
    points: [
      "Define roles, departments, and reporting hierarchy",
      "Support multi-branch and subsidiary handling",
    ],
  },
  {
    icon: <FaUsersCog size={50} className="text-indigo-600" />,
    title: "Human Resource Management",
    points: [
      "End-to-end employee lifecycle automation",
      "Leave, payroll, performance, and attendance management",
    ],
  },
  {
    icon: <FaMoneyBillWave size={50} className="text-indigo-600" />,
    title: "Finance & Billing System",
    points: [
      "Handle accounts, taxes, invoicing and budgeting",
      "Role-based approvals and real-time financial tracking",
    ],
  },
];

const functionality = [
  {
    icon: <FaUserTie />,
    title: "Executive Dashboard",
    points: [
      "Centralized business overview",
      "Key metrics for decision-making",
    ],
  },
  {
    icon: <FaChartLine />,
    title: "Business Intelligence",
    points: [
      "Analytics & performance KPIs",
      "Custom dashboards & forecasting",
    ],
  },
  {
    icon: <FaTasks />,
    title: "Project & Task Tracking",
    points: [
      "Manage timelines, teams & deliverables",
      "Monitor task status and resource usage",
    ],
  },
  {
    icon: <FaCalendarCheck />,
    title: "Workforce Attendance",
    points: [
      "Real-time clock-in/out tracking",
      "Biometric or app-based attendance",
    ],
  },
  {
    icon: <FaLaptopCode />,
    title: "IT Asset & Inventory",
    points: [
      "Track software/hardware across departments",
      "Assign devices, licenses and support tickets",
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Compliance",
    points: [
      "Audit logs, data policies and access control",
      "Support ISO, GDPR, and IT compliance",
    ],
  },
  {
    icon: <FaClipboardList />,
    title: "Workflow Automation",
    points: [
      "Digital forms, approvals and escalation rules",
      "Reduce manual errors and bottlenecks",
    ],
  },
];

const CorporateCompanySystem = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src="https://www.shutterstock.com/image-photo/business-analytics-dashboard-600nw-2132760385.jpg"
          alt="Corporate Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold">
              Corporate Management ERP System
            </h1>
            <p className="text-lg md:text-xl text-green-400 font-semibold mt-4">
              Smart, Modular & Scalable Solution for Business Operations
            </p>
            <p className="text-gray-200 mt-3">
              Align people, process, and data under one centralized platform
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              SCHEDULE A DEMO
            </button>
          </div>
        </div>
      </div>

      {/* Section 1: Functionalities */}
      <section className="bg-white px-4 md:px-12 lg:px-20 py-16 text-gray-800 mt-20">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Core Modules for Corporate Efficiency
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg">
            Our enterprise system helps organizations centralize, simplify, and scale with digital-first operations across all departments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto bg-blue-100">
          {functionality.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group hover:bg-gradient-to-r hover:from-blue-100 hover:via-red-100 hover:to-green-100 hover:text-white"
            >
              <div className="flex items-center gap-3 mb-3 text-indigo-600 text-3xl group-hover:text-indigo-800">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-800">
                  {feature.title}
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 pl-1">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Empowerment */}
      <section className="bg-gradient-to-br from-blue-100 via-red-100 to-green-100 py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Driving Digital Excellence Across Enterprises
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-2">
            We empower businesses with integrated tools to manage operations, enhance collaboration,
            and unlock productivity using smart automation and real-time intelligence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-md hover:bg-blue-900 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-4xl text-indigo-600 group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2 group-hover:text-white">
                {item.title}
              </h3>
              <ul className="mt-2 text-gray-600 text-sm space-y-2 group-hover:text-gray-200">
                {item.points.map((point, i) => (
                  <li key={i} className="list-disc list-inside">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CorporateCompanySystem;
