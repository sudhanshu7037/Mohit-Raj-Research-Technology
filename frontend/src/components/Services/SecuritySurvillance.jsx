import React, { useState } from "react";
import bgImage from "../../assets/software.jpg";
import Image from "../../assets/backimage.png";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";



import {
  FaVideo,
  FaLock,
  FaDoorClosed,
  FaBell,
  FaMicrochip,
  FaEye,
  FaArrowRight,
  FaCheckCircle,
  FaCamera,
   FaWifi,
   FaNetworkWired,
  FaBroadcastTower,
  FaLaptop, 
} from "react-icons/fa";

const industries = [
  "Banking & Financial Services",
  "Healthcare Institutions",
  "Government & Defense",
  "Educational Campuses",
  "Retail Chains & Warehouses",
  "Transportation & Logistics",
  "Industrial Facilities",
  "Hospitality & Hotels"
];

const techStack = [
  {
    label: "Surveillance Systems",
    icon: <FaCamera />,
    items: ["CCTV", "IP Cameras", "Night Vision Cameras", "PTZ Cameras"],
  },
  {
    label: "Access Control",
    icon: <FaLock />,
    items: ["RFID Scanners", "Biometric Devices", "Face Recognition", "Smart Cards"],
  },
  {
    label: "Monitoring & Control",
    icon: <FaVideo />,
    items: ["Video Management Systems", "Centralized Dashboards", "Remote Monitoring", "Live Streaming"],
  },
  {
    label: "Networking & Storage",
    icon: <FaWifi />,
    items: ["NVR", "DVR", "Edge Storage", "Encrypted Data Transfer", "LAN/WAN Connectivity"],
  },
];

const surveillanceServices = [
  {
    icon: <FaCamera size={36} className="text-pink-500" />,
    title: "CCTV & Video Surveillance",
    description:
      "24/7 real-time monitoring with HD video recording and remote access.",
  },
  {
    icon: <FaLock size={36} className="text-pink-500" />,
    title: "Biometric Access Control",
    description:
      "Fingerprint, facial recognition & RFID based secure entry systems.",
  },
  {
    icon: <FaEye size={36} className="text-pink-500" />,
    title: "Remote Monitoring Solutions",
    description:
      "Access live feeds and manage alerts from any location, any time.",
  },
  {
    icon: <FaNetworkWired size={36} className="text-pink-500" />,
    title: "Integrated Security Networking",
    description:
      "Robust network infrastructure connecting all security devices seamlessly.",
  },
  {
    icon: <FaBroadcastTower size={36} className="text-pink-500" />,
    title: "Alarm & Intrusion Detection",
    description:
      "Automated alarms for break-ins, unauthorized access, and motion detection.",
  },
  {
    icon: <FaLaptop size={36} className="text-pink-500" />,
    title: "Security Command Center Setup",
    description:
      "Centralized system to control, monitor and analyze surveillance feeds.",
  },
];

const faqs = [
  {
    question: "What is CCTV surveillance and how does it work?",
    answer:
      "CCTV surveillance uses cameras to capture video footage of specific areas for security purposes. The footage is recorded and can be monitored in real-time or reviewed later.",
  },
  {
    question: "Do you provide biometric access control systems?",
    answer:
      "Yes, we offer advanced biometric access control systems including fingerprint, facial recognition, and RFID-based access for enhanced security.",
  },
  {
    question: "Can I monitor my premises remotely?",
    answer:
      "Absolutely! Our systems support remote monitoring via mobile apps or web dashboards, enabling you to view live camera feeds from anywhere.",
  },
  {
    question: "What industries can benefit from security & surveillance systems?",
    answer:
      "Our solutions are ideal for educational institutions, hospitals, corporate offices, banks, government buildings, and retail chains.",
  },
  {
    question: "Is your system compatible with existing security infrastructure?",
    answer:
      "Yes, our systems are highly compatible and can be seamlessly integrated with most existing hardware or networks.",
  },
  {
    question: "Do you offer maintenance and support after installation?",
    answer:
      "Yes, we provide post-installation maintenance and support, including system checks, software updates, and technical assistance.",
  },
];



