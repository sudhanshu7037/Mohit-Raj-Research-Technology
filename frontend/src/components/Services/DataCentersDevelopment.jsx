
import React from 'react';
import bgImage from "../../assets/Datacenterbanner.png";
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
      "Host and serve websites, web applications, and services with high reliability and performance Infrastructure that scales and provides smooth user experiences even under heavy traffic loads.",
    img: Logo6,
    alt: "Web Servers",
    points: ["High uptime", "Secure access", "Scalable infrastructure"],
  },
  {
    title: "Application Servers",
    description:
      "Offer a secure platform to execute critical enterprise applications and services.Enable effective implementation of business logic, bridging front-end clients and back-end systems.",
    img: Logo1,
    alt: "Application Servers",
    points: ["Fast performance", "Middleware support", "Managed solutions"],
  },
  {
    title: "Database Server",
    description:
      "Handle and store structured data with high integrity, security, and accessibility.Tuned for high-performance querying, data replication, and backup operations.",
    img: Logo2,
    alt: "Database Server",
    points: ["Data integrity", "High availability", "Backup support"],
  },
  {
    title: "Staging Server",
    description:
      "Act as a replica environment for pre-deployment testing and validation of updates or new features.Reduce downtime and production issues by maintaining quality control in a controlled environment.",
    img: Logo4,
    alt: "Staging Server",
    points: ["Safe testing", "Bug tracking", "Integration workflows"],
  },
  {
    title: "Backup Server",
    description:
      "Maintain data redundancy and business continuity through scheduled and incremental backups.	Essential for disaster recovery planning and regulatory compliance.",
    img: Logo6,
    alt: "Backup Server",
    points: ["Disaster recovery", "Automated backups", "Cloud storage"],
  },
  {
    title: "Directory Server, DNS & DHCP Server",
    description:
      "Efficiently manage centralized authentication, network identity, and resource allocation.Offer automated IP address management and domain name resolution for smooth connectivity.",
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
    title: "Firewall Server",
    icon: <FaCogs className="text-blue-500 text-3xl" />, 
    description:
      "Secure the data center perimeter by blocking unauthorized traffic and stopping cyber attacks.Incorporated with advanced threat detection for real-time enforcement of network security."
  },
  {
    title: "Management Server",
    icon: <FaNetworkWired className="text-blue-500 text-3xl" />, 
    description:
      "Empower centralized control of server infrastructure, network monitoring, and system administration.Ease IT operations using automation tools, alerts, and performance dashboards."
  },
  {
    title: "Helpdesk System",
    icon: <FaDatabase className="text-blue-500 text-3xl" />, 
    description:
      "Simplify support and incident fixing with an integrated ticketing and response system.	Enhance service quality and user satisfaction through structured IT support workflows."
  },
  {
    title: "Intrusion Detection Server",
    icon: <FaCloud className="text-blue-500 text-3xl" />, 
    description:
      "Monitor activity in the network to identify and alert on malicious activity.Improve cybersecurity stance through real-time intrusion detection and incident response capability."
  },
  {
    title: "",
    icon: <FaShieldAlt className="text-blue-500 text-3xl" />, 
    description:
      ""
  },
  {
    title: "",
    icon: <FaTools className="text-blue-500 text-3xl" />, 
    description:
      ""
  }
];

const steps = [
  {
    title: " Requirement Analysis",
    icon: <FaClipboardList className="text-blue-500 text-2xl" />,
    description:
      "Join hands with our experts to determine your existing IT infrastructure, business objectives, scalability requirements, and compliance demands. This step lays the groundwork for an optimal solution that is tailored to your enterprise in every respect."
  },
  {
    title: " Strategic  Design Consultation",
    icon: <FaCogs className="text-blue-500 text-2xl" />,
    description:
      "We create a tailored, secure, and scalable data center design, merging high-performance architecture and future-proof capacity planning — optimized to fulfill your workload and budget objectives."
  },
  {
    title: "Infrastructure Deployment",
    icon: <FaNetworkWired className="text-blue-500 text-2xl" />,
    description:
      "Our engineers implement a smooth deployment of physical and cloud infrastructure, such as server systems, storage, networking devices, and top-level cabling — all for maximum uptime and performance."
  },
  {
    title: "Configuration, Integration & Testing",
    icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
    description:
      "We provide seamless integration of core systems, layers of security, and backups. Performance and stress testing under strict conditions are conducted to ensure readiness prior to go-live."
  },
  {
    title: "Support & Continuous Optimization",
    icon: <FaCloudUploadAlt className="text-blue-500 text-2xl" />,
    description:
      "After deployment, we provide 24/7 monitoring, SLA-supported support, and ongoing optimization to accommodate your business growth, security patches, and future technology changes."
  }
];
const dataCenterFeatures = [
  {
    icon: <FaServer className="text-blue-600 text-3xl" />,
    title: "Enterprise-Grade Infrastructure",
    description:
      "MRT develops and implements high-performance, scalable data center infrastructures designed to support mission-critical workloads. Our infrastructure is architected for flexibility, velocity, and future expansion."
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    title: "Comprehensive Security Framework",
    description:
      "We deploy multi-layered security measures such as encryption, firewall hardening, and access controls to provide complete compliance, data privacy, and defense against rising cyber threats."
  },
  {
    icon: <FaNetworkWired className="text-blue-600 text-3xl" />,
    title: "Resilient & Redundant Connectivity",
    description:
      "Enjoy zero downtime operations with MRT's redundant network designs, load balancing, and high-speed connectivity. We provide seamless business continuity with minimal latency."
  },
  {
    icon: <FaRegClock className="text-blue-600 text-3xl" />,
    title: "24/7 Proactive Monitoring & Support",
    description:
      "Our dedicated support team continuously monitors your infrastructure, offering real-time alerts and rapid incident response to maintain peak performance and operational integrity—around the clock."
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
              <p className='text-white'>MOHITRAJ RESEARCH AND TECHNOLOGY PRIVATE LIMITED is a reliable leader in Data Center Development, providing next-generation infrastructure solutions that meet the changing demands of businesses today</p>
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
         
          At Mohitraj, we understand that data centers power digital transformation. Our dedication to performance, security, and quality guarantees every deployment improves uptime, enhances data security, and increases your enterprise's resilience and agility in a competitive economy.
From server room optimization to modular data center design, network cabling, power management, and disaster recovery planning, we provide a complete set of data center development services that add value and scalability to your operation.

 Our goal is to develop robust infrastructures that serve your growth today—and well beyond the horizon.

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
      className="w-full py-16 px-4 text-white bg-red-100"
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
              <p className="text-black max-w-md text-sm md:text-base">
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
      <div className="max-w-7xl mx-auto px-4 py-16 text-center bg-blue-100">
      <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
        Custom Data Center Development Services We Offer
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto mb-12">
        We specialize in delivering end-to-end data center development solutions designed to meet the specific needs of businesses seeking scalability, security, and high performance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left bg-red-100">
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

   
    
      
    </>
  );
};
 export default DataCentersDevelopment;