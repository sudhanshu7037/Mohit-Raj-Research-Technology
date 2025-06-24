
import React from 'react';
import bgImage from "../../assets/Backgroundsoftware.jpg";
import ImagebgEx from "../../assets/ImagebgEx.jpg";
import Logo6 from "../../assets/NEWIMG.png";
import Logo1 from "../../assets/SofwareConsulting.png";
import Logo2 from "../../assets/Custom.png";
import Logo4 from "../../assets/Erp.png";
import { FaServer, FaNetworkWired, FaArrowRight,FaCheckCircle } from "react-icons/fa";
import {  FaDatabase, FaCloud, FaLock } from "react-icons/fa";
import {    FaRegClock,FaClipboardList,FaCloudUploadAlt, FaCogs, FaTools, FaShieldAlt } from "react-icons/fa";
import DevImage from "../../assets/project.png";
import Image from "../../assets/backImage.png";







const services = [
  {
    title: "Web Servers",
    description:
      "Reliable hosting solutions to power your online applications and websites.",
    img: Logo6,
    alt: "Web Servers",
    points: ["High uptime", "Secure access", "Scalable infrastructure"],
  },
  {
    title: "Application Servers",
    description:
      "Optimized platforms to deploy and run your enterprise-grade applications.",
    img: Logo1,
    alt: "Application Servers",
    points: ["Fast performance", "Middleware support", "Managed solutions"],
  },
  {
    title: "Database Server",
    description:
      "Robust and secure database solutions for structured data management.",
    img: Logo2,
    alt: "Database Server",
    points: ["Data integrity", "High availability", "Backup support"],
  },
  {
    title: "Staging Server",
    description:
      "Isolated environments for testing new features before going live.",
    img: Logo4,
    alt: "Staging Server",
    points: ["Safe testing", "Bug tracking", "Integration workflows"],
  },
  {
    title: "Backup Server",
    description:
      "Keep your data protected with regular and secure backups.",
    img: Logo6,
    alt: "Backup Server",
    points: ["Disaster recovery", "Automated backups", "Cloud storage"],
  },
  {
    title: "Firewall & Security Servers",
    description:
      "Ensure your network is secure with real-time protection and monitoring.",
    img: Logo1,
    alt: "Firewall Servers",
    points: ["Threat detection", "Access control", "Firewall setup"],
  },
];


const dataCenterIndustries = [
    "Government & Public Sector",
    "Healthcare & Hospitals",
    "Banking & Financial Services",
    "Telecommunication",
    "Education & E-learning",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Transportation & Logistics",
  ];

  const techStack = [
  {
    label: "Core Infrastructure",
    icon: <FaServer />,
    items: ["Rack Servers", "Blade Servers", "Power Backup Systems", "HVAC Cooling"]
  },
  {
    label: "Storage Solutions",
    icon: <FaDatabase />,
    items: ["SAN", "NAS", "Object Storage", "Hybrid Storage"]
  },
  {
    label: "Network & Security",
    icon: <FaNetworkWired />,
    items: ["Firewalls", "Load Balancers", "VPN Gateways", "Intrusion Detection"]
  },
  {
    label: "Cloud & Virtualization",
    icon: <FaCloud />,
    items: ["VMware", "Hyper-V", "Proxmox", "Kubernetes"]
  },
  {
    label: "Data Protection",
    icon: <FaLock />,
    items: ["Encryption", "Backup & Recovery", "Disaster Recovery", "Access Control"]
  }
];