const SecuritySurvillance = () => {
   const [openIndex, setOpenIndex] = useState(null);
      
        const toggleFAQ = (index) => {
          setOpenIndex(openIndex === index ? null : index);
        };
  return (
    
      
    <>
    
    {/* First div */}
<div className="relative w-full h-screen overflow-hidden">
  {/* Background Image */}
  <img
    src={bgImage}
    alt="Security and Surveillance"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Hero Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h3 className="text-white text-xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
      Safeguard Your Premises with Smart Security & Surveillance Solutions
    </h3>

    <div className="flex gap-4">
      <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-2">
        GET IN TOUCH
      </button>
      <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-2">
        VIEW SOLUTIONS
      </button>
    </div>
  </div>
</div>


        

          {/* Second div */}
<div className="bg-white py-16 px-4 lg:px-24 text-center">
  {/* Top Text */}
  <h1 className="text-blue-500 text-4xl font-bold">Overview</h1>
  <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed font-basis text-justify mt-4">
    At MOHITRAJ RESEARCH AND TECHNOLOGY PRIVATE LIMITED, we provide comprehensive Security and Surveillance solutions that protect assets, people, and data across industries. Our expertise spans across smart monitoring systems, intrusion detection, access control, and real-time analytics. We deploy cutting-edge technologies like AI-based surveillance, IoT-enabled sensors, and cloud-based control centers to ensure seamless and proactive security infrastructure.
    <br /><br />
    From educational institutions and healthcare centers to retail chains and industrial parks, our tailored security systems are scalable, secure, and compliant. We focus on designing intelligent surveillance systems that adapt to evolving threats and enhance situational awareness. By integrating advanced video analytics and centralized management, we deliver actionable insights and faster response to critical incidents.
  </p>

  {/* Stats Section */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
    {/* Stat 1 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">1200+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Secured <br /> Locations
      </p>
    </div>

    {/* Stat 2 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">15+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Years of <br /> Security Expertise
      </p>
    </div>

    {/* Stat 3 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">50+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Industry <br /> Sectors Covered
      </p>
    </div>

    {/* Stat 4 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">99%</h3>
      <p className="text-gray-600 mt-2 text-center">
        Threat <br /> Detection Accuracy
      </p>
    </div>
  </div>

  {/* Divider Line */}
  <hr className="border-gray-300 max-w-5xl mx-auto" />
</div>
{/*third section */}
{/* Third div - Revamped with Icons for Security & Surveillance */}
<div className="bg-gradient-to-b from-gray-50 to-blue-50 py-16 px-4 lg:px-24 text-center">
  <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-houschka animate-fade-in-down">
    Our Security & Surveillance Services
  </h2>
  <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed font-basis animate-fade-in">
    Empower your premises with robust surveillance systems and modern access control technologies designed for reliability, safety, and round-the-clock monitoring.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {[
      {
        title: "CCTV Surveillance",
        description:
          "Monitor and record activity in real-time using high-definition surveillance cameras.",
        icon: <FaVideo className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["HD night vision", "Remote access", "Motion detection"],
      },
      {
        title: "Access Control Systems",
        description:
          "Secure sensitive areas with electronic door access control for authorized entry.",
        icon: <FaDoorClosed className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["Card/Fingerprint access", "Multi-layer security", "Live monitoring"],
      },
      {
        title: "Intrusion Detection Systems",
        description:
          "Get alerts for any unauthorized access attempts to your premises.",
        icon: <FaBell className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["Real-time alerts", "Motion sensors", "Silent alarms"],
      },
      {
        title: "Security Gates & Barriers",
        description:
          "Control vehicle and pedestrian access with smart gates and barrier systems.",
        icon: <FaLock className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["Boom barriers", "Automatic gates", "License plate recognition"],
      },
      {
        title: "Video Analytics",
        description:
          "Enhance surveillance with AI-powered video analysis and facial recognition.",
        icon: <FaMicrochip className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["Behavior analysis", "Heat mapping", "Face detection"],
      },
      {
        title: "24/7 Monitoring & Support",
        description:
          "Ensure continuous surveillance with our remote monitoring and support services.",
        icon: <FaEye className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["Centralized control room", "Cloud storage", "Incident alerts"],
      },
    ].map((card, index) => (
      <div
        key={card.title}
        className="relative group bg-blue-100 rounded-xl shadow-xl p-6 text-left transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-200"
      >
        {/* Icon */}
        {card.icon}

        {/* Title */}
        <h3 className="text-xl font-semibold text-blue-900 mb-3">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {card.description}
        </p>

        {/* Points */}
        <ul className="space-y-2">
          {card.points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-center text-blue-800 text-sm"
            >
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

{/* Fourth Section: Contact Us - Security & Surveillance Related */}
<div className="relative z-10 -mt-30 mb-5 px-6 ">
  <div className="w-full bg-red-300 py-10 px-6 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-blue-200">
    
    {/* Left Side */}
    <div className="flex items-center gap-4">
      <div className="w-1 h-16 bg-blue-600"></div>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 leading-snug">
        Looking for Smart Security & Surveillance <br /> Solutions for Your Premises?
      </h2>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3 group cursor-pointer">
      <span className="text-blue-700 font-medium text-lg group-hover:underline">
        Contact Us
      </span>
      <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-800 transition">
        <FaArrowRight className="text-white text-base" />
      </div>
    </div>

  </div>
</div>

{/* New Div: Security & Surveillance */}
<div className="w-full bg-blue-200 py-16 px-4">
  <div className="text-center text-blue-900 mb-8">
    <h2 className="text-4xl font-bold mb-4 font-houschka">
      Security & Surveillance Expertise
    </h2>
    <p className="max-w-2xl mx-auto text-lg font-basis text-gray-700">
      MRT has successfully deployed intelligent security & surveillance systems across industries.
      We ensure safety, access control, and real-time monitoring tailored to your environment.
    </p>
  </div>

  <div className="max-w-5xl mx-auto bg-white rounded shadow-lg overflow-hidden">
    <div className="bg-blue-700 text-white py-3 text-center text-xl font-semibold">
      Industries We Secure
    </div>
    <div className="p-8 text-gray-800">
      <p className="mb-6">
        With years of proven experience, we offer tailored security solutions to:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {industries.map((industry, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <FaCheckCircle className="text-blue-600" />
            <span>{industry}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/*tech stack */}
{/* === Tech Stack Section: Security & Surveillance === */}
<div className="relative w-full bg-blue-100 bg-gradient-to-br from-purple-50 via-white to-blue-100 py-20 px-4 overflow-hidden mt-16">
  {/* Background Blobs */}
  <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-purple-300 rounded-full opacity-20 blur-3xl mix-blend-multiply animate-spin-slow z-0"></div>
  <div className="absolute bottom-[-100px] right-[-60px] w-[260px] h-[260px] bg-pink-200 rounded-full opacity-20 blur-3xl mix-blend-multiply animate-pulse z-0"></div>
  <div className="absolute top-[40%] left-[40%] w-[200px] h-[200px] bg-blue-300 rounded-full opacity-20 blur-2xl mix-blend-multiply z-0"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto z-10 bg-red-300">
    <div className="bg-white/80 backdrop-blur-lg border border-purple-200 shadow-2xl rounded-3xl p-10">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-purple-800 mb-12 font-houschka tracking-tight hover:text-red-600 hover:drop-shadow-md cursor-pointer transition duration-300">
        Security & Surveillance Technology Stack
      </h2>

      <div className="space-y-12 ">
        {techStack.map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Left Label */}
            <div className="flex items-center gap-3 bg-purple-100 px-5 py-3 rounded-xl shadow-inner border border-purple-300 min-w-[240px]">
              <div className="text-purple-700 text-2xl">{section.icon}</div>
              <span className="text-lg sm:text-xl font-semibold text-purple-900">
                {section.label}
              </span>
            </div>

            {/* Right Items */}
            <div className="flex flex-wrap gap-3">
              {section.items.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-50 text-purple-800 rounded-full border border-purple-200 text-sm font-medium shadow-sm hover:bg-purple-600 hover:text-white hover:scale-105 transition duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
{/*new section */}

<div className="max-w-7xl mx-auto px-4 py-16 text-center">
  <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
    Custom Security & Surveillance Services
  </h2>
  <p className="text-gray-600 max-w-4xl mx-auto mb-12">
    We deliver tailored security solutions to ensure real-time surveillance, access control, and threat detection across multiple domains.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
    {surveillanceServices.map((service, index) => (
      <div
        key={index}
        className="bg-white hover:bg-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-pink-500"
      >
        <div className="mb-3 text-blue-600 transition-colors duration-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed transition-colors duration-300">
          {service.description}
        </p>
      </div>
    ))}
  </div>
</div>

{/*new section */}

<div className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-houschka bg-gradient-to-r from-red-500 via-green-900 to-pink-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
    How to Start Your Security & Surveillance Project With MRT?
  </h2>

  <div className="flex flex-col md:flex-row items-stretch gap-12">
    {/* === Image Section === */}
    <div className="flex-1">
      <img
        src={Image} // 👈 Replace with your image
        alt="Security & Surveillance Process"
        className="rounded-xl shadow-lg hover:scale-105 transition duration-500 w-full h-full object-cover min-h-[500px]"
      />
    </div>

    {/* === Only 4 Steps Section === */}
    <div className="flex-1 flex flex-col justify-between space-y-8 h-full">
      {[
        {
          title: "Consultation & Requirement Gathering",
          description:
            "We start by understanding your unique security needs across residential, commercial, or industrial setups.",
          icon: <FaCheckCircle className="text-pink-500 text-xl" />,
        },
        {
          title: "Customized Solution Design",
          description:
            "We design tailored surveillance systems including CCTV, access control, alarms, and centralized monitoring.",
          icon: <FaCamera className="text-pink-500 text-xl" />,
        },
        {
          title: "Hardware & Network Setup",
          description:
            "Our experts deploy robust cameras, sensors, and integrate them with secure networking infrastructure.",
          icon: <FaNetworkWired className="text-pink-500 text-xl" />,
        },
        {
          title: "Installation & Integration",
          description:
            "We install, configure and test the complete system to ensure seamless functionality and real-time access.",
          icon: <FaLaptop className="text-pink-500 text-xl" />,
        },
      ].map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500 hover:border-pink-500 transition-transform transform hover:-translate-y-1 hover:shadow-xl group"
        >
          <div className="mt-1">{step.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 group-hover:text-pink-600 transition">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-800 transition">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* why choose */}

<div className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-blue-900 text-center mb-4 font-houschka">
    Why Choose Us for Security & Surveillance?
  </h2>
  <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
    We offer robust, scalable, and intelligent surveillance solutions backed by modern tech and a proven track record of safety and reliability.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        icon: <FaCamera className="text-3xl" />,
        title: "Advanced Surveillance",
        description: "HD cameras with AI analytics for real-time threat detection and prevention.",
      },
      {
        icon: <FaLock className="text-3xl" />,
        title: "Top-Grade Security",
        description: "End-to-end encrypted systems with biometric and multi-layer access control.",
      },
      {
        icon: <FaNetworkWired className="text-3xl" />,
        title: "Integrated Infrastructure",
        description: "Seamless integration across devices, sensors, and command centers.",
      },
      {
        icon: <FaLaptop className="text-3xl" />,
        title: "Real-Time Monitoring",
        description: "Remote access, alerts, and centralized command for total control.",
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="border border-gray-300 p-6 rounded-md text-center transition-all duration-300 hover:bg-blue-900 hover:text-white group"
      >
        <div className="flex justify-center mb-4">
          <div className="text-blue-700 group-hover:text-white transition duration-300">
            {feature.icon}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-blue-900 group-hover:text-white mb-2 transition duration-300">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-white transition duration-300">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</div>
{/* === Benefits Section: Security & Surveillance === */}
<div>
  <section className="bg-gray-50 py-16 px-4 md:px-16 lg:px-24">
    <div className="max-w-6xl mx-auto flex flex-col items-start gap-8">
      {/* Left Side */}
      <div className="flex-1">
        <p className="text-2xl uppercase tracking-widest text-blue-600 mb-2 font-houschka font-bold">
          Benefits
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-900 leading-snug font-houschka">
          Secure your space with advanced surveillance & access control solutions.
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex-1 border-l-4 border-blue-600 pl-6">
        <ul className="space-y-4 text-gray-700 text-base md:text-lg">
          <li>• Real-time monitoring for immediate threat detection and response.</li>
          <li>• Centralized access control for restricted and sensitive zones.</li>
          <li>• Integration of biometric & RFID technologies for enhanced security.</li>
          <li>• Remote surveillance access from any device, anywhere.</li>
          <li>• Scalable systems adaptable for homes, businesses & institutions.</li>
        </ul>
      </div>
    </div>
  </section>
</div>

{/* FAQs Section - Security & Surveillance */}
<div className="max-w-3xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-center mb-10 font-houschka text-blue-600 drop-shadow">
    Security & Surveillance FAQs
  </h2>

  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className={`bg-red-200 border rounded-xl p-4 transition duration-300 ${
          openIndex === index
            ? "border-blue-500 shadow-md"
            : "border-red-300"
        }`}
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full flex justify-between items-center focus:outline-none"
        >
          <span className="text-lg font-medium text-gray-800 hover:text-blue-700 transition duration-300">
            {faq.question}
          </span>
          <span className="text-blue-700 text-xl">
            {openIndex === index ? (
              <FiChevronUp className="transition-transform rotate-180 duration-300" />
            ) : (
              <FiChevronDown className="transition-transform duration-300" />
            )}
          </span>
        </button>
        {openIndex === index && (
          <p className="mt-3 text-gray-700 leading-relaxed transition duration-300">
            {faq.answer}
          </p>
        )}
      </div>
    ))}
  </div>
</div>








          
    </>
  )
}

export default SecuritySurvillance;
