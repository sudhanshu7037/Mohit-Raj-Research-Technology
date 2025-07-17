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
      title: "Institute Management",
      points: [
        "Automates and streamlines the educational processes of colleges",
        "Enables courses, eligibility criteria, and seat allocation",
      ],
    },
    {
      icon: <FaUserGraduate size={50} className="text-indigo-600" />,
      title: "Students Management",
      points: [
        "Turns students' complete educational life cycle digital",
        "Makes forms, verification, and results fully online",
      ],
    },
    {
      icon: <FaChalkboardTeacher size={50} className="text-indigo-600" />,
      title: "Staff Management",
      points: [
        "Automates onboarding & teaching processes for staff",
        "Manages performance, tasks, and digital records",
      ],
    },
  ];


const functionality = [
  {
    icon: <FaUserTie />,
    title: "Vice Chancellor Office Management",
    points: [
      "Digitally manage VC office workflow and communications.",
      "Supports approvals, scheduling, and document handling.",
    ],
  },
  {
    icon: <FaUserTie />,
    title: "Registrar Office Management",
    points: [
      "Centralizes registrar records and approvals.",
      "Simplifies certificate issuance and admin coordination.",
    ],
  },
  {
    icon: <FaUserCheck />,
    title: "Student Admission Management",
    points: [
      "End-to-end digital admission process handling.",
      "Track applications, eligibility, and enrollment status.",
    ],
  },
  {
    icon: <FaUserShield />,
    title: "Student Information Management",
    points: [
      "Stores all student records securely in one place.",
      "Eases access to academic, personal, and history data.",
    ],
  },
  {
    icon: <FaClipboardList />,
    title: "Examination Management System",
    points: [
      "Schedule and manage exams and invigilation duties.",
      "Auto-generate results, hall tickets, and mark sheets.",
    ],
  },
  {
    icon: <FaUserShield />,
    title: "Confidential Management",
    points: [
      "Handle classified university files with high security.",
      "Access-controlled document and report management.",
    ],
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Finance Office Management",
    points: [
      "Manage all institutional financial operations digitally.",
      "Automate payment tracking, approvals, and budgeting.",
    ],
  },
  {
    icon: <FaFileSignature />,
    title: "E-Financial Proposal Management",
    points: [
      "Create, approve, and monitor financial proposals online.",
      "Track project-wise funding and utilization.",
    ],
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Budget Management",
    points: [
      "Define, allocate, and track budgets for departments.",
      "Monitor expenses and avoid overspending.",
    ],
  },
  {
    icon: <FaBalanceScale />,
    title: "Account & Finance Management",
    points: [
      "Maintain accounts ledger, payments & reconciliation.",
      "Automate balance sheets, audits, and reports.",
    ],
  },
  {
    icon: <FaUsersCog />,
    title: "Staff Salary Management",
    points: [
      "Automated salary calculation and payroll generation.",
      "Supports bonuses, deductions, and tax handling.",
    ],
  },
  {
    icon: <FaBalanceScale />,
    title: "Tax Management System",
    points: [
      "Handles TDS, GST, and tax reporting tasks.",
      "Reduces compliance risks and simplifies filing.",
    ],
  },
  {
    icon: <FaUsersCog />,
    title: "PF Management System",
    points: [
      "Track PF contributions, withdrawals, and transfers.",
      "Auto-generate PF statements and compliance files.",
    ],
  },
  {
    icon: <FaUsersCog />,
    title: "Pension & Retirement Management",
    points: [
      "Manages pension plans and retirement benefits.",
      "Ensures timely processing and transparent tracking.",
    ],
  },
  {
    icon: <FaUserCheck />,
    title: "Employee Management System",
    points: [
      "Central platform for all staff-related operations.",
      "Track roles, performance, and history.",
    ],
  },
  {
    icon: <FaUserEdit />,
    title: "Employee Recruitment Management",
    points: [
      "Post vacancies, manage applicants & selection.",
      "Streamlines hiring process with workflow tools.",
    ],
  },
  {
    icon: <FaUserEdit />,
    title: "Employee Information System",
    points: [
      "Secure storage of employee personal and job data.",
      "Easy access to career history and documents.",
    ],
  },
  {
    icon: <FaCalendarCheck />,
    title: "Employee Leave Management",
    points: [
      "Request, approve and track staff leaves easily.",
      "Real-time leave balance & holiday calendar.",
    ],
  },
  {
    icon: <FaCalendarCheck />,
    title: "Employee Attendance Management",
    points: [
      "Capture daily attendance with biometric/RFID.",
      "Auto-sync with payroll and leave data.",
    ],
  },
  {
    icon: <FaCogs />,
    title: "Employee Administration & Monitoring",
    points: [
      "Track daily tasks, projects, and compliance.",
      "Monitor productivity with real-time logs.",
    ],
  },
  {
    icon: <FaUniversity />,
    title: "College & Department Management",
    points: [
      "Manage multiple colleges and departments easily.",
      "Organize staff, students, and course mapping.",
    ],
  },
  {
    icon: <FaBook />,
    title: "Learning Management System",
    points: [
      "Deliver and track online learning content.",
      "Supports quizzes, assignments, and progress.",
    ],
  },
  {
    icon: <FaBuilding />,
    title: "Infrastructure Management",
    points: [
      "Maintain buildings, labs, and campus assets.",
      "Schedule repairs and facility usage.",
    ],
  },
  {
    icon: <FaFlask />,
    title: "Laboratory Management",
    points: [
      "Track lab inventory, schedules, and safety.",
      "Assign experiments and manage submissions.",
    ],
  },
  {
    icon: <FaClipboardList />,
    title: "Student Attendance Management",
    points: [
      "Daily attendance tracking via digital registers.",
      "Auto alerts for low attendance.",
    ],
  },
  {
    icon: <FaBox />,
    title: "Store & Purchase Management System",
    points: [
      "Manage stock requests, GRN, and suppliers.",
      "Supports quotations, approvals, and invoices.",
    ],
  },
  {
    icon: <FaUsersCog />,
    title: "Central Purchase Committee Management",
    points: [
      "Committee-based review and approval workflow.",
      "Transparent purchase decision making.",
    ],
  },
  {
    icon: <FaBox />,
    title: "Purchase Management System",
    points: [
      "Procure goods with full approval workflow.",
      "Track vendor quotations and orders.",
    ],
  },
  {
    icon: <FaFileSignature />,
    title: "E-Tendering",
    points: [
      "Online bidding and tender process automation.",
      "Supports vendor registration and tracking.",
    ],
  },
  {
    icon: <FaBox />,
    title: "Store Management System",
    points: [
      "Track stock movement and reorder alerts.",
      "Auto-generate reports and consumption logs.",
    ],
  },
  {
    icon: <FaBook />,
    title: "Research Management System",
    points: [
      "Manage research projects, proposals, and grants.",
      "Track publications and compliance.",
    ],
  },
  {
    icon: <FaTools />,
    title: "Construction Management System",
    points: [
      "Plan, track and budget construction works.",
      "Monitor progress, resources and vendors.",
    ],
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Student Counseling & Placement",
    points: [
      "Track student guidance, interviews and offers.",
      "Connect students with recruiters easily.",
    ],
  },
  {
    icon: <FaHotel />,
    title: "Hostel & Guest House Management",
    points: [
      "Assign rooms, track visitors and fees.",
      "Manage guest house reservations and logistics.",
    ],
  },
  {
    icon: <FaBook />,
    title: "Library Management System",
    points: [
      "Issue/return tracking, catalog and fines.",
      "Digital library and search features.",
    ],
  },
  {
    icon: <FaFileAlt />,
    title: "File Management System",
    points: [
      "Digitize and organize institutional documents.",
      "Quick retrieval and role-based access.",
    ],
  },
  {
    icon: <FaFileInvoice />,
    title: "E-Filing & Proposal Management",
    points: [
      "Submit proposals and reports electronically.",
      "Track status, feedback, and history.",
    ],
  },
  {
    icon: <FaMailBulk />,
    title: "Local Mailing System",
    points: [
      "Internal communication across departments.",
      "Secure and trackable message delivery.",
    ],
  },
  {
    icon: <FaAddressCard />,
    title: "Reception Management",
    points: [
      "Manage front desk, visitor logs, and bookings.",
      "Print passes and notify departments.",
    ],
  },
  {
    icon: <FaTools />,
    title: "Compliant Repair & Maintenance",
    points: [
      "Log and resolve repair requests efficiently.",
      "Track completion, vendor, and SLA.",
    ],
  },
  {
    icon: <FaUsersCog />,
    title: "User Management System",
    points: [
      "Create and control user roles and access rights.",
      "Enable secure login and role-based features.",
    ],
  },
];





