import React, { useState, useEffect } from "react";


const solutions = [
    {
      title: "Student Information System (SIS)",
      desc: "Centralized management of student records and academic data.",
    },
    {
      title: "Online Admission & Fee Management",
      desc: "Streamlined admission process with secure payment gateways.",
    },
    {
      title: "Smart Learning & Content Management",
      desc: "Digital learning materials and interactive course content.",
    },
    {
      title: "Online Examination System",
      desc: "Automated exam scheduling, conduction and result generation.",
    },
    {
      title: "Faculty & Staff Management",
      desc: "Attendance, payroll and performance tracking for staff.",
    },
    {
      title: "Hostel & Transport Automation",
      desc: "Allocation, tracking and digital records of hostels and transport.",
    },
    {
      title: "Mobile App Integration",
      desc: "Anywhere access via Android/iOS apps for students and faculty.",
    },
    {
      title: "Cloud & Data Backup",
      desc: "Secure cloud-based access and automated data backup.",
    },
  ];
  const features = [
    { title: "Automation of Administrative Tasks", desc: "Reduces manual workload through integrated digital workflows." },
    { title: "Improved Student Engagement", desc: "Interactive portals and communication tools to boost student involvement." },
    { title: "Real-time Data Access", desc: "Instant insights into student progress, attendance, and academic trends." },
    { title: "Enhanced Faculty Productivity", desc: "Tools and dashboards for faculty to manage courses, grading, and communication." },
    { title: "Secure Cloud Integration", desc: "Safeguards institutional data while enabling remote access and scalability." },
    { title: "Seamless Inter-departmental Collaboration", desc: "Bridges gaps between departments with unified digital platforms." },
  ];
  const whyChoosePoints = [
    "Years of experience in EdTech",
    "Customizable & scalable platforms",
    "24/7 dedicated support",
    "Integration with existing systems",
    "Data Security & Compliance",
  ];
  

  const slides = [
    {
      img: "https://www.timeshighereducation.com/sites/default/files/styles/article785xauto/public/psu-digital-transformation_web_0.jpg?itok=L59lSYow",
      title: "AI-Powered Learning",
      desc: "Harness artificial intelligence to personalize educational experiences."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnG8N-qz2r_F81HeJuA28R31hT5BaDOV8BqREgdeayYV7kacw3SKIKBMgsn9Nv1dwlsxQ&usqp=CAU",
      title: "Smart Classrooms",
      desc: "Integrate digital tools and real-time interaction to enhance learning outcomes."
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnG8N-qz2r_F81HeJuA28R31hT5BaDOV8BqREgdeayYV7kacw3SKIKBMgsn9Nv1dwlsxQ&usqp=CAU",
      title: "Digital Libraries",
      desc: "Access a world of resources anytime, anywhere with cloud-based libraries."
    }
  ];

  


const UniversityDigitalization = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <>
    
    <div className="font-sans text-gray-800">
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white px-6 min-h-screen flex items-center"
        style={{
          backgroundImage:
            "url('https://www.inceptionbd.com/store/1233/ai-background-artificial-intelligence-hand-vector-46752147.jpg')",
        }}
      >
        <div className="max-w-4xl z-10 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
            Empowering Universities Through Digital Transformation
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Comprehensive IT Solutions for Modern Education Management
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
          What is University Digitalization?
        </h2>
        <p className="text-lg text-gray-600">
          University digitalization involves transforming traditional manual academic processes into seamless, automated digital systems that improve accessibility, efficiency, and academic outcomes.
        </p>
      </section>

      {/* Solutions Grid with Modern Organic Cards */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-blue-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
           Our Technology-Driven Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {solutions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden border border-transparent hover:border-blue-200"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-100 rounded-tr-full"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-blue-900 group-hover:text-blue-800 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits Section - Unique Design */}
      <section className="bg-blue-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Features & Benefits of Our Digital Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="relative bg-white shadow-xl rounded-ss-[3rem] rounded-ee-[3rem] p-6 transition-all duration-300 hover:rotate-1 hover:scale-105 hover:bg-blue-50 group"
              >
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-20 blur-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-indigo-600 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 group-hover:text-gray-900 transition">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Smart Campus Transformation Flow
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {["Admission", "Attendance", "Learning", "Exams", "Results", "Alumni"].map(
            (step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-full shadow-lg text-center hover:bg-blue-200 transition w-40"
              >
                <p className="font-semibold text-lg">{step}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
          Customized Solutions for Departments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Engineering Colleges", "Medical Colleges", "Law/Management Institutions", "Research & PhD Departments", "Library & Labs"].map(
            (dept, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow rounded-xl hover:bg-blue-100 transition"
              >
                <h3 className="font-semibold text-lg text-blue-900">{dept}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
<section className="bg-gray-700 text-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-10">
    {/* Left Content */}
    <div className="flex flex-col justify-center min-h-full">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
      <ul className="space-y-4">
        {whyChoosePoints.map((point, index) => (
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
        src="https://www.iese.edu/focused/wp-content/uploads/sites/11/2023/08/shutterstock_1717584028-scaled.jpg"
        alt="Why Choose Us Illustration"
        className="w-full rounded-xl shadow-lg object-cover h-full"
      />
    </div>
  </div>
</section>


{/* Product Slider Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">Our Innovative EdTech Products</h2>
          <p className="text-gray-600 text-lg">Explore our live solutions shaping the future of education</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <img src={slides[current].img} alt="Product Slide" className="rounded-3xl shadow-lg w-full h-auto" />
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">{slides[current].title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed">{slides[current].desc}</p>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">
          Ready to Digitize Your University?
        </h2>
        <p className="mb-6 text-gray-700">
          Talk to our experts and schedule a personalized demo session today.
        </p>
        <button className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition">
          Book a Free Demo
        </button>
      </section>
    </div>
    
    
    </>
  )
}

export default UniversityDigitalization