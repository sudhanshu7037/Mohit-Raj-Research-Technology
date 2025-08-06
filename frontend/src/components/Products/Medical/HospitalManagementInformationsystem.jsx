import React, { useState } from 'react';
import { FaHospitalAlt, FaUserMd, FaNotesMedical,FaShieldAlt,FaCogs,FaSyncAlt,FaServer,FaNetworkWired,FaLaptopMedical , FaBed, FaCapsules, FaFileInvoiceDollar, FaCalculator, FaBoxes, FaUsersCog, FaIdCardAlt, FaProcedures, FaHeartbeat, FaVials, FaStethoscope ,FaUserShield,FaFileMedical,FaClinicMedical,FaUserNurse ,FaMicroscope,FaPills ,FaMoneyCheckAlt  , FaTasks , FaStore  } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const features = [
  {
    icon: <FaUserShield size={50} className="text-indigo-600" />,
    title: "Director Office Management",
    points: [
      "Centralized oversight of all hospital departments and operations.",
      "Performance dashboards, reporting, and compliance monitoring.",
    ],
  },
  {
    icon: <FaFileMedical size={50} className="text-indigo-600" />,
    title: "Patient Registrar Models",
    points: [
      "Patient registration, demographics, and identification digitized.",
      "Quick search, unique ID generation, and history tracking.",
    ],
  },
  {
    icon: <FaClinicMedical size={50} className="text-indigo-600" />,
    title: "OPD Management",
    points: [
      "Manage walk-in patients, appointment scheduling, and doctor allocation.",
      "Medical records, billing, and prescriptions integrated.",
    ],
  },
  {
    icon: <FaProcedures size={50} className="text-indigo-600" />,
    title: "IPD Management",
    points: [
      "Track admitted patients, room assignments, and progress notes.",
      "Integrated with nursing, pharmacy, and billing workflows.",
    ],
  },
  {
    icon: <FaHospitalAlt size={50} className="text-indigo-600" />,
    title: "Emergency/Casualty Management",
    points: [
      "Handle emergency admissions, triage, and real-time status updates.",
      "Prioritized workflows for critical patient handling.",
    ],
  },
  {
    icon: <FaUserMd size={50} className="text-indigo-600" />,
    title: "Doctors Workbench",
    points: [
      "Unified dashboard for patient lists, lab results, and prescriptions.",
      "Supports e-prescriptions, documentation, and scheduling.",
    ],
  },
  {
    icon: <FaStethoscope size={50} className="text-indigo-600" />,
    title: "OPD/IPD/Casualty Consultation",
    points: [
      "Consultation notes, clinical findings, and diagnosis logging.",
      "Template-driven documentation and follow-up scheduling.",
    ],
  },
  {
    icon: <FaUserNurse size={50} className="text-indigo-600" />,
    title: "Nursing & Supporting Staff Management",
    points: [
      "Shift scheduling, patient care tracking, and task assignments.",
      "Daily activity logs and documentation.",
    ],
  },
  {
    icon: <FaBed size={50} className="text-indigo-600" />,
    title: "Bed & Ward Management",
    points: [
      "Real-time bed occupancy tracking and ward allocation.",
      "Ward transfer, discharge summary, and cleaning cycle logging.",
    ],
  },
  {
    icon: <FaMicroscope size={50} className="text-indigo-600" />,
    title: "Diagnosis Management",
    points: [
      "Standardized diagnosis coding and categorization.",
      "Supports clinical decision-making and statistical analysis.",
    ],
  },
  {
    icon: <FaNotesMedical size={50} className="text-indigo-600" />,
    title: "Procedure Management",
    points: [
      "Schedule and log procedures across departments.",
      "Pre-op, intra-op, and post-op details integrated.",
    ],
  },
  {
    icon: <FaLaptopMedical size={50} className="text-indigo-600" />,
    title: "OT Management",
    points: [
      "OT scheduling, equipment preparation, and surgeon availability.",
      "Sterilization logs and surgery documentation.",
    ],
  },
  {
    icon: <FaPills size={50} className="text-indigo-600" />,
    title: "Pharmacy Management",
    points: [
      "Stock monitoring, drug dispensing, and prescription linking.",
      "Expiry alerts and procurement integration.",
    ],
  },
  {
    icon: <FaVials size={50} className="text-indigo-600" />,
    title: "Laboratory Management",
    points: [
      "Test order tracking, sample collection, and result generation.",
      "Reports auto-linked with patient records.",
    ],
  },
  {
    icon: <FaMoneyCheckAlt size={50} className="text-indigo-600" />,
    title: "Financial Accounting & Hospital Budgeting",
    points: [
      "Manage hospital accounts, income/expense tracking.",
      "Supports budgeting, forecasting, and audits.",
    ],
  },
  {
    icon: <FaUsersCog size={50} className="text-indigo-600" />,
    title: "Human Resource Management",
    points: [
      "HR records, payroll, attendance, and leaves management.",
      "Employee lifecycle tracking and document handling.",
    ],
  },
  {
    icon: <FaTasks size={50} className="text-indigo-600" />,
    title: "Task Schedule & Work Management",
    points: [
      "Daily task assignment and tracking across departments.",
      "Work calendars and notifications for due tasks.",
    ],
  },
  {
    icon: <FaStore size={50} className="text-indigo-600" />,
    title: "Store & Purchase Management",
    points: [
      "Inventory tracking, purchase orders, and vendor management.",
      "Auto-replenishment based on stock levels.",
    ],
  },
  {
    icon: <FaUserShield size={50} className="text-indigo-600" />,
    title: "Admin & User Management",
    points: [
      "Role-based access control for all users and staff.",
      "Audit logs, user activity, and permissions handling.",
    ],
  },
];
  const departments = [
    "OPD",
    "IPD",
    "Laboratory",
    "Radiology",
    "Pharmacy",
    "Blood Bank",
    "Accounts",
    "Nursing",
    "HR Department",
    "Medical Records",
    "Clinical Training",
    "Emergency Room"
  ];

  const lifecycle = [
    "Patient Registration",
    "ID Generation",
    "Doctor Assignment",
    "Diagnosis",
    "Treatment Plan",
    "Lab Test Integration",
    "Medication Issuance",
    "Bed Allocation",
    "Daily Progress Notes",
    "Discharge Planning",
    "Billing & Settlement",
    "Medical Record Archiving"
  ];
  const whyChooseUs = [
    { icon: <FaShieldAlt size={28} />, title: 'Secure Patient Data', desc: 'Advanced encryption & HIPAA compliance' },
    { icon: <FaCogs size={28} />, title: 'Custom Workflows', desc: 'Configurable modules per hospital needs' },
    { icon: <FaSyncAlt size={28} />, title: 'Real-Time Updates', desc: 'Live status across all departments' },
    { icon: <FaServer size={28} />, title: 'Cloud Hosting', desc: 'Access anytime from anywhere' },
    { icon: <FaNetworkWired size={28} />, title: 'Interconnected Systems', desc: 'OPD, IPD, Pharmacy & Lab integration' },
    { icon: <FaLaptopMedical size={28} />, title: 'Doctor-Friendly UI', desc: 'Clean interface with smart shortcuts' }
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
  


const HospitalManagementInformationsystem = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="https://media.istockphoto.com/id/1476261444/photo/young-pharmaceutic-seller-explaining-something-to-doctor-in-hospital.jpg?s=612x612&w=0&k=20&c=pEJ7PefqTUcR5hPhB3jLIvAUOzPA6FVPlw391Oxqnrw="
          alt="Hospital Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              Hospital Management Information System (HMIS)
            </h1>
            <p className="text-lg md:text-xl text-green-400 font-basis mt-4">
              Integrated Digital Solution for Modern Healthcare Facilities
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Simplifies patient care, OPD/IPD workflows, diagnostics, billing, and administration through one unified platform.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>

      {/*new section*/}

       <section className="relative w-full py-24 bg-gradient-to-br from-blue-100 via-red-100 to-green-100 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-houschka">
          Hospital Management features and functionality
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-basis">
          Visual representation of HMIS modules placed around a central core system.
        </p>
      </div>

      <div className="">
        
        

        {/* Outer Modules */}
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
      </div>
    </section>

    {/*new section for departent*/}

    <section className="py-16 px-6 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 font-houschka">
            Supported Departments & Clinical Integration
          </h2>
          <p className="text-gray-700 mb-6 font-basis">
            Our ERP is compatible with multiple departments and includes practical integration with OPD/IPD, lab systems, and clinical training.
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
      {/* Patient Lifecycle */}
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
      {/*new section for analytics*/}
       {/* Analytics Section */}
      <section className="py-20 px-4 md:px-16 bg-blue-100">
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-900 font-houschka">
            Hospital Dashboard & Analytics
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
      {/*new section */}
       {/* Testimonials Section */}
      <section className="py-16 px-6 bg-red-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-blue-900 text-xl md:text-5xl font-bold leading-tight mb-6 font-houschka">
            What Our Hospital Clients Say
          </h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksG4mm4xFN-Ufeaf1ZZ8ixWe2k4aZknK1MQ&s"
                  alt="Hospital Director"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <h4 className="font-semibold text-blue-800">— Director, Global Care Hospital</h4>
              </div>
              <p className="text-gray-700">“The system has completely transformed how we manage patients and coordinate between departments. It’s efficient and reliable.”</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="Hospital Admin"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <h4 className="font-semibold text-blue-800">— Admin, Lifeline Multi-specialty</h4>
              </div>
              <p className="text-gray-700">“It has helped us digitize everything from admissions to discharge, saving both time and effort.”</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Head of Operations"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <h4 className="font-semibold text-blue-800">— Operations Head, City Hospital</h4>
              </div>
              <p className="text-gray-700">“Very smooth integration with our existing systems. The team behind this software truly understands hospital workflows.”</p>
            </div>
          </div>
        </div>
      </section>
       {/* WHY CHOOSE US */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 font-houschka ">
            Why Choose Our Hospital ERP?
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="relative w-48 h-48 bg-blue-100 transform rotate-45 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute text-center w-full transform -rotate-45">
                  <div className="text-blue-900 mb-2">{item.icon}</div>
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 px-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*new section*/}
      <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
  <div className="max-w-6xl mx-auto text-center">
    {/* 🌈 Gradient Heading */}
    <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-600 to-green-700 mb-8 font-houschka">
      Benefits of Hospital Management & Information System
    </h2>
    <p className="text-gray-700 text-lg mb-12 font-basis">
      A robust ERP system to efficiently manage clinical operations, patient care, billing, departmental workflows, and hospital infrastructure.
    </p>

    {/* 🔢 Ordered List with Styled LI */}
    <ol className="list-decimal list-inside space-y-6 text-left max-w-3xl mx-auto">
      {[
        "Comprehensive patient registration, history & EMR tracking.",
        "Centralized appointment scheduling & queue management.",
        "Integrated billing, pharmacy & laboratory systems.",
        "Real-time bed availability & ward/ICU management.",
        "Doctor & staff workflow optimization with role-based access.",
        "Inventory, procurement & equipment tracking automation."
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

      
    </>
  );
};

export default HospitalManagementInformationsystem;