const UniversityAutomation = () => {


  return (
    <>
     <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://www.shutterstock.com/image-photo/man-look-dashboard-graphs-charts-600nw-2440357647.jpg"
        alt="University Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay for better contrast (optional) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
        <div className="text-white max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            University Management System Software
          </h1>
          <p className="text-lg md:text-xl text-green-400 font-semibold mt-4">
            Robust, All-Inclusive & Scalable ERP Solution for Streamlining Universities
          </p>
          <p className="text-gray-200 mt-3">
            Enables flawless management of all academic and non-academic activities
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
            REQUEST A QUICK DEMO TODAY!
          </button> 
        </div>
      </div>
      
        {/*new section for functionality*/}
<section className="bg-white px-4 md:px-12 lg:px-20 py-16 text-gray-800 mt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
          University Management System Features and Functionalities
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg">
          Our solution empowers universities with efficient modules that enhance administration,
          automate academics, and ensure transparent performance and decision-making.
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
    {/*new section */ }


    {/*new section*/}

<section className="bg-gradient-to-br from-blue-100 via-red-100 to-green-100 py-16 px-4 md:px-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
      How Mohitraj Research Tech Empowers Businesses to Scale
    </h2>
    <p className="text-gray-700 max-w-3xl mx-auto mt-2">
      With our intelligent software platforms, Mohitraj Research Tech Pvt. Ltd. enables businesses to automate
      operations, streamline project delivery, and enhance workforce productivity — all from a single connected ecosystem.
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

{/*new section */ }



    <section className="px-4 md:px-12 lg:px-20 py-20 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* ✅ Top Banner Image */}
    <div className="mb-12">
      <img
        src="https://www.bannerbuzz.co.uk/blog/wp-content/uploads/2023/09/Rigid-Signs-2-1024x441.webp"
        alt="University Automation Banner"
        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
      />
    </div>

    {/* Main Grid */}
    <div className="flex flex-col lg:flex-row gap-12 items-start">
      
      {/* Left Content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 relative group inline-block">
          <span className="hover:text-red-600 transition-all duration-300">
            Why Choose Mohitraj University Automation Software?
          </span>
        </h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
          Mohitraj Research Tech Pvt. Ltd. offers future-ready University Automation Software designed to
          transform traditional campus operations into a digital-first, data-driven experience. Our intelligent
          systems empower institutions to streamline administration, improve compliance, and enhance student outcomes.
        </p>
        <h4 className="font-semibold text-lg text-blue-800 mb-2">Here’s what makes us stand out:</h4>
        <ul className="list-disc list-inside mt-3 text-gray-800 space-y-2">
          <li>Smart automation from admissions to alumni</li>
          <li>Real-time data for decision-making</li>
          <li>Modular, scalable, and customizable architecture</li>
          <li>Fully cloud-enabled and secure access</li>
        </ul>
      </div>

      {/* Right Cards */}
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: "⚙️",
            title: "Centralized Campus Ops",
            desc: "All academic and administrative functions under one seamless platform.",
          },
          {
            icon: "📚",
            title: "Smart Academic Tracking",
            desc: "Monitor student lifecycle, attendance, marks, and academic progress with ease.",
          },
          {
            icon: "🔐",
            title: "Role-Based Access & Security",
            desc: "Enable secure logins with defined user roles for staff, admin, and students.",
          },
          {
            icon: "📊",
            title: "Powerful Analytics",
            desc: "Generate insightful reports and dashboards that support smart decisions.",
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

{/*new section */}
{/* Products Showcase Slider Section */}
<section className="bg-white py-20 px-4 md:px-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
    Our Featured University Software Solutions
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

{}
<section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
      Key Benefits of Mohitraj University Automation Software
    </h2>
    <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto mb-10">
      Empower your institution with scalable, secure and intelligent digital infrastructure
      for academic and administrative excellence.
    </p>
  </div>

  {/* Glassy Card */}
  <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8">
    <ol className="list-decimal list-inside space-y-4 text-left">
      {[
        "Streamlined admission to alumni management with zero paperwork.",
        "Real-time student performance and attendance tracking.",
        "Cloud-based secure data access for staff and students.",
        "Automated examination, grading & results generation.",
        "Smart dashboards for decision-makers and administrators.",
        
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
    
      <section className="bg-red-600 bg-dotted-pattern text-white py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Digitally Transform Your Organization with Mohitraj?
      </h2>
      <p className="max-w-3xl mx-auto text-base md:text-lg mb-6">
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