const dataCenterServices = [
  {
    title: "Custom Infrastructure Solutions",
    icon: <FaCogs className="text-blue-500 text-3xl" />, 
    description:
      "Tailored physical and virtual infrastructure designed for high availability, performance, and scalability."
  },
  {
    title: "Custom Network Architecture",
    icon: <FaNetworkWired className="text-blue-500 text-3xl" />, 
    description:
      "Specialized network design with optimal routing, low latency, and secure access controls."
  },
  {
    title: "Custom Storage Architecture",
    icon: <FaDatabase className="text-blue-500 text-3xl" />, 
    description:
      "Custom SAN, NAS, or hybrid storage systems with focus on reliability, speed, and expandability."
  },
  {
    title: "Cloud & Virtualization Services",
    icon: <FaCloud className="text-blue-500 text-3xl" />, 
    description:
      "Integration of private/hybrid cloud platforms with seamless virtualization for modern workloads."
  },
  {
    title: "Security & Regulatory Compliance",
    icon: <FaShieldAlt className="text-blue-500 text-3xl" />, 
    description:
      "Design and implementation of comprehensive security protocols and regulatory frameworks."
  },
  {
    title: "Maintenance & Lifecycle Management",
    icon: <FaTools className="text-blue-500 text-3xl" />, 
    description:
      "Ongoing optimization, proactive monitoring, and lifecycle maintenance to ensure peak performance."
  }
];

const steps = [
  {
    title: "Define Your Requirements",
    icon: <FaClipboardList className="text-blue-500 text-2xl" />,
    description:
      "Work with our experts to outline your data center needs, goals, and compliance requirements."
  },
  {
    title: "Architecture & Design Planning",
    icon: <FaCogs className="text-blue-500 text-2xl" />,
    description:
      "We create a scalable, secure, and optimized blueprint tailored for your enterprise workloads."
  },
  {
    title: "Network & Infrastructure Setup",
    icon: <FaNetworkWired className="text-blue-500 text-2xl" />,
    description:
      "We implement robust physical and cloud infrastructure with high-performance connectivity."
  },
  {
    title: "Security & Backup Integration",
    icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
    description:
      "Our solutions incorporate disaster recovery, encrypted access, and full regulatory compliance."
  },
  {
    title: "Launch & Ongoing Optimization",
    icon: <FaCloudUploadAlt className="text-blue-500 text-2xl" />,
    description:
      "Your custom-built data center goes live with continued monitoring and support from MRT."
  }
];
const dataCenterFeatures = [
  {
    icon: <FaServer className="text-blue-600 text-3xl" />,
    title: "High-Performance Infrastructure",
    description:
      "MRT delivers robust, scalable data center environments tailored for high-demand enterprise applications."
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    title: "End-to-End Security",
    description:
      "We integrate top-tier security protocols to protect your infrastructure, ensuring compliance and data protection."
  },
  {
    icon: <FaNetworkWired className="text-blue-600 text-3xl" />,
    title: "Reliable Connectivity",
    description:
      "Our data centers offer redundant connectivity options for maximum uptime and minimal latency."
  },
  {
    icon: <FaRegClock className="text-blue-600 text-3xl" />,
    title: "24/7 Monitoring & Support",
    description:
      "MRT's dedicated team provides continuous monitoring and real-time support for uninterrupted performance."
  }
];



