import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const LifeSciences = () => {
  return (
    <>
    
    {/* === Hero Section (Life Sciences) === */}
<section
  className="relative bg-blue-950 text-white min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HsOzfzzOJ4PFP_0QsWw1GlVX7_aP1eGkzQ&s')", // Life Sciences banner
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
      Accelerating Innovation in Life Sciences through Digital Transformation
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-6">
      Empowering pharmaceutical, biotech, and healthcare organizations with intelligent, compliant, and scalable digital solutions.
    </p>
    <a
      href="#lifesciences"
      className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
      Explore Our Life Sciences Solutions
    </a>
  </div>
</section>


{/* === Life Sciences Domain Section === */}
<section className="py-20 px-6 bg-white">
  <div className="text-center max-w-5xl mx-auto mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Life Sciences Digital Solutions</h2>
    <p className="text-gray-700 text-lg">
      Empowering pharmaceutical, biotech, and healthcare industries with cutting-edge digital tools to enhance research, compliance, manufacturing, and patient outcomes.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Clinical Trial Management System (CTMS)",
        description:
          "Streamline planning, tracking, and reporting of clinical trials with real-time visibility and regulatory compliance.",
      },
      {
        title: "Laboratory Information Management System (LIMS)",
        description:
          "Digitally manage lab workflows, sample tracking, test results, and compliance in R&D and diagnostics labs.",
      },
      {
        title: "Regulatory Compliance & Validation",
        description:
          "Ensure FDA, EMA, and GxP compliance through automated documentation, audits, and validation tools.",
      },
      {
        title: "Pharma Manufacturing Automation",
        description:
          "Automate batch processing, monitor quality, and manage formulations using pharma-grade MES solutions.",
      },
      {
        title: "Drug Supply Chain Traceability",
        description:
          "Enable end-to-end visibility of pharmaceutical supply chains for drug authenticity and temperature control.",
      },
      {
        title: "Digital R&D Acceleration",
        description:
          "Leverage AI/ML to speed up molecule discovery, trial analytics, and research documentation.",
      }
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 hover:scale-[1.02] flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

{/* === Live Products Showcase: Life Sciences === */}
<section className="py-20 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Live Life Sciences Solutions</h2>
    <p className="text-gray-700 text-lg">
      Explore our real-time digital products crafted for pharmaceutical, biotech, and healthcare industries to accelerate research, ensure compliance, and streamline operations.
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
        title: "Clinical Trial Management System (CTMS)",
        description: "Real-time planning, tracking, and reporting of clinical studies with global compliance features.",
        image: "/images/ctms-life-sciences.jpg",
        link: "/life-sciences/ctms",
      },
      {
        title: "Laboratory Information Management System (LIMS)",
        description: "Digitize lab workflows, automate test reports, and ensure traceability across research labs.",
        image: "/images/life-science-lims.jpg",
        link: "/life-sciences/lims",
      },
      {
        title: "Pharma Manufacturing Automation",
        description: "Automate batch processes, maintain compliance, and reduce errors in pharmaceutical production.",
        image: "/images/pharma-manufacturing.jpg",
        link: "/life-sciences/pharma-automation",
      },
      {
        title: "Regulatory Compliance & Validation",
        description: "Ensure global regulatory compliance with audit trails, electronic signatures, and documentation tools.",
        image: "/images/regulatory-compliance.jpg",
        link: "/life-sciences/regulatory-compliance",
      },
      {
        title: "Drug Supply Chain Traceability",
        description: "Track drug movement across the supply chain with end-to-end visibility and anti-counterfeit controls.",
        image: "/images/supply-traceability.jpg",
        link: "/life-sciences/supply-chain",
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

{/* Working Flow for Life Sciences */}
<section className="bg-gray-100 py-20 px-6">
  <div className="max-w-3xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Working Flow</h2>
    <p className="text-gray-600 text-lg">
      We specialize in digitizing life sciences workflows through tailored software solutions that support research, compliance, and patient-centric innovation.
    </p>
  </div>

  <div className="relative border-l-4 border-blue-600 max-w-3xl mx-auto">
    {[
      {
        title: "Clinical & Research Requirement Analysis",
        desc: "We collaborate with pharmaceutical and biotech teams to understand study protocols, lab workflows, and data handling practices.",
      },
      {
        title: "Regulatory Mapping & Solution Planning",
        desc: "We plan solutions aligned with global compliance standards like FDA 21 CFR Part 11, HIPAA, and GxP practices.",
      },
      {
        title: "Custom Application Development",
        desc: "Build LIMS, EDC, CTMS, and drug discovery platforms tailored to your R&D or clinical trial needs.",
      },
      {
        title: "Integration & Data Security",
        desc: "Integrate with lab devices, wearables, EHRs, and secure data pipelines with encryption and access control.",
      },
      {
        title: "Validation & QA Testing",
        desc: "We perform rigorous validation, audit trail checks, and documentation to meet life sciences quality standards.",
      },
      {
        title: "Deployment, Training & Support",
        desc: "Deploy solutions across research sites or hospitals, offer training, and provide 24/7 monitoring and updates.",
      },
    ].map((step, index) => (
      <div key={index} className="mb-10 ml-6 relative">
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 mt-1.5"></div>
        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* === Why Choose Us - Life Sciences === */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
    
    {/* Left Text */}
    <div>
      <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose Us?</h2>
      <p className="text-gray-700 mb-6 text-lg">
        Our deep domain expertise helps life sciences companies navigate digital transformation with precision, compliance, and innovation.
      </p>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-start gap-2">
          ✅ &nbsp; GxP-compliant digital infrastructure
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Data integrity and regulatory-ready solutions (FDA, EMA)
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; AI-driven drug discovery and clinical trial platforms
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Secure patient data and healthcare integration
        </li>
      </ul>
    </div>

    {/* Right Image with Hover Effect */}
    <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-500">
      <img
        src="https://media.istockphoto.com/id/1150397417/photo/abstract-luminous-dna-molecule-doctor-using-tablet-and-check-with-analysis-chromosome-dna.jpg?s=612x612&w=0&k=20&c=WKApDIgCaSrcQ_pGOkDoKZLt6hUvx7coT3hMsV5aF9E="
        alt="Why Choose Life Sciences IT"
        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
      />
    </div>

  </div>
</section>

{/* === Key Benefits - Life Sciences === */}
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Key Benefits of Choosing Us</h2>
    <p className="text-gray-700 text-lg">
      Driving scientific breakthroughs and patient-centric solutions through digital innovation and regulatory excellence.
    </p>
  </div>

  <div className="max-w-4xl mx-auto">
    <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg leading-relaxed">
      <li><span className="font-semibold text-blue-800">Accelerated R&D:</span> Digital platforms for faster and more efficient research, trials, and approvals.</li>
      <li><span className="font-semibold text-blue-800">Compliance & Security:</span> End-to-end systems validated for regulatory compliance (GxP, HIPAA).</li>
      <li><span className="font-semibold text-blue-800">Connected Healthcare:</span> Seamless integration of devices, labs, EHRs, and clinical systems.</li>
      <li><span className="font-semibold text-blue-800">Data-Driven Insights:</span> Real-time analytics for drug performance, patient outcomes, and market feedback.</li>
      <li><span className="font-semibold text-blue-800">Innovation Enablement:</span> Cloud-native, AI-powered platforms for the future of medicine.</li>
    </ul>
  </div>
</section>
    </>
  )
}

export default LifeSciences