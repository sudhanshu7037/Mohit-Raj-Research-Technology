import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://tse4.mm.bing.net/th/id/OIP.vvGcPvW9s3XgCcmwuv_moAHaEy?pid=Api&P=0&h=220",
    title: "Smart Attendance System",
    desc: "Real-time biometric and RFID-based attendance for students and faculty, integrated with academic records for instant tracking and reporting.",
  },
  {
    img: "https://i.ytimg.com/vi/zaBRtVkUguY/maxresdefault.jpg",
    title: "Online Examination Management",
    desc: "A secure platform for conducting medical theory and practical exams with AI-proctoring, instant evaluation, and analytics.",
  },
  {
    img: "https://tse3.mm.bing.net/th/id/OIP.yDYpS2p5JlF11_x-UvryTAHaDf?pid=Api&P=0&h=220",
    title: "Digital Learning Platform",
    desc: "Interactive e-learning tools tailored for medical education, offering 3D anatomy models, video lectures, and adaptive assessments.",
  },
  {
    img: "https://tse2.mm.bing.net/th/id/OIP.c1aNe6rPXmW6geyLxGMwOQHaD4?pid=Api&P=0&h=220",
    title: "Hospital ERP Integration",
    desc: "Seamlessly sync patient data, clinical training, and college admin with an all-in-one integrated hospital-college ERP system.",
  },
  {
    img: "https://i.pinimg.com/originals/e9/75/b5/e975b587bea65b0b94638d78a6c6ab7c.png",
    title: "Faculty and Staff Portal",
    desc: "A personalized dashboard for faculty with teaching schedules, performance analytics, student feedback, and HR integration.",
  },
];

const MedicalCollegeDigitalization = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white px-6 min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('https://i.ytimg.com/vi/NkHiRlZ2qzM/maxresdefault.jpg')",
        }}
      >
        <div className="max-w-4xl z-10 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Empowering Medical Through Digital Transformation
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Comprehensive IT Solutions for Modern Medical Management
          </p>
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Talk to Experts
          </button>
        </div>
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
      </section>

      {/* Second Section */}
      <section className="bg-white text-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            What is Medical College Digitalization?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Medical College Digitalization refers to the integration of advanced technology into academic, clinical, and administrative processes. From online admissions and digital attendance to managing hospital tie-ups, patient data, and clinical rotations — our solutions help medical institutions operate with greater accuracy, efficiency, and compliance. The goal is to create a smart, paperless, and student-centered ecosystem tailored for modern medical education.
          </p>
        </div>
      </section>

      {/* New Section */}
      <section className="bg-blue-50 py-20 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
            Our Medical College Digitalization Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Online Admission Management",
                desc: "Streamline student intake with online application forms, merit lists, and digital verification."
              },
              {
                title: "Academic & Timetable Scheduling",
                desc: "Plan classes, lab sessions, and clinical rotations with automated scheduling tools."
              },
              {
                title: "Student Information System (SIS)",
                desc: "Centralized student profiles with academic history, attendance, and performance data."
              },
              {
                title: "Hospital & Clinical Integration",
                desc: "Track clinical postings, patient interactions, and hospital training with real-time updates."
              },
              {
                title: "Faculty & Staff Management",
                desc: "Manage faculty profiles, schedules, payroll, and performance evaluations efficiently."
              },
              {
                title: "Digital Attendance & ID Integration",
                desc: "Enable biometric/RFID-based attendance systems linked to student dashboards."
              },
              {
                title: "Examination & Evaluation System",
                desc: "Conduct internal assessments, practical exams, and online tests with automated grading."
              },
              {
                title: "Library & Resource Management",
                desc: "Digitally track issued books, medical journals, and student reading records."
              },
              {
                title: "Internship & Alumni Management",
                desc: "Maintain logs of internships, alumni tracking, and future collaboration opportunities."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-tr-[80px] rotate-45 z-0 group-hover:bg-blue-300 transition-all duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-800 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 group-hover:text-gray-100 transition duration-300">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-blue-800 opacity-0 group-hover:opacity-60 transition-all duration-300 z-0 rounded-xl pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Sections (unchanged) */}
      {/* You can keep adding your other sections here like "Key Benefits", "Working Flow", etc. */}

      {/* Product Slider Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            Smart Medical College Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our real-time solutions revolutionizing medical education and administration.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img
            src={slides[current].img}
            alt="Product Slide"
            className="rounded-3xl shadow-lg w-full h-auto transform transition duration-500 hover:scale-105"
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
          Ready to Digitize Your University?
        </h2>
        <p className="mb-6 text-gray-700">
          Talk to our experts and schedule a personalized demo session today.
        </p>
        <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">
          Book a Free Demo
        </button>
      </section>
    </>
  );
};

export default MedicalCollegeDigitalization;
