import React, { useState } from 'react';
import {
  FaHospitalAlt,
  FaUserMd,
  FaNotesMedical,
  FaShieldAlt,
  FaCogs,
  FaSyncAlt,
  FaServer,
  FaNetworkWired,
  FaLaptopMedical,
  FaBed,
  FaCapsules,
  FaFileInvoiceDollar,
  FaCalculator,
  FaBoxes,
  FaUsersCog,
  FaIdCardAlt,
  FaProcedures,
  FaHeartbeat,
  FaVials,
  FaStethoscope,
  FaUniversity,
  FaRegClipboard,
  FaUserGraduate,
  FaIdCard,
  FaFileAlt,
  FaChartBar,
  FaMoneyCheckAlt,
  FaBalanceScale,
  FaCalendarAlt,
  FaClock,
  FaUserShield,
  FaBuilding,
  FaLaptopCode,
  FaFlask,
  FaUserCheck,
  FaShoppingCart,
  FaBook,
  FaFileMedical,
  FaClinicMedical,
  FaUserNurse,
  FaMicroscope,
  FaPills,
  FaTasks,
  FaStore
} from 'react-icons/fa';

import { MdOutlineMedicalServices } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import BannerImage from "../../../assets/produtspage/medical/images/hospitalandbanner.png"


const features = [
  {
    icon: <FaUniversity size={50} className="text-indigo-600" />,
    title: "Vice Chancellor office Management",
    points: [
      "Streamlined administrative decision-making tools.",
      "Dashboard for real-time performance & notifications.",
    ],
  },
  {
    icon: <FaRegClipboard size={50} className="text-indigo-600" />,
    title: "Registrar office Management",
    points: [
      "Centralized data of student records & faculty.",
      "Manage approvals, notifications, and official documents.",
    ],
  },
  {
    icon: <FaUserGraduate size={50} className="text-indigo-600" />,
    title: "Student Admission Management",
    points: [
      "Online application, screening & selection process.",
      "Track seat allotments, merit lists, and status.",
    ],
  },
  {
    icon: <FaIdCard size={50} className="text-indigo-600" />,
    title: "Student Information Management",
    points: [
      "Maintain academic, personal, and financial records.",
      "Quick access to student performance and documents.",
    ],
  },
  {
    icon: <FaFileAlt size={50} className="text-indigo-600" />,
    title: "Examination management system",
    points: [
      "Exam scheduling, hall ticket, and result generation.",
      "Online/offline exam support with security features.",
    ],
  },
  {
    icon: <FaChartBar size={50} className="text-indigo-600" />,
    title: "Result analysis & processing Management",
    points: [
      "Automated marks processing and result publishing.",
      "Statistical result analysis for performance tracking.",
    ],
  },
  {
    icon: <FaMoneyCheckAlt size={50} className="text-indigo-600" />,
    title: "Account & Finance Management",
    points: [
      "Manage income, expenses, and fee payments.",
      "Generate financial reports and audit trails.",
    ],
  },
  {
    icon: <FaBalanceScale size={50} className="text-indigo-600" />,
    title: "Budget Management",
    points: [
      "Track annual and departmental budgets.",
      "Forecasting tools with allocation workflows.",
    ],
  },
  {
    icon: <FaUsersCog size={50} className="text-indigo-600" />,
    title: "Employee Management & Information System",
    points: [
      "Manage employee records and job profiles.",
      "Track promotions, transfers, and qualifications.",
    ],
  },
  {
    icon: <FaCalendarAlt size={50} className="text-indigo-600" />,
    title: "Employee Leave Management",
    points: [
      "Automate leave requests, approvals, and balances.",
      "Real-time visibility into department availability.",
    ],
  },
  {
    icon: <FaClock size={50} className="text-indigo-600" />,
    title: "Employee attendance Management",
    points: [
      "Biometric or digital attendance tracking system.",
      "Generate daily, weekly & monthly reports.",
    ],
  },
  {
    icon: <FaUserShield size={50} className="text-indigo-600" />,
    title: "Employee Administration & Monitoring",
    points: [
      "Track job responsibilities and task management.",
      "Monitor employee performance and activities.",
    ],
  },
  {
    icon: <FaBuilding size={50} className="text-indigo-600" />,
    title: "College & department management",
    points: [
      "Manage departmental structure and responsibilities.",
      "Track faculty, infrastructure, and course allocations.",
    ],
  },
  {
    icon: <FaLaptopCode size={50} className="text-indigo-600" />,
    title: "Learning Management System",
    points: [
      "Host and manage courses, assignments & quizzes.",
      "Monitor student progress and course engagement.",
    ],
  },
  {
    icon: <FaFlask size={50} className="text-indigo-600" />,
    title: "Laboratory Management",
    points: [
      "Track lab equipment, usage, and maintenance.",
      "Manage lab bookings and safety compliance.",
    ],
  },
  {
    icon: <FaUserCheck size={50} className="text-indigo-600" />,
    title: "Student Attendance Management",
    points: [
      "Track daily attendance with alerts for defaulters.",
      "Support for manual and biometric entry.",
    ],
  },
  {
    icon: <FaShoppingCart size={50} className="text-indigo-600" />,
    title: "Store & Purchase Management system",
    points: [
      "Manage inventory, suppliers, and purchase orders.",
      "Track consumption, requests, and deliveries.",
    ],
  },
  {
    icon: <FaBook size={50} className="text-indigo-600" />,
    title: "Library Management System",
    points: [
      "Catalog books, track issues/returns, and fines.",
      "Searchable digital library with user portal.",
    ],
  },
  {
    icon: <FaFileInvoiceDollar size={50} className="text-indigo-600" />,
    title: "Tax Management System",
    points: [
      "Track institutional taxes, returns, and compliance.",
      "Generate automated tax reports and summaries.",
    ],
  },
];

