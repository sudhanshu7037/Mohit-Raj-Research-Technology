import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { Server } from "lucide-react";
import backimage from "../../assets/backimage.png";
import Enterprizes from "../../assets/enterprizes.png";
import BannerImage from "../../assets/servicespage/hardwareandnetworking/images/network_01[1].png";
import Banner from "../../assets/servicespage/hardwareandnetworking/images/network_banner_image[1].png"
import {
  FaServer,
  FaLaptopCode,
  FaCloud,
  FaDatabase,
  FaVial,
  FaMobileAlt,
  FaCogs,
  FaShieldAlt,
  FaUsers,
  FaClipboardList,
  FaUserFriends,
  FaHeadphones,
  FaMap,
  FaClipboardCheck,
  FaArrowRight,
  FaCheckCircle,
  FaNetworkWired,
  FaTools,
  
} from "react-icons/fa";
import DevImage from "../../assets/servicespage/hardwareandnetworking/images/image1.jpg";

const techStack = [
  {
    category: "Backend",
    icon: <FaServer />,
    items: [".NET", "Java", "Node", "PHP", "Ruby on Rails"],
  },
  {
    category: "Frontend",
    icon: <FaLaptopCode />,
    items: ["Angular", "React", "Vue"],
  },
  {
    category: "Cloud & DevOps",
    icon: <FaCloud />,
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase />,
    items: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Azure SQL",
      "Amazon RDS",
      "Oracle",
      "Cassandra",
      "Elasticsearch",
      "Dynamo",
    ],
  },
  {
    category: "Testing",
    icon: <FaVial />,
    items: [
      "Postman",
      "Selenium",
      "TestRail",
      "Apache JMeter",
      "Katalon Studio",
      "Jest",
      "OWASP ZAP",
      "JUnit, NUnit",
      "BrowserStack",
      "Jasmine, Mocha, Chai",
    ],
  },
  {
    category: "Mobility",
    icon: <FaMobileAlt />,
    items: ["iOS", "Android", "React Native", "Flutter", "Ionic"],
  },
  {
    category: "Others",
    icon: <FaCogs />,
    items: ["SharePoint", "Apache Kafka", "BizTalk", "Power BI"],
  },
];


 const steps = [
    {
      title: "Initial Infrastructure Analysis",
      description:
        "We assess your existing hardware and networking setup to plan an efficient and scalable solution.",
      icon: <FaNetworkWired className="text-blue-600 text-xl" />,
    },
    {
      title: "Hardware Setup & Configuration",
      description:
        "Install and configure routers, switches, servers, and workstations as per your business needs.",
      icon: <FaTools className="text-blue-600 text-xl" />,
    },
    {
      title: "Network Security Implementation",
      description:
        "Secure your network using firewalls, antivirus systems, access control, and VPN configurations.",
      icon: <FaShieldAlt className="text-blue-600 text-xl" />,
    },
    {
      title: "Monitoring & Support",
      description:
        "24/7 system monitoring, troubleshooting, updates, and maintenance to ensure smooth operation.",
      icon: <FaServer className="text-blue-600 text-xl" />,
    },
  ];

  const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: "Robust Network Security",
    description:
      "We implement advanced firewalls, encryption, and access control to protect your data and systems from cyber threats and unauthorized access.",
  },
  {
    icon: <FaUsers className="text-3xl text-blue-600" />,
    title: "Skilled IT Professionals",
    description:
      "Our team includes certified hardware and network engineers who are experienced in handling complex infrastructure setups and resolving critical IT issues.",
  },
  {
    icon: <FaClipboardList className="text-3xl text-blue-600" />,
    title: "Customized IT Infrastructure",
    description:
      "We design and deploy tailor-made hardware and network systems that match your organization’s operational needs and budget.",
  },
  {
    icon: <FaUserFriends className="text-3xl text-blue-600" />,
    title: "Proactive Support Services",
    description:
      "Our customer-focused team provides round-the-clock monitoring, maintenance, and on-site or remote troubleshooting to ensure continuous operations.",
  },
];

const faqs = [
  {
    question: "What services do hardware and networking companies offer?",
    answer:
      "They provide services like hardware setup, network installation, troubleshooting, system maintenance, and security management.",
  },
  {
    question: "Why is network security important for businesses?",
    answer:
      "Network security helps protect business data from unauthorized access, viruses, and cyber-attacks, ensuring safe digital operations.",
  },
  {
    question: "What is the role of a network administrator?",
    answer:
      "A network administrator manages and maintains computer networks, including routers, switches, firewalls, and ensures connectivity and performance.",
  },
  {
    question: "What types of hardware are essential for networking?",
    answer:
      "Routers, switches, firewalls, servers, cables, and network interface cards are essential components in networking.",
  },
  {
    question: "How often should hardware systems be updated or maintained?",
    answer:
      "Regular maintenance should be performed quarterly or as needed to prevent system failures and ensure peak performance.",
  },
  {
    question: "Can you assist with remote and on-site network setup?",
    answer:
      "Yes, we offer both remote support and on-site services for network installation and troubleshooting based on client needs.",
  },
  {
    question: "Do you offer AMC (Annual Maintenance Contracts) for hardware?",
    answer:
      "Yes, we provide customizable AMC plans to maintain your systems regularly and ensure minimal downtime.",
  },
];





