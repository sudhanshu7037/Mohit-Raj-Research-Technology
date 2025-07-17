import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import {
  FaChalkboardTeacher, FaUserGraduate, FaClipboardList, FaBook, FaUsers, FaSchool, FaBusAlt, FaTools,
  FaFileAlt, FaBell, FaLaptopHouse, FaUserTie, FaEnvelopeOpenText, FaAddressCard
} from 'react-icons/fa';

const schoolFeatures = [
  {
    icon: <FaSchool size={50} className="text-indigo-600" />,
    title: "School Management",
    points: [
      "Manage multiple branches and academic years.",
      "Create classes, sections, and manage timetables.",
    ],
  },
  {
    icon: <FaUserGraduate size={50} className="text-indigo-600" />,
    title: "Student Management",
    points: [
      "Digital student records, ID cards, and attendance.",
      "Admission, promotion, and report cards simplified.",
    ],
  },
  {
    icon: <FaChalkboardTeacher size={50} className="text-indigo-600" />,
    title: "Staff & Teacher Management",
    points: [
      "Onboard and manage teaching/non-teaching staff.",
      "Monitor tasks, leaves, and salaries digitally.",
    ],
  },
];

const schoolFunctionality = [
  {
    icon: <FaClipboardList />,
    title: "Attendance Management",
    points: [
      "Daily student and staff attendance tracking.",
      "Biometric & RFID integration supported.",
    ],
  },
  {
    icon: <FaBook />,
    title: "Exam & Result Management",
    points: [
      "Schedule exams, enter marks, auto-generate results.",
      "Print report cards with grade-based evaluation.",
    ],
  },
  {
    icon: <FaUsers />,
    title: "Parent Communication",
    points: [
      "Send notices, homework, and announcements instantly.",
      "Real-time updates via app or email/SMS.",
    ],
  },
  {
    icon: <FaBusAlt />,
    title: "Transport Management",
    points: [
      "Assign routes, track buses, and manage drivers.",
      "Live tracking integration for safety.",
    ],
  },
  {
    icon: <FaTools />,
    title: "Facility & Asset Management",
    points: [
      "Track classrooms, labs, and equipment maintenance.",
      "Manage stock and request repairs online.",
    ],
  },
  {
    icon: <FaFileAlt />,
    title: "Document & File Management",
    points: [
      "Upload and manage student certificates, files.",
      "Role-based access and sharing.",
    ],
  },
  {
    icon: <FaBell />,
    title: "Notice & Announcement Board",
    points: [
      "Post school-wide announcements with expiry dates.",
      "Display notices on student/teacher dashboards.",
    ],
  },
  {
    icon: <FaLaptopHouse />,
    title: "Online Classes Integration",
    points: [
      "Conduct live online classes and share resources.",
      "Integrates Zoom/Meet with student access.",
    ],
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "Homework & Assignment",
    points: [
      "Teachers can assign homework with submission tracking.",
      "Students upload homework with deadline reminders.",
    ],
  },
  {
    icon: <FaAddressCard />,
    title: "Visitor & Reception Management",
    points: [
      "Log visitor details, appointments, and issue passes.",
      "Manage front-desk efficiently with digital records.",
    ],
  },
];

const SchoolAutomation = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="https://img.freepik.com/free-photo/back-school-concept-books-colorful-supplies_23-2148299444.jpg"
          alt="School Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold">School Management System Software</h1>
            <p className="text-lg md:text-xl text-green-400 font-semibold mt-4">
              Smart, Secure & Scalable ERP Platform for Modern Schools
            </p>
            <p className="text-gray-200 mt-3">
              Simplify school operations from admissions to academics, all in one place.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A DEMO NOW
            </button>
          </div>
        </div>
      </div>

      {/* Functionality Cards Section */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            School Software Functionalities
          </h2>
          <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
            Empower your school with essential features for efficient administration and academic excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {schoolFunctionality.map((item, index) => (
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
            Why Choose Our School Automation Solution?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-2">
            From daily attendance to exam results, everything is seamlessly handled with our intelligent platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {schoolFeatures.map((feature, idx) => (
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

      {/* Demo Call to Action */}
      <section className="bg-red-600 text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Want to Digitally Transform Your School?
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg mb-6">
          Contact us to schedule a quick demo and explore how our School Automation Software can simplify
          your school's digital journey.
        </p>
        <a
          href="#contact"
          className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition-all duration-300"
        >
          SCHEDULE A DEMO
        </a>
      </section>
    </>
  );
};

export default SchoolAutomation;
