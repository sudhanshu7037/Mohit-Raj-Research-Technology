import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";



const Banking = () => {
  return (
    <>
    {/* === Hero Section (Banking) === */}
<section
  className="relative bg-blue-950 text-white min-h-screen flex items-center justify-center"
  style={{
    backgroundImage: "url('https://images.forbesindia.com/media/images/2017/Aug/img_98613_digital_banking.jpg')", // Replace with your actual banking image URL if needed
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
      Powering the Future of Banking with Technology
    </h1>
    <p className="text-lg md:text-xl text-gray-200 mb-6">
      Delivering secure, agile, and intelligent digital banking solutions that drive growth and trust.
    </p>
    <a
      href="#banking"
      className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
      Explore Our Solutions
    </a>
  </div>
</section>
{/* === Banking Domain Section === */}
<section className="py-20 px-6 bg-white">
  <div className="text-center max-w-5xl mx-auto mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Banking Digital Solutions</h2>
    <p className="text-gray-700 text-lg">
      Driving innovation in the banking sector with secure, intelligent, and user-centric digital platforms for financial excellence.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Core Banking System",
        description:
          "Centralized platform to manage accounts, transactions, loans, and customer services in real-time.",
        link: "/core-banking-system"
      },
      {
        title: "Mobile & Internet Banking",
        description:
          "Enable customers to manage their finances anywhere with intuitive, secure mobile and web portals.",
        link: "/digital-banking"
      },
      {
        title: "Loan Origination System",
        description:
          "Streamline end-to-end loan processing from application to disbursement and collection.",
        link: "/loan-origination-system"
      },
      {
        title: "Fraud Detection & Risk Management",
        description:
          "Real-time AI-powered systems to monitor transactions and flag anomalies to prevent fraud.",
        link: "/fraud-risk-management"
      },
      {
        title: "Digital Wallet & UPI Solutions",
        description:
          "Seamless digital payments, transfers, and integrations with modern payment infrastructures.",
        link: "/digital-wallet-upi"
      },
      {
        title: "Customer Relationship Management (CRM)",
        description:
          "Improve customer engagement, track interactions, and personalize services with integrated CRM tools.",
        link: "/banking-crm"
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
{/* === Live Products Showcase: Banking === */}
<section className="py-20 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Live Banking Solutions</h2>
    <p className="text-gray-700 text-lg">
      Discover our advanced digital banking tools designed to enhance security, streamline financial services, and provide seamless user experiences.
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
        title: "Core Banking System",
        description: "Centralized solution to manage accounts, loans, deposits, and transactions across branches.",
        image: "/images/core-banking.jpg",
        link: "/core-banking-system",
      },
      {
        title: "Digital Wallet Integration",
        description: "Offer secure digital payments, P2P transfers, and loyalty programs to customers.",
        image: "/images/digital-wallet.jpg",
        link: "/digital-wallet-integration",
      },
      {
        title: "Loan Management Platform",
        description: "Automate loan origination, approval workflows, and repayment tracking digitally.",
        image: "/images/loan-management.jpg",
        link: "/loan-management",
      },
      {
        title: "Mobile & Internet Banking",
        description: "Custom mobile apps and portals with secure login, account management, and bill pay features.",
        image: "/images/mobile-banking.jpg",
        link: "/mobile-internet-banking",
      },
      {
        title: "Fraud Detection System",
        description: "Real-time transaction monitoring and AI-powered fraud detection alerts.",
        image: "/images/fraud-detection.jpg",
        link: "/fraud-detection-system",
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

{/* Working Flow for Banking */}
<section className="bg-gray-100 py-20 px-6">
  <div className="max-w-3xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Working Flow</h2>
    <p className="text-gray-600 text-lg">
      A step-by-step approach we follow to deliver secure, scalable, and customer-centric banking technology solutions.
    </p>
  </div>

  <div className="relative border-l-4 border-blue-600 max-w-3xl mx-auto">
    {[
      {
        title: "Requirement Gathering & Compliance Analysis",
        desc: "We collaborate with your bank's stakeholders to understand business needs, customer expectations, and regulatory requirements like RBI and PCI-DSS.",
      },
      {
        title: "Solution Architecture & Planning",
        desc: "We design robust architectures for core banking, loan systems, mobile banking, and digital payments with high security and performance.",
      },
      {
        title: "Custom Development & API Integration",
        desc: "From core modules to payment gateways and UPI APIs — our team develops secure and scalable banking applications.",
      },
      {
        title: "Security Testing & Risk Assessment",
        desc: "We perform penetration testing, vulnerability scanning, and risk analysis to ensure full security compliance.",
      },
      {
        title: "Deployment & Onboarding",
        desc: "We roll out banking solutions with detailed documentation, team training, and customer migration support.",
      },
      {
        title: "Ongoing Maintenance & Innovation",
        desc: "We offer regular feature enhancements, security patches, and innovation updates like AI-based fraud detection.",
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

{/* === Why Choose Us - Banking === */}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
    
    {/* Left Text */}
    <div>
      <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose Us?</h2>
      <p className="text-gray-700 mb-6 text-lg">
        We deliver innovative banking software solutions that boost operational security, ensure regulatory compliance, and enhance customer banking experiences through digital excellence.
      </p>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-start gap-2">
          ✅ &nbsp; Expertise in core banking, digital wallets, and loan systems
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Fully secure and compliant with RBI/financial regulations
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Real-time transaction and customer data management
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Dedicated post-deployment support and monitoring
        </li>
      </ul>
    </div>

    {/* Right Image with Hover Effect */}
    <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-500">
      <img
        src="https://img.freepik.com/free-photo/financial-technology-concept-banking-hologram-background_53876-124655.jpg"
        alt="Why Choose Banking IT"
        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
      />
    </div>

  </div>
</section>

{/* === Key Benefits - Banking === */}
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4">Key Benefits of Choosing Us</h2>
    <p className="text-gray-700 text-lg">
      Enabling banks and financial institutions to thrive in the digital era with smart, secure, and scalable solutions.
    </p>
  </div>

  <div className="max-w-4xl mx-auto">
    <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg leading-relaxed">
      <li><span className="font-semibold text-blue-800">Secure Transactions:</span> End-to-end encryption and fraud detection mechanisms.</li>
      <li><span className="font-semibold text-blue-800">Digital Banking Services:</span> Seamless mobile banking, internet banking, and digital wallets.</li>
      <li><span className="font-semibold text-blue-800">Regulatory Compliance:</span> Systems built to meet RBI and global financial standards.</li>
      <li><span className="font-semibold text-blue-800">Customer-Centric Platforms:</span> Personalized dashboards, chatbots, and CRM integration.</li>
      <li><span className="font-semibold text-blue-800">Operational Efficiency:</span> Automation of core banking, loan processing, and reporting tasks.</li>
    </ul>
  </div>
</section>



    
    </>
  )
}

export default Banking