const featureshospital = [
  {
    icon: <FaUserShield size={50} className="text-indigo-600" />,
    title: "Director Office Management",
    points: [
      "Centralized oversight of all hospital departments and operations.",
      "Performance dashboards, reporting, and compliance monitoring.",
    ],
  },
  {
    icon: <FaFileMedical size={50} className="text-indigo-600" />,
    title: "Patient Registrar Models",
    points: [
      "Patient registration, demographics, and identification digitized.",
      "Quick search, unique ID generation, and history tracking.",
    ],
  },
  {
    icon: <FaClinicMedical size={50} className="text-indigo-600" />,
    title: "OPD Management",
    points: [
      "Manage walk-in patients, appointment scheduling, and doctor allocation.",
      "Medical records, billing, and prescriptions integrated.",
    ],
  },
  {
    icon: <FaProcedures size={50} className="text-indigo-600" />,
    title: "IPD Management",
    points: [
      "Track admitted patients, room assignments, and progress notes.",
      "Integrated with nursing, pharmacy, and billing workflows.",
    ],
  },
  {
    icon: <FaHospitalAlt size={50} className="text-indigo-600" />,
    title: "Emergency/Casualty Management",
    points: [
      "Handle emergency admissions, triage, and real-time status updates.",
      "Prioritized workflows for critical patient handling.",
    ],
  },
  {
    icon: <FaUserMd size={50} className="text-indigo-600" />,
    title: "Doctors Workbench",
    points: [
      "Unified dashboard for patient lists, lab results, and prescriptions.",
      "Supports e-prescriptions, documentation, and scheduling.",
    ],
  },
  {
    icon: <FaStethoscope size={50} className="text-indigo-600" />,
    title: "OPD/IPD/Casualty Consultation",
    points: [
      "Consultation notes, clinical findings, and diagnosis logging.",
      "Template-driven documentation and follow-up scheduling.",
    ],
  },
  {
    icon: <FaUserNurse size={50} className="text-indigo-600" />,
    title: "Nursing & Supporting Staff Management",
    points: [
      "Shift scheduling, patient care tracking, and task assignments.",
      "Daily activity logs and documentation.",
    ],
  },
  {
    icon: <FaBed size={50} className="text-indigo-600" />,
    title: "Bed & Ward Management",
    points: [
      "Real-time bed occupancy tracking and ward allocation.",
      "Ward transfer, discharge summary, and cleaning cycle logging.",
    ],
  },
  {
    icon: <FaMicroscope size={50} className="text-indigo-600" />,
    title: "Diagnosis Management",
    points: [
      "Standardized diagnosis coding and categorization.",
      "Supports clinical decision-making and statistical analysis.",
    ],
  },
  {
    icon: <FaNotesMedical size={50} className="text-indigo-600" />,
    title: "Procedure Management",
    points: [
      "Schedule and log procedures across departments.",
      "Pre-op, intra-op, and post-op details integrated.",
    ],
  },
  {
    icon: <FaLaptopMedical size={50} className="text-indigo-600" />,
    title: "OT Management",
    points: [
      "OT scheduling, equipment preparation, and surgeon availability.",
      "Sterilization logs and surgery documentation.",
    ],
  },
  {
    icon: <FaPills size={50} className="text-indigo-600" />,
    title: "Pharmacy Management",
    points: [
      "Stock monitoring, drug dispensing, and prescription linking.",
      "Expiry alerts and procurement integration.",
    ],
  },
  {
    icon: <FaVials size={50} className="text-indigo-600" />,
    title: "Laboratory Management",
    points: [
      "Test order tracking, sample collection, and result generation.",
      "Reports auto-linked with patient records.",
    ],
  },
  {
    icon: <FaMoneyCheckAlt size={50} className="text-indigo-600" />,
    title: "Financial Accounting & Hospital Budgeting",
    points: [
      "Manage hospital accounts, income/expense tracking.",
      "Supports budgeting, forecasting, and audits.",
    ],
  },
  {
    icon: <FaUsersCog size={50} className="text-indigo-600" />,
    title: "Human Resource Management",
    points: [
      "HR records, payroll, attendance, and leaves management.",
      "Employee lifecycle tracking and document handling.",
    ],
  },
  {
    icon: <FaTasks size={50} className="text-indigo-600" />,
    title: "Task Schedule & Work Management",
    points: [
      "Daily task assignment and tracking across departments.",
      "Work calendars and notifications for due tasks.",
    ],
  },
  {
    icon: <FaStore size={50} className="text-indigo-600" />,
    title: "Store & Purchase Management",
    points: [
      "Inventory tracking, purchase orders, and vendor management.",
      "Auto-replenishment based on stock levels.",
    ],
  },
  {
    icon: <FaUserShield size={50} className="text-indigo-600" />,
    title: "Admin & User Management",
    points: [
      "Role-based access control for all users and staff.",
      "Audit logs, user activity, and permissions handling.",
    ],
  },
];




