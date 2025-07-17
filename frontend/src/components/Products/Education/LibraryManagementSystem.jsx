import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import {
  FaBook, FaUserCheck, FaCogs, FaClipboardList, FaBox, FaSearch, FaLayerGroup, FaListAlt, FaCalendarCheck, FaLaptopCode,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSearch size={50} className="text-indigo-600" />,
    title: "Advanced Search",
    points: [
      "Search books by title, author, ISBN, or category",
      "Filters for availability, new arrivals, and genre",
    ],
  },
  {
    icon: <FaLayerGroup size={50} className="text-indigo-600" />,
    title: "Category Management",
    points: [
      "Organize library materials by subject or type",
      "Easy navigation for students and staff",
    ],
  },
  {
    icon: <FaListAlt size={50} className="text-indigo-600" />,
    title: "Digital Catalog",
    points: [
      "Complete list of all library books and resources",
      "Updated in real-time with issue/return status",
    ],
  },
];

const functionality = [
  {
    icon: <FaBook />,
    title: "Book Issue/Return",
    points: [
      "Digitally manage book checkouts and returns",
      "Auto-fine calculation and reminders",
    ],
  },
  {
    icon: <FaUserCheck />,
    title: "Member Management",
    points: [
      "Track student, faculty, and guest members",
      "Assign roles and borrowing limits",
    ],
  },
  {
    icon: <FaCalendarCheck />,
    title: "Reservation System",
    points: [
      "Users can reserve books in advance",
      "Queue management for popular books",
    ],
  },
  {
    icon: <FaClipboardList />,
    title: "Inventory Management",
    points: [
      "Monitor stock levels and track missing books",
      "Barcode integration and vendor management",
    ],
  },
  {
    icon: <FaCogs />,
    title: "Admin Panel",
    points: [
      "Manage library policies and settings",
      "Control user access and data backups",
    ],
  },
  {
    icon: <FaLaptopCode />,
    title: "Reporting & Analytics",
    points: [
      "Track usage, most borrowed books, and member activity",
      "Generate automated reports for audits",
    ],
  },
];

const LibraryManagementSystem = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src="https://www.shutterstock.com/image-photo/library-bookshelves-digital-management-software-600nw-2426486323.jpg"
          alt="Library Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Library Management System
            </h1>
            <p className="text-lg md:text-xl text-green-400 font-semibold mt-4">
              Streamlined, Smart & Centralized Digital Library Automation
            </p>
            <p className="text-gray-200 mt-3">
              A powerful tool to efficiently manage library resources, users, and workflows
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white px-4 md:px-12 lg:px-20 py-16 text-gray-800 mt-20">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
            Library Management System Features and Functionalities
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg">
            Empowering libraries with smart modules that simplify resource tracking, improve access,
            and enhance user experience through automation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto bg-blue-100">
          {functionality.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 shadow-md p-6 
              hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group 
              hover:bg-gradient-to-r hover:from-blue-100 hover:via-red-100 hover:to-green-100 hover:text-white"
            >
              <div className="flex items-center gap-3 mb-3 text-indigo-600 text-3xl group-hover:text-indigo-800">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-800">{feature.title}</h3>
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

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-blue-100 via-red-100 to-green-100 py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Key Features That Transform Your Library
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mt-2">
            Mohitraj Research Tech Pvt. Ltd. provides cutting-edge software to automate your library's
            daily operations, optimize inventory, and deliver seamless user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-md 
              hover:bg-blue-900 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4 text-4xl text-indigo-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2 group-hover:text-white transition-all duration-300">
                {item.title}
              </h3>
              <ul className="mt-2 text-gray-600 text-sm space-y-2 group-hover:text-gray-200 transition-all duration-300">
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
       {/* Benefits Section */}
      <section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Key Benefits of Library Management System
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Experience seamless, efficient, and secure library operations with our advanced automation tools
            tailored for institutions of every size.
          </p>
        </div>
        {/* Product Showcase Section */}
      <section className=" py-20 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
          Our Library Software Modules & Interfaces
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[
            {
              img: "https://www.zoho.com/sites/default/files/library-management-dashboard.png",
              title: "Dashboard & Reports",
            },
            {
              img: "https://i.ytimg.com/vi/g5CCdnYyG90/maxresdefault.jpg",
              title: "Book Inventory System",
            },
            {
              img: "https://www.softwaresuggest.com/blog/wp-content/uploads/2018/11/Koha-Open-Source-Library-Management-Software.png",
              title: "Koha Open Source Integration",
            },
            {
              img: "https://img.yumpu.com/41428938/1/500x640/2-library-management-system.jpg",
              title: "Member & Issue Management",
            },
            {
              img: "https://cdn.educba.com/academy/wp-content/uploads/2022/03/Library-Management-System.png",
              title: "Library Usage Analytics",
            },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 bg-gradient-to-r from-blue-100 via-red-100 to-green-100">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-900 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

        {/* Benefit List */}
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8">
          <ol className="list-decimal list-inside space-y-4 text-left">
            {[ 
              "End-to-end tracking of books and resources.",
              "Faster issue/return processes with auto-fine logic.",
              "Real-time reporting for usage, availability, and inventory.",
              "Customizable access levels for staff, students, and admins.",
              "Integrated with barcode, RFID, and cloud for advanced usability."
            ].map((point, idx) => (
              <li
                key={idx}
                className="relative text-gray-800 hover:text-blue-900 font-medium bg-white/60 px-4 py-3 rounded-md shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-blue-400 rounded-md group-hover:bg-green-500 transition-all duration-300" />
                <span className="pl-3 block">{point}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="bg-red-600 text-white py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Digitally Transform Your Library with Mohitraj?
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg mb-6">
          Automate, Organize, and Streamline library services using our intelligent Library Management System.
        </p>
        <a
          href="#contact"
          className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition-all duration-300"
        >
          SCHEDULE A QUICK DEMO
        </a>
      </section>
    </>
  );
};

export default LibraryManagementSystem;