const DataCentersDevelopment = () => {
     return (
    <>
    
     {/* First div */}
          <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <img
              src={bgImage}
              alt="Custom Software Development"
              className="w-full h-full object-cover"
            />
    
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    
            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <h3 className="text-white text-xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
                Transform your Business with Innovative Software Development
                Technology
              </h3>
              {/* <p className="text-white text-base md:text-lg max-w-2xl mb-8 text-justify leading-relaxed  mt-2 ">
                MOHITRAJ RESEARCH AND TECHNOLOGY PRIVATE LIMITED is the leading
                software development company in India , it is specializes in
                software development and delivers many ERP software solutions in
                educational domain , Healthcare domain and industrial domain that
                are designed to fulfil the business requirements of all the
                organizations .
              </p> */}
              <div className="flex gap-4">
                <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-2">
                  GET IN TOUCH
                </button>
                <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-2">
                  VIEW PORTFOLIO
                </button>
              </div>
            </div>
          </div>

          
          {/* Second div */}
      <div className="bg-white py-16 px-4 lg:px-24 text-center">
        {/* Top Text */}
        <h1 className="text-blue-500 text-4xl font-bold">Overview</h1>
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed font-basis text-justify mt-4">
          MOHITRAJ RESEARCH AND TECHNOLOGY PRIVATE LIMITED is the leading
          software development company in India , it is specializes in software
          development and delivers many ERP software solutions in educational
          domain , Healthcare domain and industrial domain that are designed to
          fulfil the business requirements of all the organizations Empowering
          business in Delhi NCR region , Our team of experienced developers are
          combined with the special art of technologies that enables us to boost
          your digital footprint while transforming your business operations.
          MOHITRAJ RESEARCH AND TECHNOLOGY PRIVATE LIMITED recognizes the
          necessity of maintaining market leadership in the competitive business
          environment of today. Our wide range of bespoke software development
          services exists to help drive your success. Our dedication to
          high-quality product delivery extends from ERP, web and mobile app
          development through custom software solutions which consistently
          surpass your expectations.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">1800+</h3>
            <p className="text-gray-600 mt-2 text-center">
              Completed <br /> Projects
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">21+</h3>
            <p className="text-gray-600 mt-2 text-center">
              Years of <br /> Experience
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">810+</h3>
            <p className="text-gray-600 mt-2 text-center">
              Global <br /> Customers
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">36</h3>
            <p className="text-gray-600 mt-2 text-center">
              Countries <br /> Clients Served
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-300 max-w-5xl mx-auto" />
      </div>

{/* Third div - Revamped Attractive Design */}
      
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 py-16 px-4 lg:px-24 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-houschka animate-fade-in-down">
        Our Data Center Development Services
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed font-basis animate-fade-in">
        Discover our cutting-edge infrastructure and server solutions designed to deliver performance, reliability, and scalability.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((card, index) => (
          <div
            key={card.title}
            className="relative group bg-blue-100 rounded-xl shadow-xl p-6 text-left transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-200"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative w-16 h-16 mb-4 mx-auto">
              <img
                src={card.img}
                alt={card.alt}
                className="w-full h-full object-contain rounded-md"
              />
              <div className="absolute inset-0 bg-blue-100 opacity-10 rounded-md"></div>
            </div>

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              {card.title}
            </h3>

            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              {card.description}
            </p>

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
{/*fourth section*/}
    <div
      className="w-full py-16 px-4 text-white bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900"
    >
      <div className="max-w-7xl mx-auto scale-[1.02] shadow-[0_25px_60px_-10px_rgba(255,255,255,0.2)] rounded-2xl p-6 bg-red-100 bg-opacity-10 backdrop-blur-lg hover:scale-[1.04] transition-transform duration-500">
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Text Content */}
          <div className="flex items-start md:items-center gap-4">
            <div className="hidden md:flex flex-col gap-2 text-green-400 text-3xl animate-pulse">
              <FaCheckCircle />
              <FaCheckCircle />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-3 text-yellow-500 transition-colors duration-300 hover:text-red-500">
                Powering Digital Infrastructure <br className="hidden md:block" />
                with Data Center Excellence
              </h2>
              <p className="text-white max-w-md text-sm md:text-base">
                Our state-of-the-art data centers provide secure, scalable, and reliable environments for enterprise-level applications and services. Drive performance with infrastructure that grows with your needs.
              </p>
            </div>
          </div>

          {/* Right Call-to-Action */}
          <div className="relative cursor-pointer transition-transform duration-300 scale-105 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur opacity-100 transition duration-500"></div>
            <div className="relative z-10 flex items-center gap-3 bg-yellow-500 group-hover:bg-red-500 px-6 py-3 rounded-full shadow-xl transition-all duration-300">
              <span className="text-white font-medium text-lg">Get Started</span>
              <FaCheckCircle className="text-white text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*new section for experience*/}
    <div
      className="w-full bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: `url(${ImagebgEx})` }}
    >
      <div className="text-center text-white mb-8">
        <h2 className="text-4xl font-bold mb-4 font-houschka">
          Data Center Development Experience
        </h2>
        <p className="max-w-2xl mx-auto text-lg font-basis">
          MRT delivers enterprise-grade Data Center solutions with scalable,
          secure, and energy-efficient infrastructure tailored to modern business
          demands. Explore the sectors we've empowered with our capabilities:
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-lg border border-blue-200">
        <div className="bg-blue-800 text-white py-3 text-center text-xl font-semibold tracking-wide">
          Industries Benefiting from Our Data Centers
        </div>
        <div className="p-8 text-gray-800">
          <p className="mb-6">
            We provide robust, agile, and future-proof Data Center environments
            for a diverse array of industries:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {dataCenterIndustries.map((industry, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600" />
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* === Tech Stack Section with Stylish Background === */}
      <div className="relative w-full bg-blue-100 bg-gradient-to-br from-purple-50 via-white to-blue-100 py-20 px-4 overflow-hidden mt-16">
        {/* 🔵 Layered gradient blobs for background style */}
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-purple-300 rounded-full opacity-20 blur-3xl mix-blend-multiply animate-spin-slow z-0"></div>
        <div className="absolute bottom-[-100px] right-[-60px] w-[260px] h-[260px] bg-pink-200 rounded-full opacity-20 blur-3xl mix-blend-multiply animate-pulse z-0"></div>
        <div className="absolute top-[40%] left-[40%] w-[200px] h-[200px] bg-blue-300 rounded-full opacity-20 blur-2xl mix-blend-multiply z-0"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 shadow-2xl rounded-3xl p-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-purple-800 mb-12 font-houschka tracking-tight hover:text-red-600 hover:drop-shadow-md cursor-pointer transition duration-300">
              Data Center Technology Stack
            </h2>

            <div className="space-y-12">
              {techStack.map((section, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Left Label */}
                  <div className="flex items-center gap-3 bg-purple-100 px-5 py-3 rounded-xl shadow-inner border border-purple-300 min-w-[220px]">
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
{/*new section*/}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
        Custom Data Center Development Services We Offer
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto mb-12">
        We specialize in delivering end-to-end data center development solutions designed to meet the specific needs of businesses seeking scalability, security, and high performance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {dataCenterServices.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500"
          >
            <div className="mb-3">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    {/*new section*/}
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-houschka bg-gradient-to-r from-red-500 via-green-900 to-pink-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
        How to Start Your Data Center Development Project With MRT?
      </h2>

      <div className="flex flex-col md:flex-row items-stretch gap-12">
        {/* Image Section */}
        <div className="flex-1">
          <div className="h-full">
            <img
              src={DevImage}
              alt="Data Center Process"
              className="rounded-xl shadow-lg hover:scale-105 transition duration-500 w-full h-full object-cover min-h-[500px]"
            />
          </div>
        </div>

        {/* Steps Section */}
        <div className="flex-1 flex flex-col justify-between space-y-8 h-full">
          {steps.map((step, index) => (
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
    {/*new section*/}
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-4 font-houschka">
        Why Choose <span className="text-pink-600">MRT</span> for Data Centers?
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        MRT is a trusted name in data center development, combining infrastructure expertise, advanced security, and seamless scalability to power digital enterprises.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataCenterFeatures.map((feature, index) => (
          <div
            key={index}
            className="bg-white border-t-4 border-blue-500 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center group"
          >
            <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-pink-600 transition-colors">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* === New Section: Data Center Case Study === */}
      <section className="bg-gray-100 py-16 px-4 md:px-10 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* === Top Heading === */}
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12 font-houschka">
            Data Center Development Case Study
          </h2>

          <div className="flex flex-col md:flex-row gap-10 items-stretch">
            {/* === Left: Image === */}
            <div className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer">
              <img
                src={Image}
                alt="Data Center Case Study"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-500" />
            </div>

            {/* === Right: Content === */}
            <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-center hover:shadow-2xl transition duration-500">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Data Center Infrastructure Solutions
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                We helped an enterprise transition to a highly scalable data center model with modern infrastructure, virtualization, and proactive monitoring—enabling 99.99% uptime and enhanced security.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
                <li>Redundant Networking & Scalable Storage</li>
                <li>Energy-Efficient & Modular Setup</li>
                <li>Advanced Cooling & Environmental Control</li>
                <li>Centralized Monitoring Dashboards</li>
              </ul>
              <button className="w-32 bg-blue-700 hover:bg-blue-500 text-white text-sm py-2 rounded-md shadow-md hover:shadow-lg transition duration-300">
                View Case Study
              </button>
            </div>
          </div>
        </div>
      </section>
    
      
    </>
  );
};
 export default DataCentersDevelopment;