const departments = [
  "MBBS", "BDS", "Nursing", "Pharmacy", "Physiotherapy", "Allied Health Sciences"
];

const benefits = [
  "Streamlined administrative processes",
  "Biometric & RFID Integration",
  "Curriculum tracking as per NMC norms",
  "Secure cloud-based infrastructure",
  "Practical exposure tracking",
  "Real-time communication tools"
];

const lifecycle = [
  "Online Admission",
  "Timetable Scheduling",
  "Attendance Tracking",
  "Internal Assessments",
  "Clinical Rotations",
  "Final Exams",
  "Degree Issuance"
];
const analyticsImages = [
    {
      url: "https://psiborg.in/wp-content/uploads/2024/12/RHMS.webp",
      title: "Real-Time Patient Tracking",
      desc: "Track admitted patient status, room occupancy, and emergency updates."
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlE5e74WekEOVXKfxi1DQY_lluafU3NTW5AQ&s",
      title: "Clinical Reports",
      desc: "Live lab test summaries, imaging reports, and vitals."
    },
    {
      url: "https://www.projectmanager.com/wp-content/uploads/2024/05/portfolio-dashboard-screenshot-lightmode-1600x786.png",
      title: "Resource Utilization",
      desc: "Monitor hospital assets, medical supplies, and staff shifts."
    }
  ];
