import React, { useState } from "react";
import bgImage from "../../assets/Remoteinfrastructurebanner.png";
import Banner from "../../assets/background.png";
import Image from "../../assets/background.png";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";


import {
  FaServer,
  FaLaptop,
  FaCloud,
  FaDatabase,
  FaTools,
   FaEye,
  FaCogs,
  FaNetworkWired,
  FaShieldAlt,
   FaSyncAlt
  
} from "react-icons/fa";





const steps = [
  {
    icon: <FaServer className="text-2xl text-blue-600" />,
    title: "Remote Server Provisioning",
    description: "Our remote server provisioning experts can configure and manage servers seamlessly for applications, databases, and data storage platforms. Critical systems are secured with controlled access, and we guarantee high availability and zero downtime.",},
  {
    icon: <FaNetworkWired className="text-2xl text-blue-600" />,
    title: "Implementation of Network Infrastructure",
    description: "We create and maintain custom-tailored scalable remote network infrastructures with integrated security for your organization. To enable strong interconnectedness and secure data flow within distributed systems, our solutions include VPN configuration, firewall deployment, and traffic management.",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-blue-600" />,
    title: "Support for Cloud Infrastructure",
    description: "Providing expert support for cloud environments includes AWS, Azure and Google Cloud Platform. We manage and automatically scale compute, storage, and networking resources and infrastructure optimizations which can all be deployed seamlessly and entirely remotely.",
  },
  {
    icon: <FaCloud className="text-2xl text-blue-600" />,
    title: "IT Maintenance",
    description: "Our 24 by 7 remote IT maintenance enables uninterrupted operation from anywhere. With monitoring, continuous oversight, fortification of digital perimeters with security patches, and performance adjustments ensures sustained uptime for your IT infrastructure.",
  },
  
  
];

const Features = [
  {
    icon: <FaServer className="text-3xl text-blue-600" />,
    title: " Proven Expertise in Remote IT Infrastructure",
    description: "MRT has knowledgeable years of experience with remote infrastructure management. We offer consistent and redundancy-aligned scalable solutions tailored to your business goals. Fully certified engineers on staff carry out the integration, deployment, and support processes, guaranteeing effortless automated systems in place. ",
  },
  {
    icon: <FaNetworkWired className="text-3xl text-blue-600" />,
    title: "Comprehensive Remote Development Services",
    description: "Networking and security solutions as well as network architecture integrated into IT environments is offered comprehensively along with the remote server deployment and cloud integration as part of the high-performance IT environment construction and maintenance.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: "Tailored Solutions for Your Business Needs",
    description: "Every business is unique. That’s why we design tailored infrastructure strategies to meet your specific requirements—whether you're a startup scaling fast or an enterprise modernizing legacy systems.",
  },
  
];






const RemoteInfrastructure = () => {

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
    alt="Remote Infrastructure"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Hero Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h3 className="text-white text-xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
      Optimize Uptime & Performance with <br className="hidden md:block" /> Remote Infrastructure Solutions
    </h3>

    <p className="text-white max-w-3xl text-base md:text-lg mb-6">
      


    </p>

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
    Welcome to Mohitraj Research and Technology Private Limited, your most reliable companion in Remote Infrastructure Facility solutions.
We encompass a number of innovative services and technology, professional support for simple and correct operation of your business operations, regardless of your location.



  </p>

  {/* Stats Section */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
    {/* Stat 1 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">99.9%</h3>
      <p className="text-gray-600 mt-2 text-center">
        Uptime <br /> Assurance
      </p>
    </div>

    {/* Stat 2 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">24/7</h3>
      <p className="text-gray-600 mt-2 text-center">
        Remote <br /> Monitoring
      </p>
    </div>

    {/* Stat 3 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">150+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Enterprise <br /> Clients Served
      </p>
    </div>

    {/* Stat 4 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">12+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Countries <br /> Covered Remotely
      </p>
    </div>
  </div>

  {/* Divider Line */}
  <hr className="border-gray-300 max-w-5xl mx-auto" />
</div>

{/*new section third - Remote Infrastructure Services */}
<div className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-center text-blue-900 mb-4 font-houschka">
    Remote Infrastructure Services We Offer
  </h2>
  <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
    At MRT, we provide secure and scalable remote infrastructure management solutions designed to ensure uptime, optimize performance, and support your IT operations from anywhere in the world.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        title: "Remote Monitoring",
        icon: <FaServer className="text-pink-500 text-3xl" />,
        description: "Energize your business with Mohitraj Research and Technology's Remote Monitoring Services”. Our state-of-the-art system provides real-time monitoring and alerts, ensuring maximum performance and security to your operations",
      },
      {
        title: "Remote Infrastructure Management",
        icon: <FaLaptop className="text-pink-500 text-3xl" />,
        description: "Maximize efficiency and security with Mohitraj Research and Technology's Remote Infrastructure Management Services. Our expert team ensures seamless operations and scalability for your business Infrastructure",
      },
      {
        title: "Remote Operations",
        icon: <FaNetworkWired className="text-pink-500 text-3xl" />,
        description: "Unlock seamless and scalable operations with Mohitraj Research and Technology's Remote Operations Services. Our comprehensive solutions streamline your processes, ensuring efficiency and continuity for your business",
      },
      
    ].map((feature, index) => (
      <div
        key={index}
        className="bg-white border-t-4 border-pink-500 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
      >
        <div className="mb-4 flex justify-center">{feature.icon}</div>
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </div>
    ))}
  </div>
