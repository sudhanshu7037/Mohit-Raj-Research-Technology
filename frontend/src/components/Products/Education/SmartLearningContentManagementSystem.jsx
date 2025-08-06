import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SmartLearningBanner  from "../../../assets/produtspage/education/images/Smart leaning system.png";

const functionality = [
  {
    title: "AI-Powered Personalized Learning",
    points: [
      "Custom learning paths for each student",
      "Adaptive assessments and performance insights"
    ]
  },
  {
    title: "Multimedia Content Repository",
    points: [
      "Organize video, audio, docs, and notes centrally",
      "Access anytime, anywhere for hybrid learning"
    ]
  },
  {
    title: "Gamified Learning Experience",
    points: [
      "Interactive quizzes, leaderboards, and rewards",
      "Boost engagement through challenges"
    ]
  },
  {
    title: "Live & Recorded Classes",
    points: [
      "Schedule virtual classes with attendance tracking",
      "Archive sessions for later access"
    ]
  },
  {
    title: "Collaborative Tools",
    points: [
      "Real-time chat, discussion forums, and group tasks",
      "Enhances peer-to-peer learning"
    ]
  },
  {
    title: "Advanced Analytics Dashboard",
    points: [
      "Monitor student activity, usage & outcomes",
      "Make data-driven academic interventions"
    ]
  }
];

const empowerinddata = [
  {
    title: "Interactive Digital Content",
    points: [
      "Video lectures, animations, and gamified quizzes",
      "Device-friendly access with offline support"
    ]
  },
  {
    title: "Centralized Content Repository",
    points: [
      "Upload, organize & version-control learning materials",
      "Role-based access for admins, teachers & students"
    ]
  },
  {
    title: "Analytics & Adaptive Learning",
    points: [
      "Student performance tracking & visual dashboards",
      "AI-driven learning path recommendations"
    ]
  }
];





const SmartLearningContentManagementSystem = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={SmartLearningBanner}
          alt="Smart Learning Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              Smart Learning & Content Management System (SLCMS)
            </h1>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>

      {/*new section for Smart Learning System*/}
<section className="bg-blue-50 px-4 md:px-12 lg:px-20 py-16 text-gray-800 mt-20">
  {/* Header */}
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
      Smart Learning & Content Management System
    </h2>
    <p className="text-gray-600 max-w-4xl mx-auto text-lg font-basis">
      Our Smart Learning and Content Management System enables personalized, engaging, and AI-driven educational experiences — transforming classrooms into dynamic, digital-first environments.
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
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-800 mb-3">
          {feature.title}
        </h3>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 pl-1">
          {feature.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

{/* how empower */}
<section className="bg-red-50 py-16 px-4 md:px-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-houschka">
        How Empower your Smart Learning & Content Management System 
    </h2>
    <p className="text-gray-700 max-w-3xl mx-auto mt-2 font-basis">
      Empower your institution with interactive content delivery, centralized learning material management, and real-time performance analytics designed for modern education.
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

{/* new section for why choose our software */}
<section className="px-4 md:px-12 lg:px-20 py-20 ">
  <div className="max-w-7xl mx-auto">

    {/* ✅ Top Banner Image */}
    <div className="mb-12">
      <img
        src="https://miro.medium.com/v2/resize:fit:1200/1*LOEkMuFFFMviGdN6uI89sQ.jpeg"
        alt="Smart Learning Banner"
        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
      />
    </div>

    {/* Main Grid */}
    <div className="flex flex-col lg:flex-row gap-12 items-start">

      {/* Left Content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 relative group inline-block">
          <span className="hover:text-red-600 transition-all duration-300 font-houschka">
            Why Choose Mohitraj Smart Learning & Content Management System?
          </span>
        </h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed font-basis">
          Mohitraj Research Tech Pvt. Ltd. delivers an AI-powered Smart Learning and Content Management System that empowers institutions 
          with intelligent content delivery, progress tracking, and student-centric learning experiences.
        </p>
        <h4 className="font-semibold text-lg text-blue-800 mb-2">Key advantages of our solution include:</h4>
        <ul className="list-disc list-inside mt-3 text-gray-800 space-y-2">
          <li>Centralized content creation, sharing, and analytics</li>
          <li>Adaptive learning modules and student performance tracking</li>
        </ul>
      </div>

      {/* Right Cards (No Icons) */}
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "AI-Driven Learning Paths",
            desc: "Customized learning journeys tailored to each student’s progress and preferences.",
          },
          {
            title: "Interactive Digital Content",
            desc: "Deliver engaging video, audio, quizzes, and PDFs in a structured, user-friendly portal.",
          },
          {
            title: "Real-time Analytics",
            desc: "Monitor engagement and academic performance with dashboards for students & faculty.",
          },
          {
            title: "Centralized Repository",
            desc: "Secure and scalable storage for all course materials, accessible 24/7.",
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

{/*new section*/}

{/* Products Showcase Slider Section */}
<section className="bg-white py-20 px-4 md:px-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 font-houschka">
    Our Smart Learning & Content Management System Modules
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
        img: "https://img.freepik.com/free-vector/online-learning-concept-illustration_114360-4762.jpg",
        title: "AI-Driven Smart Learning Platform",
      },
      {
        img: "https://img.freepik.com/premium-vector/elearning-portal-concept-illustration_203587-37.jpg",
        title: "E-Content Delivery Module",
      },
      {
        img: "https://img.freepik.com/free-vector/online-lesson-concept-illustration_114360-8122.jpg",
        title: "Live Classes & Video Lectures",
      },
      {
        img: "https://img.freepik.com/free-vector/analytics-concept-illustration_114360-6142.jpg",
        title: "Analytics & Learner Progress",
      },
      {
        img: "https://img.freepik.com/free-vector/quiz-concept-illustration_114360-4397.jpg",
        title: "Quiz & Assessment Module",
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
<section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-houschka">
      Key Benefits of Smart Learning & Content Management System
    </h2>
    <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-basis">
      Empower your institution with a centralized platform for digital content creation, interactive learning,
      and performance-driven academic delivery — built for modern education environments.
    </p>
  </div>

  {/* Glassy Card */}
  <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8 text-2xl">
    <ol className="list-decimal list-inside space-y-4 text-left">
      {[
        "Centralized repository for e-learning content, videos, assignments, and assessments.",
        "AI-powered personalized learning paths based on student performance and engagement.",
        "Seamless integration with LMS, virtual classrooms, and student portals.",
        "Secure content delivery with role-based access control and plagiarism protection.",
        "Real-time analytics for student progress, content usage, and engagement metrics.",
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

{/* Demo Section for Smart Learning & Content Management System */}
<section className="bg-blue-900 bg-dotted-pattern text-white py-16 px-4 text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-houschka">
    Ready to Empower Learning with Smart Content Delivery?
  </h2>
  <p className="max-w-3xl mx-auto text-base md:text-lg mb-6 font-basis">
    Discover Mohitraj’s Smart Learning & Content Management System — an AI-powered platform to enhance academic engagement, streamline digital content, and personalize learning experiences across institutions.
  </p>
  <a
    href="#contact"
    className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition-all duration-300"
  >
    SCHEDULE A LIVE DEMO
  </a>
    <hr className="border-gray-300 my-8 " />
</section>



    </>
  )
}

export default SmartLearningContentManagementSystem