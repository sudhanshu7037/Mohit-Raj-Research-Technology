import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import {
  FaChalkboardTeacher, FaUserGraduate, FaClipboardList, FaLaptopCode, FaChartBar, FaCalendarCheck,
  FaCheckCircle, FaFileAlt, FaLock, FaFileSignature, FaBell, FaQuestionCircle, FaUserShield
} from 'react-icons/fa';

const examFeatures = [
  {
    icon: <FaClipboardList size={50} className="text-indigo-600" />,
    title: "Exam Scheduling & Planning",
    points: [
      "Create exam calendars and allocate time slots.",
      "Auto-assign subjects, duration, and question patterns.",
    ],
  },
  {
    icon: <FaLaptopCode size={50} className="text-indigo-600" />,
    title: "Online Exam Conduction",
    points: [
      "Secure and scalable online exam environment.",
      "Supports MCQs, subjective, coding, and file-upload based formats.",
    ],
  },
  {
    icon: <FaChartBar size={50} className="text-indigo-600" />,
    title: "Real-Time Monitoring",
    points: [
      "Live camera, screen recording, and cheating detection.",
      "Proctoring dashboard with AI alerts.",
    ],
  },
];

const examFunctionality = [
  {
    icon: <FaCalendarCheck />,
    title: "Exam Timetable Management",
    points: [
      "Design flexible exam schedules.",
      "Avoid overlaps and auto-notify students & staff.",
    ],
  },
  {
    icon: <FaQuestionCircle />,
    title: "Question Bank & Randomization",
    points: [
      "Create and manage question sets with difficulty levels.",
      "Auto-randomize to ensure paper uniqueness.",
    ],
  },
  {
    icon: <FaUserGraduate />,
    title: "Student Exam Portal",
    points: [
      "Students can take exams with secured login.",
      "Auto-save, resume, and live timer support.",
    ],
  },
  {
    icon: <FaUserShield />,
    title: "Secure Login & Authentication",
    points: [
      "OTP, facial recognition or device-lock security.",
      "Prevents multiple logins and impersonation.",
    ],
  },
  {
    icon: <FaFileAlt />,
    title: "Answer Sheet Evaluation",
    points: [
      "Manual and auto-evaluation with annotations.",
      "Upload scanned copies for offline exams too.",
    ],
  },
  {
    icon: <FaFileSignature />,
    title: "Result & Marks Management",
    points: [
      "Instant result generation with analytics.",
      "Customizable grade systems & exportable reports.",
    ],
  },
  {
    icon: <FaCheckCircle />,
    title: "Exam Compliance & Audit",
    points: [
      "Generate audit trails for all actions.",
      "Monitor exam integrity and logs.",
    ],
  },
  {
    icon: <FaBell />,
    title: "Alerts & Notifications",
    points: [
      "SMS/Email alerts for exam reminders and results.",
      "Live announcements during exams.",
    ],
  },
];

const OnlineExaminationSystem = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="https://img.freepik.com/free-photo/online-exam-abstract-concept_335657-3001.jpg"
          alt="Online Exam Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold">Online Examination Management System</h1>
            <p className="text-lg md:text-xl text-green-400 font-semibold mt-4">
              Conduct Secure, Scalable & Smart Online Exams with Ease
            </p>
            <p className="text-gray-200 mt-3">
              Automate scheduling, delivery, monitoring, evaluation and result publication — all from one integrated platform.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A LIVE DEMO
            </button>
          </div>
        </div>
      </div>

      {/* Functionality Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Core Functionalities of Our Online Exam System
          </h2>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            Empower institutions with an all-in-one examination platform to conduct, control, and audit every exam seamlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {examFunctionality.map((item, index) => (
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
            Key Features of Our Examination Platform
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-2">
            From exam setup to results and analytics, we provide everything you need for smooth online assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {examFeatures.map((feature, idx) => (
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
          Want to Digitally Transform Your Examination System?
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg mb-6">
          Contact us to schedule a quick demo and experience the future of online assessments.
        </p>
        <a
          href="#contact"
          className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition-all duration-300"
        >
          BOOK A DEMO NOW
        </a>
      </section>
    </>
  );
};

export default OnlineExaminationSystem;
