import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const products = [
  {
    title: "Smart Company Registry",
    content: "Manage company registrations online with real-time status tracking.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZKhBOChNMX_NDU2hZ3rKtSulXVLyk5VeHQ&s",
  },
  {
    title: "E-Governance Dashboard",
    content: "Integrated digital governance and transparency tools.",
    image: "https://blog.coupler.io/wp-content/uploads/2025/04/ppc-dashboard-power-bi.png",
  },
  {
    title: "Digital Compliance",
    content: "Auto-manage ROC, GST, IT filings under one portal.",
    image: "https://res.cloudinary.com/uf-552861/image/upload/v1716962221/Live_BOM_has_a_useful_overall_BoM_health_dashboard._f9ptwz.jpg",
  },
];


const ECompanySystem = () => {
  
    
  


    const features = [
    {
      title: "Company Registration",
      desc: "Private Ltd., LLP, OPC & more online",
    },
    {
      title: "Digital Document Vault",
      desc: "Securely store all business documents",
    },
    {
      title: "Compliance Tracking",
      desc: "Stay on top of filing deadlines",
    },
    {
      title: "GST / PAN / TAN",
      desc: "Assistance with all tax formalities",
    },
    {
      title: "Dashboard Access",
      desc: "Track your filings & progress",
    },
    {
      title: "Cloud Based Storage",
      desc: "Access anytime, anywhere securely",
    },
  ];

  const services = [
    "Trademark Registration",
    "Digital Signature Certificate (DSC)",
    "ROC Annual Filing",
    "Udyam/MSME Registration",
    "Business Advisory",
    "Startup India Registration"
  ];

  const faqs = [
    {
      q: "What documents are required?",
      a: "Basic ID proof (Aadhar, PAN), business address proof, and passport-size photo."
    },
    {
      q: "How long does company registration take?",
      a: "It usually takes 3–7 working days depending on company type."
    },
    {
      q: "Is the process fully online?",
      a: "Yes, everything from document upload to approval is done online."
    },
    {
      q: "How secure is my data?",
      a: "All documents are encrypted and stored on secure cloud servers."
    }
  ];

  return (
    <>
    
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg')" }}
      >
        <div className="absolute inset-0  opacity-20"></div>
        <div className="relative z-10 max-w-3xl text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            E-Company System
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Incorporate, Manage & Grow Your Business Digitally
          </p>
          <button className="bg-white text-blue-900 hover:bg-blue-100 px-6 py-3 rounded-xl text-lg font-semibold transition">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Services We Offer
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white border shadow-md p-6 rounded-xl hover:shadow-xl hover:bg-orange-100 transition">
              <p className="text-lg font-semibold text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8">Why Choose Us?</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-10">
          With expert guidance, fast-track processing, and complete transparency, we help startups and entrepreneurs register their businesses with ease.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-red-100 hover:bg-red-200 p-6 rounded-xl shadow transition w-64">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Expert Support</h3>
            <p>Guidance by professionals at every step</p>
          </div>
          <div className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow transition w-64">
            <h3 className="text-xl font-semibold text-red-800 mb-2">100% Online</h3>
            <p>Complete digital process from start to finish</p>
          </div>
          <div className="bg-orange-100 hover:bg-orange-200 p-6 rounded-xl shadow transition w-64">
            <h3 className="text-xl font-semibold text-orange-800 mb-2">Affordable Pricing</h3>
            <p>Get value-for-money packages & offers</p>
          </div>
        </div>
      </section>

      {/* Empower Business Section */}

<section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50 text-center">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="group hover:scale-[1.02] transition duration-500 ease-in-out shadow-md hover:shadow-xl bg-white rounded-2xl p-8 mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-red-500 to-orange-500 mb-4">
        How E-Company Empowers Your Business
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 transition duration-300 group-hover:text-blue-900">
        From business incorporation to legal compliance, our system empowers entrepreneurs to focus on what matters most—growing their business.
      </p>
      <span className="block w-0 h-1 bg-blue-500 mx-auto mt-2 transition-all duration-500 group-hover:w-full rounded-full"></span>
    </div>


    {/* 3 Diamond Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
      {[
        {
          title: "Fast Registration",
          desc: "Register your company quickly with our streamlined system.",
          bg: "from-blue-200 via-blue-100 to-red-100",
        },
        {
          title: "Legal Compliance",
          desc: "We ensure your business meets all legal requirements.",
          bg: "from-red-200 via-red-100 to-green-100",
        },
        {
          title: "Growth Support",
          desc: "Unlock growth tools and expert business guidance.",
          bg: "from-orange-200 via-orange-100 to-blue-100",
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`relative w-48 h-48 sm:w-56 sm:h-56 mx-auto transform rotate-45 
          bg-gradient-to-tr ${item.bg} rounded-xl shadow-lg transition-all duration-500 
          hover:scale-110 hover:-translate-y-3 hover:shadow-2xl`}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center transform -rotate-45 p-4">
            <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Features Section */}
      <section className="py-20 px-4 md:px-20 bg-white text-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Features
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg border transition-all duration-300 bg-white hover:bg-gradient-to-tr from-blue-100 via-red-100 to-orange-100 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-tr from-blue-100 via-red-50 to-orange-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Explore Our Corporate Products
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Trusted solutions to streamline your organization’s operations.
        </p>

        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
          className="w-full"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-2xl shadow-xl hover:scale-105 duration-300"
                />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-red-600 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 text-base">{product.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

      {/* === FAQ Section === */}
<section className="py-20 px-6 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">
    Frequently Asked Questions
  </h2>

  <div className="max-w-4xl mx-auto space-y-6">
    {faqs.map((faq, i) => (
      <div
        key={i}
        className="bg-white shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500 hover:border-red-500 rounded-xl p-6 group"
      >
        <h4 className="font-semibold text-lg text-blue-800 group-hover:text-red-600 transition">
          Q: {faq.q}
        </h4>
        <p className="text-gray-700 mt-2 group-hover:text-gray-900 transition duration-300">
          A: {faq.a}
        </p>
      </div>
    ))}
  </div>
</section>


     {/* Call to Action Section */}
<section className="bg-blue-500 text-white py-16 px-6 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white-900">
    Ready to Launch Your Company?
  </h2>
  <p className="text-lg mb-6 ">
    Start your registration today with E-Company System
  </p>
  <button className="bg-orange-500 text-blue-900 font-semibold px-8 py-3 rounded-xl hover:bg-red-500 transition">
    Talk to an Expert
  </button>
</section>


    </>
  );

}

export default ECompanySystem