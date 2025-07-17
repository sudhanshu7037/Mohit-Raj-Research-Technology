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



  

  return (
    <>
     <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="https://image-static.collegedunia.com/public/college_data/images/appImage/12734_AITAMCOver.png?h=260&w=360&mode=crop"
        alt="University Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay for better contrast (optional) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
        <div className="text-white max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Engineering College Management and Information System
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
     

      {/*demo*/}
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