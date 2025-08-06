import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SchoolManagementBanner from "../../../assets/produtspage/education/images/School management.png";
import SchoolManagementBanner2 from "../../../assets/produtspage/education/images/SchoolManagementBanner2.png"


const functionality = [
  {
    title: "Academic Management",
    points: [
      "Timetable & class scheduling",
      "Syllabus tracking & lesson planning",
    ],
  },
  {
    title: "Examination Management",
    points: [
      "Online/offline test creation",
      "Report card & grade generation",
    ],
  },
  {
    title: "Student Management",
    points: [
      "Enrollment & admission process",
      "Attendance & performance tracking",
    ],
  },
  {
    title: "Event & Calendar",
    points: [
      "Academic calendar integration",
      "SMS/Email notification for events",
    ],
  },
  {
    title: "Parent Communication",
    points: [
      "SMS/email alerts for attendance",
      "Online PTM scheduling & updates",
    ],
  },
  {
    title: "Library Management",
    points: [
      "Book issue/return system",
      "Digital catalog & barcode support",
    ],
  },
];



const SchoolManagementSystem = () => {
  return (
     <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={SchoolManagementBanner}
          alt="School Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              School Management System
            </h1>
            <p className="text-lg md:text-xl text-yellow-300 font-basis mt-4">
              Smart, Secure & Scalable ERP for Modern School Administration
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              From admissions to attendance and report cards, our system simplifies all school operations with ease and transparency.
            </p>
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>
<section className="bg-white px-4 md:px-12 lg:px-20 py-16 text-gray-800 mt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
          School Management and Information System
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg font-basis">
          Our School Management System is designed to streamline daily operations,
          enhance classroom collaboration, and ensure smooth communication between
          teachers, students, and parents — all while enabling data-driven academic
          excellence and institutional efficiency.
        </p>
      </div>
      {/* Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto bg-blue-100 p-4">
  {functionality.map((feature, idx) => (
    <div
      key={idx}
      className="bg-white rounded-xl border border-gray-200 shadow-md p-6 
        hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group 
        hover:bg-gradient-to-r hover:from-blue-100 hover:via-red-100 hover:to-green-100"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        {feature.title}
      </h3>
      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
        {feature.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
</section>

<section className="bg-gradient-to-br from-blue-100 via-red-100 to-green-100 py-16 px-4 md:px-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-houschka">
      How Mohitraj Research Tech Empowers Schools to Excel
    </h2>
    <p className="text-gray-700 max-w-3xl mx-auto mt-4 font-basis">
      Our School Management System simplifies operations, streamlines academic workflows,
      and empowers institutions to deliver high-quality, student-centric education.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: "Smart Academic Management",
        points: [
          "Timetable, attendance & performance tracking",
          "Real-time student records and progress reports",
        ],
      },
      {
        title: "Finance & Fee Automation",
        points: [
          "Auto-generate fee receipts & dues alerts",
          "Transparent financial tracking for schools",
        ],
      },
      {
        title: "Parent & Staff Communication",
        points: [
          "Instant alerts to parents & teachers",
          "Portal access for updates and records",
        ],
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 aspect-square flex flex-col justify-center items-center
        hover:bg-blue-900 hover:text-white transition-all duration-300 hover:scale-[1.03]"
      >
        <h3 className="text-xl font-semibold mb-4 text-center transition-all duration-300 group-hover:text-white">
          {item.title}
        </h3>
        <ul className="text-sm space-y-2 text-center">
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

<section className="px-4 md:px-12 lg:px-20 py-20 bg-red-100">
  <div className="max-w-7xl mx-auto">

    {/* ✅ Top Banner Image */}
    <div className="mb-12">
      <img
        src={SchoolManagementBanner2}
        alt="School Management Banner"
        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
      />
    </div>

    {/* ✅ Content Section */}
    <div className="flex flex-col lg:flex-row gap-12 items-stretch h-full">

      {/* ✅ Left Content */}
      <div className="lg:w-1/2 flex flex-col justify-between bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-md flex-1">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-houschka">
            Why Choose Mohitraj School Management System?
          </h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed font-basis">
            Mohitraj Research Tech Pvt. Ltd. offers an advanced School Management and Information System that simplifies school administration, enhances classroom efficiency, and fosters transparent communication between school, students, and parents.
          </p>
          <h4 className="font-semibold text-lg text-blue-800 mb-2">Here’s why schools choose us:</h4>
          <ul className="list-disc list-inside mt-3 text-gray-800 space-y-2">
            <li>End-to-end student and teacher management</li>
            <li>Real-time attendance & performance analytics</li>
            <li>Digital homework, timetable & exam tracking</li>
            <li>Parent-teacher communication & notifications</li>
          </ul>
        </div>
      </div>

      {/* ✅ Right Cards */}
      <div className="lg:w-1/2 flex flex-col gap-6 flex-1">
        {[
          {
            title: "Student Management",
            desc: "Track admissions, attendance, grades, and progression seamlessly.",
          },
          {
            title: "Faculty & Staff Control",
            desc: "Manage timetables, leave requests, payroll, and teacher performance.",
          },
          {
            title: "Academic Records",
            desc: "Digitize report cards, exam schedules, and performance analysis.",
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

{/*new section */}

{/* Products Showcase Slider Section for School Management System */}
<section className="bg-white py-20 px-4 md:px-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 font-houschka">
    Our School Management and Information System Software Solutions
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
        img: "https://cdn.pixabay.com/photo/2016/03/09/09/17/blackboard-1245821_1280.jpg",
        title: "School ERP Software",
      },
      {
        img: "https://cdn.pixabay.com/photo/2017/05/03/22/59/classroom-2285926_1280.jpg",
        title: "Online Class Management",
      },
      {
        img: "https://cdn.pixabay.com/photo/2015/09/05/20/02/classroom-925061_1280.jpg",
        title: "Student Performance Analytics",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/11/21/15/52/board-1846860_1280.jpg",
        title: "Attendance and Timetable System",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/02/19/11/53/class-1209826_1280.jpg",
        title: "Library & Fee Management",
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

{/* === Benefits Section === */}
      <section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-houschka">
            Key Benefits of School Management & Information System
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-basis">
            Modernize your school with a secure, centralized, and
            user-friendly system to simplify administration, boost engagement,
            and improve learning outcomes.
          </p>
        </div>

        {/* Benefits List Card */}
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8 text-2xl">
          <ol className="list-decimal list-inside space-y-4 text-left">
            {[
              "Centralized student database with academic and behavioral records.",
              "Digital attendance, homework, report cards, and circulars.",
              "Parent-teacher communication via portal and mobile app.",
              "Online fee payment, receipt generation, and expense tracking.",
              "Secure access for students, teachers, parents, and admin staff.",
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

      {/* === CTA Section === */}
      <section className="bg-blue-900 bg-dotted-pattern text-white py-16 px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-houschka">
          Ready to Digitally Transform Your School with Mohitraj?
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg mb-6 font-basis">
          Automate, Centralize, and Streamline your Operations with Mohitraj
          Research Tech Pvt. Ltd. — India’s trusted digital transformation
          partner for government, enterprise, and education sectors.
        </p>
        <a
          href="#contact"
          className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition-all duration-300"
        >
          SCHEDULE A QUICK DEMO
        </a>
            <hr className="border-gray-300 my-10 " />
      </section>
    

    </>
  )
}

export default SchoolManagementSystem