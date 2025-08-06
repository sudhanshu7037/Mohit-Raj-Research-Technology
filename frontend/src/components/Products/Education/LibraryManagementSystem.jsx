import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LibraryBannerImage from "../../../assets/produtspage/education/images/Library management system.png";


const functionality = [
  {
    title: "Catalog and Inventory Management",
    points: [
      "Organize books by title, author, subject, or genre.",
      "Track availability of physical and digital materials.",
    ],
  },
  {
    title: "Book Issue and Return Tracking",
    points: [
      "Automated check-in/check-out process for users.",
      "Alerts for overdue items and fine generation.",
    ],
  },
  {
    title: "Membership and User Profiles",
    points: [
      "Manage student, staff, and faculty membership records.",
      "View borrowing history and profile activity.",
    ],
  },
  {
    title: "Digital Resources Access",
    points: [
      "Enable access to e-books, journals, and archives.",
      "Support multimedia and learning material integration.",
    ],
  },
  {
    title: "Reports and Analytics",
    points: [
      "Generate usage, inventory, and circulation reports.",
      "Analyze borrowing trends and optimize purchases.",
    ],
  },
  {
    title: "System Administration",
    points: [
      "Role-based access control for librarians and users.",
      "Backup, restore, and data security features.",
    ],
  },
];

const empowerinddata = [
  {
    title: "Efficient Book and Inventory Management",
    points: [
      "Organize and categorize books and digital assets effectively.",
      "Automate stock tracking and inventory updates in real time.",
    ],
  },
  {
    title: "Seamless User and Membership Control",
    points: [
      "Manage student and faculty memberships effortlessly.",
      "Track borrowing history and user-specific access rights.",
    ],
  },
  {
    title: "Smart Issue & Return Monitoring",
    points: [
      "Enable quick check-in and check-out with alerts and reminders.",
      "Generate fines and overdue notifications automatically.",
    ],
  },
];


