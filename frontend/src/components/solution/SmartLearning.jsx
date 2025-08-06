import React, { useState, useEffect } from "react";
import SmartLearningImage1 from "../../assets/solutionpages/SmartLearningSolution/images/smartlearning.jpg";
const slides = [
  {
    img: "https://img.freepik.com/free-photo/ai-online-education-digital-technology_53876-124103.jpg",
    title: "AI-Based Personalized Learning",
    desc: "Tailored content and assessments that adapt to each student's pace, strengths, and learning style using AI.",
  },
  {
    img: "https://img.freepik.com/free-photo/digital-learning-educational-technology_23-2149273492.jpg",
    title: "Interactive Digital Content",
    desc: "Engaging students with rich multimedia, quizzes, and gamified content that makes learning fun and effective.",
  },
  {
    img: "https://img.freepik.com/free-photo/analytics-dashboard-education-performance_53876-124098.jpg",
    title: "Real-Time Analytics Dashboard",
    desc: "Monitor student progress, performance, and feedback instantly with intelligent reporting tools.",
  },
];


const SmartLearning = () => {
  const [current, setCurrent] = useState(0);
        
          useEffect(() => {
            const timer = setInterval(() => {
              setCurrent((prev) => (prev + 1) % slides.length);
            }, 4000);
            return () => clearInterval(timer);
          }, [slides.length]);
  return (
    <>
      {/* Hero Section - Mrtion Smart Learning Solutions */}
      <section
        className="relative bg-cover bg-center text-white px-6 min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/modern-classroom-with-technology_23-2149232783.jpg')", // Smart learning image
        }}
      >
        <div className="max-w-4xl z-10 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Welcome to{' '}
            <span className="text-yellow-300">
              Mrtion Smart Learning Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Revolutionize education with interactive content, cloud-based
            access, and AI-driven personalized learning experiences.
          </p>
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Explore Smart Learning Tools
          </button>
        </div>
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
      </section>

{/* Overview Section */}
<section className="py-16 px-6 text-center max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-4 text-blue-900">
    Why Choose Mrtion Smart Learning Solutions?
  </h2>
  <p className="text-lg text-gray-600">
    Mrtion transforms traditional education into dynamic, engaging, and data-driven learning experiences. Our smart learning systems leverage cutting-edge technology to deliver personalized content, real-time analytics, and interactive tools that enhance teaching effectiveness and student outcomes across schools, colleges, and institutions.
  </p>
