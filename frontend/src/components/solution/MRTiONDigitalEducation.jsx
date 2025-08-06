import React, { useState, useEffect } from "react";


const slides = [
  {
    img: "/images/mrtion-university-automation.jpg",
    title: "University Management System",
    desc: "A comprehensive cloud-based solution by MRtion to manage academics, administration, finance, HR, and communication—all under one roof for universities and colleges.",
  },
  {
    img: "/images/mrtion-online-exam.jpg",
    title: "Online Examination System",
    desc: "MRtion's secure and scalable online examination platform enables seamless test creation, proctoring, and result evaluation—ideal for entrance and semester exams.",
  },
  {
    img: "/images/mrtion-smart-learning.jpg",
    title: "Smart Learning & Content Management",
    desc: "Deliver interactive digital content, live classes, and progress tracking through MRtion's smart LMS tailored for modern educational institutions.",
  },
  {
    img: "/images/mrtion-entrance-exam.jpg",
    title: "Entrance Exam Automation",
    desc: "Automate the entire admission testing process from application to merit list generation using MRtion’s entrance exam solution with AI-based evaluation.",
  },
  {
    img: "/images/mrtion-library.jpg",
    title: "Library Management System",
    desc: "Digitize and streamline your entire library operations—from cataloging to issue-return—with MRtion’s intuitive library system.",
  },
  {
    img: "/images/mrtion-alumni.jpg",
    title: "Alumni Engagement Portal",
    desc: "Foster lifelong connections with your alumni through MRtion’s alumni platform featuring events, donations, job boards, and networking opportunities.",
  },
];


const MRTiONDigitalEducation = () => {

   const [current, setCurrent] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(timer);
    }, [slides.length]);
  return (
   <>
   
   {/* Hero Section - Mrtion Digital Education */}
<section
  className="relative bg-cover bg-center text-white px-6 min-h-screen flex items-center"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/free-photo/school-online-education-home-concept_23-2150637080.jpg')", // Updated education-related background
  }}
>
  <div className="max-w-4xl z-10 text-left">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
      Welcome to <span className="text-yellow-300">Mrtion Digital Education</span>
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-xl">
      Empowering universities and colleges with smart, automated, and student-friendly digital solutions.
    </p>
    <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
      Discover the Future of Education
    </button>
  </div>
  <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
</section>

{/* Overview Section */}
<section className="py-16 px-6 text-center max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-4 text-blue-900">
    Why Mrtion Digital Education?
  </h2>
  <p className="text-lg text-gray-600">
    Mrtion transforms conventional academic environments by integrating cloud-based automation, AI-powered insights, and real-time access to resources for students, faculty, and administrators alike.
  </p>
</section>
{/* Mrtion Digital Education Solutions Section */}

<section className="bg-blue-50 py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Mrtion Digital Education Solutions
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Learning Management System (LMS)",
          desc: "Deliver online lectures, assignments, and course materials with real-time tracking of student progress."
        },
        {
          title: "Smart Classroom Integration",
          desc: "Enable hybrid teaching through smart boards, live video, and interactive content delivery."
        },
        {
          title: "Student Lifecycle Automation",
          desc: "From admissions to graduation, manage every stage of student data in one digital platform."
        },
        {
          title: "Digital Assessment & Certification",
          desc: "Conduct secure online exams, automate grading, and generate e-certificates instantly."
        },
        {
          title: "Parent & Student Mobile App",
          desc: "Bridge communication between institution and guardians with real-time updates and alerts."
        },
        {
          title: "AI-Based Performance Analytics",
          desc: "Use data insights to identify student trends, dropouts, and academic improvement areas."
        },
        {
          title: "Library & Digital Content Access",
          desc: "Access eBooks, video lectures, research papers, and journals in a unified digital library."
        },
        {
          title: "Virtual Labs & Simulation Tools",
          desc: "Offer hands-on practice through interactive simulations in science, tech, and healthcare."
        },
        {
          title: "Online Fee & Finance Management",
          desc: "Automate fee collection, refunds, scholarships, and generate detailed financial reports."
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative bg-white p-6 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
        >
          {/* Decorative Background Shape */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-tr-[80px] rotate-45 z-0 group-hover:bg-blue-300 transition-all duration-300"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-800 transition">
              {item.title}
            </h3>
            <p className="text-gray-700 group-hover:text-gray-100 transition duration-300">
              {item.desc}
            </p>
          </div>

          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-blue-800 opacity-0 group-hover:opacity-60 transition-all duration-300 z-0 rounded-xl pointer-events-none"></div>
        </div>
      ))}
    </div>
  </div>
</section>

