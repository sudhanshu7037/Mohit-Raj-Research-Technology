import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const modules = [
  "Patient Registration",
  "Online Appointment Booking",
  "Doctor Consultation Management",
  "ePrescription Handling",
  "Vitals & Health Records",
  "Diagnostic & Lab Integration",
  "Pharmacy Ordering",
  "Billing & Invoicing",
  "Inventory & Stock Management",
  "Follow-Up Scheduling",
  "Medical Certificates & Reports",
  "Clinic Staff & Shift Scheduling"
];
const departments = [
  "General Practice",
  "Pediatrics",
  "Gynecology",
  "ENT",
  "Orthopedics",
  "Dermatology",
  "Dental Care",
  "Nutrition",
  "Reception",
  "Pharmacy",
  "Billing Desk",
  "Clinic Admin"
];
const lifecycle = [
  "Appointment Scheduling",
  "Patient Check-in",
  "Vitals & History Collection",
  "Doctor Evaluation",
  "Diagnostics & Prescriptions",
  "Pharmacy Visit",
  "Billing & Payment",
  "Follow-up Planning"
];
const whyChooseUs = [
  { title: 'Fast Setup', desc: 'Launch your clinic system within hours with zero hassle' },
  { title: 'Paperless Workflow', desc: 'Digitize all prescriptions and patient records' },
  { title: 'Tailored for Clinics', desc: 'OPD and outpatient focused features' },
  { title: 'Mobile Access', desc: 'Manage your clinic from anywhere' },
  { title: 'Data Protection', desc: 'Secured digital infrastructure for patient data' },
  { title: 'Multi-Doctor Support', desc: 'Ideal for clinics with multiple practitioners' }
];
const analyticsImages = [
  {
    url: "https://www.jotform.com/blog/wp-content/uploads/2020/04/appointment-field-schedule.png",
    title: "Live Appointment Metrics",
    desc: "Monitor appointments, walk-ins, and patient queues in real time."
  },
  {
    url: "https://img.freepik.com/free-photo/invoice-bill-paid-payment-financial-account-concept_53876-122994.jpg",
    title: "Billing Overview",
    desc: "Analyze earnings, invoice status, and financial summaries effortlessly."
  },
  {
    url: "https://blog.cmecorp.com/hubfs/female-doctor-holding-tablet-that-showing-medical-record-form-in-hands-with-blank-electronic.jpg_s=1024x1024%26w=is%26k=20%26c=mNjaKvgtbrdJ5JmcBG14-1vl3qCS020hIcPl2JiskXM=.jpg",
    title: "EMR Access",
    desc: "Instant access to digital patient records and past visits."
  }
];
const benefits = [
  "Improves clinic efficiency and patient satisfaction.",
  "Reduces admin workload through automation.",
  "Facilitates better clinical decision-making.",
  "Organizes patient records for easy access and analysis.",
  "Simplifies billing, prescription, and follow-up processes.",
  "Cost-effective solution for single and multi-specialty clinics."
];

