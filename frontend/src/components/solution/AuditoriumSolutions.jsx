import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://img.freepik.com/free-photo/empty-conference-hall_23-2148937522.jpg",
    title: "AI-Powered Lecture Capture",
    desc: "Record and stream sessions with automated camera tracking and smart voice recognition, ensuring seamless content access for students across devices."
  },
  {
    img: "https://img.freepik.com/free-photo/theater-auditorium-with-empty-seats-stage_53876-137151.jpg",
    title: "Smart AV Control Systems",
    desc: "Manage lighting, sound, and display systems centrally with touch panels or mobile apps, enhancing control and automation during live events."
  },
  {
    img: "https://img.freepik.com/free-photo/modern-conference-room-with-chairs-projector_1409-4891.jpg",
    title: "Virtual Event Integration",
    desc: "Enable hybrid events and interactive webinars with high-speed connectivity, live chat, Q&A modules, and AR/VR support."
  }
];


const AuditoriumSolutions = () => {

  
    const [current, setCurrent] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
      }, [slides.length]);
  return (
    <>
    
    
    {/* Hero Section - Mrtion Auditorium Solutions */}
<section
  className="relative bg-cover bg-center text-white px-6 min-h-screen flex items-center"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/free-photo/auditorium-conference-hall-business-meeting_1150-18786.jpg')", // Auditorium-related background
  }}
>
  <div className="max-w-4xl z-10 text-left">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
      Transform Your Campus with <span className="text-yellow-300">Smart Auditorium Solutions</span>
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-xl">
      Digitize your auditorium experience with automated scheduling, lighting, audio-visual integration, and real-time event coordination.
    </p>
    <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
      Book a Free Demo
    </button>
  </div>
  <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
</section>
{/* Overview Section */}
<section className="py-16 px-6 text-center max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-4 text-blue-900">
    Why Choose Mrtion Auditorium Solutions?
  </h2>
  <p className="text-lg text-gray-600">
    Mrtion's smart auditorium management system enhances campus events with intelligent booking, environmental control automation, live-streaming support, and centralized monitoring — making every seminar, function, and conference seamless and impactful.
  </p>
</section>
{/* Auditorium Digitalization Solutions Section */}
<section className="bg-blue-50 py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Our Smart Auditorium Digitalization Solutions
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Automated Event Scheduling",
          desc: "Plan and manage events, rehearsals, and bookings with smart calendar and approvals."
        },
        {
          title: "Lighting & AV Integration",
          desc: "Control lighting, sound, and visual displays through a unified digital interface."
        },
        {
          title: "Seating & Capacity Management",
          desc: "Monitor seat allocation, safety limits, and VIP arrangements in real-time."
        },
        {
          title: "Live Streaming & Recording",
          desc: "Broadcast events live or record them for archives and remote audiences."
        },
        {
          title: "Digital Signage & Navigation",
          desc: "Guide attendees with interactive signage and real-time updates on displays."
        },
        {
          title: "Staff & Crew Coordination",
          desc: "Assign roles, manage backstage crew, and sync operations through the platform."
        },
        {
          title: "Booking & Access Control",
          desc: "Enable RFID-based entry, QR ticketing, and guest list validation digitally."
        },
        {
          title: "Feedback & Analytics",
          desc: "Collect attendee feedback and track event performance via smart dashboards."
        },
        {
          title: "Facility Maintenance Logs",
          desc: "Keep track of maintenance, AV checks, and inventory to avoid disruptions."
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
{/* Auditorium Key Features Section */}
<section className="bg-white py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Key Benefits & Features of Our Auditorium Platform
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Centralized Booking System",
          desc: "Digitally manage venue availability, prevent overlaps, and automate confirmations.",
          icon: "📅"
        },
        {
          title: "Integrated AV Controls",
          desc: "One-click control over microphones, projectors, lighting, and displays.",
          icon: "🎛"
        },
        {
          title: "Live Broadcast Capability",
          desc: "Stream events across campuses or online platforms with HD quality.",
          icon: "📡"
        },
        {
          title: "Real-Time Monitoring",
          desc: "Track attendance, equipment usage, and ambient conditions live.",
          icon: "📊"
        },
        {
          title: "User Access Control",
          desc: "Secure access for admins, technicians, speakers, and attendees via roles.",
          icon: "🔐"
        },
        {
          title: "Cloud-Based & Scalable",
          desc: "Accessible from anywhere with auto backups, high availability, and multi-campus support.",
          icon: "☁"
        }
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-blue-50 p-6 rounded-xl shadow-md hover:bg-blue-900 hover:text-white transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-700 group-hover:text-blue-100 transition">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/*new section*/}
<section className="bg-blue-50 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Auditorium Digitalization Workflow
    </h2>

    <div className="flex flex-wrap justify-center gap-4">
      {[
        "Requirement Mapping",
        "Venue Audit & Planning",
        "System Integration",
        "Testing & Commissioning",
        "Team Training & Handover",
        "Real-Time Support",
        "Feedback & Optimization",
      ].map((step, index) => (
        <div
          key={index}
          className="bg-white text-blue-800 font-medium px-6 py-3 rounded-full shadow-sm hover:bg-blue-800 hover:text-white transition duration-300 text-sm sm:text-base"
        >
          {step}
        </div>
      ))}
    </div>
  </div>