const LibraryManagementSystem = () => {
  return (
    <>
    
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={LibraryBannerImage}
          alt="Library Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              Library Management System
            </h1>
          
            
            <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 ">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>

{/* New section for functionality */}
<section className="bg-blue-50 px-4 md:px-12 lg:px-20 py-16 text-gray-800 mt-20">
  {/* Header */}
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 font-houschka">
      Library Management and Information System
    </h2>
    <p className="text-gray-600 max-w-4xl mx-auto text-lg font-basis">
      Our Library Management System offers a centralized platform to manage book inventories, user memberships, issue/return tracking, and digital archives—empowering institutions with an efficient and paperless library experience.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
    {functionality.map((feature, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl border border-gray-200 shadow-md p-6 
        hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group 
        hover:bg-gradient-to-r hover:from-blue-100 hover:via-red-100 hover:to-green-100 hover:text-white"
      >
        <div className="mb-3">
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

{/* how empower - Library Management System */}
<section className="bg-red-50 py-16 px-4 md:px-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-houschka">
      How Empower Your Library Management and Information System
    </h2>
    <p className="text-gray-700 max-w-3xl mx-auto mt-2 font-basis">
      Empower your library with digital resource management, real-time tracking, and seamless access to both physical and electronic collections—designed for smart academic environments.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {empowerinddata.map((item, index) => (
      <div
        key={index}
        className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-md 
        hover:bg-blue-900 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300"
      >
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

{/*new section*/}

{/*new section*/}

<section className="px-4 md:px-12 lg:px-20 py-20 bg-blue-50">
  <div className="max-w-7xl mx-auto">

    {/* ✅ Top Banner Image */}
    <div className="mb-12">
      <img
        src="https://images.ctfassets.net/pdf29us7flmy/3DEhB94J6m9TmMHmQKQak8/3143160e750a4191ff491e6ef5d4a016/GettyImages-1207582042.jpg"
        alt="Library Management System Banner"
        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
      />
    </div>

    {/* ✅ Content Section */}
    <div className="flex flex-col lg:flex-row gap-12 items-stretch h-full">

      {/* ✅ Left Content */}
      <div className="lg:w-1/2 flex flex-col justify-between bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-md flex-1">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-houschka">
            Why Choose Mohitraj Library Management System?
          </h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed font-basis">
            Mohitraj Research Tech Pvt. Ltd. delivers a centralized Library Management System for schools, colleges, and universities. It simplifies cataloging, automates circulation, and enhances user access to physical and digital resources.
          </p>
          <h4 className="font-semibold text-lg text-blue-800 mb-2">Here’s why libraries choose us:</h4>
          <ul className="list-disc list-inside mt-3 text-gray-800 space-y-2">
            <li>Digital cataloging and smart classification</li>
            <li>Barcode-based issue/return management</li>
            <li>Member portal for search & reservation</li>
            <li>Integration with eBooks and external libraries</li>
          </ul>
        </div>
      </div>

      {/* ✅ Right Cards */}
      <div className="lg:w-1/2 flex flex-col gap-6 flex-1">
        {[
          {
            title: "Digital Catalog Management",
            desc: "Easily organize and classify thousands of books, journals, and multimedia resources.",
          },
          {
            title: "Smart Issue & Return Tracking",
            desc: "Automated check-in/out using barcodes and member IDs to prevent losses.",
          },
          {
            title: "User Access & Reporting",
            desc: "Allow students and staff to search, reserve, and track borrowed items online.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white/70 backdrop-blur-lg border border-gray-200 
            rounded-2xl p-6 shadow-md flex-1 flex flex-col justify-between 
            hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all 
            duration-500 hover:scale-105 hover:-translate-y-2 group"
          >
            <div className="text-center space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 transition-all duration-300 
                group-hover:bg-clip-text group-hover:text-transparent 
                group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:via-red-500 group-hover:to-green-600">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 transition-all duration-300 
                group-hover:bg-clip-text group-hover:text-transparent 
                group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:via-red-500 group-hover:to-green-600">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
{/*new secgtion*/}

{/* Products Showcase Slider Section */}
<section className="bg-white py-20 px-4 md:px-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 font-houschka">
    Our Library Management System Modules
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
        img: "https://img.freepik.com/free-vector/library-concept-illustration_114360-1236.jpg",
        title: "Book Cataloguing & Classification",
      },
      {
        img: "https://img.freepik.com/free-vector/people-choosing-books-library_23-2148620417.jpg",
        title: "Student & Staff Book Issuance",
      },
      {
        img: "https://img.freepik.com/free-vector/library-shelf-concept-illustration_114360-11204.jpg",
        title: "Shelf & Stock Management",
      },
      {
        img: "https://img.freepik.com/free-vector/man-having-problem-finding-book-library_74855-19916.jpg",
        title: "Search & Discovery System",
      },
      {
        img: "https://img.freepik.com/premium-vector/library-management-isometric-flowchart_1284-26111.jpg",
        title: "Overdue Notifications & Fine Tracker",
      },
      {
        img: "https://img.freepik.com/premium-vector/library-database-flat-isometric-illustration_9206-3880.jpg",
        title: "Digital Resources & eLibrary Access",
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

{/* Benefits Section */}
<section className="w-full py-20 px-4 md:px-16 bg-red-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-houschka">
      Key Benefits of Library Management System
    </h2>
    <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-basis">
      Transform your library into a digitally managed space with automation tools that streamline book tracking, inventory management, and user access for efficient and paperless operations.
    </p>
  </div>

  {/* Glassy Card */}
  <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8">
    <ol className="list-decimal list-inside space-y-4 text-left">
      {[
        "Automated book issue-return with barcode or RFID integration.",
        "Centralized catalog management with advanced search and filtering.",
        "Real-time tracking of inventory, due dates, and overdue fines.",
        "Digital membership management and role-based access control.",
        "Reports and analytics for usage trends, inventory, and user engagement.",
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
{/* Demo Section for Library Management System */}
<section className="bg-blue-900 bg-dotted-pattern text-white py-16 px-4 text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-houschka">
    Ready to Upgrade Your Library Operations with Mohitraj?
  </h2>
  <p className="max-w-3xl mx-auto text-base md:text-lg mb-6 font-basis">
    Discover a powerful and user-friendly Library Management System from Mohitraj Research Tech Pvt. Ltd.
    — trusted by schools, colleges, and universities to streamline their library workflows and digitalize inventory control.
  </p>
  <a
    href="#contact"
    className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition-all duration-300"
  >
    SCHEDULE A LIVE DEMO
  </a>
    <hr className="border-gray-300 my-10 " />

</section>
 



    </>
    
    
  )
}

export default LibraryManagementSystem