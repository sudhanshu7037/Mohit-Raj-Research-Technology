import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import HealthcareBanner from "../../assets/industriespages/healthcare/images/healthcarebanner.png"

const liveProducts = [
  {
    title: "Hospital Management System",
    description: "A centralized digital solution to manage patient records, appointments, billing, and staff operations.",
    image: "https://www.eiu.com/n/wp-content/uploads/2024/07/GettyImages-1329632070-scaled-1.jpg",
    link: "https://example-hms-live.com",
  },
  {
    title: "Telemedicine Platform",
    description: "Connect doctors and patients virtually with secure video consultations, e-prescriptions, and remote care.",
    image: "https://etimg.etb2bimg.com/photo/98524985.cms",
    link: "https://example-telemedicine.com",
  },
  {
    title: "Pharmacy Inventory System",
    description: "Real-time inventory tracking, expiry alerts, and purchase management for hospital pharmacies.",
    image: "https://www.news-medical.net/images/Article_Images/ImageForArticle_22572_16533781526443229.jpg",
    link: "https://example-pharmacy.com",
  },
  {
    title: "Diagnostic Lab Portal",
    description: "Online lab test booking, report generation, and sample tracking for diagnostics centers.",
    image: "https://cdn.prod.website-files.com/650c1bee516c4e723b11b29a/652062660a22082f24758779_651f5659f02881a183eebebb_What%2520are%2520the%2520Top%25203%2520Drivers%2520of%2520Rising%2520Healthcare%2520Costs.jpeg",
    link: "https://example-diagnostics.com",
  },
  {
    title: "Health Records Portal",
    description: "Digital health records accessible anytime by patients and healthcare professionals securely.",
    image: "https://thinkpalm.com/wp-content/uploads/2023/10/image_03-3.jpg",
    link: "https://example-ehr.com",
  },
];


const Healthcare = () => {
  return (
    <>

    {/* === Hero Section (Healthcare) === */}
<section
  className="relative bg-blue-950 text-white min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: `url(${HealthcareBanner})` , // Healthcare banner
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-4xl text-center px-6">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug font-houschka">
      Transforming Healthcare through Digital Innovation
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-6 font-basis">
      Empowering hospitals and clinics with smart, secure, and scalable health-tech solutions.
    </p>
    <a
      href="#healthcare"
      className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
      Explore Our Solutions
    </a>
  </div>
</section>

    
    {/* === Healthcare Domain Section === */}
<section className="py-20 px-6 bg-white">

    
  <div className="text-center max-w-5xl mx-auto mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">Healthcare Digital Solutions</h2>
    <p className="text-gray-700 text-lg font-basis">
      Empowering hospitals and clinics through advanced digital tools to streamline patient care, management, and data security.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Medical College Management and Information System",
        description:
          "Automate inpatient/outpatient workflows, billing, pharmacy, and lab services.",
        link: "/hospital-management-system"
      },
      {
        title: "Hospital Management & Information system.",
        description:
          "Manage appointments, patient history, prescriptions and inventory from one dashboard.",
        link: "/clinic-practice-management"
      },
      {
        title: "E-Hospital Management",
        description:
          "Offer virtual consultations with integrated video, payments, and prescription tools.",
        link: "/telemedicine-platform"
      },
      {
        title: "E-clinic Management",
        description:
          "Secure cloud-based records for real-time patient access and compliance.",
        link: "/digital-health-records"
      },
      {
        title: "Bioinformatics Management and Information System",
        description:
          "Track patient trends, hospital performance, and compliance in real-time.",
        link: "/healthcare-analytics-dashboard"
      },
     
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 hover:scale-[1.02] flex flex-col justify-between"
      >
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2 font-houschka">{item.title}</h3>
          <p className="text-gray-600 mb-6 font-basis">{item.description}</p>
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

{/* === Live Products Showcase: Healthcare === */}
<section className="py-20 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">Live Healthcare Solutions</h2>
    <p className="text-gray-700 text-lg font-basis">
      Explore our live and innovative healthcare solutions that are enhancing patient care and streamlining medical operations across hospitals and clinics.
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
    {liveProducts.map((product, index) => (
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
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              View Live
            </a>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

{/*working flow*/}
<section className="bg-gray-100 py-20 px-6">
  <div className="max-w-3xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Working Flow</h2>
    <p className="text-gray-600 text-lg">
      Step-by-step process we follow to deliver impactful healthcare IT solutions.
    </p>
  </div>

  <div className="relative border-l-4 border-blue-600 max-w-3xl mx-auto">
    {[
      {
        title: "Healthcare Needs Assessment",
        desc: "We collaborate with healthcare professionals to understand workflow, patient management, and compliance requirements.",
      },
      {
        title: "Regulatory Planning & Strategy",
        desc: "We outline a plan that ensures HIPAA, NABH, or other healthcare compliance standards are met.",
      },
      {
        title: "Custom Software Design & Development",
        desc: "We build user-friendly interfaces and secure systems for patient data, EMR, HMS, and more.",
      },
      {
        title: "Clinical Testing & Validation",
        desc: "Solutions are validated for real-world healthcare environments, ensuring functionality and reliability.",
      },
      {
        title: "Hospital/Clinic Deployment",
        desc: "The systems are deployed within your hospital or clinic with proper documentation and training.",
      },
      {
        title: "Ongoing Support & Healthtech Updates",
        desc: "Regular updates, security patches, and tech upgrades for uninterrupted operations and scalability.",
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


{/* === Why Choose Us - Healthcare === */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
    
    {/* Left Text */}
    <div>
      <h2 className="text-4xl font-bold text-blue-900 mb-6 font-houschka">Why Choose Us?</h2>
      <p className="text-gray-700 mb-6 text-lg font-basis">
        We offer cutting-edge digital healthcare solutions that streamline hospital workflows,
        enhance patient care, and optimize medical operations with precision and security.
      </p>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-start gap-2">
          ✅ &nbsp; Healthcare IT specialists with domain expertise
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; HIPAA-compliant secure systems
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Real-time patient and staff management tools
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Continuous support, upgrades, and monitoring
        </li>
      </ul>
    </div>

    {/* Right Image with Hover Effect */}
    <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-500">
      <img
        src="https://nursesgroup.co.uk/assets/images/blog/healthcare-technology.jpg"
        alt="Why Choose Healthcare IT"
        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
      />
    </div>

  </div>
</section>

{/* === Key Benefits - Healthcare === */}
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">Key Benefits of Choosing Us</h2>
    <p className="text-gray-700 text-lg font-basis">
      Empowering hospitals and healthcare centers with digital tools that elevate care quality and operational efficiency.
    </p>
  </div>

  <div className="max-w-4xl mx-auto">
    <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg leading-relaxed">
      <li><span className="font-semibold text-blue-800">Patient-Centric Systems:</span> Real-time patient data access and seamless EMR integrations.</li>
      <li><span className="font-semibold text-blue-800">Improved Coordination:</span> Better collaboration between departments and care providers.</li>
      <li><span className="font-semibold text-blue-800">Scalable Infrastructure:</span> Designed to adapt to multi-location healthcare facilities.</li>
      <li><span className="font-semibold text-blue-800">Secure and Compliant:</span> Adherence to industry standards and data security protocols.</li>
      <li><span className="font-semibold text-blue-800">Reduced Administrative Load:</span> Automate billing, scheduling, and inventory tasks efficiently.</li>
    </ul>
  </div>
</section>

    
    </>
  )
}

export default Healthcare