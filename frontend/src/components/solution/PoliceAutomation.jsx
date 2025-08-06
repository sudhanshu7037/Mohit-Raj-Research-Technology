import React, { useState, useEffect } from "react";


const policeSolutions = [
  {
    title: "Queuing of Cases",
    desc: "Streamline case registration and tracking through digital queuing.",
  },
  {
    title: "Workflow Engine",
    desc: "Automate approval and reporting processes for better transparency.",
  },
  {
    title: "Arms and Ammunition Management",
    desc: "Digitally manage weapon inventory, issue, and tracking.",
  },
  {
    title: "Vehicle Management",
    desc: "Maintain real-time vehicle logs, repairs, and allocations.",
  },
  {
    title: "Stock Management",
    desc: "Manage station supplies and resources efficiently.",
  },
  {
    title: "Reference and Grievance Management",
    desc: "Handle complaints and internal references in a structured format.",
  },
  {
    title: "Budgetary Management",
    desc: "Plan, allocate, and monitor department budgets with ease.",
  },
  {
    title: "Construction Repair",
    desc: "Digitally manage civil works and police building maintenance.",
  },
  {
    title: "Employee Management",
    desc: "Complete HR module for staff records, leaves, and roles.",
  },
  {
    title: "Task, Schedule & Time Management",
    desc: "Assign and monitor tasks, duty rosters, and time logs.",
  },
  {
    title: "Transfer/Posting Management",
    desc: "Handle transfers and postings through a digital portal.",
  },
  {
    title: "Malkhana Management",
    desc: "Digitally log seized items and their status in malkhana.",
  },
  {
    title: "Investigation & Enquiry Management",
    desc: "Digitize investigations, reports, and enquiry progress.",
  },
  {
    title: "Intelligence Management",
    desc: "Secure platform for intelligence data collection and analysis.",
  },
  {
    title: "Modernize Project Management",
    desc: "Track modernization projects and infrastructure development.",
  },
  {
    title: "Feedback Management",
    desc: "Collect, analyze, and act on internal and external feedback.",
  },
  {
    title: "Crime Statistics & Analysis Tool",
    desc: "Generate real-time crime reports and actionable insights.",
  },
  {
    title: "CUG Database SMS Based Query",
    desc: "Query sensitive data through secure SMS-based tools.",
  },
  {
    title: "Administrative & Security",
    desc: "Digitize administration and enhance station-level security.",
  },
];

const slides = [
  {
    img: "/assets/police-dashboard.jpg",
    title: "Real-Time Crime Tracking",
    desc: "Track and respond to incidents in real-time with live dashboards, geolocation, and automated alert systems for improved law enforcement efficiency."
  },
  {
    img: "/assets/police-records.jpg",
    title: "Digital FIR & Case Management",
    desc: "Digitize FIR registrations, investigation tracking, and case progress reports with centralized cloud storage and officer-specific access."
  },
  {
    img: "/assets/police-staff.jpg",
    title: "Personnel & Duty Roster Automation",
    desc: "Automate personnel management, shift allocation, and duty schedules while ensuring transparency and reduced manual intervention."
  }
];


