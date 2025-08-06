import React, { useState, useEffect } from "react";


const slides = [
  {
    title: "AI-Based Live Stream Scheduler",
    desc: "Schedule and automate your live broadcasts with AI-powered tools ensuring precision timing, platform sync, and redundancy checks.",
    img: "https://img.freepik.com/premium-photo/digital-ai-automation-live-stream-interface_763111-5488.jpg",
  },
  {
    title: "Multi-Platform Broadcasting Hub",
    desc: "Broadcast simultaneously to YouTube, Facebook, and internal platforms using our integrated signal router and encoding module.",
    img: "https://img.freepik.com/premium-photo/tech-console-streaming-station-multi-platform-view_118086-843.jpg",
  },
  {
    title: "Emergency Alert Transmission System",
    desc: "Instantly push critical alerts across all broadcast streams with high-priority encoding and push technology.",
    img: "https://img.freepik.com/premium-photo/emergency-alert-flash-screen-digital-interface_118086-900.jpg",
  },
  {
    title: "Cloud Video Archival & Analytics",
    desc: "Store all broadcast sessions securely on the cloud and access in-depth analytics on viewer engagement and performance.",
    img: "https://img.freepik.com/premium-photo/analytics-dashboard-video-archive-interface_674594-1523.jpg",
  },
];