</div>

{/*new section*/}

{/* Contact Section - Remote Infrastructure */}
<div className="group relative bg-gradient-to-tr from-white via-blue-50 to-orange-100 py-14 px-6 sm:px-10 md:px-20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 
  hover:from-blue-100 hover:to-orange-200 hover:bg-opacity-80 hover:cursor-pointer">

  {/* Glassy Box */}
  <div className="backdrop-blur-xl bg-white/70 border border-white/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 
    hover:shadow-2xl transition-all duration-500">

    {/* Text Content */}
    <div className="max-w-2xl text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 group-hover:text-orange-600 leading-tight tracking-tight transition duration-300">
        Simplify IT with Remote Infrastructure Solutions
      </h2>
      <p className="mt-4 text-gray-700 group-hover:text-blue-800 text-base sm:text-lg transition duration-300">
        Ensure 24/7 uptime, proactive monitoring, and remote support for servers, networks, and systems. We help businesses reduce downtime and enhance productivity.
      </p>
    </div>

    {/* CTA Button */}
    <div className="relative group/contact">
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-base flex items-center gap-3 transition-all duration-300 transform group-hover:scale-105 shadow-md">
        Contact Us
        <svg
          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Ping Animation Circle */}
      <div className="absolute -top-4 -right-4 w-10 h-10 bg-orange-300 blur-2xl opacity-40 rounded-full animate-ping"></div>
    </div>
  </div>
</div>