const EclinicManagement = () => {
 
    
     const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* 0. Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="https://img.freepik.com/free-photo/medic-patient-looking-human-body-analysis_482257-21552.jpg?semt=ais_hybrid&w=740"
          alt="Clinic Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              E-Clinic Management System
            </h1>
            <p className="text-lg md:text-xl text-green-400 font-basis mt-4">
              Simplifying Clinic Operations with Smart Automation
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Manage appointments, consultations, billing, and patient history seamlessly in one digital platform.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A DEMO NOW
            </button>
          </div>
        </div>
      </div>

      {/* 1. Modules Section - Redesigned */}
      <section className="relative w-full py-24 bg-gradient-to-br from-blue-100 via-red-100 to-green-100 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-houschka">
            E-Clinic Management Features & Functionality
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-basis">
            Interactive overview of E-Clinic modules centered around a unified digital clinic management core system.
          </p>
        </div>
        <div className="relative h-[600px] w-[600px] mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white font-bold flex items-center justify-center h-40 w-40 rounded-full shadow-lg">
            ECMS
          </div>
          {modules.map((title, index) => {
            const angle = (index / modules.length) * 2 * Math.PI;
            const radius = 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={index}
                className="absolute flex items-center justify-center h-28 w-28 bg-white hover:bg-red-200 rounded-full shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-110 text-sm font-semibold text-blue-700 text-center px-2"
                style={{
                  top: `calc(50% + ${y}px - 56px)`,
                  left: `calc(50% + ${x}px - 56px)`
                }}
              >
                {title}
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Departments Section */}
      <section className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 font-houschka">Supported Departments</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10 font-basis">
          Clinic ERP with full support for multi-specialty departments.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {departments.map((item, i) => (
            <span key={i} className="bg-blue-50 border border-blue-300 px-4 py-2 rounded-full text-blue-800 font-medium">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Lifecycle Section - Updated with Top Image */}
<section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-pink-600 to-green-700 text-transparent bg-clip-text mb-12 font-houschka">
      Patient Lifecycle Journey
    </h2>
    <div className="mb-12">
      <img
        src="https://img.freepik.com/free-photo/doctor-consulting-patient-hospital-office_107420-84726.jpg"
        alt="clinic lifecycle banner"
        className="w-full h-[450px] md:h-[550px] object-cover rounded-xl shadow-md"
      />
    </div>
    <div className="py-10">
      <h3 className="text-3xl font-bold text-blue-900 mb-10">Clinic Patient Lifecycle</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {lifecycle.map((step, i) => (
          <div
            key={i}
            className="bg-white hover:bg-blue-100 transition-all duration-200 shadow-md px-6 py-4 rounded-full text-blue-700 font-semibold border border-blue-200"
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* 4. Analytics Section */}
      <section className="py-20 bg-blue-100 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 font-houschka">Clinic Dashboard & Analytics</h2>
          <p className="text-gray-700 mt-2 max-w-3xl mx-auto font-basis">
            Stay updated with real-time clinic data across patients, appointments, billing and records.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="md:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              {analyticsImages[activeIndex].title}
            </h2>
            <p className="text-gray-700">{analyticsImages[activeIndex].desc}</p>
          </div>
          <div className="w-full md:w-[650px] md:-ml-4">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
              className="rounded-xl overflow-hidden shadow-lg"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {analyticsImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img.url} alt={`Analytics ${index}`} className="w-full h-[400px] object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

        {/* 5. Why Choose Us Section  */}
<section className="py-20 px-4 md:px-16 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 font-houschka">
      Why Choose Our E-Clinic Management System?
    </h2>
    <div className="flex flex-wrap justify-center gap-10">
      {whyChooseUs.map((item, index) => (
        <div
          key={index}
          className="relative w-48 h-48 bg-blue-100 transform rotate-45 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <div className="absolute text-center w-full transform -rotate-45">
            <h4 className="text-lg font-bold mb-1">{item.title}</h4>
            <p className="text-sm text-gray-600 px-2">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 6. Benefits Section */}
      <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-600 to-green-700 mb-8 font-houschka">
            Benefits of E-Clinic Management System
          </h2>
          <p className="text-gray-700 text-lg mb-12 font-basis">
           A compact and intelligent clinic ERP that streamlines patient consultations, records, billing, and daily workflows for modern outpatient care.
          
          </p>
          <ol className="list-decimal list-inside space-y-6 text-left max-w-3xl mx-auto">
            {benefits.map((benefit, i) => (
              <li
                key={i}
                className="relative bg-white p-5 pl-10 rounded-lg border-l-4 border-blue-500 shadow-md hover:shadow-xl transition duration-300 hover:translate-x-2 hover:border-green-600 group"
              >
                <span className="absolute left-3 top-5 w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:bg-green-600 transition"></span>
                <span className="text-gray-800 group-hover:text-green-800 font-medium">{benefit}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>v
    </>
  )
}

export default EclinicManagement