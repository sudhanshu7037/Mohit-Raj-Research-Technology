import React, { useState } from 'react';
import { FaHospitalAlt, FaUserMd, FaNotesMedical,FaShieldAlt,FaCogs,FaSyncAlt,FaServer,FaNetworkWired,FaLaptopMedical , FaBed, FaCapsules, FaFileInvoiceDollar, FaCalculator, FaBoxes, FaUsersCog, FaIdCardAlt, FaProcedures, FaHeartbeat, FaVials, FaStethoscope } from 'react-icons/fa';
import { MdOutlineMedicalServices } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import BannerImage from "../../../assets/medicalbanner.png"


const modules = [
    { title: "Vice Chancellor office Management" },
    { title: "Registrar office Management" },
    { title: "Student Admission Management" },
    { title: "Student Information Management" },
    { title: "Examination management system" },
    { title: "Result analysis & processing Management" },
    { title: "Account & Finance Management" },
    { title: "Budget Management" },
    { title: "Employee Management & Information System" },
    { title: "Employee Leave Management" },
    { title: "Employee attendance Management" },
    { title: "Employee Administration & Monitoring" },
    { title: "College & department management" },
    { title: "Learning Management System" },
    { title: "Laboratory Management" },
    { title: "Student Attendance Management" },
    { title: "Store & Purchase Management system" },
    { title: "Library Management System" },
    { title: "Tax Management System" },
];


const departments = [
  "MBBS", "BDS", "Nursing", "Pharmacy", "Physiotherapy", "Allied Health Sciences"
];

const benefits = [
  "Streamlined administrative processes",
  "Biometric & RFID Integration",
  "Curriculum tracking as per NMC norms",
  "Secure cloud-based infrastructure",
  "Practical exposure tracking",
  "Real-time communication tools"
];

const lifecycle = [
  "Online Admission",
  "Timetable Scheduling",
  "Attendance Tracking",
  "Internal Assessments",
  "Clinical Rotations",
  "Final Exams",
  "Degree Issuance"
];
const analyticsImages = [
    {
      url: "https://psiborg.in/wp-content/uploads/2024/12/RHMS.webp",
      title: "Real-Time Patient Tracking",
      desc: "Track admitted patient status, room occupancy, and emergency updates."
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlE5e74WekEOVXKfxi1DQY_lluafU3NTW5AQ&s",
      title: "Clinical Reports",
      desc: "Live lab test summaries, imaging reports, and vitals."
    },
    {
      url: "https://www.projectmanager.com/wp-content/uploads/2024/05/portfolio-dashboard-screenshot-lightmode-1600x786.png",
      title: "Resource Utilization",
      desc: "Monitor hospital assets, medical supplies, and staff shifts."
    }
  ];
const medicalCollegewhychoose = [
  {
    title: "Academic & Clinical Sync",
    desc: "Unifies medical education with hospital training."
  },
  {
    title: "Digital Records",
    desc: "EMR integration for hands-on learning."
  },
  {
    title: "Faculty Coordination",
    desc: "Optimized scheduling & resource allocation."
  },
  {
    title: "Hospital Rounds Management",
    desc: "Assign & monitor clinical duties in real-time."
  },
  {
    title: "Admin Automation",
    desc: "Streamlines admissions, fees, and compliance."
  },
  {
    title: "Smart Dashboard",
    desc: "Live data for academics, exams & patient logs."
  }
];
const MedicalCollegeManagementandInformationSystem = () => {

   const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <>
    

      <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={BannerImage}
        alt="University Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay for better contrast (optional) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
        <div className="text-white max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
            Medical College Management & Information System
          </h1>
          <p className="text-lg md:text-xl text-green-400 font-semibold mt-4 font-basis ">
            Robust, All-Inclusive & Scalable ERP Solution for Streamlining Universities
          </p>
          <p className="text-gray-200 mt-3 font-basis">
            Enables flawless management of all academic and non-academic activities
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
            REQUEST A QUICK DEMO TODAY!
          </button> 
        </div>
      </div>

      <section className="relative w-full py-24 bg-gradient-to-br from-blue-100 via-red-100 to-green-100 overflow-hidden">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-houschka">
      Medical College Management features and functionality
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto font-basis">
      Visual representation of MCMIS modules placed around a central core system.
    </p>
  </div>

  <div className="relative h-[600px] w-[600px] mx-auto">
    {/* Central Circle */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white font-bold flex items-center justify-center h-40 w-40 rounded-full shadow-lg z-10 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.6)] hover:ring-4 hover:ring-blue-300 hover:text-yellow-300 hover:tracking-wide">
  MCMIS
</div>


    {/* Outer Modules */}
    {modules.map((module, index) => {
      const angle = (index / modules.length) * 2 * Math.PI;
      const radius = 220;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return (
        <div
          key={index}
          className="absolute group flex flex-col items-center justify-center h-28 w-28 bg-white rounded-full shadow-md text-sm font-semibold text-blue-700 text-center px-2 transition-all duration-300"
          style={{
            top: `calc(50% + ${y}px - 56px)`,
            left: `calc(50% + ${x}px - 56px)`,
          }}
        >
          <div className="z-10 transition-all duration-300 group-hover:scale-110 group-hover:z-50 group-hover:-translate-y-2 group-hover:bg-red-200 group-hover:shadow-xl flex flex-col items-center justify-center h-full w-full rounded-full px-2">
            <div className="mb-1">{module.icon}</div>
            <div>{module.title}</div>
          </div>
        </div>
      );
    })}
  </div>
