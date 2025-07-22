import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  FaUserTie,
  FaUserCheck,
  FaUserEdit,
  FaUserShield,
  FaClipboardList,
  FaMoneyCheckAlt,
  FaBalanceScale,
  FaBuilding,
  FaUniversity,
  FaUsersCog,
  FaChalkboardTeacher,
  FaCalendarCheck,
  FaFileInvoice,
  FaFileAlt,
  FaFileSignature,
  FaCogs,
  FaBook,
  FaBox,
  FaTools,
  FaMailBulk,
  FaFlask,
  FaHotel,
  FaAddressCard,
  // FaEnvelopeOpenText,
  FaUserGraduate,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUniversity size={50} className="text-indigo-600" />,
    title: "Institute Management",
    points: [
      "Automated eligibility criteria, course offerings, and seat allocation",
      "Curriculum updates and syllabus changes can be carried out seamlessly.",
    ],
  },
  {
    icon: <FaUserGraduate size={50} className="text-indigo-600" />,
    title: "Students Management",
    points: [
      "Student admission, form submissions, verification, and tracking of documents digitized.",
      "Online results, academic performance tracking, and generation of digital ID.",
    ],
  },
  {
    icon: <FaChalkboardTeacher size={50} className="text-indigo-600" />,
    title: "Staff Management",
    points: [
      "Tracks performance, activity, attendance, and distribution of workload.",
      "Digital records, pay slips, leave logs, and HR documentation are available.",
    ],
  },
];

const functionality = [
  {
    icon: <FaUserTie />,
    title: "VC Office Automation",
    points: [
      "Manage all Vice Chancellor-level operations with centralized control.",
    ],
  },
  {
    icon: <FaUserTie />,
    title: "Registrar Workflow System",
    points: [
      " Digitize and streamline registrar-related administrative tasks.",
    ],
  },
  {
    icon: <FaUserCheck />,
    title: "Digital Admission Suite",
    points: ["Simplify student admission with a smart online system."],
  },
  {
    icon: <FaUserShield />,
    title: "Student Data Hub",
    points: ["Store, manage, and access student records securely."],
  },
  {
    icon: <FaClipboardList />,
    title: "Exam Control System",
    points: ["Automate exam scheduling, results, and evaluation processes."],
  },
  {
    icon: <FaUserShield />,
    title: "Confidential Data Shield",
    points: ["Securely handle and restrict access to sensitive documents."],
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Finance Operations Suite",
    points: ["Manage university financials with transparency and accuracy."],
  },
  {
    icon: <FaFileSignature />,
    title: "E-Proposal Engine",
    points: ["Create, review, and track financial proposals online."],
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Budget Management Tool",
    points: [" Plan and monitor institutional budgets efficiently."],
  },
  {
    icon: <FaBalanceScale />,
    title: "Accounts Automation Platform",
    points: ["Automate accounting processes for error-free operations."],
  },
  {
    icon: <FaUsersCog />,
    title: "Salary Processing System",
    points: ["Streamline salary calculations and disbursements."],
  },
  {
    icon: <FaBalanceScale />,
    title: "Tax Filing Module",
    points: ["Automate staff and institutional tax management."],
  },
  {
    icon: <FaUsersCog />,
    title: "PF Tracker System",
    points: ["Manage Provident Fund contributions and reports digitally."],
  },
  {
    icon: <FaUsersCog />,
    title: "Pension Management Tool",
    points: ["Handle employee pension claims and data seamlessly."],
  },
  {
    icon: <FaUserCheck />,
    title: "Employee Central Hub",
    points: ["Manage complete employee lifecycle from hiring to retirement."],
  },
  {
    icon: <FaUserEdit />,
    title: "Recruitment Automation",
    points: ["Digitize the recruitment and onboarding process."],
  },
  {
    icon: <FaUserEdit />,
    title: "Staff Info Manager",
    points: ["Maintain detailed staff records in one place."],
  },
  {
    icon: <FaCalendarCheck />,
    title: "Leave Tracking Suite",
    points: ["Automate leave applications and approvals efficiently."],
  },
  {
    icon: <FaCalendarCheck />,
    title: "Attendance Monitor Tool",
    points: [" Track employee attendance in real-time."],
  },
  {
    icon: <FaCogs />,
    title: "HR Admin Console",
    points: [" Monitor and manage all employee-related activities."],
  },
  {
    icon: <FaUniversity />,
    title: "Departmental Workflow",
    points: ["Enhance coordination among colleges and departments."],
  },
  {
    icon: <FaBook />,
    title: "LMS Integration Suite",
    points: ["Deliver and manage courses with a learning management system."],
  },
  {
    icon: <FaBuilding />,
    title: "Infrastructure Manager",
    points: [" Oversee campus infrastructure and facilities digitally."],
  },
  {
    icon: <FaFlask />,
    title: "Lab Resource Tracker",
    points: ["Manage laboratory equipment, usage, and scheduling."],
  },
  {
    icon: <FaClipboardList />,
    title: "Attendance Digitizer",
    points: ["Monitor and record student attendance online."],
  },
  {
    icon: <FaBox />,
    title: "Store & Purchase Tool",
    points: ["Manage institutional procurement and inventory.."],
  },
  {
    icon: <FaUsersCog />,
    title: "Purchase Committee Suite",
    points: [" Digitize decision-making for purchases and approvals."],
  },
  {
    icon: <FaBox />,
    title: "Procurement Manager",
    points: ["Streamline purchasing and vendor communication."],
  },
  {
    icon: <FaFileSignature />,
    title: "E-Tendering System",
    points: ["Conduct tenders and bidding processes online."],
  },
  {
    icon: <FaBox />,
    title: "Inventory Oversight",
    points: ["Track, audit, and manage store inventory accurately."],
  },
  {
    icon: <FaBook />,
    title: "Research Control System",
    points: ["Manage research proposals, grants, and progress."],
  },
  {
    icon: <FaTools />,
    title: "Contractor Oversight",
    points: [" Automate contractor management and project tracking."],
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Placement Automation Hub",
    points: ["Track student counseling and placement activities."],
  },
  {
    icon: <FaHotel />,
    title: "Hostel Management Suite",
    points: [" Automate room allocation and hostel services."],
  },
  {
    icon: <FaBook />,
    title: "Library Digital Platform",
    points: ["Manage books, access, and student usage seamlessly."],
  },
  {
    icon: <FaFileAlt />,
    title: "Document Filing System",
    points: [
      "Digitally organize and retrieve official files.",
      "Quick retrieval and role-based access.",
    ],
  },
  {
    icon: <FaFileInvoice />,
    title: "Proposal Filing Tool",
    points: ["File and manage institutional proposals effectively."],
  },
  {
    icon: <FaMailBulk />,
    title: "Smart Mailing System",
    points: ["Simplify internal and external email communications."],
  },
  {
    icon: <FaAddressCard />,
    title: "Reception Tracking App",
    points: ["Manage visitor records and front-desk operations."],
  },
  {
    icon: <FaTools />,
    title: "Repair & Maintenance",
    points: ["Track complaints and maintenance work orders."],
  },
  {
    icon: <FaUsersCog />,
    title: "User Access System",
    points: [" Control system access for all users and roles."],
  },
];

