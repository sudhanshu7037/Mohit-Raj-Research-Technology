import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import EngCollgeBanner from "../../../assets/produtspage/education/images/Engineering_Institute_Management_System[1].png";


import {
  FaUniversity, FaUserTie, FaUserCheck, FaClipboardList, FaFileInvoice,
  FaChalkboardTeacher, FaCalendarCheck, FaBook, FaTools,FaUserGraduate, FaUsersCog
} from "react-icons/fa";


const features = [
  {
    icon: <FaUniversity size={50} className="text-indigo-600" />,
    title: "Academic Infrastructure Management",
    points: [
      "Digitally manage departments, programs, and labs",
      "Track academic assets and maintain infrastructure records",
    ],
  },
  {
    icon: <FaUserGraduate size={50} className="text-indigo-600" />,
    title: "Student Lifecycle Automation",
    points: [
      "Manage student data from admission to graduation",
      "Automate attendance, assessments, and performance tracking",
    ],
  },
  {
    icon: <FaChalkboardTeacher size={50} className="text-indigo-600" />,
    title: "Faculty & Staff Management",
    points: [
      "Digitize faculty recruitment, workload, and evaluations",
      "Enable seamless timetable, leave, and payroll handling",
    ],
  },
];

const functionality = [
  {
    icon: <FaUniversity />,
    title: "Course & Department Management",
    points: [
      "Manage departments, programs, and subjects easily.",
      "Track intake, eligibility, and academic structure.",
    ],
  },
  {
    icon: <FaUserTie />,
    title: "Faculty Information System",
    points: [
      "Maintain faculty profiles, workload, and schedules.",
      "Manage qualifications, appraisals, and leaves.",
    ],
  },
  {
    icon: <FaUserCheck />,
    title: "Student Lifecycle Management",
    points: [
      "Complete student journey from admission to graduation.",
      "Track academic performance, fees, and activities.",
    ],
  },
  {
    icon: <FaClipboardList />,
    title: "Examination & Evaluation System",
    points: [
      "Schedule exams and publish results digitally.",
      "Generate report cards and performance analytics.",
    ],
  },
  {
    icon: <FaFileInvoice />,
    title: "Fee & Finance Management",
    points: [
      "Online fee collection with receipts and reminders.",
      "Scholarships, concessions, and ledger tracking.",
    ],
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Timetable & Academic Planning",
    points: [
      "Generate class and exam timetables smartly.",
      "Auto-adjustments for faculty leaves and holidays.",
    ],
  },
  {
    icon: <FaCalendarCheck />,
    title: "Attendance Monitoring System",
    points: [
      "Daily attendance via biometric or RFID devices.",
      "Alerts for low attendance and defaulters.",
    ],
  },
  {
    icon: <FaBook />,
    title: "Library & Digital Resources",
    points: [
      "Catalog, issue/return, and e-book access.",
      "Integration with academic portals and journals.",
    ],
  },
  {
    icon: <FaTools />,
    title: "Laboratory Management",
    points: [
      "Lab scheduling, experiment logs, and safety tracking.",
      "Manage inventory and consumables efficiently.",
    ],
  },
  {
    icon: <FaUsersCog />,
    title: "Training & Placement Portal",
    points: [
      "Record internships, placements, and offers.",
      "Recruiter management and student shortlisting.",
    ],
  },
];

