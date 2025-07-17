import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import {
  FaCalendarAlt, FaCheckCircle, FaClipboardList, FaClipboardCheck,
  FaLaptopCode, FaUserGraduate, FaLock, FaFileSignature, FaChartBar, FaUsersCog
} from 'react-icons/fa';

const entranceFeatures = [
  {
    icon: <FaClipboardList size={50} className="text-indigo-600" />,
    title: "Online Application Portal",
    points: [
      "Accept applications online with eligibility checks.",
      "Auto-generate application numbers and status tracking.",
    ],
  },
  {
    icon: <FaLaptopCode size={50} className="text-indigo-600" />,
    title: "Online Entrance Exam",
    points: [
      "Conduct remote proctored exams securely.",
      "Supports MCQs, section-wise timing, and auto-submit.",
    ],
  },
  {
    icon: <FaChartBar size={50} className="text-indigo-600" />,
    title: "Merit List & Ranking",
    points: [
      "Auto-generate merit lists based on score & reservation.",
      "Supports normalization and multiple rounds of ranking.",
    ],
  },
];

const entranceFunctionality = [
  {
    icon: <FaCalendarAlt />,
    title: "Entrance Exam Scheduling",
    points: [
      "Define dates for registration, admit card, and exam.",
      "Publish centralized exam calendar.",
    ],
  },
  {
    icon: <FaUserGraduate />,
    title: "Student Registration Management",
    points: [
      "Collect candidate details, documents, and fees online.",
      "Generate acknowledgment slips and payment receipts.",
    ],
  },
  {
    icon: <FaClipboardCheck />,
    title: "Admit Card Generation",
    points: [
      "Auto-generate hall tickets with photo & QR code.",
      "Allow download with OTP/authentication.",
    ],
  },
  {
    icon: <FaLock />,
    title: "Exam Security & Proctoring",
    points: [
      "Prevent cheating with webcam monitoring and AI alerts.",
      "Track face movement and background noise.",
    ],
  },
  {
    icon: <FaFileSignature />,
    title: "Evaluation & Result Publication",
    points: [
      "Auto-evaluation of MCQs with instant scoring.",
      "Publish results with PDF download option.",
    ],
  },
  {
    icon: <FaCheckCircle />,
    title: "Seat Allocation & Counselling",
    points: [
      "Rank-wise course allocation and preference management.",
      "Supports multiple counselling rounds and confirmation.",
    ],
  },
  {
    icon: <FaUsersCog />,
    title: "Admin Dashboard & Reporting",
    points: [
      "View applicant stats, exam logs, and results analytics.",
      "Role-based control for staff and authorities.",
    ],
  },
];

const EntranceExamSystem = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="https://www.shutterstock.com/image-photo/online-exam-on-laptop-600nw-2150783871.jpg"
          alt="Entrance Exam Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold">Entrance Exam Management System</h1>
            <p className="text-lg md:text-xl text-green-400 font-semibold mt-4">
              Conduct Transparent & Hassle-Free University Admissions
            </p>
            <p className="text-gray-200 mt-3">
              From registration to result and seat allocation — manage every stage of entrance exams with 100% digital automation.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              SCHEDULE DEMO NOW
            </button>
          </div>
        </div>
      </div>

      {/* Functionality Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Key Functionalities of Entrance Exam Automation
          </h2>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            Simplify your university's entrance exam journey by digitizing every process — from registration to counselling.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {entranceFunctionality.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-md p-6 hover:shadow-xl 
              hover:scale-[1.02] transition-all duration-300 group 
              hover:bg-gradient-to-r hover:from-blue-100 hover:via-red-100 hover:to-green-100 hover:text-white"
            >
              <div className="flex items-center gap-3 mb-3 text-indigo-600 text-3xl group-hover:text-indigo-800">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-800">{item.title}</h3>
              </div>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 pl-1">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-blue-100 via-red-100 to-green-100 py-16 px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Entrance Exam Software Highlights
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-2">
            Everything you need for fair, transparent and data-driven entrance examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {entranceFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-md 
              hover:bg-blue-900 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-4xl text-indigo-600 group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2 group-hover:text-white">
                {feature.title}
              </h3>
              <ul className="mt-2 text-gray-600 text-sm space-y-2 group-hover:text-gray-200">
                {feature.points.map((point, i) => (
                  <li key={i} className="list-disc list-inside">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Upgrade Your University Entrance Process?
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg mb-6">
          From lakhs of applicants to a transparent merit list — Mohitraj makes it all smooth and efficient.
        </p>
        <a
          href="#contact"
          className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition-all duration-300"
        >
          BOOK A LIVE DEMO
        </a>
      </section>
    </>
  );
};

export default EntranceExamSystem;