{/*new section*/}
<section className="bg-blue-100 py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
      Features & Benefits of Mrtion Digital Education
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "AI-Powered LMS",
          desc: "Personalized learning paths and student performance insights with machine learning."
        },
        {
          title: "Smart Classroom Integration",
          desc: "Supports hybrid learning with digital whiteboards and attendance automation."
        },
        {
          title: "Student Lifecycle Management",
          desc: "Centralized control of admissions, academics, exams, and alumni records."
        },
        {
          title: "Online Exam & Proctoring",
          desc: "Secure, AI-enabled assessments with real-time monitoring and instant results."
        },
        {
          title: "Digital Content Repository",
          desc: "Access to video lectures, eBooks, notes, and interactive learning modules."
        },
        {
          title: "Virtual Admission Portal",
          desc: "End-to-end digital admission journey with virtual campus tours."
        },
        {
          title: "Faculty Analytics Dashboard",
          desc: "Track performance, engagement, and training needs of academic staff."
        },
        {
          title: "Parent-Student Communication",
          desc: "Stay connected via mobile app, SMS, notifications, and dashboards."
        },
        {
          title: "Cloud Security & Backup",
          desc: "Encrypted cloud storage ensuring 24/7 secure access and data recovery."
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative bg-white shadow-xl rounded-ss-[3rem] rounded-ee-[3rem] p-6 transition-all duration-300 hover:rotate-1 hover:scale-105 hover:bg-blue-50 group"
        >
          <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-20 blur-xl"></div>
          <div className="relative z-10">
            <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-indigo-600 transition">
              {item.title}
            </h3>
            <p className="text-gray-700 group-hover:text-gray-900 transition">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Workflow Section */}
<section className="bg-blue-50 py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Smart Campus Transformation Flow by Mrtion
  </h2>
  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
    {[
      "Enquiry & Counselling",
      "Digital Admission",
      "Smart Attendance",
      "AI-Powered Learning",
      "Online Exams & Evaluation",
      "Auto-Generated Results",
      "Certification & Alumni",
    ].map((step, i) => (
      <div
        key={i}
        className="bg-white p-6 rounded-full shadow-lg text-center hover:bg-blue-200 transition w-48"
      >
        <p className="font-semibold text-lg text-blue-900">{step}</p>
      </div>
    ))}
  </div>
</section>
{/* Departments Section */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Mrtion Solutions for Every Department
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "Engineering & Polytechnic Colleges",
      "Medical & Nursing Colleges",
      "Law & Management Institutes",
      "Research & PhD Departments",
      "Library, Labs & IT Infra",
      "Student Welfare & Training Cells",
    ].map((dept, i) => (
      <div
        key={i}
        className="p-6 bg-white shadow rounded-xl hover:bg-blue-100 transition"
      >
        <h3 className="font-semibold text-lg text-blue-900">{dept}</h3>
      </div>
    ))}
  </div>
</section>
{/* Why Choose Us Section */}
<section className="bg-gray-700 text-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-10">
    
    {/* Left Content */}
    <div className="flex flex-col justify-center min-h-full">
      <h2 className="text-3xl font-bold mb-6">Why Choose Mrtion?</h2>
      <ul className="space-y-4">
        {[
          "One-Stop Digital Campus Solution",
          "Customizable for All Departments",
          "AI-Based Learning & Analytics",
          "Paperless Admission to Certification",
          "Secure Cloud-Based Infrastructure",
          "Easy Integration with Govt. Portals",
          "24x7 Support & Training Programs",
        ].map((point, index) => (
          <li
            key={index}
            className="bg-white text-blue-900 px-6 py-4 rounded-xl shadow hover:bg-gray-100 transition font-semibold"
          >
            ✅ {point}
          </li>
        ))}
      </ul>
    </div>

    {/* Right Image */}
    <div className="h-full flex items-stretch">
      <img
        src="https://www.iese.edu/focused/wp-content/uploads/sites/11/2023/08/shutterstock_1717584028-scaled.jpg"
        alt="Why Choose Mrtion Illustration"
        className="w-full rounded-xl shadow-lg object-cover h-full"
      />
    </div>
  </div>
</section>
 
 {/* Product Slider Section */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
      MRtion’s Innovative EdTech & Automation Solutions
    </h2>
    <p className="text-gray-600 text-lg">
      Explore our real-time university automation systems transforming institutions into smart campuses.
    </p>
  </div>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <img
      src={slides[current].img}
      alt="MRtion Product Slide"
      className="rounded-3xl shadow-lg w-full h-auto"
    />
    <div>
      <h3 className="text-2xl font-bold text-red-600 mb-4">
        {slides[current].title}
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        {slides[current].desc}
      </p>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-20 px-6 bg-blue-100 text-center">
  <h2 className="text-3xl font-bold mb-4 text-blue-900">
    Ready to Elevate Your Campus with MRtion?
  </h2>
  <p className="mb-6 text-gray-700">
    Let MRtion guide your university’s digital transformation journey. Talk to our experts and schedule a personalized demo today.
  </p>
  <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">
    Book a Free Demo with MRtion
  </button>
</section>


   
   </>
  )
}

export default MRTiONDigitalEducation