const AudioVideoBroadcasting = () => {

  const [current, setCurrent] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
      }, [slides.length]);
  return (
    <>
    {/* Hero Section - Audio/Video Broadcasting Solutions */}
<section className="relative bg-black text-white font-sans min-h-screen flex items-center justify-center">
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40"
    style={{
      backgroundImage:
        "url('https://media.istockphoto.com/id/1169475494/photo/equipment-in-outside-broadcasting-van.jpg?s=612x612&w=0&k=20&c=qERgFZiLfQ5tIvjjXo2JIsAbTXhKCupPZRpw4tT-JIE=')",
    }}
  ></div>

  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
      Smart Audio/Video Broadcasting Solutions
    </h1>
    <p className="text-lg md:text-xl mb-8 text-gray-200">
      Empower your organization with real-time streaming, live event broadcasting,
      and seamless AV integration — all from one powerful system.
    </p>
    <button className="bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-all shadow-lg">
      Get a Free Consultation
    </button>
  </div>
</section>

{/* === Overview Section === */}
<section className="py-16 px-6 text-center max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-4 text-blue-900">
    What is Audio & Video Broadcasting Management System?
  </h2>
  <p className="text-lg text-gray-600">
    The Audio & Video Broadcasting Management System is a comprehensive platform that manages the scheduling, streaming, storage, and real-time monitoring of audio and video content. It is used by media houses, educational platforms, event organizers, and digital content creators to deliver seamless live and on-demand broadcasting services.
  </p>
</section>

{/* === Modules Section === */}
<section className="bg-gray-100 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
      Broadcasting System Core Modules
    </h2>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {[
        {
          title: "Live Streaming Scheduler",
          desc: "Automate the schedule of live broadcasts across platforms with time zone support."
        },
        {
          title: "On-Demand Media Library",
          desc: "Organize and stream archived audio/video content anytime, anywhere."
        },
        {
          title: "Multi-Platform Broadcast",
          desc: "Simultaneously stream content to YouTube, Facebook, custom apps, and more."
        },
        {
          title: "User Access Management",
          desc: "Manage viewer roles, permissions, and content accessibility settings."
        },
        {
          title: "Content Monetization Tools",
          desc: "Enable pay-per-view, subscriptions, ads, and donations for monetization."
        },
        {
          title: "Real-Time Analytics",
          desc: "Track viewer counts, region-wise stats, device type, and engagement."
        },
      ].map((solution, index) => (
        <div
          key={index}
          className="bg-white shadow-lg hover:shadow-blue-500/40 transition-all duration-300 rounded-xl p-6 border hover:border-blue-700"
        >
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            {solution.title}
          </h3>
          <p className="text-gray-700 text-sm">{solution.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* === Features & Benefits Section === */}
<section className="bg-blue-100 py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
      Features & Benefits of Broadcasting System
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Adaptive Bitrate Streaming",
          points: [
            "Delivers smooth video playback",
            "Adjusts quality as per viewer's internet speed"
          ]
        },
        {
          title: "Mobile & Web Compatible",
          points: [
            "Responsive design for all screen sizes",
            "Apps and web support for easy access"
          ]
        },
        {
          title: "Secure Cloud Storage",
          points: [
            "Encrypted storage for all media files",
            "Fast retrieval and backup system"
          ]
        },
        {
          title: "Live Chat & Audience Interaction",
          points: [
            "Real-time chat during live sessions",
            "Polls, Q&A, and audience reactions"
          ]
        },
        {
          title: "Broadcast Recording",
          points: [
            "Automatically records live streams",
            "Easily publish as on-demand content"
          ]
        },
        {
          title: "Multilingual Streaming",
          points: [
            "Supports simultaneous audio channels",
            "Wide audience reach with localization"
          ]
        },
      ].map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl h-64 p-6 flex flex-col justify-between transition duration-300 group hover:bg-gradient-to-br hover:from-blue-900 hover:to-blue-700 hover:scale-105"
        >
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4 group-hover:text-white transition">
              {card.title}
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              {card.points.map((point, idx) => (
                <li
                  key={idx}
                  className="text-gray-700 group-hover:text-white text-sm transition"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* === CTA Section === */}
<section className="py-20 px-6 bg-blue-900 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">
    Ready to Revolutionize Your Broadcasts?
  </h2>
  <p className="mb-6 text-lg">
    Connect with us to explore how our Audio & Video Broadcasting System can streamline your content delivery and maximize audience engagement.
  </p>
  <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
    Get a Demo
  </button>
</section>

{/* Workflow Section */}
<section className="bg-blue-50 py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Audio Video Broadcasting Workflow by Mrtion
  </h2>
  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
    {[
      "Live Stream Scheduling",
      "Automated Signal Switching",
      "Multi-Camera Integration",
      "Broadcast Quality Monitoring",
      "Real-Time Viewer Analytics",
      "Cloud-Based Video Storage",
      "Emergency Broadcast Trigger",
    ].map((step, i) => (
      <div
        key={i}
        className="bg-white p-6 rounded-full shadow-lg text-center hover:bg-blue-200 transition w-52"
      >
        <p className="font-semibold text-base text-blue-900">{step}</p>
      </div>
    ))}
  </div>
</section>

{/* Departments Section */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Mrtion Solutions for Broadcasting Units
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "Live News Broadcasting",
      "Disaster Alert Transmission",
      "Public Safety Announcements",
      "Educational Program Streaming",
      "Corporate Live Events",
      "Multilingual Content Channels",
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

{/* Why Choose Us Section - Broadcasting Management */}
<section className="bg-gray-700 text-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-10">
    <div className="flex flex-col justify-center min-h-full">
      <h2 className="text-3xl font-bold mb-6">Why Choose Mrtion for Audio Video Broadcasting?</h2>
      <ul className="space-y-4">
        {[
          "High-Definition Broadcast Support",
          "Seamless Multi-Platform Integration",
          "Real-Time Encoding and Streaming",
          "AI-Powered Content Scheduling",
          "Fail-Safe Redundant Streaming Servers",
          "Instant Emergency Alert Broadcasts",
          "Secure Cloud Storage with Archival",
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
    <div className="h-full flex items-stretch">
      <img
        src="https://img.freepik.com/premium-photo/man-broadcasting-news-tv-studio-control-room_236854-18758.jpg"
        alt="Broadcasting Management Illustration"
        className="w-full rounded-xl shadow-lg object-cover h-full"
      />
    </div>
  </div>
</section>

{/* Product Slider Section */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
      MRtion’s Smart Broadcasting Management Solutions
    </h2>
    <p className="text-gray-600 text-lg">
      Discover how our broadcasting tools revolutionize communication, provide real-time video coverage, and ensure uninterrupted content delivery.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <img
      src={slides[current].img}
      alt="MRtion Broadcasting Product Slide"
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

{/* === CTA Section === */}
<section className="py-20 px-6 bg-blue-900 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">
    Ready to Revolutionize Your Broadcasts?
  </h2>
  <p className="mb-6 text-lg">
    Connect with us to explore how our Audio & Video Broadcasting System can streamline your content delivery and maximize audience engagement.
  </p>
  <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
    Get a Demo
  </button>
</section>


    </>
  )
}

export default AudioVideoBroadcasting