import React, { useState, useEffect } from "react";
const slides = [
  {
    img: "https://example.com/conference-setup.jpg",
    title: "Hybrid Meeting Compatibility",
    desc: "Seamlessly connect in-person and remote attendees with integrated video conferencing and screen sharing tools."
  },
  {
    img: "https://example.com/smart-board.jpg",
    title: "Interactive Smart Boards",
    desc: "Boost productivity with interactive boards that support touch input, annotations, and remote collaboration."
  },
  {
    img: "https://example.com/audio-visual.jpg",
    title: "Advanced Audio-Visual Integration",
    desc: "Ensure crystal-clear communication with automated mic systems, HD displays, and ambient noise control."
  }
];


const ConferenceRoomSolutions = () => {
  const [current, setCurrent] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
      }, [slides.length]);
  return (
    <>
    {/* Hero Section - Mrtion Video Conference Room Solutions */}
<section
  className="relative bg-cover bg-center text-white px-6 min-h-screen flex items-center"
  style={{
    backgroundImage:
      "url('https://www.interfacedigital.in/wp-content/uploads/2023/08/What-is-Conference-Room-Technology.png')", // Updated with relevant VC image
  }}
>
  <div className="max-w-4xl z-10 text-left">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
      Smart <span className="text-yellow-300"> Conference Room Solutions</span> by Mrtion
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-xl">
      Empower your teams with seamless communication, HD video quality, and AI-powered tools for effective remote collaboration.
    </p>
    <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
      Explore Our VC Room Solutions
    </button>
  </div>
  <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
</section>

{/* Overview Section */}
<section className="py-16 px-6 text-center max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-4 text-blue-900">
    Why Choose Mrtion Conference Room Solutions?
  </h2>
  <p className="text-lg text-gray-600">
    Mrtion revolutionizes corporate communication with intelligent, all-in-one conference room solutions. Our systems integrate high-definition video, crystal-clear audio, smart scheduling, and seamless collaboration tools to create an immersive meeting experience. Designed for businesses, institutions, and hybrid teams, our solutions ensure productivity and connectivity—anywhere, anytime.
  </p>
</section>
{/* Conference Room Solutions Section */}
<section className="bg-white py-16 px-6">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
      Smart Conference Room Solutions
    </h2>
    <p className="text-gray-600 text-lg">
      Revolutionize your meetings with intelligent, technology-driven conference room solutions.
      From touchless controls to AI-powered summaries, our tools streamline collaboration,
      enhance productivity, and create futuristic meeting experiences.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: "Touchless Meeting Controls",
        desc: "Control meetings via voice or gesture commands for a seamless, modern experience.",
      },
      {
        title: "Wireless Presentation Tools",
        desc: "Share presentations without cables or complications using secure wireless tech.",
      },
      {
        title: "Smart Scheduling System",
        desc: "Automated meeting scheduling that integrates with personal and team calendars.",
      },
      {
        title: "High-Quality Audio-Visual",
        desc: "Crisp video and crystal-clear audio systems ensure immersive conferences.",
      },
      {
        title: "Virtual Collaboration Boards",
        desc: "Digital whiteboards for remote teams to brainstorm, draw, and share ideas live.",
      },
      {
        title: "AI Meeting Summarization",
        desc: "Automatically generate meeting minutes, highlights, and task assignments.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="p-6 rounded-3xl border border-blue-200 bg-white shadow-md group hover:bg-blue-900 hover:text-white transition-all duration-300"
      >
        <h3 className="text-xl font-bold text-blue-900 group-hover:text-white mb-3 transition">
          {item.title}
        </h3>
        <p className="text-gray-700 group-hover:text-blue-100 transition">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>
{/*new section*/}
{/* Modern Benefits Section without dark hover */}
<section className="bg-white py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
      Key Benefits of Our Conference Room Solutions
    </h2>
    <p className="text-lg text-gray-600 mb-12">
      Empower your workplace with intuitive, connected, and collaborative meeting experiences that drive productivity.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Easy Integration",
          desc: "Works seamlessly with Zoom, Teams, Meet & more – no technical hassle.",
        },
        {
          title: "Touch-Free Controls",
          desc: "Operate systems with voice or mobile app – hygienic & quick.",
        },
        {
          title: "Auto Scheduling",
          desc: "Auto-book rooms using integrated calendars to prevent overlaps.",
        },
        {
          title: "Utilization Analytics",
          desc: "Monitor usage, save resources, and plan smarter space layouts.",
        },
        {
          title: "Live Collaboration",
          desc: "Real-time whiteboarding, notes & screen sharing built-in.",
        },
        {
          title: "Multi-Device Access",
          desc: "Connect from any device, anywhere – mobile, tablet, or desktop.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-md hover:shadow-2xl hover:bg-blue-100 transform hover:-translate-y-2 transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Workflow Section - Conference Room Setup */}
<section className="bg-blue-50 py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Seamless Conference Room Setup Workflow by Mrtion
  </h2>
  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
    {[
      "Requirement Analysis",
      "Room Environment Assessment",
      "Device & Display Selection",
      "Network & Audio Integration",
      "Software Configuration",
      "Testing & Calibration",
      "Staff Training & Launch",
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
{/* Use Cases Section - Conference Room Solutions */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Tailored Conference Room Solutions for Every Industry
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "Corporate Meeting Rooms",
      "Educational Institutions",
      "Government Offices",
      "Healthcare Facilities",
      "IT & Tech Enterprises",
      "Co-Working & Startups",
    ].map((sector, i) => (
      <div
        key={i}
        className="p-6 bg-white shadow rounded-xl hover:bg-blue-100 transition"
      >
        <h3 className="font-semibold text-lg text-blue-900">{sector}</h3>
      </div>
    ))}
  </div>
</section>
{/* Updated Section with Equal Height Image and Content - Conference Room Solution */}
<section className="bg-blue-50 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Why Choose Our Conference Room Solutions?
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Enhance your meetings and collaboration with cutting-edge conference room technologies designed for clarity, productivity, and seamless connectivity.
      </p>
    </div>

    {/* Content Block */}
    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-10">
      {/* Image Block */}
      <div className="relative group rounded-3xl overflow-hidden shadow-xl h-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJsHaZxRC-xWV0fDOGS8GBF775bjdwzym2g&s" // Conference room image
          alt="Conference Room Solution"
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-30 group-hover:bg-opacity-60 transition duration-500"></div>
      </div>

      {/* Text Block */}
      <div className="flex flex-col justify-center">
        <ul className="space-y-6 text-gray-800">
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Smart Audio-Visual Integration</h4>
              <p>Crystal-clear sound and HD video systems for effective presentations and remote collaborations.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Seamless Video Conferencing</h4>
              <p>Integrated platforms for Zoom, Teams, and Google Meet ensure zero disruption during meetings.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Touchscreen and Wireless Collaboration</h4>
              <p>Interactive displays and wireless screen sharing make discussions smooth and engaging.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Elegant and Functional Setup</h4>
              <p>Modern, clean aesthetics combined with ergonomic furniture for a productive environment.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
{/* Conference Room Solutions Slider Section */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
      Conference Room Solutions
    </h2>
    <p className="text-gray-600 text-lg">
      Experience intelligent conference room technologies designed to boost collaboration, enhance communication, and streamline hybrid meeting experiences with advanced audio-visual systems.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <img
      src={slides[current].img}
      alt="Conference Room Slide"
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
  )
}

export default ConferenceRoomSolutions