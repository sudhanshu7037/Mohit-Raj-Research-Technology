import React from "react";
import Image from "../../assets/digitalmarketingimg.png"; 

import {
  FaUniversity,
  FaCogs,
  FaSchool,
  FaLaptopCode,
  FaFileAlt,
  FaChalkboardTeacher,
  FaBook,
  FaNetworkWired,
} from "react-icons/fa";

const educationSoftwareList = [
  {
    title: "University Automation Software",
    icon: <FaUniversity />,
    link: "/university-automation",
  },
  {
    title: "Engineering College Management and Information System",
    icon: <FaCogs />,
    link: "/engineering-college-management",
  },
  {
    title: "College/Institute Management Systems",
    icon: <FaSchool />,
    link: "/college-management",
  },
  {
    title: "School Management System",
    icon: <FaChalkboardTeacher />,
    link: "/school-management",
  },
  {
    title: "Online Examination Management System",
    icon: <FaFileAlt />,
    link: "/online-examination",
  },
  {
    title: "Entrance Exam Management and Information System",
    icon: <FaLaptopCode />,
    link: "/entrance-exam-management",
  },
  {
    title: "Smart Learning & Content Management System (SLCMS)",
    icon: <FaNetworkWired />,
    link: "/slcms",
  },
  {
    title: "Library Management System",
    icon: <FaBook />,
    link: "/library-management",
  },
];


const universityAutomationModules = [
  { icon: "📚", title: "Student Information System", description: "Manage student records and profiles efficiently." },
  { icon: "🧑‍🏫", title: "Staff & Payroll Mgmt", description: "Streamline staff management and payroll processes." },
  { icon: "📝", title: "Online Admission & Result", description: "Automate admissions and result processing." },
  { icon: "📅", title: "Timetable & Attendance Mgmt", description: "Schedule and track attendance seamlessly." },
  { icon: "💸", title: "Fee Collection System", description: "Simplify fee collection and tracking." },
  { icon: "🏫", title: "Hostel & Transport Mgmt", description: "Manage hostel and transport services." },
  { icon: "📖", title: "Library Automation", description: "Automate library operations and resources." },
  { icon: "📲", title: "Parent & Student Portals", description: "Provide access to parents and students." },
  
];