const PoliceAutomation = () => {

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
            "url('https://media.gettyimages.com/id/1288605768/photo/mumbai-malbar-hill-police-station.jpg?s=612x612&w=0&k=20&c=wDNFHdD5xjoEwNUD-x2JYop7eLqAsvrLdTUcoeO3htU=')",
        }}
      >
        <div className="max-w-4xl z-10 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Revolutionizing Law Enforcement with Digital Technology
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Comprehensive IT Solutions to Streamline Police Operations, Improve Public Safety, and Enhance Crime Response.
          </p>
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Talk to Experts
          </button>
        </div>
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">
          What is Police Management System?
        </h2>
        <p className="text-lg text-gray-600">
          A Police Management System is a digital platform designed to automate and streamline the everyday operations of law enforcement agencies. It improves crime tracking, officer deployment, FIR management, and public interaction through secure and centralized digital tools.
        </p>
      </section>

      <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
          Police Automation Solution Modules
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {policeSolutions.map((solution, index) => (
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

    <section className="bg-blue-100 py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
      Features & Benefits of Police Automation
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Criminal Database Integration",
          points: [
            "Centralized searchable records and this that kaam naam sham tham palm sham laam aam",
            "Biometric & AI-based tracking ham tumm tum ham ham tum tum ham ham tum tum tum ham ham"
          ]
        },
        {
          title: "Real-Time Patrol Monitoring",
          points: [
            "Live GPS of patrol units",
            "Instant suspicious alerts"
          ]
        },
        {
          title: "Digital FIR & e-Reporting",
          points: [
            "Online FIR lodging system",
            "Live complaint tracking"
          ]
        },
        {
          title: "Automated Case Management",
          points: [
            "Streamlined case progress flow",
            "Easy access to legal docs"
          ]
        },
        {
          title: "Citizen Mobile App Integration",
          points: [
            "Report crimes with evidence",
            "Get real-time police updates"
          ]
        },
        {
          title: "Command & Control Center",
          points: [
            "Unified surveillance system",
            "Fast action on real-time feeds"
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

{/* Workflow Section */}
<section className="bg-blue-50 py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
    Police Automation Workflow by Mrtion
  </h2>
  <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
    {[
      "Citizen Complaint Registration",
      "FIR Auto Generation",
      "Criminal Record Lookup",
      "Digital Investigation Tracker",
      "Real-Time Patrol Monitoring",
      "Online Case Updates",
      "Judicial File Transfer",
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
    Mrtion Solutions for Police Departments
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      "Crime Investigation Unit",
      "Traffic Control Department",
      "Cybercrime Cell",
      "Emergency Response & 112 Unit",
      "Forensic & Evidence Lab",
      "Citizen Grievance Cell",
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

{/* Why Choose Us Section - Police Management */}
<section className="bg-gray-700 text-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-10">
    
    {/* Left Content */}
    <div className="flex flex-col justify-center min-h-full">
      <h2 className="text-3xl font-bold mb-6">Why Choose Mrtion for Police Management?</h2>
      <ul className="space-y-4">
        {[
          "Centralized Crime Record Management",
          "Smart FIR & Investigation Workflow",
          "Live GPS-Based Patrol Tracking",
          "Integrated Criminal & Vehicle Database",
          "Real-Time Alert & Surveillance Systems",
          "Seamless Coordination with Law Agencies",
          "24/7 Secure Cloud Hosting with Backup",
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

    {/* Right Image */}
    <div className="h-full flex items-stretch">
      <img
        src="https://img.freepik.com/free-photo/security-guard-monitoring-multiple-screens_23-2150171222.jpg"
        alt="Police Management Illustration"
        className="w-full rounded-xl shadow-lg object-cover h-full"
      />
    </div>
  </div>
</section>

{/* Product Slider Section */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
      MRtion’s Smart Police Management Solutions
    </h2>
    <p className="text-gray-600 text-lg">
      Explore our real-time automation tools designed to modernize law enforcement, enhance public safety, and streamline police operations.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <img
      src={slides[current].img}
      alt="MRtion Police Product Slide"
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

{/* CTA Section - Police Automation Software */}
<section className="py-20 px-6 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 text-center">
  <h2 className="text-3xl font-bold mb-4 text-blue-900">
    Ready to Transform Your Policing Operations?
  </h2>
  <p className="mb-6 text-gray-700 text-lg max-w-3xl mx-auto">
    Connect with our law enforcement tech specialists and explore how our smart police automation solutions can enhance investigation, crime tracking, reporting, and real-time communication.
  </p>
  <button className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all shadow-lg">
    Schedule a Free Demo
  </button>
</section>



    
    
    </>
  )
}

export default PoliceAutomation