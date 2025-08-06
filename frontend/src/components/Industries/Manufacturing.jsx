import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Manufacturing = () => {
  return (
    <>
    
    {/* === Hero Section - Manufacturing Industry === */}
<section
  className="relative bg-blue-950 text-white min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: "url('https://media.istockphoto.com/id/582256640/photo/oil-refinery-chemical-petrochemical-plant.jpg?s=1024x1024&w=is&k=20&c=8eL7YnB_ZvPPrSy3n4QcaMK8QDsc5tbqKlGrH0bCBVE=')", // Manufacturing-themed image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-4xl text-center px-6">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
      Driving Manufacturing Forward with Smart IT Solutions
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-6">
      Enhancing productivity, automation, and data-driven decision making across industrial operations.
    </p>
    <a
      href="#manufacturing"
      className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
      Explore Our Solutions
    </a>
  </div>
</section>

{/* === Manufacturing Domain Section === */}
<section className="py-20 px-6 bg-white">
  <div className="text-center max-w-5xl mx-auto mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Manufacturing Digital Solutions</h2>
    <p className="text-gray-700 text-lg">
      Empowering factories and industrial operations with smart digital tools to streamline production, inventory, quality control, and supply chain efficiency.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Manufacturing Execution System (MES)",
        description:
          "Track, control, and monitor production on the shop floor in real-time for increased visibility and efficiency.",
        link: "/manufacturing-execution-system"
      },
      {
        title: "Industrial IoT Integration",
        description:
          "Connect machines and sensors to gather data and enable predictive maintenance and automation.",
        link: "/iiot-integration"
      },
      {
        title: "Smart Inventory Management",
        description:
          "Automate inventory tracking, reduce overstock/shortage, and optimize warehouse operations.",
        link: "/smart-inventory-management"
      },
      {
        title: "Quality Management System (QMS)",
        description:
          "Digitally manage inspections, defect tracking, and compliance for consistent product quality.",
        link: "/quality-management-system"
      },
      {
        title: "Supply Chain Optimization",
        description:
          "Improve planning, vendor collaboration, and logistics using real-time data and AI-driven insights.",
        link: "/supply-chain-optimization"
      },
      {
        title: "Production Planning & Scheduling",
        description:
          "Streamline manufacturing timelines and resource allocation with intelligent planning tools.",
        link: "/production-planning-scheduling"
      }
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 hover:scale-[1.02] flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-6">{item.description}</p>
        </div>
        <div>
          <a href={item.link}>
            <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300 text-sm font-medium shadow-md">
              Explore Now
            </button>
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

{/* === Live Products Showcase: Manufacturing === */}
<section className="py-20 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Live Manufacturing Solutions</h2>
    <p className="text-gray-700 text-lg">
      Explore our real-time manufacturing solutions that optimize production, reduce downtime, and boost operational efficiency for factories and industrial plants.
    </p>
  </div>

  <Swiper
    modules={[Navigation, Autoplay]}
    navigation
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="max-w-6xl mx-auto"
  >
    {[
      {
        title: "Smart Factory Monitoring System",
        description: "Real-time data tracking of machines, production lines, and KPIs to maximize uptime and efficiency.",
        image: "/images/smart-factory.jpg",
        link: "/smart-factory-monitoring",
      },
      {
        title: "Inventory & Supply Chain Manager",
        description: "Digitally manage raw materials, warehouse stock, and vendor coordination seamlessly.",
        image: "/images/supply-chain.jpg",
        link: "/inventory-supply-chain",
      },
      {
        title: "Maintenance Scheduling Software",
        description: "Prevent unplanned breakdowns with automated alerts and predictive maintenance tools.",
        image: "/images/maintenance.jpg",
        link: "/maintenance-scheduler",
      },
      {
        title: "Production Planning & MES",
        description: "Plan and track production schedules, batches, and operator shifts efficiently.",
        image: "/images/mes-system.jpg",
        link: "/production-mes",
      },
      {
        title: "Quality Control Automation",
        description: "Automate inspections, defect tracking, and compliance documentation in real-time.",
        image: "/images/quality-control.jpg",
        link: "/quality-control",
      },
    ].map((product, index) => (
      <SwiperSlide key={index}>
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-blue-800 mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

{/*working flow for Manufacturing*/}
<section className="bg-gray-100 py-20 px-6">
  <div className="max-w-3xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Working Flow</h2>
    <p className="text-gray-600 text-lg">
      Step-by-step process we follow to deliver efficient and scalable manufacturing IT solutions.
    </p>
  </div>

  <div className="relative border-l-4 border-blue-600 max-w-3xl mx-auto">
    {[
      {
        title: "Manufacturing Requirements Analysis",
        desc: "We work closely with production managers to understand workflows, bottlenecks, and goals.",
      },
      {
        title: "System Architecture & Planning",
        desc: "Blueprint design for ERP, MES, inventory control, and production tracking systems.",
      },
      {
        title: "Custom Software Development",
        desc: "We build intuitive, automation-driven platforms for shop floor control, real-time monitoring, and quality management.",
      },
      {
        title: "Integration & Testing",
        desc: "Our systems are rigorously tested and integrated with existing machines, IoT devices, or legacy ERP platforms.",
      },
      {
        title: "Plant-Level Deployment",
        desc: "Solutions are implemented across your manufacturing units with staff onboarding and training.",
      },
      {
        title: "Continuous Optimization & Support",
        desc: "We provide long-term updates, feature enhancements, and technical support to keep your plant digitally optimized.",
      },
    ].map((step, index) => (
      <div key={index} className="mb-10 ml-6">
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 mt-1.5"></div>
        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* === Why Choose Us - Manufacturing === */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
    
    {/* Left Text */}
    <div>
      <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose Us?</h2>
      <p className="text-gray-700 mb-6 text-lg">
        We deliver smart digital manufacturing solutions that enhance production efficiency,
        streamline operations, and enable data-driven decision-making through Industry 4.0 technologies.
      </p>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-start gap-2">
          ✅ &nbsp; Expertise in industrial automation & MES systems
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Real-time production monitoring dashboards
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; ERP and supply chain integration
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Scalable and secure digital infrastructure
        </li>
      </ul>
    </div>

    {/* Right Image with Hover Effect */}
    <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-500">
      <img
        src="https://media.istockphoto.com/id/1481351201/photo/factory-digitalization-two-industrial-engineers-use-tablet-computer-big-data-statistics.jpg?s=1024x1024&w=is&k=20&c=Y2Bl18Nf1OInl-5289lT2NaPCEMNxHeA34hNg6Dk9Ms="
        alt="Why Choose Manufacturing IT"
        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
      />
    </div>

  </div>
</section>

{/* === Key Benefits - Manufacturing === */}
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Key Benefits of Choosing Us</h2>
    <p className="text-gray-700 text-lg">
      Empowering manufacturing industries with cutting-edge digital tools to enhance production,
      reduce costs, and maintain competitive edge.
    </p>
  </div>

  <div className="max-w-4xl mx-auto">
    <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg leading-relaxed">
      <li><span className="font-semibold text-blue-800">Enhanced Production Control:</span> Monitor, analyze, and optimize production lines in real-time.</li>
      <li><span className="font-semibold text-blue-800">Reduced Downtime:</span> Predictive maintenance and real-time alerts improve machine uptime.</li>
      <li><span className="font-semibold text-blue-800">Connected Operations:</span> Seamless integration of machines, systems, and processes.</li>
      <li><span className="font-semibold text-blue-800">Data-Driven Insights:</span> Leverage analytics for informed decision-making and forecasting.</li>
      <li><span className="font-semibold text-blue-800">Scalable Solutions:</span> Flexible architecture to grow with evolving production needs.</li>
    </ul>
  </div>
</section>





    </>
  )
}

export default Manufacturing