{/* === Remote Infrastructure Experience Section === */}
<section
  className="relative bg-cover bg-center bg-no-repeat py-20"
  style={{ backgroundImage: `url(${Banner})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
     Integrated Remote Infrastructure Management Experience  

    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
      {/* Column 1 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">Round the Clock Infrastructure Surveillance  </h3>
        <p>
          Achieve peak performance and tight security of IT systems with our round the clock remote surveillance services.
           Skilled technical professionals resolve issues proactively on a round the clock basis, reducing downtime and enabling business continuity.Take advantage of always-on system monitoring** alongside remote support  customized for your enterprise

        </p>
      </div>

      {/* Column 2 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">IT Services for Expanding Enterprises  </h3>
        <p>
          Change and grow with our remote infrastructure solutions. Whether optimizing current resources or expanding operations, 
          we provide tailored and affordable scaling of IT infrastructure to suit organizational needs. Achieve improved operational efficiency drive digital transformation, and prepare your systems for the future.  


        </p>
      </div>

      {/* Column 3 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">Concerned about business continuity?</h3>
        <p>
          Protect essential business data with our business continuity and disaster recovery solutions.
           We aid in rapid infrastructure recovery, thus aiding in preserving critical information. Our approach padding your mission critical systems ensures business resilience along with minimal downtime</p>
      </div>
    </div>
  </div>
</section>

{/* === Remote Infrastructure Technology Stack === */}
<div className="w-full bg-gradient-to-r from-slate-900 via-blue-900 to-gray-950 py-8 px-4 text-white">
  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 font-houschka text-cyan-300 drop-shadow-lg">
      Remote Infrastructure Technology Stack
    </h2>

    {/* Stack Sections */}
    <div className="space-y-10">
      {[
        {
          category: "Monitoring Tools",
          icon: <FaEye />,
          items: ["Nagios", "Zabbix", "Prometheus", "Grafana", "ELK Stack"],
        },
        {
          category: "Configuration Management",
          icon: <FaCogs />,
          items: ["Ansible", "Puppet", "Chef", "SaltStack"],
        },
        {
          category: "Cloud Platforms",
          icon: <FaCloud />,
          items: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "OpenStack"],
        },
        {
          category: "Virtualization",
          icon: <FaServer />,
          items: ["VMware", "KVM", "Hyper-V", "Proxmox"],
        },
        {
          category: "Network Tools",
          icon: <FaNetworkWired />,
          items: ["OpenVPN", "pfSense", "Cisco Meraki", "Wireshark", "Nmap"],
        },
        {
          category: "Security & Compliance",
          icon: <FaShieldAlt />,
          items: ["SSL/TLS", "2FA", "SIEM", "Firewalls", "ISO 27001"],
        },
      ].map((section, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-start md:items-center gap-5 bg-white/5 p-5 rounded-lg shadow-lg backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300"
        >
          {/* Left Box */}
          <div className="flex items-center gap-4 min-w-[220px] border-l-4 border-cyan-400 pl-4">
            {section.icon}
            <div>
              <p className="text-xl font-semibold text-cyan-300">
                {section.category}
              </p>
              <div className="text-sm text-gray-300">Specialized Tools</div>
            </div>
          </div>

          {/* Items Grid */}
          <div className="flex flex-wrap gap-3">
            {section.items.map((item, index) => (
              <span
                key={index}
                className="bg-white text-slate-900 px-4 py-1.5 text-sm rounded shadow hover:bg-cyan-100 transition"
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
{/*new section*/}




 {/*new section */}

      <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-4 font-houschka">
        Kick Off Your Remote Infrastructure Project with 
 <span className="text-pink-600"> MRT</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        MRT offers complete remote infrastructure development solutions including server setup, network deployment, cloud support, and more — ensuring your systems are stable and secure.
      </p>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-stretch gap-12">
        {/* Image */}
        <div className="flex-1 relative group transition duration-500 hover:scale-105 hover:shadow-2xl h-full">
          <img
            src={Image}
            alt="Remote Infrastructure Development"
            className="rounded-xl w-full h-full object-cover shadow-lg"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 rounded-xl" />
        </div>

        {/* Steps */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-100 p-4 rounded-md shadow-sm hover:bg-blue-50 transition-all duration-300"
            >
              <div className="mt-1">{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/*benefits*/}


    <section className="bg-gray-50 py-16 px-4 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <p className="text-2xl uppercase tracking-widest text-blue-600 mb-2 font-bold font-houschka">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-900 leading-snug font-houschka mb-6">
          Power Up Your IT with <span className="text-pink-600">US</span> 
        </h2>

        {/* Bullet List */}
        <ul className="space-y-4 text-gray-800 text-base md:text-lg list-none">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-blue-600 mt-1" />
            <span>
              <strong>Data Security:</strong> Safeguard your confidential data with our recent in security measures and robust encryption protocols.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-blue-600 mt-1" />
            <span>
              <strong>24/7 Monitoring:</strong> Run your infrastructure efficiently with our technical experts providing 24/7 monitoring and offer proactive maintenance.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-blue-600 mt-1" />
            <span>
              <strong>Scalability of Solutions:</strong> Scale-up your infrastructure quickly according to your business growth, ensuring flexibility and efficiency in your operations.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-blue-600 mt-1" />
            <span>
              <strong>Disaster Recovery:</strong> Mitigate all the risks and keep your business running with our trustworthy disaster recovery processes designed specifically for your needs.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-blue-600 mt-1" />
            <span>
              <strong>Remote Support:</strong> Get remote support from our experts for instant help and troubleshooting at any given time.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-blue-600 mt-1" />
            <span>
              <strong>Cost-Effectiveness:</strong> Achieve optimal ROIs with our affordable infrastructure services that meet your budget and business needs.
            </span>
          </li>
        </ul>
      </div>
    </section>
{/*why chose us*/}
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-4 font-houschka">
        Why <span className="text-pink-600">MRT</span> IS Best for Remote Infrastructure Services ?
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        At Mohitraj Research Technology Pvt. Ltd. (MRT), we focus on innovation and a strong methodology to offer reliable, 
        remote infrastructure, and development solutions. With our focused and bespoke services, 
        organizations can enhance operational efficiency, minimize downtime, and scale even more in a
         digitally-first global landscape. 




      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border-t-4 border-pink-500 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>

    






    
    </>
  )
}

export default RemoteInfrastructure
