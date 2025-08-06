import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import OnlineExaminationBanner from "../../../assets/produtspage/education/images/online_exam_image[1].png";
import OnlineExaminationBanner2 from "../../../assets/produtspage/education/images/online_exman[1].png";
const features = [
  {
    title: "Online Exam Creation",
    points: [
      "Create objective & subjective exams",
      "Set time limits and question pools",
    ],
  },
  {
    title: "Secure Proctoring",
    points: [
      "Live webcam & screen monitoring",
      "Auto-flagging suspicious behavior",
    ],
  },
  {
    title: "Automated Results & Analysis",
    points: [
      "Instant grading & analytics reports",
      "Customizable result formats",
    ],
  },
  
    ];
  


const examBenefits = [
  {
    title: "Automated Exam Scheduling",
    benefits: [
      "Reduces manual coordination and human error",
      "Auto-allocation of time slots and invigilators",
      "SMS/Email notifications to all participants",
    ],
  },
  {
    title: "Smart Proctoring & Cheating Control",
    benefits: [
      "Live monitoring via webcam/screen share",
      "Auto flagging of suspicious behavior",
      "Randomized question sets per candidate",
    ],
  },
  {
    title: "Instant Results & Performance Reports",
    benefits: [
      "Auto-evaluation of MCQs and theory patterns",
      "Downloadable results with student analytics",
      "Saves faculty time and ensures transparency",
    ],
  },
];

const benefits = [
    "Create and manage question banks with multiple question formats.",
    "Automated exam scheduling, hall ticket, and seat allocation system.",
    "Real-time monitoring and remote proctoring to prevent cheating.",
    "Instant result generation with analytics and performance reports.",
    "Secure login for students, examiners, and administrators.",
    "Supports MCQs, descriptive, audio-visual & image-based questions.",
  ];

const OnlineExaminationManagementSystem = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={OnlineExaminationBanner}
          alt="Online Examination Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              Online Examination Management System
            </h1>
            <p className="text-lg md:text-xl text-purple-300 font-basis mt-4">
              Seamless, Secure & Scalable Solution for Conducting Digital Exams
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Create, schedule, monitor, and evaluate exams online with AI-based proctoring, real-time analytics, and zero-paper workflow.
            </p>
            <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>