</section>
{/*new section */}

<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      Tailored Solutions for Every Auditorium
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {[
        "Event Management Console",
        "AV Control Panel Integration",
        "Live Streaming Support",
        "Smart Lighting Automation",
        "Multi-Zone Audio Control",
        "Digital Booking System",
        "Display & Signage Integration",
        "QR/RFID Access Control",
        "Mobile App for Technicians",
        "Cloud-Based Configuration",
        "Auto Diagnostics & Alerts",
        "Feedback Collection System",
      ].map((item, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-br from-blue-100 to-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="absolute inset-0 rounded-3xl bg-blue-900 opacity-0 group-hover:opacity-90 transition duration-300 z-0"></div>
          <p className="relative z-10 text-blue-900 group-hover:text-white font-semibold text-sm sm:text-base text-center">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/*new section*/}

<section className="bg-blue-50 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Why Choose Our Auditorium Solutions?
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Redefining event spaces with automation, centralized control, and real-time digital management built for modern auditoriums.
      </p>
    </div>

    {/* Content Block */}
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      
      {/* Image */}
      <div className="relative group rounded-3xl overflow-hidden shadow-xl">
        <img
          src="https://i.ytimg.com/vi/NkHiRlZ2qzM/maxresdefault.jpg"
          alt="Why Choose Us"
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-30 group-hover:bg-opacity-60 transition duration-500"></div>
      </div>

      {/* Feature List */}
      <div>
        <ul className="space-y-6 text-gray-800">
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Centralized AV & Light Control</h4>
              <p>Operate sound, lights, and projectors from a single control system—on-site or remotely.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Real-Time Event Monitoring</h4>
              <p>Track stage readiness, occupancy, and technical health during live events.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Cloud-Based Configuration</h4>
              <p>Manage all settings and diagnostics through a secure cloud dashboard with multi-location support.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Event-Team Friendly Interface</h4>
              <p>Role-based access for sound engineers, coordinators, technicians, and management.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Product Slider Section */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
      Smart Auditorium Solutions
    </h2>
    <p className="text-gray-600 text-lg">
      Discover cutting-edge solutions that transform traditional auditoriums into tech-enabled, immersive environments for events, lectures, and interactive experiences.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <img
      src={slides[current].img}
      alt="Auditorium Slide"
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
    Ready to Upgrade Your Auditorium?
  </h2>
  <p className="mb-6 text-gray-700">
    Connect with our specialists to explore how smart technology can transform your auditorium into a modern, interactive experience hub.
  </p>
  <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">
    Book a Free Consultation
  </button>
</section>






    </>
  )
}

export default AuditoriumSolutions