const medicalCollegewhychoose = [
  {
    title: "Academic & Clinical Sync",
    desc: "Unifies medical education with hospital training."
  },
  {
    title: "Digital Records",
    desc: "EMR integration for hands-on learning."
  },
  {
    title: "Faculty Coordination",
    desc: "Optimized scheduling & resource allocation."
  },
  {
    title: "Hospital Rounds Management",
    desc: "Assign & monitor clinical duties in real-time."
  },
  {
    title: "Admin Automation",
    desc: "Streamlines admissions, fees, and compliance."
  },
  {
    title: "Smart Dashboard",
    desc: "Live data for academics, exams & patient logs."
  }
];
const MedicalCollegeManagementandInformationSystem = () => {

   const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <>
    

      <div className="relative w-full h-screen">
      {/* Background Image */}
     <img
  src={BannerImage}
  alt="University Background"
  className="w-full h-[70vh] md:h-screen object-cover"
/>
      {/* Overlay for better contrast (optional) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
        <div className="text-white max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-houschka">
            Medical College Management & Information System
          </h1>
         
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
            REQUEST A QUICK DEMO TODAY!
          </button> 
        </div>
      </div>

      <section className="relative w-full py-24 bg-gradient-to-br from-blue-100 via-red-100 to-green-100 overflow-hidden">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-houschka">
      Medical College Management features and functionality
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto font-basis">
      Visual representation of MCMIS modules placed around a central core system.
    </p>
  </div>

  <div className="">
    


    {/* Outer Modules */}
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
  </div>
</section>




      <section className="relative w-full py-24 bg-gradient-to-br from-blue-100 via-red-100 to-green-100 overflow-hidden">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-houschka">
      Hospital Management features and functionality
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto font-basis">
      Visual representation of MCMIS modules placed around a central core system.
    </p>
  </div>

  <div className="">
    


    {/* Outer Modules */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {featureshospital.map((item, index) => (
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
  </div>
</section>




      {/* Department Support */}
      <section className="py-16 px-6  bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 font-houschka">Supported Departments & Clinical Integration</h2>
          <p className="text-gray-700 mb-6 font-basis">Our ERP is compatible with multiple departments and includes practical integration with OPD/IPD, lab systems, and clinical training.</p>
          <div className="flex flex-wrap justify-center gap-4 ">
            {departments.map((dept, i) => (
              <span key={i} className="bg-white border border-blue-200 px-4 py-2 rounded-full text-blue-800 font-medium hover:bg-blue-100 transition-colors duration-200">{dept}</span>
            ))}
          </div>
        </div>
      </section>

      
      
      {/* Student Lifecycle */}
      <section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
  <div className="max-w-7xl mx-auto text-center">

    {/* 🌈 Main Gradient Heading */}
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-pink-600 to-green-700 text-transparent bg-clip-text mb-12 font-houschka">
      Student Lifecycle Management
    </h2>

    {/* 📸 Banner Image */}
    <div className="mb-12">
      <img
        src="https://seleritysas.com/wp-content/uploads/2020/12/shutterstock_513707488.jpg"
        alt="student life cycle banner"
        className="w-full h-[450px] md:h-[550px] object-cover rounded-xl shadow-md"
      />
    </div>

    {/* 🔵 Lifecycle Steps */}
    <div className="py-10">
      <h3 className="text-3xl font-bold text-blue-900 mb-10 font-houschka">Student Lifecycle</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {lifecycle.map((step, i) => (
          <div
            key={i}
            className="bg-white hover:bg-blue-100 transition-all duration-200 shadow-md px-6 py-4 rounded-full text-blue-700 font-semibold border border-blue-200"
          >
            {step}
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

 {/* Analytics Section */}
      <section className="py-20 px-4 md:px-16 bg-blue-100">
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-900 font-houschka">
             Live Dashboard & Analytics
          </h2>
          <p className="text-gray-700 mt-2 max-w-3xl mx-auto font-basis">
            Get a live view of critical hospital data including patient activity, diagnostics, staff workflow, and resource utilization—all in one place.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Info */}
          <div className="md:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              {analyticsImages[activeIndex].title}
            </h2>
            <p className="text-gray-700">
              {analyticsImages[activeIndex].desc}
            </p>
          </div>

          {/* Slider */}
          <div className="w-full md:w-[650px] md:-ml-4">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              className="rounded-xl overflow-hidden shadow-lg"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {analyticsImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img.url}
                    alt={`Analytics ${index}`}
                    className="w-full h-[400px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-red-100">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-blue-900 text-xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
            what Our Client Say
          </h3>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      {/* 🧑‍⚕️ Testimonial 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksG4mm4xFN-Ufeaf1ZZ8ixWe2k4aZknK1MQ&s" // 🔁 Replace with your image link
            alt="Dean"
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <h4 className="font-semibold text-blue-800">— Dean, MedTech College</h4>
        </div>
        <p className="text-gray-700 font-basis">“We were able to automate our entire medical college workflow seamlessly. The clinical integration is top-notch.”</p>
      </div>

      {/* 👩‍💼 Testimonial 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg" // 🔁 Replace with your image link
            alt="Admin"
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <h4 className="font-semibold text-blue-800">— Admin, LifeCare Institute</h4>
        </div>
        <p className="text-gray-700 font-basis">“Our faculty and students find the dashboard very useful for tracking attendance and exam results.”</p>
      </div>

      {/* 🧑‍🏫 Testimonial 3 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/67.jpg" // 🔁 Replace with your image link
            alt="Principal"
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <h4 className="font-semibold text-blue-800">— Principal, Hope Medical College</h4>
        </div>
        <p className="text-gray-700">“It’s the most complete medical ERP system we’ve ever used. The support team is also very responsive.”</p>
      </div>

    </div>
  </div>
</section>
{/*new section*/}

{/* WHY CHOOSE US */}
<section className="py-20 px-4 md:px-16 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 font-houschka">
      Why Choose Our Medical College ERP?
    </h2>
    <div className="flex flex-wrap justify-center gap-10">
      {medicalCollegewhychoose.map((item, index) => (
        <div
          key={index}
          className="relative w-48 h-48 bg-blue-100 transform rotate-45 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="absolute text-center w-full transform -rotate-45">
            <h4 className="text-lg font-bold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600 px-2">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



{/*benefit*/}

<section className="w-full py-20 px-6 md:px-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-600 to-green-700 mb-6 font-houschka">
      Key Benefits of Smart Medical College Management System
    </h2>
    <p className="text-gray-700 text-lg mb-16 font-basis max-w-3xl mx-auto">
      Unlock streamlined operations, academic precision, and integrated hospital systems with our advanced medical college ERP.
    </p>

    {/* Benefits Grid */}
    <div className="grid gap-10 md:grid-cols-2">
      {[
        {
          title: "Centralized Academic Management",
          desc: "Automate curriculum, exam scheduling, internal assessments, and grading processes.",
        },
        {
          title: "Integrated Hospital Collaboration",
          desc: "Seamlessly link hospital data with student case studies, rounds, and clinical logs.",
        },
        {
          title: "Smart Attendance & Biometrics",
          desc: "Track attendance via biometric/RFID with real-time dashboards for faculty & students.",
        },
        {
          title: "Faculty Workload Optimization",
          desc: "Balance teaching loads, clinical duties, and research assignments intelligently.",
        },
        {
          title: "Laboratory & Equipment Tracking",
          desc: "Manage lab inventory, chemical usage, and equipment status efficiently.",
        },
        {
          title: "Student Lifecycle Automation",
          desc: "From admission to graduation — manage every phase digitally with minimal errors.",
        },
        {
          title: "Mobile & Portal Access",
          desc: "Empower students, faculty, and admin with secure access anytime, anywhere.",
        },
        {
          title: "Comprehensive Reporting",
          desc: "Instant insights with pre-built reports on academics, finance, hospital, and HR.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-green-50"
        >
          <h3 className="text-xl font-semibold text-blue-800 group-hover:text-green-700 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-700 group-hover:text-gray-900 transition duration-200">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/*new section */}





      {/* Final Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4 font-houschka">Start Managing Your Medical College Smarter</h2>
        <p className="mb-6 font-basis">Get in touch with us for a personalized demo and revolutionize your medical institution’s management.</p>
        <button className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:scale-105 hover:bg-gray-100 transition-transform">Book Free Demo</button>
      </section>
    </div>




    
    </>
  );
};

export default MedicalCollegeManagementandInformationSystem;
