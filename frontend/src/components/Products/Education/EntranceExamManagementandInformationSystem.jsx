import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import EntranceExamBanner from "../../../assets/produtspage/education/images/MohitrajOnline_Entrance_Examination_Management_System[1].png";




const functionality = [
  {
    title: "Online Registration & Fee Payment",
    points: [
      "Candidate self-registration with unique ID generation",
      "Secure online payment integration for exam fees"
    ]
  },
  {
    title: "Admit Card Generation",
    points: [
      "Auto-generated admit cards with QR code/Barcode",
      "Email/SMS notifications for download alerts"
    ]
  },
  {
    title: "Exam Scheduling & Slot Management",
    points: [
      "Dynamic exam slot assignment based on capacity",
      "Real-time center mapping and availability check"
    ]
  },
  {
    title: "Online & Offline Exam Support",
    points: [
      "Supports CBT (Computer Based Tests) and pen-paper modes",
      "Integrated timer, question shuffling, and anti-cheat features"
    ]
  },
  {
    title: "Question Paper Management",
    points: [
      "Secure question bank with role-based access",
      "Auto-randomization and encrypted paper delivery"
    ]
  },
  {
    title: "Result Processing & Analytics",
    points: [
      "Auto-evaluation of objective responses",
      "Detailed performance analysis and merit list generation"
    ]
  },
  {
    title: "Counseling & Admission Integration",
    points: [
      "Rank-based counseling and seat allotment workflows",
      "Direct integration with student admission modules"
    ]
  },
  {
    title: "Secure Data Storage & Audit Trail",
    points: [
      "Encrypted data storage for candidate records",
      "Full audit log for system access and actions"
    ]
  },
  {
    title: "Mobile-Friendly Candidate Portal",
    points: [
      "Responsive UI for application status tracking",
      "Real-time updates and push notifications"
    ]
  }
];

const features = [
  {
    title: "Online Registration & Payment",
    points: [
      "Student self-registration with secure login access",
      "Integrated online payment gateway for exam fees"
    ]
  },
  {
    title: "Admit Card & Hall Ticket Generation",
    points: [
      "Auto-generated admit cards with unique candidate codes",
      "Instant access and notifications via email/SMS"
    ]
  },
  {
    title: "Slot Allocation & Exam Scheduling",
    points: [
      "Intelligent scheduling based on center availability",
      "Flexible slot management with capacity tracking"
    ]
  },
  
  
  
];