<section className="bg-white px-4 md:px-12 lg:px-20 py-16 text-gray-800 mt-20">
  {/* Header */}
  <div className="max-w-7xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">
      Online Examination Management System
    </h2>
    <p className="text-gray-600 max-w-4xl mx-auto text-lg font-basis">
      Our Online Examination Management System simplifies and secures the entire exam lifecycle — 
      from planning to evaluation — ensuring transparency, automation, and convenience.
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto bg-blue-100">
    {[
      {
        title: "Exam Scheduling & Planning",
        points: [
          "Create exam timetables and notify students",
          "Assign courses, subjects, and exam types",
          "Control exam access with secure login",
        ],
      },
      {
        title: "Online/Offline Exam Support",
        points: [
          "Enable both center-based and remote exams",
          "Support timed and open-book formats",
          "Built-in proctoring and monitoring tools",
        ],
      },
      {
        title: "Question Paper Management",
        points: [
          "Generate question papers from question bank",
          "Auto-randomize questions per student",
          "Allow MCQ, short, and descriptive types",
        ],
      },
      {
        title: "Live Proctoring & Monitoring",
        points: [
          "Track student activity via webcam & screen",
          "Detect malpractices with AI alerts",
          "Generate session-wise proctoring logs",
        ],
      },
      {
        title: "Automated Evaluation",
        points: [
          "Instant result generation for objective exams",
          "Support for digital answer sheet evaluation",
          "Plagiarism detection for written answers",
        ],
      },
      {
        title: "Results & Reports",
        points: [
          "View results by student, subject, or course",
          "Export marksheets and performance graphs",
          "Access audit logs and analysis dashboards",
        ],
      },
    ].map((feature, idx) => (
      <div
        key={idx}
        className="bg-white rounded-xl border border-gray-200 shadow-md p-6 
        hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group 
        hover:bg-gradient-to-br hover:from-blue-800 hover:to-blue-600 hover:text-white"
      >
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-2">
          {feature.title}
        </h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 pl-1 group-hover:text-gray-100">
          {feature.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>




    <section className="bg-gradient-to-br from-blue-50 via-red-50 to-green-50 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-houschka">
          Online Examination Management System
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mt-2 font-basis">
          Conduct secure, scalable online exams with smart monitoring, automated
          evaluation, and detailed reporting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl p-6 h-64 flex flex-col justify-start shadow-md border border-gray-200 
              hover:bg-gradient-to-r hover:from-blue-100 hover:via-red-100 hover:to-green-100 
              hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900 text-center">
              {item.title}
            </h3>
            <ul className="text-gray-700 text-sm space-y-2 group-hover:text-gray-800 list-disc list-inside">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="px-4 md:px-12 lg:px-20 py-20 bg-red-100">
  <div className="max-w-7xl mx-auto">

    {/* ✅ Top Banner Image */}
    <div className="mb-12">
      <img
        src={OnlineExaminationBanner2}
        alt="Online Exam Banner"
        className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
      />
    </div>

    {/* ✅ Content Section */}
    <div className="flex flex-col lg:flex-row gap-12 items-stretch h-full">

      {/* ✅ Left Content */}
      <div className="lg:w-1/2 flex flex-col justify-between bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-md flex-1">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-houschka">
            Why Choose Mohitraj Online Examination System?
          </h2>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed font-basis">
            Mohitraj Research Tech Pvt. Ltd. offers a robust Online Examination Management System
            tailored for modern institutions. From secure test creation to instant evaluation,
            our solution ensures accuracy, transparency, and ease of use.
          </p>
          <h4 className="font-semibold text-lg text-blue-800 mb-2">Top Features:</h4>
          <ul className="list-disc list-inside mt-3 text-gray-800 space-y-2">
            <li>Auto-scheduled exams with remote proctoring</li>
            <li>AI-powered cheating prevention tools</li>
            <li>Instant result generation and analytics</li>
            <li>Support for objective & subjective question formats</li>
          </ul>
        </div>
      </div>

      {/* ✅ Right Cards */}
      <div className="lg:w-1/2 flex flex-col gap-6 flex-1">
        {[
          {
            title: "Secure Online Tests",
            desc: "Conduct safe exams with webcam monitoring, screen lock, and AI detection.",
          },
          {
            title: "Instant Result Processing",
            desc: "Automatic grading and quick result publishing with analytics dashboard.",
          },
          {
            title: "Flexible Question Bank",
            desc: "Build exams with MCQs, short answers, long-type questions, and more.",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-white/80 backdrop-blur-md border border-gray-200 
            rounded-2xl p-6 shadow-md flex-1 flex flex-col justify-between 
            hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all 
            duration-500 hover:scale-105 hover:-translate-y-2 group 
            hover:bg-gradient-to-r hover:from-blue-100 hover:via-red-100 hover:to-green-100"
          >
            <div className="text-center space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 transition-all duration-300">
                {card.title}
              </h3>
              <p className="text-sm text-gray-700 transition-all duration-300">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Products Showcase Slider Section for Online Examination System */}
<section className="bg-white py-20 px-4 md:px-20">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 font-houschka">
    Our Online Examination System Software Solutions
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
        img: "https://cdn.pixabay.com/photo/2017/10/10/21/46/exam-2835849_1280.jpg",
        title: "Online Exam Scheduling",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/11/19/17/25/checklist-1848463_1280.jpg",
        title: "Automated Question Bank",
      },
      {
        img: "https://cdn.pixabay.com/photo/2020/05/30/13/53/quiz-5238254_1280.jpg",
        title: "Live Quiz & Assessments",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/03/27/22/16/evaluation-1287125_1280.jpg",
        title: "Result Analytics & Reporting",
      },
      {
        img: "https://cdn.pixabay.com/photo/2017/01/19/21/50/mobile-phone-1995075_1280.jpg",
        title: "Mobile-Friendly Exam Portal",
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

{/* === Benefits Section === */}
      <section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-houschka">
            Key Benefits of Online Examination Management System
          </h2>
          <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-basis">
            Conduct seamless, secure, and scalable online assessments with a
            user-friendly platform designed for schools, colleges, and institutions.
          </p>
        </div>

        {/* Benefits List */}
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8">
          <ol className="list-decimal list-inside space-y-4 text-left">
            {benefits.map((point, idx) => (
              <li
                key={idx}
                className="relative text-gray-800 hover:text-blue-900 font-medium bg-white/60 px-4 py-3 rounded-md shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group hover:bg-gradient-to-r hover:from-blue-100 hover:via-red-100 hover:to-green-100"
              >
                <span className="absolute left-0 top-0 h-full w-1 bg-blue-400 rounded-md group-hover:bg-green-500 transition-all duration-300" />
                <span className="pl-3 block">{point}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="bg-red-700 bg-dotted-pattern text-white py-16 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-houschka">
          Ready to Digitally Transform Your Examination Process?
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg mb-6 font-basis">
          Switch to a secure and scalable examination platform with Mohitraj
          Research Tech Pvt. Ltd. — your trusted partner for digital transformation
          in the education sector.
        </p>
        <a
          href="#contact"
          className="inline-block border border-white px-6 py-2 rounded-full text-white hover:bg-white hover:text-green-700 transition-all duration-300"
        >
          SCHEDULE A QUICK DEMO
        </a>
      </section>
    
 



    </>
  )
}

export default OnlineExaminationManagementSystem