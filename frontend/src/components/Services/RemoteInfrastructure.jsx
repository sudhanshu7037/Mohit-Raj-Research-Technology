import React from 'react'
import bgImage from "../../assets/background.png";
import Banner from "../../assets/background.png";
import Image from "../../assets/background.png";


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


const remoteInfraServices = [
  {
    icon: <FaServer className="text-3xl text-blue-600" />,
    title: "Remote Server Deployment",
    description:
      "Provision and configure servers remotely to host applications, databases, and storage systems with zero downtime.",
  },
  {
    icon: <FaNetworkWired className="text-3xl text-blue-600" />,
    title: "Network Infrastructure Setup",
    description:
      "Design and deploy secure and scalable networks remotely, including VPNs, firewalls, and traffic control.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: "Security Management",
    description:
      "Implement remote monitoring, intrusion detection, firewall rules, and access control for infrastructure security.",
  },
  {
    icon: <FaCloud className="text-3xl text-blue-600" />,
    title: "Cloud Infrastructure Support",
    description:
      "Manage AWS, Azure, GCP infrastructure remotely—scaling compute, storage, and deployment automation.",
  },
  {
    icon: <FaTools className="text-3xl text-blue-600" />,
    title: "Remote IT Maintenance",
    description:
      "Ensure your infrastructure is updated, monitored, patched and performing optimally 24/7 from any location.",
  },
  {
    icon: <FaSyncAlt className="text-3xl text-blue-600" />,
    title: "Disaster Recovery & Backup",
    description:
      "Automated remote backups, redundancy planning and rapid disaster recovery systems across all services.",
  },
];


const steps = [
  {
    icon: <FaServer className="text-2xl text-blue-600" />,
    title: "Remote Server Deployment",
    description: "Provision and configure servers remotely to host applications, databases, and storage systems with zero downtime.",
  },
  {
    icon: <FaNetworkWired className="text-2xl text-blue-600" />,
    title: "Network Infrastructure Setup",
    description: "Design and deploy secure and scalable networks remotely, including VPNs, firewalls, and traffic control.",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-blue-600" />,
    title: "Security Management",
    description: "Implement remote monitoring, intrusion detection, firewall rules, and access control for infrastructure security.",
  },
  {
    icon: <FaCloud className="text-2xl text-blue-600" />,
    title: "Cloud Infrastructure Support",
    description: "Manage AWS, Azure, GCP infrastructure remotely—scaling compute, storage, and deployment automation.",
  },
  {
    icon: <FaTools className="text-2xl text-blue-600" />,
    title: "Remote IT Maintenance",
    description: "Ensure your infrastructure is updated, monitored, patched and performing optimally 24/7 from any location.",
  },
  
];

const Features = [
  {
    icon: <FaServer className="text-3xl text-blue-600" />,
    title: "Remote Server Management",
    description: "Deploy and maintain high-performance servers remotely for uninterrupted business operations.",
  },
  {
    icon: <FaNetworkWired className="text-3xl text-blue-600" />,
    title: "Advanced Network Configuration",
    description: "Design and monitor secure VPNs, LAN/WAN networks, and data pipelines remotely.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: "Security & Compliance",
    description: "Ensure remote access with top-tier encryption, firewalls, and compliance to industry standards.",
  },
  {
    icon: <FaCloud className="text-3xl text-blue-600" />,
    title: "Cloud Infrastructure Integration",
    description: "Build scalable remote infrastructures integrated with AWS, Azure, or private clouds.",
  },
  {
    icon: <FaTools className="text-3xl text-blue-600" />,
    title: "Monitoring & Support",
    description: "Enable 24/7 proactive remote monitoring, support ticketing, and infrastructure diagnostics.",
  },
  {
    icon: <FaSyncAlt className="text-3xl text-blue-600" />,
    title: "Automated Updates & Backups",
    description: "Implement scheduled patching, backup routines, and version control without manual intervention.",
  },
];



const RemoteInfrastructure = () => {
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
      Reliable, 24/7 infrastructure management, monitoring, and support to keep your IT systems running seamlessly from anywhere.
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
    MOHITRAJ RESEARCH AND TECHNOLOGY PRIVATE LIMITED offers state-of-the-art <strong>Remote Infrastructure Management (RIM)</strong> services that ensure business continuity, performance optimization, and reduced operational costs. Our solutions include 24/7 remote monitoring, network administration, server management, and cloud infrastructure support.
    <br /><br />
    We help enterprises manage their IT environments from a centralized location using automation tools and AI-powered insights. From proactive maintenance to real-time incident response, our skilled engineers deliver secure and scalable infrastructure solutions that meet compliance and business needs.
    <br /><br />
    With a commitment to uptime, security, and efficiency, our RIM services allow organizations to focus on core operations while we handle IT complexities in the background.
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
        title: "24/7 Server Monitoring",
        icon: <FaServer className="text-pink-500 text-3xl" />,
        description: "Proactive server health checks and alerts to maintain business continuity and avoid downtime.",
      },
      {
        title: "Remote Desktop Management",
        icon: <FaLaptop className="text-pink-500 text-3xl" />,
        description: "Secure remote access, support, and maintenance of desktops and workstations.",
      },
      {
        title: "Network Infrastructure Support",
        icon: <FaNetworkWired className="text-pink-500 text-3xl" />,
        description: "End-to-end management of routers, switches, VPNs, and firewalls to ensure secure connectivity.",
      },
      {
        title: "Cloud Infrastructure Management",
        icon: <FaCloud className="text-pink-500 text-3xl" />,
        description: "Optimization, scaling, and monitoring of cloud services like AWS, Azure, and Google Cloud.",
      },
      {
        title: "Data Backup & Disaster Recovery",
        icon: <FaDatabase className="text-pink-500 text-3xl" />,
        description: "Automated backups and recovery plans to safeguard critical business data from loss or corruption.",
      },
      {
        title: "Patch & Software Updates",
        icon: <FaTools className="text-pink-500 text-3xl" />,
        description: "Timely OS, app, and firmware updates to keep systems secure and up-to-date.",
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
      Remote Infrastructure Experience
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
      {/* Column 1 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">24/7 Infrastructure Monitoring</h3>
        <p>
          Our proactive monitoring ensures uninterrupted operations and quick issue
          resolution, reducing downtime and enhancing system reliability.
        </p>
      </div>

      {/* Column 2 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">Secure Remote Access</h3>
        <p>
          Enable teams to securely access infrastructure using VPNs, firewalls,
          and encrypted protocols—ensuring data safety across geographies.
        </p>
      </div>

      {/* Column 3 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">Automated Backup & Recovery</h3>
        <p>
          We automate backup schedules and disaster recovery strategies to protect
          your critical data and keep business continuity intact in any situation.
        </p>
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
 <div className="max-w-7xl mx-auto px-4 py-16 text-center bg-red-200">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
          Custom Remote Infrastructure Services We Offer
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-12">
          We deliver end-to-end remote infrastructure services to help businesses manage,
          monitor, and scale their IT infrastructure with reliability and security — all from a distance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {remoteInfraServices.map((service, index) => (
            <div
              key={index}
              className="bg-white hover:bg-blue-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500"
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

      <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-4 font-houschka">
        Start Your Remote Infrastructure Project with <span className="text-pink-600">MRT</span>
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

    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-4 font-houschka">
        Why Choose <span className="text-pink-600">MRT</span>?
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        MRT is your go-to provider for remote infrastructure excellence. We combine smart automation, secure networks, and responsive support to streamline your operations from anywhere.
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
