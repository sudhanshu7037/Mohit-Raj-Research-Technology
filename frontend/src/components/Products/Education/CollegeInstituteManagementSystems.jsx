// CollegeInstituteManagement.jsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


import {
  FaUserTie, FaUserCheck, FaUserEdit, FaUserShield, FaClipboardList, FaMoneyCheckAlt, FaBalanceScale,
  FaBuilding, FaUniversity, FaUsersCog, FaChalkboardTeacher, FaCalendarCheck, FaFileInvoice,
  FaFileAlt, FaFileSignature, FaCogs, FaBook, FaBox, FaTools, FaMailBulk,FaFlask,FaHotel, FaAddressCard, FaEnvelopeOpenText,FaUserGraduate
} from "react-icons/fa";

const features = [
  {
    icon: <FaUniversity size={50} className="text-indigo-600" />,
    title: "College Management",
    points: [
      "Streamlines day-to-day academic and administrative processes",
      "Course management, eligibility criteria, and department handling",
    ],
  },
  {
    icon: <FaUserGraduate size={50} className="text-indigo-600" />,
    title: "Student Management",
    points: [
      "Digital lifecycle tracking from admission to graduation",
      "Online forms, records, verification, and results",
    ],
  },
  {
    icon: <FaChalkboardTeacher size={50} className="text-indigo-600" />,
    title: "Faculty Management",
    points: [
      "Automated hiring, task management, and teaching records",
      "Performance tracking and digital documentation",
    ],
  },
];

const functionality = [
  {
    icon: <FaUserTie />,
    title: "Principal Office Management",
    points: [
      "Digitally manage office workflow and approvals",
      "Supports scheduling, document handling, and reports",
    ],
  },
  {
    icon: <FaUserCheck />,
    title: "Admission Process",
    points: [
      "End-to-end admission system",
      "Track applications, documents, and fee payments",
    ],
  },
  {
    icon: <FaClipboardList />,
    title: "Examination & Result Management",
    points: [
      "Plan exams, create hall tickets and evaluate results",
      "Auto-generate marksheets and grade reports",
    ],
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Finance & Fee Management",
    points: [
      "Digitalize fee collection, approvals, and budgeting",
      "Automate receipts, refunds, and finance reports",
    ],
  },
  {
    icon: <FaCalendarCheck />,
    title: "Attendance & Leave",
    points: [
      "Track faculty and student attendance",
      "Apply, approve, and manage leaves online",
    ],
  },
  {
    icon: <FaBuilding />,
    title: "Facility & Infrastructure",
    points: [
      "Manage buildings, classrooms, labs, and assets",
      "Schedule maintenance and optimize usage",
    ],
  },
];

const CollegeInstituteManagement = () => {
  return (
    <>
      <div className="">
        <img
          src="https://www.shutterstock.com/image-photo/man-look-dashboard-graphs-charts-600nw-2440357647.jpg"
          alt="College Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              College & Institute Management ERP Software
            </h1>
            <p className="text-lg md:text-xl text-green-400 font-semibold mt-4">
              Robust & Centralized Platform to Digitize Your Campus Operations
            </p>
            <p className="text-gray-200 mt-3">
              Enhance productivity, compliance, and student outcomes
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>

      {/* Section 1: Functionalities */}
      <section className="bg-white px-4 md:px-12 lg:px-20 py-16 text-gray-800 mt-20">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Modules & Functionalities for Colleges & Institutes
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg">
            Our ERP platform is purpose-built for educational institutions to automate workflows, minimize manual efforts,
            and create an ecosystem of transparency, accountability, and efficiency.
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
            How We Help Colleges Scale Smartly
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-2">
            Mohitraj Research Tech Pvt. Ltd. offers intelligent campus management platforms to help colleges centralize operations,
            reduce paperwork, and improve decision-making through real-time dashboards and reports.
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

      {/* Additional sections like Banner, Why Choose Us, Product Slider, Benefits, Call to Action can be added below as needed */}
        {/* Background Image */}
        <img
          src="https://images.careerindia.com/college-photos/1173/college-campus-main-entrance_1493198013.jpg"
          alt="University Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              College Institute Management System
            </h1>
            <p className="text-lg md:text-xl text-green-400 font-basis mt-4">
              Robust, All-Inclusive & Scalable ERP Solution for Streamlining Universities
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Enables flawless management of all academic and non-academic activities
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
     
    </>
  );
};

export default CollegeInstituteManagement;
