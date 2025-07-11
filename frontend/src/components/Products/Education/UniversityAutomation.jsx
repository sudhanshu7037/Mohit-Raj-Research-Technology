import React from 'react'
import {
  GraduationCap,
  Info,
  UserRound,
  Wallet,
  FileText,
  CreditCard,
  FileCheck,
  CalendarClock,
  BedDouble,
  BookOpen,
  MessageSquare,
  Settings,
  Banknote,
  BarChart2,
  Headphones,
  Users,
  MonitorPlay
} from "lucide-react";

const UniversityAutomation = () => {



  
const features = [
  {
    title: "Institute Management",
    points: [
      "Automates and streamlines the educational processes of colleges",
      "Enables courses, eligibility criteria and seats for admission",
    ],
    img: "https://www.edusec.org/image/products/university-1.png", // Replace with your local or URL image
  },
  {
    title: "Students Management",
    points: [
      "Turns students complete educational life cycle digital",
      "Make fees payments completely safe and secure",
      "Monitor application status, exams and merit list",
    ],
    img: "https://www.edusec.org/image/products/university-2.png",
  },
  {
    title: "Staff Management",
    points: [
      "Makes the joining to exit processes of staff automated",
      "Tracks teaching processes for academic improvements",
    ],
    img: "https://www.edusec.org/image/products/university-3.png",
  },
];
const functionality = [
  {
    title: "Management of Courses",
    icon: <GraduationCap className="text-green-600 w-6 h-6" />,
    points: [
      "Course Design Software",
      "Curriculum Management System",
    ],
  },
  {
    title: "Management of Inquiries",
    icon: <Info className="text-blue-600 w-6 h-6" />,
    points: [
      "Lead Tracking Solution",
      "Student Inquiry Management Software",
    ],
  },
  {
    title: "Managing Students",
    icon: <UserRound className="text-pink-600 w-6 h-6" />,
    points: [
      "Student Information System",
      "Learner Data Management",
    ],
  },
  {
    title: "Managing Payrolls",
    icon: <Wallet className="text-yellow-600 w-6 h-6" />,
    points: [
      "Automated Payroll System",
      "Staff Salary Software",
    ],
  },
  {
    title: "Management Of Documents",
    icon: <FileText className="text-blue-500 w-6 h-6" />,
    points: [
      "Digital Document Storage",
      "Educational Document System",
    ],
  },
  {
    title: "Management of Fees",
    icon: <CreditCard className="text-green-700 w-6 h-6" />,
    points: [
      "Online Fee Collection",
      "Tuition Payment Software",
    ],
  },
  {
    title: "Management of Exams",
    icon: <FileCheck className="text-red-500 w-6 h-6" />,
    points: [
      "Exam Scheduling Software",
      "Online Assessment System",
    ],
  },
  {
    title: "Management of Timetable",
    icon: <CalendarClock className="text-purple-600 w-6 h-6" />,
    points: [
      "Class Scheduling Tool",
      "Academic Timetable Planner",
    ],
  },
  {
    title: "Management of the Hostel",
    icon: <BedDouble className="text-orange-500 w-6 h-6" />,
    points: [
      "Student Hostel System",
      "Accommodation Management Software",
    ], 
  },
];

  return (
    <>
     <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQX0Hd-dCSkEkhHKijQJbRCquNKbnXk7sVA&s"
        alt="University Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay for better contrast (optional) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
        <div className="text-white max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            University Management System Software
          </h1>
          <p className="text-lg md:text-xl text-green-400 font-semibold mt-4">
            Robust, All-Inclusive & Scalable ERP Solution for Streamlining Universities
          </p>
          <p className="text-gray-200 mt-3">
            Enables flawless management of all academic and non-academic activities
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
            REQUEST A QUICK DEMO TODAY!
          </button> 
        </div>
      </div>
     <section className="bg-white px-4 md:px-12 lg:px-20 py-16 text-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          University Management System Features and Functionalities
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          EduSec university management solution assists in enhancing the decision-making procedures,
          save efforts and time of faculties and other staff, connect stakeholders, and enables end-to-end
          academic management, which improves operational effectiveness and university management results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {functionality.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center space-x-2 mb-3">
              {feature.icon}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
      <section className="bg-white px-4 md:px-12 lg:px-20 py-16 text-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How Mohitraj Research Tech Empowers Businesses to Scale
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          With our intelligent software platforms, Mohitraj Research Tech Pvt. Ltd. enables businesses
          to automate operations, streamline project delivery, and enhance workforce productivity
          — all from a single connected ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 text-left"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="h-48 w-full object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    
     <section className="px-4 md:px-12 lg:px-20 py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left: Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
           Why Choose Us Mohitraj Research Tech For University Management System Software?

          </h2>
          <p className="text-gray-600 mb-6">
            We, here at Mohitraj Research Tech Pvt Ltd, understand the needs for smart, glowing, scalable, as well as a secure university automation solutions that transform the academic and administrative processes.

          </p>
          <h4 className="font-semibold text-lg">Partnering with Mohitraj brings you</h4>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li>End-to-end enterprise automation platforms</li>
            <li>Custom software tailored to your operations</li>
            <li>Data-driven decision-making tools and insights</li>
            <li>Secure, scalable, and future-ready IT infrastructure</li>
          </ul>
        </div>

        {/* Right: Feature Cards */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="text-lg font-semibold mb-2">Innovation-Driven Approach</h3>
            <p className="text-gray-600 text-sm">
              We leverage cutting-edge technologies to deliver innovative and intelligent digital
              solutions that future-proof your business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="text-lg font-semibold mb-2">Real-Time Dashboards</h3>
            <p className="text-gray-600 text-sm">
              Get complete visibility into operations with customizable dashboards that track KPIs,
              performance metrics, and project insights.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="text-lg font-semibold mb-2">Anywhere, Anytime Access</h3>
            <p className="text-gray-600 text-sm">
              Our cloud-first architecture ensures you stay connected and in control from any device,
              wherever you are.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold mb-2">High ROI & Business Impact</h3>
            <p className="text-gray-600 text-sm">
              Transform your operations with solutions that deliver measurable cost savings, efficiency,
              and growth acceleration.
            </p>
          </div>
        </div>
      </div>
    </section>
      <section className="bg-green-700 bg-dotted-pattern text-white py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Digitally Transform Your Organization with Mohitraj?
      </h2>
      <p className="max-w-3xl mx-auto text-base md:text-lg mb-6">
        Automate, Centralize, and Streamline your Operations with Mohitraj Research Tech Pvt. Ltd. —
        India's trusted digital transformation partner for government, enterprise, and education sectors.
      </p>
      <a
        href="#contact"
        className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition-all duration-300"
      >
        SCHEDULE A QUICK DEMO
      </a>
    </section>
    </div>
    
    </>
  )
}

export default UniversityAutomation