const HardwareNetworking = () => {

  const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <>
      {/* === Hero Section === */}
        <div className="relative w-full h-screen overflow-hidden">
              {/* Background Image */}
              <img
                src={BannerImage}
                alt="Custom Software Development"
                className="w-full h-full object-cover"
              />
      
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
              {/* Hero Content */}
             <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-4">
        <h3 className="text-white text-xl md:text-6xl font-semibold leading-tight mb-10 font-houschka">
          Transform Your Business With 
          <br />
          Hardware Networking
          <br />
        
          Development Services
        </h3>
        
        <div className="flex gap-4">
          <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-6">
            GET IN TOUCH
          </button>
         
        </div>
      </div>
      
            </div>
      {/* === Second Section: About + Stats === */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-blue-100 text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-blue-500 text-4xl font-bold font-houschka">Overview</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-justify mt-4">
              At MRT, we provide comprehensive Hardware and Networking services tailored to meet the IT infrastructure needs of modern businesses. 
              Our team of certified professionals excels in deploying and maintaining reliable hardware systems and secure network architectures.
              From server installations, structured cabling, and workstation setups to firewall configurations, LAN/WAN solutions, and network 
              troubleshooting—we ensure your business stays connected, efficient, and secure. With a focus on scalability and performance,
              we help you build a strong digital backbone for long-term success.
            </p>
        </div>

        {/* <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">1800+</p>
            <p className="mt-2 text-xs sm:text-sm md:text-base">Completed Projects</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">21+</p>
            <p className="mt-2 text-xs sm:text-sm md:text-base">Years of Experience</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">810+</p>
            <p className="mt-2 text-xs sm:text-sm md:text-base">Global Clients</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">36</p>
            <p className="mt-2 text-xs sm:text-sm md:text-base">Countries Served</p>
          </div>
        </div> */}
      </section>

      {/* === Third Section: Server & Storage Solutions (with heading + para + cards) === */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-red-100 text-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Heading & Paragraph */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 font-houschka">
              Hardware and Network Services
            </h2>
            
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white border rounded-xl p-4 sm:p-6 shadow hover:shadow-lg transition duration-300">
              <div className="mb-4 bg-blue-100 inline-block p-3 rounded-full">
                <Server className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-2">
                Full Server Setup
              </h3>
              <p className="text-gray-700 mb-3 text-xs sm:text-sm md:text-base">
                We provide customized server setup solutions including hardware configuration and OS installation.
              </p>
              <ul className="list-disc pl-5 text-blue-700 space-y-1 text-xs sm:text-sm md:text-base">
                <li>Rack & Tower Server Setup</li>
                <li>Server Room Management</li>
                <li>Firewall & IP Configuration</li>
              </ul>
            </div>

            <div className="bg-white border rounded-xl p-4 sm:p-6 shadow hover:shadow-lg transition duration-300">
              <div className="mb-4 bg-blue-100 inline-block p-3 rounded-full">
                <Server className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-2">
                Data Storage Solutions
              </h3>
              <p className="text-gray-700 mb-3 text-xs sm:text-sm md:text-base">
                Reliable and scalable data storage services for small to enterprise level needs.
              </p>
              <ul className="list-disc pl-5 text-blue-700 space-y-1 text-xs sm:text-sm md:text-base">
                <li>Data Backup & Recovery</li>
                <li>Cloud & NAS Storage</li>
                <li>Security & Compliance</li>
              </ul>
            </div>

            <div className="bg-white border rounded-xl p-4 sm:p-6 shadow hover:shadow-lg transition duration-300">
              <div className="mb-4 bg-blue-100 inline-block p-3 rounded-full">
                <Server className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-2">
                Virtualization & RAID
              </h3>
              <p className="text-gray-700 mb-3 text-xs sm:text-sm md:text-base">
                Optimize your server with virtualization and high-speed RAID setups.
              </p>
              <ul className="list-disc pl-5 text-blue-700 space-y-1 text-xs sm:text-sm md:text-base">
                <li>VMware & Hyper-V Support</li>
                <li>RAID 0, 1, 5, 10 Config</li>
                <li>24/7 Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === Fourth Section: Hardware & Networking Case Studies === */}
  

      {/* === Fifth Section: Call to Action === */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white text-gray-800">
        <div className="flex flex-col sm:flex-row items-center justify-center max-w-4xl mx-auto space-y-4 sm:space-y-0 sm:space-x-3">
          <div className="w-1 h-10 sm:h-12 bg-orange-500"></div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center sm:text-left">
            Have a  hardware network related challenge to address?
          </h1>
          <button className="flex items-center space-x-1 px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            <span className="text-sm sm:text-base">Contact Us</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </section>

{/*new section*/}
<section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Hardware and Networking Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          {/* Column 1 */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">System Installation</h3>
            <p>
              Our team excels in setting up desktops, servers, routers, and switches 
              with seamless configuration. We ensure stable and secure deployment of hardware
              infrastructure customized to your business needs.
            </p>
          </div>

          {/* Column 2 */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Network Design & Management</h3>
            <p>
              From LAN/WAN planning to Wi-Fi setup and secure remote access, we design
              scalable network solutions. Our monitoring tools help maintain uptime
              and optimize traffic flow across the organization.
            </p>
          </div>

          {/* Column 3 */}
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Support & Maintenance</h3>
            <p>
              We provide ongoing technical support, troubleshooting, and upgrades.
              Our proactive maintenance ensures your hardware and network components
              remain secure, updated, and operational 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>

{/*new section*/}
               {/*new  div*/}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-blue-100">
        <h2 className="text-4xl text-center font-bold text-blue-900 mb-12 font-houschka">
          Technology Stack
        </h2>
        <div className="space-y-10">
          {techStack.map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              {/* Left Label */}
              <div className="flex items-center min-w-[180px] gap-3 border p-2  border-black">
                {section.icon}
                <span className="text-lg font-semibold text-blue-800">
                  {section.label}
                </span>
                <h1>{section.category}</h1>
              </div>

              {/* Right Items */}
              <div className="flex flex-wrap gap-3">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 hover:bg-blue-100 text-gray-800 px-4 py-2  border border-black text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
{/* new div */}
{/* new div */}
<div className="max-w-7xl mx-auto px-4 py-16 text-center">
  <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
    Hardware & Networking Solutions We Provide
  </h2>
  <p className="text-gray-600 max-w-4xl mx-auto mb-12">
    We deliver professional-grade hardware and networking services designed to support secure, scalable, and high-performance IT infrastructures. Our offerings include server installations, network setups, security implementations, and long-term support across diverse industries.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
    {[
      {
        title: "Enterprise Network Design",
        description:
          "Structured LAN/WAN setups with router/switch configuration and performance optimization for reliable connectivity.",
      },
      {
        title: "Server Setup & Maintenance",
        description:
          "Complete server deployment, hardware upgrades, data center setup, and OS/configuration support for businesses.",
      },
      {
        title: "Firewall & Security Services",
        description:
          "Implementation of advanced firewalls, VPN access, endpoint security, and network monitoring to ensure 24/7 protection.",
      },
      {
        title: "Cloud & Data Backup",
        description:
          "Automated cloud-based backups, disaster recovery planning, and secure file storage solutions for business continuity.",
      },
      {
        title: "IT Infrastructure Audits",
        description:
          "In-depth auditing of your hardware and network setup to identify risks, gaps, and upgrade opportunities.",
      },
      {
        title: "Remote Support & Monitoring",
        description:
          "Real-time diagnostics, troubleshooting, and system monitoring to ensure uptime and fast issue resolution.",
      },
    ].map((service, index) => (
      <div key={index} className="border-t-4 border-blue-500 pt-4">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-700 text-sm">{service.description}</p>
      </div>
    ))}
  </div>
</div>

{/*new  div*/}
      <div className="mx-w-7xl mx-auto px-4 py-16 bg-red-100">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12 font-houschka">
          How to Start Your hardware and networking Project With MRT
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={DevImage}
              alt="Development Process"
              className=" h-full object-cove "
            />
          </div>

          {/* Steps Section */}
          <div className="flex-1 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
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

      {/*new  div*/}

      <div className="mx-w-7xl mx-auto px-4 py-16 bg-blue-100">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4 font-houschka">
          Why Choose MRT
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          As a leading software development company, MRT is dedicated to
          upholding industry standards. Hire MRT as your custom software
          development partner to leverage our qualities for your benefit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-500 p-6 rounded-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* === Hardware & Networking FAQs Section === */}
<div className="max-w-3xl mx-auto p-4 ">
  <h2 className="text-4xl font-semibold text-center mb-8 font-houschka text-blue-500">
    Hardware & Networking FAQs
  </h2>
  {faqs.map((faq, index) => (
    <div key={index} className="border-b py-4">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-700 font-basis">
          {faq.question}
        </span>
        {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {openIndex === index && (
        <p className="mt-2 text-gray-600 font-basis">{faq.answer}</p>
      )}
    </div>
  ))}
</div>




      
    </>
  );
};

export default HardwareNetworking;