const Education = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white py-20 px-4 sm:px-8 md:px-16 lg:px-24 mt-20">
        {/* ✅ mt-20 added for top margin */}

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            EDUCATION SOFTWARE DEVELOPMENT
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-8">
            Revolutionizing learning with AI-driven personalization, Learning
            Management Systems (LMS), virtual classrooms, student performance
            analytics, and digital content delivery.
          </p>
          <button className="text-sm sm:text-base md:text-lg font-semibold border-2 border-orange-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-orange-500 transition-all duration-300">
            HIRE EDUCATION SOFTWARE DEVELOPERS
          </button>
        </div>

        {/* ✅ Background Overlay with Icon */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={Image} // ✅ FIXED: Remove `.png` from here
            alt="Education Software Background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* === Section 2: Highlight Banner === */}
      <section className="bg-orange-50 py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
        <p className="text-xl md:text-2xl font-medium text-blue-800 max-w-4xl mx-auto">
          Smart learning management systems, virtual classrooms, and personalized education platforms – we develop it all.
        </p>
      </section>

     <section className="bg-blue-100 text-gray-800 py-8 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-blue-900">
      Our Education Software Modules
    </h2>
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
      {educationSoftwareList.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center text-center text-sm p-3 border rounded bg-white hover:shadow transition"
        >
          <div className="text-2xl text-blue-600 mb-2">{item.icon}</div>
          <p className="font-medium text-gray-700 mb-2">{item.title}</p>
          <button
            onClick={() => navigate(item.link)}
            className="text-xs bg-orange-500 text-white px-3 py-1 rounded-full hover:bg-blue-900 transition"
          >
            Read
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* === Section: University Automation Highlight === */}
      <section className="bg-blue-900 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mb-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">University Automation Software</h2>
          <p className="text-lg md:text-xl mb-8">The university automation market has surpassed 50 billion dollars and is growing at over 10% CAGR. With the aim of ensuring efficient university operations, we deliver a comprehensive system that automates admissions, fees, course management, and exam results, enhancing the educational experience for all stakeholders.</p>
        </div>
        {/* === Sub-Section: Key Modules Grid === */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
          <h3 className="text-2xl md:text-3xl font-bold text-red-900 text-center mb-8">Campus Digitalization Componant</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {universityAutomationModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-red-200 text-blue-900 p-6 rounded-lg shadow-lg hover:bg-blue-800 hover:text-white transition duration-300 transform hover:scale-105"
              >
                <p className="text-xl mb-2">{module.icon} {module.title}</p>
                <p className="text-sm">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* === Section: Universities & Colleges We Serve === */}
      <section className="bg-red-200 py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">🏛️ Universities & Colleges We Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="bg-white text-blue-800 p-4 rounded-lg shadow-md hover:bg-blue-800 hover:text-white transition duration-300 transform hover:scale-105">
            <p className="text-lg font-semibold">Government Univ</p>
          </div>
          <div className="bg-white text-blue-800 p-4 rounded-lg shadow-md hover:bg-blue-800 hover:text-white transition duration-300 transform hover:scale-105">
            <p className="text-lg font-semibold">Private Colleges</p>
          </div>
          <div className="bg-white text-blue-800 p-4 rounded-lg shadow-md hover:bg-blue-800 hover:text-white transition duration-300 transform hover:scale-105">
            <p className="text-lg font-semibold">Distance Learning</p>
          </div>
          <div className="bg-white text-blue-800 p-4 rounded-lg shadow-md hover:bg-blue-800 hover:text-white transition duration-300 transform hover:scale-105">
            <p className="text-lg font-semibold">Engineering</p>
          </div>
          <div className="bg-white text-blue-800 p-4 rounded-lg shadow-md hover:bg-blue-800 hover:text-white transition duration-300 transform hover:scale-105">
            <p className="text-lg font-semibold">Management</p>
          </div>
          <div className="bg-white text-blue-800 p-4 rounded-lg shadow-md hover:bg-blue-800 hover:text-white transition duration-300 transform hover:scale-105">
            <p className="text-lg font-semibold">Medical Colleges</p>
          </div>
        </div>
      </section>
      {/* === Section: Case Study Success Story === */}
      <section className="bg-blue-100 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-6">📊 Case Study Success Story</h2>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Discover how our university automation solutions have transformed educational institutions.
          Real-world examples showcase improved efficiency and student satisfaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Delhi University</h3>
            <p className="text-gray-700">Automated admissions reduced processing time by 40% in 2024.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">IIT Bombay</h3>
            <p className="text-gray-700">Enhanced exam result system improved accuracy by 30% as of July 2025.</p>
          </div>
        </div>
      </section>
      

      {/* === Section: Engineering College Management Highlight === */}
<section className="bg-gray-900 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mb-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Engineering College Management & Information System
    </h2>
    <p className="text-lg md:text-xl mb-8">
      Manage all academic and administrative tasks of engineering colleges with our centralized and automated solution. From curriculum to placements, everything is integrated.
    </p>
  </div>

  {/* === Sub-Section: Key Features === */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
    <h3 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-8">
      Specialized Modules for Engineering Institutes
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Curriculum Management', icon: '📘', description: 'Design, distribute, and track course curriculum digitally.' },
        { title: 'Lab Scheduling System', icon: '🧪', description: 'Manage lab slots, equipment and batch allocations.' },
        { title: 'Internship & Placement Portal', icon: '💼', description: 'Connect students with companies and track placement stats.' },
        { title: 'Department Analytics', icon: '📊', description: 'View real-time data on department performance and metrics.' }
      ].map((module, idx) => (
        <div
          key={idx}
          className="bg-blue-100 text-blue-900 p-6 rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition duration-300 transform hover:scale-105"
        >
          <p className="text-xl mb-2">{module.icon} {module.title}</p>
          <p className="text-sm">{module.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* === Section: Colleges We Serve === */}
<section className="bg-yellow-100 py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">🏫 Engineering Institutes We Serve</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {['IITs', 'NITs', 'Private Engineering Colleges', 'Autonomous Institutes', 'Technical Universities', 'Polytechnic Colleges'].map((name, idx) => (
      <div
        key={idx}
        className="bg-white text-blue-800 p-4 rounded-lg shadow-md hover:bg-gray-800 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <p className="text-lg font-semibold">{name}</p>
      </div>
    ))}
  </div>
</section>

{/* === Section: Engineering Case Studies === */}
<section className="bg-gray-200 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
    ⚙️ Engineering  College Success Stories
  </h2>
  <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
    Explore how our system transformed engineering education across various institutions.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-900 hover:shadow-xl transition duration-300 transform hover:-translate-y-2 ">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">IIT Kanpur</h3>
      <p className="text-gray-700  hover:text-white">
        Achieved 60% reduction in lab allocation conflicts using our scheduling module.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-900 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-blue-800 mb-2">NIT Trichy</h3>
      <p className="text-gray-700 hover:text-white">
        Improved placement coordination and reporting with built-in dashboards.
      </p>
    </div>
  </div>
</section>

{/* === Section: College/Institute Management Highlight === */}
<section className="bg-indigo-900 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mb-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      College/Institute Management Systems
    </h2>
    <p className="text-lg md:text-xl mb-8">
      Empower your college or institute with an integrated system that simplifies academic operations, enhances transparency, and boosts digital transformation across all departments.
    </p>
  </div>

  {/* === Sub-Section: Core Features === */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
    <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 text-center mb-8">
      Smart Modules for College Administration
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Departmental Coordination', icon: '🤝', description: 'Seamless interaction between all departments and admin.' },
        { title: 'Academic Calendar Planning', icon: '📆', description: 'Centralized yearly activity scheduling and tracking.' },
        { title: 'Student Feedback System', icon: '🗣️', description: 'Gather, analyze and act on real-time student feedback.' },
        { title: 'Performance Reports', icon: '📑', description: 'Generate academic, staff, and department-wise reports.' }
      ].map((module, idx) => (
        <div
          key={idx}
          className="bg-indigo-100 text-indigo-900 p-6 rounded-lg shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <p className="text-xl mb-2">{module.icon} {module.title}</p>
          <p className="text-sm">{module.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* === Section: Institutes We Serve === */}
<section className="bg-blue-300 py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6">🏫 Colleges & Institutes We Serve</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {['Arts Colleges', 'Science Colleges', 'Commerce Institutes', 'Autonomous Colleges', 'NAAC Accredited Institutes', 'Deemed Universities'].map((name, idx) => (
      <div
        key={idx}
        className="bg-white text-indigo-800 p-4 rounded-lg shadow-md hover:bg-indigo-800 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <p className="text-lg font-semibold">{name}</p>
      </div>
    ))}
  </div>
</section>

{/* === Section: College Case Studies === */}
<section className="bg-gray-300 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
  <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 hover:text-red-900 text-center mb-6">
    🏆 Real College Success Stories
  </h2>
  <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
    See how colleges across the country improved outcomes and reduced manual efforts through our integrated systems.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="bg-indigo-100 p-6 rounded-lg shadow-lg hover:bg-red-300 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-indigo-800 mb-2">St. Xavier's College</h3>
      <p className="text-gray-700">
        Improved inter-department communication and digitized internal workflows within 3 months.
      </p>
    </div>
    <div className="bg-indigo-50 p-6 rounded-lg shadow-lg hover:bg-red-300 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-indigo-800 mb-2">ABC Institute of Commerce</h3>
      <p className="text-gray-700">
        Automated report generation reduced administrative workload by 40% in the first year.
      </p>
    </div>
  </div>
</section>

{/* === Section: School Management Highlight === */}
<section className="bg-green-900 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mb-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      School Management System
    </h2>
    <p className="text-lg md:text-xl mb-8">
      A complete solution tailored for schools to manage admissions, classrooms, attendance, and parental communication effectively and digitally.
    </p>
  </div>

  {/* === Sub-Section: Core Modules === */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
    <h3 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-8">
      Core Modules for School Operations
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Student Enrollment', icon: '📝', description: 'Streamlined admission and registration process.' },
        { title: 'Class Timetable Builder', icon: '📅', description: 'Easily manage class and teacher schedules.' },
        { title: 'Attendance Tracking', icon: '✅', description: 'Monitor daily student attendance with alerts.' },
        { title: 'Parent Communication', icon: '📲', description: 'Keep parents informed via SMS and mobile app.' }
      ].map((module, idx) => (
        <div
          key={idx}
          className="bg-green-100 text-green-900 p-6 rounded-lg shadow-md hover:bg-green-700 hover:text-white transition duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <p className="text-xl mb-2">{module.icon} {module.title}</p>
          <p className="text-sm">{module.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* === Section: Schools We Serve === */}
<section className="bg-green-100 py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">🏫 Schools We Serve</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {['Public Schools', 'Private Schools', 'CBSE Schools', 'ICSE Schools', 'Kindergarten', 'Residential Schools'].map((name, idx) => (
      <div
        key={idx}
        className="bg-white text-green-800 p-4 rounded-lg shadow-md hover:bg-green-800 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <p className="text-lg font-semibold">{name}</p>
      </div>
    ))}
  </div>
</section>

{/* === Section: School Case Studies === */}
<section className="bg-gray-300 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
  <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-6">
    🌟 School Success Stories
  </h2>
  <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
    Learn how our system helped schools across regions reduce administrative effort and enhance communication with parents.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-green-800 mb-2">Sunrise Public School</h3>
      <p className="text-gray-700">
        Digitized attendance and SMS updates improved parent engagement by 50%.
      </p>
    </div>
    <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-green-800 mb-2">Green Valley ICSE</h3>
      <p className="text-gray-700">
        Online class timetable and homework portal enhanced academic planning.
      </p>
    </div>
  </div>
</section>
{/* === Section: Online Examination System === */}
<section className="bg-purple-900 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mb-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Online Examination Management System
    </h2>
    <p className="text-lg md:text-xl mb-8">
      Simplify your assessment process with secure, scalable and fully digital online examination solutions. Automate everything from exam creation to result publishing.
    </p>
  </div>

  {/* === Sub-Section: Exam Features === */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
    <h3 className="text-2xl md:text-3xl font-bold text-purple-900 text-center mb-8">
      Key Features for Online Assessment
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Exam Scheduling', icon: '🗓️', description: 'Plan exams with customizable time slots and invigilator assignment.' },
        { title: 'Question Bank', icon: '📚', description: 'Upload and manage large pools of objective and subjective questions.' },
        { title: 'Secure Browser', icon: '🔒', description: 'Full-screen lockdown with camera tracking to prevent malpractice.' },
        { title: 'Auto Evaluation', icon: '📊', description: 'Auto-grade MCQs and generate results instantly with analytics.' }
      ].map((module, idx) => (
        <div
          key={idx}
          className="bg-purple-100 text-purple-900 p-6 rounded-lg shadow-md hover:bg-purple-700 hover:text-white transition duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <p className="text-xl mb-2">{module.icon} {module.title}</p>
          <p className="text-sm">{module.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* === Section: Exams We Power === */}
<section className="bg-purple-100 py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">📝 Exams We Support</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {['Semester Exams', 'Mock Tests', 'Entrance Tests', 'Skill Assessments', 'Certification Exams', 'Departmental Tests'].map((name, idx) => (
      <div
        key={idx}
        className="bg-white text-purple-800 p-4 rounded-lg shadow-md hover:bg-purple-800 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <p className="text-lg font-semibold">{name}</p>
      </div>
    ))}
  </div>
</section>

{/* === Section: Online Exam Case Studies === */}
<section className="bg-gray-300 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
  <h2 className="text-2xl md:text-3xl font-bold text-purple-900 text-center mb-6">
    🧠 Online Exam Success Stories
  </h2>
  <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
    Discover how institutions achieved transparent and efficient assessments using our online examination system.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="bg-purple-50 p-6 rounded-lg shadow-lg hover:bg-purple-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-purple-800 mb-2">Indus Institute of Technology</h3>
      <p className="text-gray-700">
        Conducted 10,000+ exams per semester with AI-based monitoring and instant evaluation.
      </p>
    </div>
    <div className="bg-purple-50 p-6 rounded-lg shadow-lg hover:bg-purple-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-purple-800 mb-2">Stellar Business School</h3>
      <p className="text-gray-700">
        Reduced administrative burden by 65% with automated scheduling and grading.
      </p>
    </div>
  </div>
</section>

{/* === Section: Entrance Exam Management System === */}
<section className="bg-orange-900 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mb-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Entrance Exam Management & Information System
    </h2>
    <p className="text-lg md:text-xl mb-8">
      Seamlessly manage the complete entrance exam lifecycle – from candidate registration and slot booking to secure test delivery and merit-based results publishing.
    </p>
  </div>

  {/* === Sub-Section: Entrance Features === */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
    <h3 className="text-2xl md:text-3xl font-bold text-orange-900 text-center mb-8">
      Features for Entrance Exam Automation
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Candidate Registration', icon: '🧾', description: 'Simple online registration with document upload and mobile/email verification.' },
        { title: 'Admit Card & Slot Booking', icon: '🎟️', description: 'Download hall tickets and self-book slots with center allocation logic.' },
        { title: 'Online/Offline Exam Support', icon: '🖥️', description: 'Deliver exams securely via CBT or physical paper setup.' },
        { title: 'Merit List Generation', icon: '📑', description: 'Auto-publish results and rank list with cut-off analytics.' }
      ].map((module, idx) => (
        <div
          key={idx}
          className="bg-orange-100 text-orange-900 p-6 rounded-lg shadow-md hover:bg-orange-700 hover:text-white transition duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <p className="text-xl mb-2">{module.icon} {module.title}</p>
          <p className="text-sm">{module.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* === Section: Exams Covered === */}
<section className="bg-orange-100 py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6">🎯 Types of Entrance Exams</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {['Engineering Entrances', 'Medical Entrances', 'Law & Management Exams', 'University Level Tests', 'Distance Admission Tests', 'Polytechnic/CET'].map((name, idx) => (
      <div
        key={idx}
        className="bg-white text-orange-800 p-4 rounded-lg shadow-md hover:bg-orange-800 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <p className="text-lg font-semibold">{name}</p>
      </div>
    ))}
  </div>
</section>

{/* === Section: Entrance Exam Case Studies === */}
<section className="bg-gray-300 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
  <h2 className="text-2xl md:text-3xl font-bold text-orange-900 text-center mb-6">
    🏆 Entrance Exam Success Stories
  </h2>
  <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
    Real examples of how our system helped universities digitize entrance exams with security and efficiency.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="bg-orange-50 p-6 rounded-lg shadow-lg hover:bg-orange-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-orange-800 mb-2">MCRP University CET</h3>
      <p className="text-gray-700">
        Enabled slot-based scheduling and instant merit ranking for over 20,000 candidates.
      </p>
    </div>
    <div className="bg-orange-50 p-6 rounded-lg shadow-lg hover:bg-orange-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-orange-800 mb-2">JST University Entrance</h3>
      <p className="text-gray-700">
        Shifted completely online with secure proctoring and zero-paper admit cards.
      </p>
    </div>
  </div>
</section>
{/* === Section: Smart Learning & Content Management System (SLCMS) === */}
<section className="bg-indigo-900 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mb-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Smart Learning & Content Management System (SLCMS)
    </h2>
    <p className="text-lg md:text-xl mb-8">
      Empower digital learning experiences with SLCMS – a unified platform for managing e-content, virtual classes, assessments, and performance analytics.
    </p>
  </div>

  {/* === Sub-Section: SLCMS Capabilities === */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
    <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 text-center mb-8">
      Core Functionalities of SLCMS
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Digital Content Library', icon: '📖', description: 'Organize and share multimedia learning materials with secure access control.' },
        { title: 'Live/Recorded Classes', icon: '🎥', description: 'Conduct real-time virtual classes or upload recorded lessons for later access.' },
        { title: 'Integrated Assessments', icon: '📝', description: 'Conduct quizzes, MCQs, assignments, and auto-evaluate student understanding.' },
        { title: 'Student Progress Tracking', icon: '📈', description: 'Detailed dashboards with performance, attendance, and engagement analytics.' }
      ].map((feature, idx) => (
        <div
          key={idx}
          className="bg-indigo-100 text-indigo-900 p-6 rounded-lg shadow-md hover:bg-indigo-700 hover:text-white transition duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <p className="text-xl mb-2">{feature.icon} {feature.title}</p>
          <p className="text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* === Section: Who Benefits from SLCMS === */}
<section className="bg-indigo-100 py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6">🎓 Ideal for These Learning Environments</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {['Higher Education', 'Online Academies', 'Coaching Institutes', 'Distance Learning', 'Corporate Training', 'Skill Development'].map((name, idx) => (
      <div
        key={idx}
        className="bg-white text-indigo-800 p-4 rounded-lg shadow-md hover:bg-indigo-800 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <p className="text-lg font-semibold">{name}</p>
      </div>
    ))}
  </div>
</section>

{/* === Section: SLCMS Case Studies === */}
<section className="bg-gray-300 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
  <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 text-center mb-6">
    🌟 SLCMS Implementation Results
  </h2>
  <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
    Explore how institutions are enhancing teaching outcomes and learner satisfaction through smart content delivery.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="bg-indigo-50 p-6 rounded-lg shadow-lg hover:bg-indigo-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-indigo-800 mb-2">TechVarsity Online</h3>
      <p className="text-gray-700">
        Launched 200+ recorded courses with integrated assessments, improving learner completion rate by 60%.
      </p>
    </div>
    <div className="bg-indigo-50 p-6 rounded-lg shadow-lg hover:bg-indigo-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-indigo-800 mb-2">Global Engineering Academy</h3>
      <p className="text-gray-700">
        Reduced content duplication and admin effort by 40% using centralized material repositories.
      </p>
    </div>
  </div>
</section>

{/* === Section: Library Management System === */}
<section className="bg-green-900 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 mb-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Library Management System
    </h2>
    <p className="text-lg md:text-xl mb-8">
      Automate library operations with smart digital systems that streamline book management, user access, digital lending, and analytics.
    </p>
  </div>

  {/* === Sub-Section: Library Features === */}
  <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white">
    <h3 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-8">
      Key Features of Library Management
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: 'Catalog Management', icon: '📚', description: 'Maintain digital records of all library assets with easy search and categorization.' },
        { title: 'Membership Handling', icon: '🧑‍💼', description: 'Track issue/return history, fines, and usage patterns of library members.' },
        { title: 'eBook Access', icon: '💻', description: 'Enable users to read and borrow eBooks and journals digitally.' },
        { title: 'Barcode & RFID Integration', icon: '🏷️', description: 'Speed up check-ins and check-outs with smart tagging and scanning.' }
      ].map((feature, idx) => (
        <div
          key={idx}
          className="bg-green-100 text-green-900 p-6 rounded-lg shadow-md hover:bg-green-700 hover:text-white transition duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <p className="text-xl mb-2">{feature.icon} {feature.title}</p>
          <p className="text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* === Section: Library Use-Cases === */}
<section className="bg-green-100 py-10 px-4 sm:px-8 md:px-16 lg:px-24 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-6">📘 Library Applications Across Institutions</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {['School Libraries', 'College/University Libraries', 'Research Libraries', 'Distance Learning Access Points', 'Digital Archives', 'Departmental Libraries'].map((name, idx) => (
      <div
        key={idx}
        className="bg-white text-green-800 p-4 rounded-lg shadow-md hover:bg-green-800 hover:text-white transition duration-300 transform hover:scale-105"
      >
        <p className="text-lg font-semibold">{name}</p>
      </div>
    ))}
  </div>
</section>

{/* === Section: Library Case Studies === */}
<section className="bg-gray-300 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
  <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-6">
    📗 Library System Implementation Stories
  </h2>
  <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto">
    Discover how libraries modernized access and reduced manual work through our digital solutions.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-green-800 mb-2">National Science Library</h3>
      <p className="text-gray-700">
        Reduced physical paperwork by 75% using RFID tagging and digital records.
      </p>
    </div>
    <div className="bg-green-50 p-6 rounded-lg shadow-lg hover:bg-green-100 hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-green-800 mb-2">City Engineering College</h3>
      <p className="text-gray-700">
        Implemented eBook borrowing and catalog search, improving student satisfaction by 50%.
      </p>
    </div>
  </div>
</section>

{/*why choose our software*/}



<section className="bg-gradient-to-r from-yellow-50 to-orange-100 text-gray-900 py-20 px-4 sm:px-8 md:px-16 lg:px-24">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-4">
      Why Choose Our Software
    </h2>
    <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
      Discover the reasons why our education software suite is trusted by top universities and colleges for campus-wide digital transformation.
    </p>
    <div className="space-y-6">
      {[
        {
          icon: '🧩',
          title: 'Modular Architecture',
          description: 'Pick only the modules you need, from ERP to LMS, and scale as you grow.'
        },
        {
          icon: '⚙️',
          title: 'Seamless Integration',
          description: 'Easily integrates with biometric, payment gateways, and national education portals.'
        },
        {
          icon: '📱',
          title: 'Mobile First Approach',
          description: 'Fully responsive and mobile-compatible interfaces for on-the-go access.'
        },
        {
          icon: '📉',
          title: 'Reduce Manual Workload',
          description: 'Digitize repetitive tasks, reduce paperwork, and optimize resources.'
        },
        {
          icon: '📢',
          title: 'Improved Communication',
          description: 'Built-in messaging, circulars, notifications, and announcements across modules.'
        },
        {
          icon: '📦',
          title: 'One Vendor. One Solution.',
          description: 'Avoid fragmented systems – get everything under one integrated platform.'
        }
      ].map((feature, idx) => (
        <div
          key={idx}
          className="group bg-blue-100 border-l-8 border-orange-400 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300 w-full md:w-2/3 mx-auto"
        >
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{feature.icon}</div>
          <h3 className="text-lg font-semibold text-orange-800 mb-1">{feature.title}</h3>
          <p className="text-gray-700 text-sm leading-snug">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>






    </>
  );
};

export default Education;
