import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://www.shutterstock.com/image-photo/advanced-cctv-surveillance-systems-office-600nw-2483738621.jpg",
    title: "24/7 Video Monitoring",
    desc: "Ensure continuous surveillance with high-definition cameras and night vision capabilities for round-the-clock security.",
  },
  {
    img: "https://img.freepik.com/free-vector/facial-recognition-abstract-concept-illustration_335657-3760.jpg",
    title: "Smart Facial Recognition",
    desc: "Utilize AI-powered facial recognition to identify threats, unauthorized access, or track individuals in secured zones.",
  },
  {
    img: "https://img.freepik.com/free-vector/intrusion-detection-system-abstract-concept_335657-3006.jpg",
    title: "Intrusion & Motion Detection",
    desc: "Receive real-time alerts on unauthorized movements or breaches, enabling instant response and evidence collection.",
  },
  {
    img: "https://img.freepik.com/free-photo/cctv-security-cameras-mounted-white-wall_53876-97002.jpg",
    title: "Cloud-Based Surveillance",
    desc: "Access footage remotely, store securely on the cloud, and manage multiple locations from a centralized dashboard.",
  },
];


const SecuritySurveillance = () => {

  const [current, setCurrent] = useState(0);
          
            useEffect(() => {
              const timer = setInterval(() => {
                setCurrent((prev) => (prev + 1) % slides.length);
              }, 4000);
              return () => clearInterval(timer);
            }, [slides.length]);
  return (
    <>
    
    {/* Hero Section */}
<section
  className="relative bg-cover bg-center text-white px-6 min-h-screen flex items-center"
  style={{
    backgroundImage:
      "url('https://www.shutterstock.com/shutterstock/photos/2542432759/display_1500/stock-photo-cctv-control-room-2542432759.jpg')",
  }}
>
  <div className="max-w-4xl z-10 text-left">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
      Advanced CCTV Security Surveillance Solutions
    </h1>
    <p className="text-lg md:text-xl mb-6 max-w-xl">
      Integrated Security Systems Designed to Monitor, Record, and Protect Your Premises 24/7
    </p>
    <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
      Talk to Security Experts
    </button>
  </div>
  <div className="absolute inset-0 bg-black opacity-40"></div>
</section>

{/* Overview Section */}
<section className="py-16 px-6 text-center max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-4 text-blue-900">
    What is CCTV Security Surveillance?
  </h2>
  <p className="text-lg text-gray-600">
    CCTV Security Surveillance is a comprehensive solution that utilizes advanced camera systems to monitor activities,
    prevent unauthorized access, and safeguard assets. From homes to institutions, our smart surveillance ensures
    real-time monitoring, video recording, motion detection, and remote access through mobile and cloud platforms.
  </p>
</section>

{/* CCTV Security Surveillance Solutions Section */}

<section className="bg-blue-50 py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
      CCTV Security Surveillance Solutions
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "24/7 Live Monitoring",
          desc: "Enable continuous real-time monitoring of critical areas for enhanced security and quick response."
        },
        {
          title: "Motion Detection Alerts",
          desc: "Automatically detect suspicious movements and trigger instant alerts for rapid action."
        },
        {
          title: "Cloud Video Storage",
          desc: "Securely store surveillance footage on the cloud for easy access and reliable backup."
        },
        {
          title: "Night Vision Cameras",
          desc: "Deploy infrared-enabled cameras to maintain surveillance even in low-light or dark conditions."
        },
        {
          title: "Remote Viewing Access",
          desc: "Monitor live camera feeds remotely via mobile apps or web dashboards from anywhere."
        },
        {
          title: "Video Analytics Integration",
          desc: "Use AI-powered tools for facial recognition, license plate detection, and behavior analysis."
        },
        {
          title: "Access Control Systems",
          desc: "Integrate CCTV with access control for restricted zones using biometric or card entry."
        },
        {
          title: "Multi-Camera Setup",
          desc: "Cover wide areas with high-resolution multi-camera systems for maximum coverage."
        },
        {
          title: "Real-Time Incident Reporting",
          desc: "Get real-time updates and maintain logs of suspicious activities with timestamped video clips."
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative bg-white p-6 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
        >
          {/* Decorative Background Shape */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-tr-[80px] rotate-45 z-0 group-hover:bg-blue-300 transition-all duration-300"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-800 transition">
              {item.title}
            </h3>
            <p className="text-gray-700 group-hover:text-gray-100 transition duration-300">
              {item.desc}
            </p>
          </div>

          {/* Hover Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-blue-800 opacity-0 group-hover:opacity-60 transition-all duration-300 z-0 rounded-xl pointer-events-none"></div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* CCTV Surveillance Benefits Section */}
<section className="bg-white py-20 px-6 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-blue-900 mb-12">
      Benefits of CCTV Security & Surveillance Solutions
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "24/7 Real-Time Monitoring",
          desc: "Constant surveillance ensures round-the-clock safety and security.",
          bg: "from-blue-100 to-blue-300"
        },
        {
          title: "Crime Deterrence",
          desc: "Visible cameras reduce the likelihood of theft and vandalism.",
          bg: "from-blue-100 to-blue-300"
        },
        {
          title: "Remote Access",
          desc: "Monitor premises from any location using mobile or desktop apps.",
          bg: "from-blue-100 to-blue-300"
        },
        {
          title: "Evidence Collection",
          desc: "High-quality footage can assist in investigations and legal matters.",
          bg: "from-blue-100 to-blue-300"
        },
        {
          title: "Integration with Alarm Systems",
          desc: "Sync with alarms and motion sensors for enhanced protection.",
          bg: "from-blue-100 to-blue-300"
        },
        {
          title: "Scalable for All Needs",
          desc: "Easily customizable for homes, offices, schools, or large enterprises.",
          bg: "from-blue-100 to-blue-300"
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`bg-gradient-to-br ${item.bg} rounded-xl h-64 w-full flex flex-col items-center justify-center text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl group`}
        >
          <h3 className="text-xl font-semibold mb-2 group-hover:scale-110 transition-transform duration-300">
            {item.title}
          </h3>
          <p className="text-gray-700 px-4 group-hover:text-gray-900 transition duration-300">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



{/* Workflow Section */}
<section className="bg-blue-50 py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    CCTV Surveillance Implementation Workflow by Mrtion
  </h2>
  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
    {[
      "Site Survey & Risk Assessment",
      "Camera Placement Planning",
      "Hardware Procurement",
      "Wiring & Network Setup",
      "Device Installation",
      "System Configuration",
      "Testing & Training",
      "Ongoing Monitoring & Support",
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

{/* Departments Section */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Mrtion CCTV Surveillance Solutions for Various Industries
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "Residential Apartments & Societies",
      "Corporate Offices & IT Parks",
      "Factories & Warehouses",
      "Educational Institutions",
      "Retail Stores & Malls",
      "Hospitals & Healthcare Units",
      "Banks & ATMs",
      "Government Buildings",
      "Public Spaces & Parking Areas",
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

{/* Why Choose CCTV Security Surveillance Solutions */}
<section className="bg-blue-50 py-20 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        Why Choose Our CCTV Security Surveillance Solutions?
      </h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Safeguard your premises with intelligent surveillance systems that offer real-time monitoring, automated alerts, and complete control.
      </p>
    </div>

    {/* Content Block */}
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      
      {/* Image with Unique Hover */}
      <div className="relative group rounded-3xl overflow-hidden shadow-xl">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvHi7Wn8TPLiCRmdMsNKOCaP2yPSu5PP4EIqxaA66VkRhbEysVjAQL2cZqnrUOcmL3ow&usqp=CAU"
          alt="Why Choose CCTV"
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-30 group-hover:bg-opacity-60 transition duration-500"></div>
      </div>

      {/* Text Content */}
      <div>
        <ul className="space-y-6 text-gray-800">
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">24/7 Real-Time Monitoring</h4>
              <p>Keep eyes on critical areas anytime, anywhere with centralized surveillance access.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Motion Detection & Smart Alerts</h4>
              <p>Receive instant notifications for suspicious activities with AI-powered analytics.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Cloud & On-Premise Storage</h4>
              <p>Secure your video footage with scalable cloud or local storage options.</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-blue-600 text-xl font-bold">✔</span>
            <div>
              <h4 className="font-semibold text-lg">Customizable Multi-Camera Setup</h4>
              <p>Tailor surveillance coverage for campuses, offices, warehouses, or public areas.</p>
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
      MRtion’s Smart CCTV Surveillance Solutions
    </h2>
    <p className="text-gray-600 text-lg">
      Explore our intelligent video surveillance systems designed to secure institutions, monitor activity in real time, and enable proactive threat response.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <img
      src={slides[current].img}
      alt="MRtion CCTV Product Slide"
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

{/* CTA Section - CCTV Security Surveillance */}
<section className="py-20 px-6 bg-gradient-to-r from-indigo-100 via-purple-50 to-blue-100 text-center">
  <h2 className="text-3xl font-bold mb-4 text-indigo-900">
    Ready to Secure Your Premises with Smart Surveillance?
  </h2>
  <p className="mb-6 text-gray-700 text-lg max-w-3xl mx-auto">
    Get in touch with our security specialists and discover how MRtion’s advanced CCTV surveillance systems can help protect your assets with 24/7 monitoring, intelligent analytics, and remote access.
  </p>
  <button className="bg-indigo-800 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all shadow-lg">
    Request a Free Security Assessment
  </button>
</section>




    </>
  )
}

export default SecuritySurveillance