const EntranceExamManagementandInformationSystem = () => {
  return (
  
    
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={EntranceExamBanner}
          alt="Entrance Examination Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              Entrance Examination Management System
            </h1>
            <p className="text-lg md:text-xl text-red-300 font-basis mt-4">
              End-to-End Digital Solution for Conducting Secure & Transparent Entrance Exams
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Manage registration, admit cards, online/offline tests, proctoring, evaluation, and results — all in one centralized platform.
            </p>
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>

      
      {/* New section for functionality */}
<section className="bg-white px-4 md:px-12 lg:px-20 py-16 text-gray-800 mt-20">
  {/* Header */}
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
      Entrance Examination Management and Information System
    </h2>
    <p className="text-gray-600 max-w-4xl mx-auto text-lg font-basis">
      Our Entrance Examination Management System streamlines exam planning, registration, scheduling, secure delivery, and result processing—ensuring transparency, efficiency, and compliance throughout the examination lifecycle.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto bg-blue-100">
    {functionality.map((feature, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl border border-gray-200 shadow-md p-6 
        hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group 
        hover:bg-gradient-to-r hover:from-blue-100 hover:via-red-100 hover:to-green-100 hover:text-white"
      >
        <div className="flex items-center gap-3 mb-3 text-indigo-600 text-3xl group-hover:text-indigo-800">
          {feature.icon}
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-800">{feature.title}</h3>
        </div>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 pl-1">
          {feature.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

{/* new section */}
<section className="bg-gradient-to-br from-blue-100 via-red-100 to-green-100 py-16 px-4 md:px-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-houschka">
      How Mohitraj Research Tech Empowers Entrance Examination Systems
    </h2>
    <p className="text-gray-700 max-w-3xl mx-auto mt-2 font-basis">
      Our Entrance Examination Management and Information System ensures secure, efficient, and transparent handling of end-to-end exam workflows—from registration to result declaration—empowering institutions to conduct exams with confidence and integrity.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {features.map((item, index) => (
      <div
        key={index}
        className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-md 
        hover:bg-blue-900 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-2 group-hover:text-white transition-all duration-300">
          {item.title}
        </h3>
        <ul className="mt-2 text-gray-600 text-sm space-y-2 group-hover:text-gray-200 transition-all duration-300">
          {item.points.map((point, i) => (
            <li key={i} className="list-disc list-inside">
              {point}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

{/* new section for why choose our software */}
<section className="px-4 md:px-12 lg:px-20 py-20 bg-red-100">
  <div className="max-w-7xl mx-auto">

    {/* ✅ Top Banner Image */}
    <div className="mb-12">
      <img
        src="https://www.bannerbuzz.co.uk/blog/wp-content/uploads/2023/09/Rigid-Signs-2-1024x441.webp"
        alt="Examination Management Banner"
        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
      />
    </div>

    {/* Main Grid */}
    <div className="flex flex-col lg:flex-row gap-12 items-start">

      {/* Left Content */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 relative group inline-block">
          <span className="hover:text-red-600 transition-all duration-300 font-houschka">
            Why Choose Mohitraj Entrance Examination Management System?
          </span>
        </h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed font-basis">
          Mohitraj Research Tech Pvt. Ltd. offers a robust and secure Entrance Examination Management System 
          that simplifies candidate registration, streamlines exam delivery, and ensures transparency at every step of the examination lifecycle.
        </p>
        <h4 className="font-semibold text-lg text-blue-800 mb-2">Key advantages of our solution include:</h4>
        <ul className="list-disc list-inside mt-3 text-gray-800 space-y-2">
          <li>End-to-end digital exam management – from registration to result</li>
          <li>Secure online/offline examination delivery with audit trails</li>
          
          
        </ul>
      </div>

      {/* Right Cards (No Icons) */}
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Candidate Registration",
            desc: "Streamlined online registration with secure login and document verification.",
          },
          {
            title: "Exam Slot Management",
            desc: "Flexible scheduling and intelligent slot allocation based on capacity.",
          },
          {
            title: "Result Declaration",
            desc: "Auto-processed results with scorecards, ranking, and cutoff insights.",
          },
          {
            title: "Counseling & Allotment",
            desc: "Integrated system for merit-based counseling and seat assignment.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="relative bg-white/70 backdrop-blur-lg border border-gray-200 
            rounded-2xl p-6 shadow-md hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all 
            duration-500 hover:scale-105 hover:-translate-y-2 group"
          >
            {/* Glowing Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-blue-100 via-red-100 to-green-100 
              rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 z-0" />

            {/* Content */}
            <div className="relative z-10 text-center space-y-3">
              <h3 className="text-lg font-semibold text-gray-800 transition-all duration-300 
                group-hover:bg-clip-text group-hover:text-transparent 
                group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:via-red-500 group-hover:to-green-600">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 transition-all duration-300 
                group-hover:bg-clip-text group-hover:text-transparent 
                group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:via-red-500 group-hover:to-green-600">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/*new section*/}

{/* Products Showcase Slider Section */}
<section className="bg-white py-20 px-4 md:px-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 font-houschka">
    Our Entrance Examination Management System Modules
  </h2>

  <Swiper
    modules={[Navigation, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    navigation
    loop
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {[
      {
        img: "https://img.freepik.com/free-vector/online-registration-concept-illustration_114360-7881.jpg",
        title: "Candidate Registration Portal",
      },
      {
        img: "https://img.freepik.com/free-vector/online-test-concept-illustration_114360-4864.jpg",
        title: "Online Exam Interface",
      },
      {
        img: "https://img.freepik.com/premium-vector/id-card-concept-illustration_610956-48.jpg",
        title: "Admit Card & Hall Ticket Module",
      },
      {
        img: "https://img.freepik.com/free-vector/results-concept-illustration_114360-7887.jpg",
        title: "Result Processing System",
      },
      {
        img: "https://img.freepik.com/free-vector/hiring-concept-illustration_114360-496.jpg",
        title: "Counseling & Seat Allotment",
      },
    ].map((item, index) => (
      <SwiperSlide key={index}>
        <div className="group bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
          <img
            src={item.img}
            alt={item.title}
            className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="p-4 bg-gradient-to-r from-blue-100 via-red-100 to-green-100">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-900 transition-colors duration-300">
              {item.title}
            </h3>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

{/* Benefits Section */}
<section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-houschka">
      Key Benefits of Entrance Examination Management System
    </h2>
    <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-basis">
      Revolutionize your entrance exam process with a secure, automated, and end-to-end digital platform designed
      to simplify registrations, enhance exam integrity, and deliver real-time insights.
    </p>
  </div>

  {/* Glassy Card */}
  <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8">
    <ol className="list-decimal list-inside space-y-4 text-left">
      {[
        "End-to-end automation of exam cycle: registration, admit cards, results, counseling.",
        "Real-time monitoring of exam progress, attendance, and malpractice detection.",
        "Scalable CBT platform with multilingual support and dynamic question paper sets.",
        "Secure cloud-based system ensuring data encryption, audit trails, and role-based access.",
        "Advanced analytics dashboards for performance insights and merit generation.",
      ].map((point, idx) => (
        <li
          key={idx}
          className="relative text-gray-800 hover:text-blue-900 font-medium bg-white/60 px-4 py-3 rounded-md shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
        >
          <span className="absolute left-0 top-0 h-full w-1 bg-blue-400 rounded-md group-hover:bg-green-500 transition-all duration-300" />
          <span className="pl-3 block">{point}</span>
        </li>
      ))}
    </ol>
  </div>
</section>

{/* Demo Section for Entrance Examination System */}
<section className="bg-red-700 bg-dotted-pattern text-white py-16 px-4 text-center">
  <h2 className="text-2xl md:text-3xl font-bold mb-4 font-houschka">
    Ready to Modernize Your Entrance Examination Process with Mohitraj?
  </h2>
  <p className="max-w-3xl mx-auto text-base md:text-lg mb-6 font-basis">
    Experience secure, scalable, and fully automated entrance exam solutions with Mohitraj Research Tech Pvt. Ltd.
    — trusted by institutions and government bodies for digital assessment transformation.
  </p>
  <a
    href="#contact"
    className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition-all duration-300"
  >
    SCHEDULE A LIVE DEMO
  </a>
</section>


    
    </>
  )
}

export default EntranceExamManagementandInformationSystem