</section>



      {/* Department Support */}
      <section className="py-16 px-6  bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 font-houschka">Supported Departments & Clinical Integration</h2>
          <p className="text-gray-700 mb-6 font-basis">Our ERP is compatible with multiple departments and includes practical integration with OPD/IPD, lab systems, and clinical training.</p>
          <div className="flex flex-wrap justify-center gap-4 ">
            {departments.map((dept, i) => (
              <span key={i} className="bg-white border border-blue-200 px-4 py-2 rounded-full text-blue-800 font-medium hover:bg-blue-100 transition-colors duration-200">{dept}</span>
            ))}
          </div>
        </div>
      </section>

      
      
      {/* Student Lifecycle */}
      <section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
  <div className="max-w-7xl mx-auto text-center">

    {/* 🌈 Main Gradient Heading */}
    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-pink-600 to-green-700 text-transparent bg-clip-text mb-12 font-houschka">
      Student Lifecycle Management
    </h2>

    {/* 📸 Banner Image */}
    <div className="mb-12">
      <img
        src="https://seleritysas.com/wp-content/uploads/2020/12/shutterstock_513707488.jpg"
        alt="student life cycle banner"
        className="w-full h-[450px] md:h-[550px] object-cover rounded-xl shadow-md"
      />
    </div>

    {/* 🔵 Lifecycle Steps */}
    <div className="py-10">
      <h3 className="text-3xl font-bold text-blue-900 mb-10 font-houschka">Student Lifecycle</h3>
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

 {/* Analytics Section */}
      <section className="py-20 px-4 md:px-16 bg-blue-100">
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-900 font-houschka">
             Live Dashboard & Analytics
          </h2>
          <p className="text-gray-700 mt-2 max-w-3xl mx-auto font-basis">
            Get a live view of critical hospital data including patient activity, diagnostics, staff workflow, and resource utilization—all in one place.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Info */}
          <div className="md:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              {analyticsImages[activeIndex].title}
            </h2>
            <p className="text-gray-700">
              {analyticsImages[activeIndex].desc}
            </p>
          </div>

          {/* Slider */}
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
      
      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-red-100">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-blue-900 text-xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
            what Our Client Say
          </h3>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      {/* 🧑‍⚕️ Testimonial 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksG4mm4xFN-Ufeaf1ZZ8ixWe2k4aZknK1MQ&s" // 🔁 Replace with your image link
            alt="Dean"
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <h4 className="font-semibold text-blue-800">— Dean, MedTech College</h4>
        </div>
        <p className="text-gray-700 font-basis">“We were able to automate our entire medical college workflow seamlessly. The clinical integration is top-notch.”</p>
      </div>

      {/* 👩‍💼 Testimonial 2 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg" // 🔁 Replace with your image link
            alt="Admin"
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <h4 className="font-semibold text-blue-800">— Admin, LifeCare Institute</h4>
        </div>
        <p className="text-gray-700 font-basis">“Our faculty and students find the dashboard very useful for tracking attendance and exam results.”</p>
      </div>

      {/* 🧑‍🏫 Testimonial 3 */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/67.jpg" // 🔁 Replace with your image link
            alt="Principal"
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <h4 className="font-semibold text-blue-800">— Principal, Hope Medical College</h4>
        </div>
        <p className="text-gray-700">“It’s the most complete medical ERP system we’ve ever used. The support team is also very responsive.”</p>
      </div>

    </div>
  </div>
</section>
{/*new section*/}

{/* WHY CHOOSE US */}
<section className="py-20 px-4 md:px-16 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 font-houschka">
      Why Choose Our Medical College ERP?
    </h2>
    <div className="flex flex-wrap justify-center gap-10">
      {medicalCollegewhychoose.map((item, index) => (
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



{/*benefit*/}

<section className="w-full py-20 px-6 md:px-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
  <div className="max-w-6xl mx-auto text-center">
    {/* 🌈 Gradient Heading */}
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-600 to-green-700 mb-8 font-houschka">
      Benefits of Medical College Management System
    </h2>
    <p className="text-gray-700 text-lg mb-12 font-basis">
      A smart ERP solution to digitally manage academic, clinical, administrative, and student services of medical colleges.
    </p>

    {/* 🔢 Ordered List with Styled LI */}
    <ol className="list-decimal list-inside space-y-6 text-left max-w-3xl mx-auto">
      {[
        "Streamlined student admission, registration, and academic records.",
        "Centralized faculty workload & class scheduling.",
        "Real-time attendance & exam performance tracking.",
        "Hospital rounds, patient logs & clinical integration.",
        "Inventory, pharmacy & lab equipment monitoring.",
        
      ].map((benefit, i) => (
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
{/*new section */}





      {/* Final Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-4 font-houschka">Start Managing Your Medical College Smarter</h2>
        <p className="mb-6 font-basis">Get in touch with us for a personalized demo and revolutionize your medical institution’s management.</p>
        <button className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:scale-105 hover:bg-gray-100 transition-transform">Book Free Demo</button>
      </section>
    </div>




    
    </>
  );
};

export default MedicalCollegeManagementandInformationSystem;