const UniversityAutomation = () => {



  

  return (
    <>
     <div className="">
      {/* Background Image */}
      <img
        src={EngCollgeBanner}
        alt="University Background"
        className="w-full h-screen object-cover"
      />

      {/* Overlay for better contrast (optional) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
        <div className="text-white max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
            Engineering College Management and Information System
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
     {/*new section for functionality*/}

     
{/*new section for functionality*/}
<section className="bg-white px-4 md:px-12 lg:px-20 py-16 text-gray-800 mt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
          Engineering college Management And Information System
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg font-basis ">
          Our Engineering College Management and Information System offers smart, scalable tools that automate academic
and administrative operations, boost institutional productivity, and ensure transparent, outcome-driven governance.

        </p>
      </div>

      {/* Cards Grid */}
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

    <section className="bg-gradient-to-br from-blue-100 via-red-100 to-green-100 py-16 px-4 md:px-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-houschka">
      How Mohitraj Research Tech Empowers Engineering Colleges to Excel
    </h2>
    <p className="text-gray-700 max-w-3xl mx-auto mt-2 font-basis">
      Our cutting-edge Engineering College Management and Information System streamlines administration, automates academic workflows,
      and equips institutions to deliver smarter, data-driven education.
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
     {/*new section for why choose our software*/}

     

<section className="px-4 md:px-12 lg:px-20 py-20 bg-red-100">
  <div className="max-w-7xl mx-auto">

    {/* ✅ Top Banner Image */}
    <div className="mb-12">
      <img
        src="https://www.bannerbuzz.co.uk/blog/wp-content/uploads/2023/09/Rigid-Signs-2-1024x441.webp"
        alt="Engineering College Management Banner"
        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
      />
    </div>

    {/* Main Grid */}
    <div className="flex flex-col lg:flex-row gap-12 items-start">

      {/* Left Content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 relative group inline-block">
          <span className="hover:text-red-600 transition-all duration-300 font-houschka">
            Why Choose Mohitraj Engineering College Management System?
          </span>
        </h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed font-basis">
          Mohitraj Research Tech Pvt. Ltd. delivers intelligent Engineering College Management and Information Systems
          to streamline academic operations, simplify administrative workflows, and enhance transparency across the institution.
        </p>
        <h4 className="font-semibold text-lg text-blue-800 mb-2">Here’s what makes us stand out:</h4>
        <ul className="list-disc list-inside mt-3 text-gray-800 space-y-2">
          <li>Digitized workflows from admissions to placements</li>
          <li>Real-time analytics for academic and admin decisions</li>
          <li>Modular, customizable architecture for colleges</li>
          <li>Secure, cloud-based multi-user access system</li>
        </ul>
      </div>

      {/* Right Cards */}
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: "🏛️",
            title: "Academic Infrastructure",
            desc: "Manage departments, labs, and programs digitally across the institution.",
          },
          {
            icon: "🎓",
            title: "Student Lifecycle",
            desc: "Track students’ academic journey from enrollment to graduation.",
          },
          {
            icon: "👨‍🏫",
            title: "Faculty Operations",
            desc: "Automate teaching loads, schedules, and performance evaluations.",
          },
          {
            icon: "📈",
            title: "Insightful Dashboards",
            desc: "Monitor KPIs, results, and compliance with live analytics dashboards.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="relative bg-white/70 backdrop-blur-lg border border-gray-200 
            rounded-2xl p-6 shadow-md hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all 
            duration-500 hover:scale-105 hover:-translate-y-2 group"
          >
            {/* Glowing Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-blue-100 via-red-100 to-green-100 
              rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 z-0" />

            {/* Content */}
            <div className="relative z-10 text-center space-y-3">
              <div className="text-4xl">{card.icon}</div>
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


{/* Products Showcase Slider Section */}
<section className="bg-white py-20 px-4 md:px-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 font-houschka">
    Our Engineering College management and information system software Solution
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
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NKhVEy_DQ6QSiW4zNYjsDphFcAuMibo-GA&s",
        title: "University ERP Software",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTTkFedUiVBbJ-8EVTNKbjLazfuWTkAuYaw&s",
        title: "Online Examination System",
      },
      {
        img: "https://i.pinimg.com/originals/13/96/62/1396621cb55390941a9215dcf315b423.jpg",
        title: "Student Information Portal",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyq02lDER9BnavXiipBF2ZcAeI4TbKrdlVJA&s",
        title: "Library Automation Software",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSE5iNrFKHGK5Hu-e_nnk8wUgxzACGy-kHfA&s",
        title: "Education Data Analytics",
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

{/*benefits */}

{/* new section benefits */}
<section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-houschka">
      Key Benefits of Engineering College Management & Information System
    </h2>
    <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-basis">
      Enable your engineering college with an advanced, scalable, and secure digital system to simplify operations,
      enhance student lifecycle management, and boost institutional performance.
    </p>
  </div>

  {/* Glassy Card */}
  <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8">
    <ol className="list-decimal list-inside space-y-4 text-left">
      {[
        "Centralized management of departments, courses, and student lifecycle.",
        "Digital faculty workload tracking, attendance, and performance records.",
        "Automated admissions, examinations, result processing, and transcript generation.",
        "Role-based secured access for students, faculty, and administrators.",
        "Insightful dashboards for academic KPIs, compliance, and decision making.",
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




      {/*demo*/}
      <section className="bg-red-700 bg-dotted-pattern text-white py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 font-houschka">
        Ready to Digitally Transform Your Organization with Mohitraj?
      </h2>
      <p className="max-w-3xl mx-auto text-base md:text-lg mb-6 font-basis">
        Automate, Centralize, and Streamline your Operations with Mohitraj Research Tech Pvt. Ltd. —
        India's trusted digital transformation partner for government, enterprise, and education sectors.
      </p>
      <a
        href="#contact"
        className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition-all duration-300"
      >
        SCHEDULE A QUICK DEMO
      </a>
    </section>
    </div>
    
    </>
  )
}

export default UniversityAutomation