</section>
{/*new section*/}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 bg-white">
  {[
    {
      title: "Interactive e-Learning Platforms",
      desc: "Deliver personalized learning experiences with rich multimedia content and adaptive assessments."
    },
    {
      title: "Virtual Classrooms",
      desc: "Enable real-time classes, discussions, and collaboration using modern communication tools."
    },
    {
      title: "Learning Analytics",
      desc: "Track student performance, progress, and engagement with actionable data insights."
    },
    {
      title: "Gamified Learning Modules",
      desc: "Boost engagement with interactive quizzes, badges, and reward systems."
    },
    {
      title: "Smart Content Delivery",
      desc: "Automatically deliver relevant content based on learner's goals, pace, and learning path."
    },
    {
      title: "Mobile Learning Apps",
      desc: "Let students learn anytime, anywhere with intuitive and responsive mobile platforms."
    }
  ].map((item, index) => (
    <div
      key={index}
      className="relative p-6 rounded-3xl border border-blue-200 bg-white shadow-lg group overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Background glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-blue-300 to-blue-200 opacity-0 group-hover:opacity-100 blur-lg rounded-3xl transition duration-500"></div>

      {/* Card content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-800 transition">
          {item.title}
        </h3>
        <p className="text-gray-700 group-hover:text-blue-700 transition">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>

{/* Smart Learning Benefits Section – Clean Cards with Dark Blue Hover */}
<section className="bg-white py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Key Benefits & Features of Our Smart Learning Solutions
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Personalized Learning Paths",
          desc: "Deliver adaptive learning experiences tailored to individual student pace and needs.",
        },
        {
          title: "Real-Time Performance Tracking",
          desc: "Monitor student progress with dashboards and analytics to support targeted improvement.",
        },
        {
          title: "Interactive Digital Content",
          desc: "Engage learners with videos, simulations, quizzes, and gamified modules.",
        },
        {
          title: "Cloud-Based Accessibility",
          desc: "Access learning materials and progress reports from any device, anytime.",
        },
        {
          title: "Teacher-Student Collaboration",
          desc: "Enable seamless communication, assignments, and feedback through smart portals.",
        },
        {
          title: "Integrated Assessments & Reports",
          desc: "Simplify exams, generate instant reports, and ensure continuous evaluation.",
        }
      ].map((item, index) => (
        <div
          key={index}
          className="border border-blue-100 bg-white p-8 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-900 hover:text-white hover:border-blue-800"
        >
          <h3 className="text-xl font-semibold mb-3 transition">
            {item.title}
          </h3>
          <p className="text-gray-600 hover:text-blue-100 transition">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Workflow Section - Smart Learning */}
<section className="bg-blue-50 py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Smart Learning Implementation Workflow by Mrtion
  </h2>
  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
    {[
      "Requirement Gathering",
      "Curriculum Planning",
      "Platform Setup",
      "Content Development",
      "Interactive Module Integration",
      "System Testing & QA",
      "Training & Go Live",
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

{/* Departments Section - Smart Learning Solutions */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Smart Learning Solutions for Every Educational Sector
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "K-12 Schools",
      "Colleges & Universities",
      "Online Coaching Institutes",
      "Corporate Training Programs",
      "Vocational & Skill Development",
      "Test Prep Platforms (NEET, JEE, etc.)",
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
{/* Updated Section with Equal Height Image and Content */}
<section className="bg-blue-50 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Why Choose Our Smart Learning Solutions?
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Transform education delivery through data-driven, personalized smart learning strategies that boost retention, accessibility, and learner satisfaction.
      </p>
    </div>

    {/* Content Block */}
    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-10">
      
      {/* Image with Unique Hover - Stretch to Content Height */}
      <div className="relative group  overflow-hidden  h-full">
        <img
          src={SmartLearningImage1}
          alt="Smart Learning"
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-30 group-hover:bg-opacity-60 transition duration-500"></div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center">
        <ul className="space-y-6 text-gray-800">
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">AI-Based Personalized Learning</h4>
              <p>Adaptive modules that cater to each student's pace and learning style for deeper understanding.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Interactive Digital Content</h4>
              <p>Engage learners through animations, simulations, and gamified assessments.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Real-Time Progress Analytics</h4>
              <p>Track individual learner performance and get actionable insights through dashboards.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Anytime, Anywhere Learning</h4>
              <p>Access learning materials across devices, enabling flexible and accessible education.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
{/* Smart Learning Slider Section */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
      Smart Learning Solutions
    </h2>
    <p className="text-gray-600 text-lg">
      Discover AI-driven, personalized education systems designed to enhance student engagement, retention, and outcomes across all levels of learning.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <img
      src={slides[current].img}
      alt="Smart Learning Slide"
      className="rounded-3xl shadow-lg w-full h-auto transform transition duration-500 hover:scale-105"
    />
    <div>
      <h3 className="text-2xl font-bold text-red-700 mb-4">
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
    Ready to Transform Learning Experiences?
  </h2>
  <p className="mb-6 text-gray-700">
    Connect with our Smart Learning specialists and explore how we can digitize your educational system with AI-driven content, analytics, and engagement tools.
  </p>
  <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">
    Schedule Your Free Demo
  </button>
</section>

{/* CTA Section - Conference Room Solutions */}
<section className="py-20 px-6 bg-gradient-to-r from-indigo-100 via-purple-50 to-blue-100 text-center">
  <h2 className="text-3xl font-bold mb-4 text-indigo-900">
    Ready to Upgrade Your Conference Rooms?
  </h2>
  <p className="mb-6 text-gray-700 text-lg max-w-3xl mx-auto">
    Connect with our collaboration experts and explore how our smart conference room solutions can revolutionize your business meetings with cutting-edge AV, automation, and seamless integration.
  </p>
  <button className="bg-indigo-800 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all shadow-lg">
    Book a Free Consultation
  </button>
</section>



    </>
  );
};

export default SmartLearning;