const UniversityAutomation = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="https://www.shutterstock.com/image-photo/man-look-dashboard-graphs-charts-600nw-2440357647.jpg"
          alt="University Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay for better contrast (optional) */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              University Management System Software
            </h1>
            <p className="text-lg md:text-xl text-green-400 font-basis mt-4">
              Robust, All-Inclusive & Scalable ERP Solution for Streamlining
              Universities
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Enables flawless management of all academic and non-academic
              activities
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>

        {/*new section for functionality*/}
        <section className="bg-white px-4 md:px-12 lg:px-20 py-16 text-gray-800 mt-20">
          {/* Header */}
          <div className="max-w-7xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 font-houschka">
              University Management System Features and Functionalities
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg font-basis">
              Mohitraj Research and Technology Pvt. Ltd. is known for providing
              an all-encompassing University Automation System which evolves the
              operations of a university into a smart digital ecosystem.
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
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-800">
                    {feature.title}
                  </h3>
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
        {/*new section */}

        {/*new section*/}

        <section className="bg-gradient-to-br from-blue-100 via-red-100 to-green-100 py-16 px-4 md:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 font-houschka">
              Empowering Institutions with Digital Transformation
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mt-2 font-basis">
              Mohitraj Research Tech Pvt. Ltd., as a vendor company, designs
              customized Education ERP Solutions for digitalization in
              educational institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-md 
        hover:bg-blue-900 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-4xl text-indigo-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
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

        {/*new section */}

        <section className="px-4 md:px-12 lg:px-20 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* ✅ Top Banner Image */}
            <div className="mb-12">
              <img
                src="https://www.bannerbuzz.co.uk/blog/wp-content/uploads/2023/09/Rigid-Signs-2-1024x441.webp"
                alt="University Automation Banner"
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Main Grid */}
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left Content */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 relative group inline-block">
                  <span className="hover:text-red-600 transition-all duration-300 font-houschka">
                    Why should you consider Mohitraj University Automation
                    Software?
                  </span>
                </h2>
                <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed font-basis">
                  Mohitraj Research Tech Pvt. Ltd. provides the next-generation
                  University Automation Software that transforms campus
                  management by digitizing and streamlining institutional
                  processes. Our integrated cloud-based campus automation is
                  designed to transform the manual operation into a data-driven
                  digital-first environment — improving institutional
                  efficiency, compliance, and student experience.
                  <br></br>
                  With powerful modules for academic management, administrative
                  automation, and student lifecycle tracking, our solution
                  empowers universities, colleges, and higher education
                  institutions to achieve operational excellence.{" "}
                </p>
              </div>

              {/* Right Cards */}
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "⚙",
                    title: "Complete Digital Transformation",
                    desc: " Automate all aspects, from admission management to student enrollment, fee collection, and exam processing to alumni interaction.",
                  },
                  {
                    icon: "📚",
                    title: "Interconnected Modules",
                    desc: "Create an integrated system that can facilitate seamless cooperation across departments through modules linking with synchronizing academic.",
                  },
                  {
                    icon: "🔐",
                    title: "Cloud-Based Scalable & Secure",
                    desc: "99.9% uptime, data encryption, and role-based access control: Safe, founded on a powerful, secure cloud infrastructure",
                  },
                  {
                    icon: "📊",
                    title: "Future Proof Your Campus with Mohitraj",
                    desc: " Mohitraj is dedicated to providing scalable, secure, and sustainable solutions.",
                  },
                ].map((card, idx) => (
                  <div
                    key={idx}
                    className="relative bg-white/70 backdrop-blur-lg border border-gray-200 
            rounded-2xl p-6 shadow-md hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all 
            duration-500 hover:scale-105 hover:-translate-y-2 group"
                  >
                    {/* Glowing Border */}
                    <div
                      className="absolute -inset-0.5 bg-gradient-to-tr from-blue-100 via-red-100 to-green-100 
              rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 z-0"
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-3">
                      <div className="text-4xl">{card.icon}</div>
                      <h3
                        className="text-lg font-semibold text-gray-800 transition-all duration-300 
                group-hover:bg-clip-text group-hover:text-transparent 
                group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:via-red-500 group-hover:to-green-600"
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-sm text-gray-600 transition-all duration-300 
                group-hover:bg-clip-text group-hover:text-transparent 
                group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:via-red-500 group-hover:to-green-600 font-basis"
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*new section */}
        {/* Products Showcase Slider Section */}
        <section className="bg-white py-20 px-4 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 font-houschka">
            Our Featured University Software Solutions
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
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NKhVEy_DQ6QSiW4zNYjsDphFcAuMibo-GA&s",
                title: "University ERP Software",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTTkFedUiVBbJ-8EVTNKbjLazfuWTkAuYaw&s",
                title: "Online Examination System",
              },
              {
                img: "https://i.pinimg.com/originals/13/96/62/1396621cb55390941a9215dcf315b423.jpg",
                title: "Student Information Portal",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyq02lDER9BnavXiipBF2ZcAeI4TbKrdlVJA&s",
                title: "Library Automation Software",
              },
              {
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSE5iNrFKHGK5Hu-e_nnk8wUgxzACGy-kHfA&s",
                title: "Education Data Analytics",
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

        {/*new section benefits */}
        <section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-houschka">
              Key Benefits of Mohitraj University Automation Software
            </h2>
            <p className="text-gray-800 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-basis">
              Empower your institution with scalable, secure and intelligent
              digital infrastructure for academic and administrative excellence.
            </p>
          </div>

          {/* Glassy Card */}
          <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8">
            <ol className="list-decimal list-inside space-y-4 text-left">
              {[
                "Streamlined admission to alumni management with zero paperwork.",
                "Real-time student performance and attendance tracking.",
                "Cloud-based secure data access for staff and students.",
                "Automated examination, grading & results generation.",
                "Smart dashboards for decision-makers and administrators.",
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

        {/*demo*/}

        <section className="bg-red-700 bg-dotted-pattern text-white py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-houschka">
            Ready to Digitally Transform Your Organization with Mohitraj?
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg mb-6 font-basis ">
            Automate, Centralize, and Streamline your Operations with Mohitraj
            Research Tech Pvt. Ltd. — India's trusted digital transformation
            partner for government, enterprise, and education sectors.
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
  );
};

export default UniversityAutomation;
