import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const modules = [
  "Patient Registration",
  "Appointment Scheduling",
  "Doctor Consultation",
  "Lab Test Requests",
  "Radiology Integration",
  "Billing & Payments",
  "Discharge Summary",
  "Pharmacy Requests",
  "IPD Management",
  "Inventory Tracking",
  "Bed Availability",
  "Ambulance Services",
  "Staff Rostering",
  "Medical Records"
];

const departments = [
  "Telemedicine",
  "Health Information Systems",
  "Clinical Services",
  "Diagnostics & Imaging",
  "Pharmacy",
  "Ambulance Services",
  "Billing & Insurance",
  "In-Patient Services",
  "Out-Patient Services",
  "Health Analytics",
  "Medical Records",
  "Support Services"
];


const lifecycle = [
  "Online Appointment",
  "Patient Registration",
  "Doctor Consultation",
  "Diagnosis Entry",
  "Lab/Radiology Requests",
  "ePrescription Issuance",
  "Billing & Payment",
  "Inpatient Admission",
  "Bed & Ward Assignment",
  "Treatment & Monitoring",
  "Discharge Processing",
  "Insurance & Claims",
  "Health Record Archiving"
];

const whyChooseUs = [
  { title: 'Secure Patient Data', desc: 'Advanced encryption & HIPAA compliance' },
  { title: 'Custom Workflows', desc: 'Configurable modules per hospital needs' },
  { title: 'Real-Time Updates', desc: 'Live status across all departments' },
  { title: 'Cloud Hosting', desc: 'Access anytime from anywhere' },
  { title: 'Interconnected Systems', desc: 'OPD, IPD, Pharmacy & Lab integration' },
  { title: 'Doctor-Friendly UI', desc: 'Clean interface with smart shortcuts' }
];

const analyticsImages = [
  {
    url: "https://psiborg.in/wp-content/uploads/2024/12/RHMS.webp",
    title: "Live Appointment Statistics",
    desc: "Real-time overview of online appointments, scheduling, and patient queue status."
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlE5e74WekEOVXKfxi1DQY_lluafU3NTW5AQ&s",
    title: "Digital Medical Records",
    desc: "Secure storage and instant access to patients’ EMR, prescriptions, and discharge summaries."
  },
  {
    url: "https://www.projectmanager.com/wp-content/uploads/2024/05/portfolio-dashboard-screenshot-lightmode-1600x786.png",
    title: "Departmental Resource Utilization",
    desc: "Track diagnostics, beds, ambulance availability, and pharmacy operations efficiently."
  }
];

const benefits = [
  "Comprehensive patient registration, history & EMR tracking.",
  "Centralized appointment scheduling & queue management.",
  "Integrated billing, pharmacy & laboratory systems.",
  "Real-time bed availability & ward/ICU management.",
  "Doctor & staff workflow optimization with role-based access.",
  "Inventory, procurement & equipment tracking automation."
];


const EHospitalManagement = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <>
 {/* 0. Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="https://media.istockphoto.com/id/1476261444/photo/young-pharmaceutic-seller-explaining-something-to-doctor-in-hospital.jpg?s=612x612&w=0&k=20&c=pEJ7PefqTUcR5hPhB3jLIvAUOzPA6FVPlw391Oxqnrw="
          alt="Hospital Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              E-Hospital Management System
            </h1>
            <p className="text-lg md:text-xl text-green-400 font-basis mt-4">
              Integrated Digital Solution for Modern Healthcare
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Simplifies patient care, diagnostics, billing, and admin workflows through one platform.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>

      {/* 1. Modules Section */}
      <section className="relative w-full py-24 bg-gradient-to-br from-blue-100 via-red-100 to-green-100 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-houschka">
           E- Hospital Management Features & Functionality
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-basis">
            "Interactive overview of E-Hospital modules centered around a unified digital healthcare core system."


          </p>
        </div>
        <div className="relative h-[600px] w-[600px] mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white font-bold flex items-center justify-center h-40 w-40 rounded-full shadow-lg">
            EHMS
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

      {/* 2. Department Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 font-houschka">
            Supported Departments & Clinical Integration
          </h2>
          <p className="text-gray-700 mb-6 font-basis">
            Our E-Hospital ERP seamlessly integrates with departments like telemedicine, diagnostics, pharmacy, billing, and emergency care to deliver a unified healthcare experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept, i) => (
              <span
                key={i}
                className="bg-white border border-blue-200 px-4 py-2 rounded-full text-blue-800 font-medium hover:bg-blue-100 transition-colors duration-200"
              >
                {dept}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Lifecycle Section */}
      <section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-pink-600 to-green-700 text-transparent bg-clip-text mb-12 font-houschka">
            Patient Lifecycle Management
          </h2>
          <div className="mb-12">
            <img
              src="https://img.freepik.com/free-photo/doctor-consulting-patient-hospital-office_107420-84726.jpg"
              alt="hospital patient lifecycle banner"
              className="w-full h-[450px] md:h-[550px] object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="py-10">
            <h3 className="text-3xl font-bold text-blue-900 mb-10 font-houschka">Hospital Patient Lifecycle</h3>
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
      <section className="py-20 px-4 md:px-16 bg-blue-100">
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-900 font-houschka">
            Hospital Dashboard & Analytics
          </h2>
          <p className="text-gray-700 mt-2 max-w-3xl mx-auto font-basis">
            Get a live view of critical hospital data including patient activity, diagnostics, staff workflow, and resource utilization.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="md:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              {analyticsImages[activeIndex].title}
            </h2>
            <p className="text-gray-700">
              {analyticsImages[activeIndex].desc}
            </p>
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
                  <img
                    src={img.url}
                    alt={`Analytics ${index}`}
                    className="w-full h-[400px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 font-houschka">
            Why Choose Our E-Hospital Management System?
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
            Benefits of E-Hospital Management System
          </h2>
          <p className="text-gray-700 text-lg mb-12 font-basis">
            A robust ERP system to efficiently manage clinical operations, patient care, billing, departmental workflows, and hospital infrastructure.
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
      </section>

    </>
  )
}

export default EHospitalManagement