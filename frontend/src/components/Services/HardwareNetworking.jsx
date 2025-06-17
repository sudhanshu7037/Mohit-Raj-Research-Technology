import React from "react";
import { Server } from "lucide-react";
import backimage from "../../assets/backimage.png";
import Enterprizes from "../../assets/enterprizes.png";
import Banner from "../../assets/Banner.png";
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
} from "react-icons/fa";


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



const HardwareNetworking = () => {
  return (
    <>
      {/* === Hero Section === */}
      <section className="relative bg-black text-white font-sans min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backimage})` }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            HARDWARE & NETWORKING SERVICES
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 sm:mb-8">
            With over 21 years of excellence, we provide reliable and scalable hardware
            infrastructure, networking setup, server configuration, and enterprise-grade
            IT solutions that power your business performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition">
              GET IN TOUCH
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </section>

      {/* === Second Section: About + Stats === */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-6 sm:mb-8 md:mb-12">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Our expert team of hardware and networking professionals ensures seamless connectivity,
            secure installations, and dependable IT support across industries. From LAN/WAN setups to
            cloud server deployments, we deliver end-to-end solutions tailored to your needs. Join
            hundreds of satisfied clients who've transformed their infrastructure with us.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
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
        </div>
      </section>

      {/* === Third Section: Server & Storage Solutions (with heading + para + cards) === */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Heading & Paragraph */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Hardware and Network Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              At MRT, we provide comprehensive Hardware and Networking services tailored to meet the IT infrastructure needs of modern businesses. 
              Our team of certified professionals excels in deploying and maintaining reliable hardware systems and secure network architectures.
              From server installations, structured cabling, and workstation setups to firewall configurations, LAN/WAN solutions, and network 
              troubleshooting—we ensure your business stays connected, efficient, and secure. With a focus on scalability and performance,
              we help you build a strong digital backbone for long-term success.
            </p>
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
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Hardware & Networking Case Studies
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              We boast a vast pool of hardware and networking experts who have successfully delivered robust IT infrastructure solutions for a diverse range of clients. Exploring these projects will underscore our proficiency in hardware setups, network configurations, and enterprise IT solutions. Feel free to dive in!
            </p>
          </div>

          {/* Case Study Item */}
          <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 h-48 sm:h-64 md:h-80 lg:h-96">
              <img
                src={Enterprizes}
                alt="enterprizes networking"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 min-h-48 sm:min-h-64 md:h-80 lg:h-96 p-4 sm:p-6 bg-blue-900 text-white flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                Enterprise Network Deployment
              </h3>
              <div className="flex gap-2 mb-4">
                <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Cisco</span>
                <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">Enterprise IT</span>
              </div>
              <p className="text-gray-200 mb-4 text-xs sm:text-sm md:text-base">
                With the growing demand for seamless connectivity in large enterprises, MRT assisted a UK-based multinational company to deploy a robust network infrastructure. We implemented high-performance Cisco routers, switches, and firewalls to ensure secure and scalable LAN/WAN connectivity, enabling efficient operations across multiple locations.
              </p>
              <button className="bg-white text-blue-900 px-3 sm:px-4 py-1 sm:py-2 rounded-md font-medium hover:bg-gray-200 transition text-xs sm:text-sm md:text-base">
                VIEW CASE STUDY
              </button>
            </div>
          </div>
        </div>
      </section>

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
      <div className="max-w-7xl mx-auto px-4 py-16">
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





      
    </>
  );
};

export default HardwareNetworking;