import React, { useState } from "react";
import bgImage from "../../assets/backimage.png";
import Image from "../../assets/digitalmarketingimg.png";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import {
  FaFileAlt,
  FaSearch,
  FaKeyboard,
  FaImage,
  FaFolderOpen,
  FaArchive,
   FaCheckCircle,
  FaArrowRight,
   FaClipboardList,
  FaProjectDiagram,
  FaCloudUploadAlt,
  FaHeadset,
  FaDatabase,
  FaExchangeAlt,
  
  
  
} from "react-icons/fa";


const DataDigitization = () => {
  const [openIndex, setOpenIndex] = useState(null);
        
          const toggleFAQ = (index) => {
            setOpenIndex(openIndex === index ? null : index);
          };
  return (
    <>
    
    {/* First div */}
<div className="relative w-full h-screen overflow-hidden">
  {/* Background Image */}
  <img
    src={bgImage} // <-- Make sure to import bgImage at the top
    alt="Data Digitization"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Hero Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h3 className="text-white text-xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
      Empower Your Business with Efficient <br className="hidden md:block" /> Data Digitization Solutions
    </h3>

    <p className="text-white max-w-2xl text-base md:text-lg mb-6">
      Transform physical records into digital assets for faster access, secure storage, and streamlined operations.
    </p>

    <div className="flex flex-wrap gap-4 justify-center">
      <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-2">
        GET IN TOUCH
      </button>
      <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-2">
        VIEW PORTFOLIO
      </button>
    </div>
  </div>
</div>

{/* Second div */}
<div className="bg-white py-16 px-4 lg:px-24 text-center">
  {/* Top Text */}
  <h1 className="text-blue-500 text-4xl font-bold">Overview</h1>
  <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed font-basis text-justify mt-4">
    MOHITRAJ RESEARCH AND TECHNOLOGY PRIVATE LIMITED offers advanced <strong>Data Digitization solutions</strong> to help businesses transition from paper-based workflows to efficient digital systems. Our services include document scanning, OCR-based data extraction, secure archiving, and customized digital conversion tailored to your organization’s needs.
    <br />
    <br />
    With a focus on accuracy, security, and scalability, we enable organizations to preserve legacy documents, improve information access, and streamline operations. Whether you’re digitizing government records, medical files, educational archives, or enterprise data, our expert team ensures seamless and secure digital transformation that aligns with global data management standards.
  </p>

  {/* Stats Section */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
    {/* Stat 1 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">25M+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Documents <br /> Digitized
      </p>
    </div>

    {/* Stat 2 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">22+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Years of <br /> Industry Expertise
      </p>
    </div>

    {/* Stat 3 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">1000+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Clients Across <br /> Sectors
      </p>
    </div>

    {/* Stat 4 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">40+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Team of <br /> Digitization Experts
      </p>
    </div>
  </div>

  {/* Divider Line */}
  <hr className="border-gray-300 max-w-5xl mx-auto" />
</div>

{/* Third div - Data Digitization Services */}
<div className="bg-gradient-to-b from-gray-50 to-blue-50 py-16 px-4 lg:px-24 text-center">
  <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-houschka animate-fade-in-down">
    Our Data Digitization Services
  </h2>
  <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed font-basis animate-fade-in">
    Digitize your documents and physical records with high precision, accuracy, and efficiency using our intelligent data capture and conversion solutions powered by OCR/ICR technologies.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {[
      {
        title: "Document Scanning",
        description:
          "Convert paper documents into high-resolution digital formats for easy storage and retrieval.",
        icon: <FaFileAlt className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["Bulk scanning", "Searchable PDFs", "Secure storage"],
      },
      {
        title: "OCR & ICR Processing",
        description:
          "Extract text from printed and handwritten forms using advanced recognition technology.",
        icon: <FaSearch className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["Accurate text recognition", "Multi-language support", "Handwriting conversion"],
      },
      {
        title: "Data Entry Services",
        description:
          "Manual and automated data entry with quality checks and structured output.",
        icon: <FaKeyboard className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["High accuracy", "Validated outputs", "Multiple formats"],
      },
      {
        title: "Image Processing",
        description:
          "Enhance and organize image-based documents with clarity and proper indexing.",
        icon: <FaImage className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["Auto-cropping", "Brightness correction", "Multi-page handling"],
      },
      {
        title: "Document Management",
        description:
          "Tag, classify, and manage your digital documents with our smart filing system.",
        icon: <FaFolderOpen className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["Indexed search", "Role-based access", "Audit trails"],
      },
      {
        title: "Archiving & Retrieval",
        description:
          "Store your digitized data securely and retrieve it quickly when needed.",
        icon: <FaArchive className="text-3xl text-blue-700 mx-auto mb-3" />,
        points: ["Cloud/On-premise", "Encrypted backup", "Fast searchability"],
      },
    ].map((card, index) => (
      <div
        key={card.title}
        className="relative group bg-red-100 rounded-xl shadow-xl p-6 text-left transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-200"
      >
        {/* Icon */}
        {card.icon}

        {/* Title */}
        <h3 className="text-xl font-semibold text-blue-900 mb-3">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 leading-relaxed">
          {card.description}
        </p>

        {/* Points */}
        <ul className="space-y-2">
          {card.points.map((point, idx) => (
            <li
              key={idx}
              className="flex items-center text-blue-800 text-sm"
            >
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

{/* Fourth Section: Contact Us - Data Digitization */}
<div className="relative z-10 -mt-30 mb-5 px-6">
  <div className="w-full bg-blue-300 py-10 px-6 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-blue-200">
    
    {/* Left Side */}
    <div className="flex items-center gap-4">
      <div className="w-1 h-16 bg-blue-600"></div>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 leading-snug">
        Looking to Digitize Documents, Forms, <br /> or Physical Records Efficiently?
      </h2>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3 group cursor-pointer">
      <span className="text-blue-700 font-medium text-lg group-hover:underline">
        Contact Us
      </span>
      <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-800 transition">
        <FaArrowRight className="text-white text-base" />
      </div>
    </div>

  </div>
</div>

{/* Data Digitization Industry Expertise */}
<div className="w-full bg-red-100 py-16 px-4">
  <div className="text-center text-blue-900 mb-8">
    <h2 className="text-4xl font-bold mb-4 font-houschka">
      Data Digitization Expertise
    </h2>
    <p className="max-w-2xl mx-auto text-lg font-basis text-gray-700">
      MOHITRAJ Research & Technology has transformed millions of paper documents into digital assets 
      across various industries using smart scanning, OCR, and ICR technologies.
    </p>
  </div>

  <div className="max-w-5xl mx-auto bg-white rounded shadow-lg overflow-hidden">
    <div className="bg-blue-700 text-white py-3 text-center text-xl font-semibold">
      Industries We Digitize For
    </div>
    <div className="p-8 text-gray-800">
      <p className="mb-6">
        We deliver customized digitization workflows to the following sectors:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
        {[
          "Government Departments",
          "Healthcare & Hospitals",
          "Educational Institutions",
          "Banks & Insurance Companies",
          "Law Firms & Courts",
          "Real Estate & Construction",
          "HR & Payroll Departments",
          "Libraries & Archives"
        ].map((industry, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <FaCheckCircle className="text-blue-600" />
            <span>{industry}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* === Tech Stack Section: Data Digitization === */}
<div className="relative w-full bg-blue-100 bg-gradient-to-br from-purple-50 via-white to-blue-100 py-20 px-4 overflow-hidden mt-16">
  {/* Background Blobs */}
  <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-purple-300 rounded-full opacity-20 blur-3xl mix-blend-multiply animate-spin-slow z-0"></div>
  <div className="absolute bottom-[-100px] right-[-60px] w-[260px] h-[260px] bg-pink-200 rounded-full opacity-20 blur-3xl mix-blend-multiply animate-pulse z-0"></div>
  <div className="absolute top-[40%] left-[40%] w-[200px] h-[200px] bg-blue-300 rounded-full opacity-20 blur-2xl mix-blend-multiply z-0"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto z-10  bg-red-500">
    <div className="bg-blue-100 backdrop-blur-lg border border-purple-200 shadow-2xl rounded-3xl p-10">
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-purple-800 mb-12 font-houschka tracking-tight hover:text-red-600 hover:drop-shadow-md cursor-pointer transition duration-300">
        Data Digitization Technology Stack
      </h2>

      <div className="space-y-12">
        {[
          {
            label: "Document Scanning & Imaging",
            icon: <FaFileAlt />,
            items: ["Flatbed Scanners", "ADF Scanners", "Book Scanners", "High-Speed Imaging"]
          },
          {
            label: "OCR / ICR Engines",
            icon: <FaSearch />,
            items: ["Tesseract", "ABBYY FineReader", "Google Vision API", "Azure OCR", "Form Recognizer"]
          },
          {
            label: "Data Entry & Validation",
            icon: <FaKeyboard />,
            items: ["Manual Data Entry", "Double Keying", "AI-assisted Input", "Auto-validation Scripts"]
          },
          {
            label: "Image Processing Tools",
            icon: <FaImage />,
            items: ["OpenCV", "Python PIL", "Noise Removal", "Deskew & Crop"]
          },
          {
            label: "Document Management Systems",
            icon: <FaFolderOpen />,
            items: ["SharePoint", "DocuWare", "M-Files", "Laserfiche", "Alfresco"]
          },
          {
            label: "Archiving & Storage",
            icon: <FaArchive />,
            items: ["PDF/A Format", "Cloud Backup", "On-Prem Servers", "Secure Vaults"]
          }
        ].map((section, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Left Label */}
            <div className="flex items-center gap-3 bg-purple-100 px-5 py-3 rounded-xl shadow-inner border border-purple-300 min-w-[240px]">
              <div className="text-purple-700 text-2xl">{section.icon}</div>
              <span className="text-lg sm:text-xl font-semibold text-purple-900">
                {section.label}
              </span>
            </div>

            {/* Right Items */}
            <div className="flex flex-wrap gap-3">
              {section.items.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-50 text-purple-800 rounded-full border border-purple-200 text-sm font-medium shadow-sm hover:bg-purple-600 hover:text-white hover:scale-105 transition duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* === Custom Data Digitization Services Section === */}
<div className="max-w-7xl mx-auto px-4 py-16 text-center">
  <h2 className="text-4xl font-bold text-blue-900 hover:text-red-900 mb-4 font-houschka">
    Custom Data Digitization Services
  </h2>
  <p className="text-gray-600 max-w-4xl mx-auto mb-12">
    We provide customized digitization solutions for businesses and institutions to securely convert, manage, and retrieve critical data from physical to digital formats.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
    {[
      {
        title: "Document Scanning",
        description:
          "High-speed scanning of paper documents, files, registers, and books using industry-grade scanners.",
        icon: <FaFileAlt className="text-3xl text-blue-600" />,
      },
      {
        title: "OCR & ICR Processing",
        description:
          "Extract text from printed or handwritten documents using OCR/ICR for searchable content.",
        icon: <FaSearch className="text-3xl text-blue-600" />,
      },
      {
        title: "Data Entry & Validation",
        description:
          "Accurate manual and automated data entry with double-key verification and quality checks.",
        icon: <FaKeyboard className="text-3xl text-blue-600" />,
      },
      {
        title: "Image Enhancement",
        description:
          "Enhance scanned images using de-skewing, cropping, contrast adjustment, and noise removal.",
        icon: <FaImage className="text-3xl text-blue-600" />,
      },
      {
        title: "Document Management Systems",
        description:
          "Digitally organize, manage, and retrieve documents using advanced DMS platforms.",
        icon: <FaFolderOpen className="text-3xl text-blue-600" />,
      },
      {
        title: "Archiving & Cloud Backup",
        description:
          "Secure storage of digital files with cloud integration and long-term archival standards.",
        icon: <FaArchive className="text-3xl text-blue-600" />,
      },
    ].map((service, index) => (
      <div
        key={index}
        className="bg-white hover:bg-blue-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-red-500"
      >
        <div className="mb-3 text-blue-600 transition-colors duration-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold text-blue-900 mb-2 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed transition-colors duration-300">
          {service.description}
        </p>
      </div>
    ))}
  </div>
</div>

<div className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-houschka bg-gradient-to-r from-purple-600 via-blue-800 to-pink-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
    How to Start Your Data Digitization Project With MRT?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
    {/* === Image Side === */}
    <div className="h-full">
      <img
        src={Image} // 👈 Replace with relevant image
        alt="Data Digitization Process"
        className="rounded-xl shadow-lg w-full h-full object-cover min-h-[500px]"
      />
    </div>

    {/* === Content Side === */}
    <div className="flex flex-col justify-between h-full space-y-6">
      {[
        {
          title: "Requirement Analysis",
          description:
            "We assess your document types, volumes, quality, and final usage requirements to define the best approach.",
          icon: <FaClipboardList className="text-purple-600 text-2xl" />,
        },
        {
          title: "Scanning & OCR Processing",
          description:
            "Documents are scanned using high-speed machines and processed with OCR/ICR to extract editable/searchable text.",
          icon: <FaFileAlt className="text-purple-600 text-2xl" />,
        },
        {
          title: "Data Structuring & Validation",
          description:
            "Extracted data is entered, formatted, and verified using strict quality checks and validation protocols.",
          icon: <FaKeyboard className="text-purple-600 text-2xl" />,
        },
        {
          title: "Delivery & Cloud Integration",
          description:
            "Final digital files are delivered in preferred formats and optionally integrated with cloud or DMS systems.",
          icon: <FaCloudUploadAlt className="text-purple-600 text-2xl" />,
        },
      ].map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-white shadow-md rounded-lg p-5 border-l-4 border-purple-500 hover:border-pink-500 transition hover:-translate-y-1 hover:shadow-xl group"
        >
          <div className="mt-1">{step.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 group-hover:text-pink-600 transition">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-800 transition">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Why Choose Us - Data Digitization Version */}

<div className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-blue-900 text-center mb-4 font-houschka">
    Why Choose Us for Data Digitization?
  </h2>
  <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
    We provide reliable, accurate, and scalable digitization solutions tailored to streamline data processing, boost accessibility, and ensure long-term preservation.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        icon: <FaDatabase className="text-3xl" />,
        title: "Accurate Data Capture",
        description:
          "High-precision document scanning and OCR to ensure accurate digitization of physical records.",
      },
      {
        icon: <FaFileAlt className="text-3xl" />,
        title: "Secure Storage",
        description:
          "Encrypted digital storage and role-based access ensure data safety and privacy.",
      },
      {
        icon: <FaExchangeAlt className="text-3xl" />,
        title: "Fast Conversion",
        description:
          "Efficient tools to convert paper-based formats into searchable, editable digital files.",
      },
      {
        icon: <FaCloudUploadAlt className="text-3xl" />,
        title: "Cloud Integration",
        description:
          "Easily sync and retrieve digitized data from any location via secure cloud services.",
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="border border-gray-300 p-6 rounded-md text-center transition-all duration-300 hover:bg-blue-900 hover:text-white group"
      >
        <div className="flex justify-center mb-4">
          <div className="text-blue-700 group-hover:text-white transition duration-300">
            {feature.icon}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-blue-900 group-hover:text-white mb-2 transition duration-300">
          {feature.title}
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-white transition duration-300">
          {feature.description}
        </p>
      </div>
    ))}
  </div>
</div>

{/* === Benefits Section: Data Digitization === */}
<div>
  <section className="bg-blue-100 py-16 px-4 md:px-16 lg:px-24">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
      {/* Left Side */}
      <div className="flex-1">
        <p className="text-2xl uppercase tracking-widest text-blue-600 mb-2 font-houschka font-bold">
          Benefits
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-900 leading-snug font-houschka">
          Transform Your Records into Digital Intelligence
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex-1 border-l-4 border-blue-600 pl-6">
        <ul className="space-y-4 text-gray-700 text-base md:text-lg list-disc">
          <li>Faster access to critical data with searchable digital archives.</li>
          <li>Improved data accuracy and reduced manual entry errors.</li>
          <li>Secure storage and easier backup of important records.</li>
          <li>Space-saving by eliminating physical storage requirements.</li>
          <li>Better compliance with industry regulations and audits.</li>
        </ul>
      </div>
    </div>
  </section>
</div>

{/* FAQs Section - Data Digitization */}
<div className="max-w-3xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-center mb-10 font-houschka text-blue-600 drop-shadow">
    Data Digitization FAQs
  </h2>

  <div className="space-y-4">
    {[
      {
        question: "What is data digitization?",
        answer:
          "Data digitization is the process of converting physical documents, records, or images into digital formats for easier storage, access, and processing.",
      },
      {
        question: "What types of documents can be digitized?",
        answer:
          "We digitize paper documents, forms, books, microfilms, photos, engineering drawings, ID proofs, invoices, and more.",
      },
      {
        question: "Is my data secure after digitization?",
        answer:
          "Yes. We follow strict data privacy protocols with encryption, controlled access, and secure backups to keep your data protected.",
      },
      {
        question: "Can you integrate the digitized data into my existing system?",
        answer:
          "Absolutely. We ensure seamless integration with your document management systems, ERPs, CRMs, or any custom platform.",
      },
      {
        question: "Do you offer OCR & ICR services?",
        answer:
          "Yes. We offer Optical Character Recognition (OCR) and Intelligent Character Recognition (ICR) to extract editable text from scanned files.",
      },
    ].map((faq, index) => (
      <div
        key={index}
        className={`bg-red-100 border rounded-xl p-4 transition duration-300 ${
          openIndex === index ? "border-blue-500 shadow-md" : "border-blue-200"
        }`}
      >
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full flex justify-between items-center focus:outline-none"
        >
          <span className="text-lg font-medium text-gray-800 hover:text-blue-700 transition duration-300">
            {faq.question}
          </span>
          <span className="text-blue-700 text-xl">
            {openIndex === index ? (
              <FiChevronUp className="transition-transform rotate-180 duration-300" />
            ) : (
              <FiChevronDown className="transition-transform duration-300" />
            )}
          </span>
        </button>
        {openIndex === index && (
          <p className="mt-3 text-gray-700 leading-relaxed transition duration-300">
            {faq.answer}
          </p>
        )}
      </div>
    ))}
  </div>
</div>

{/* Fourth Section: Contact Us - Security & Surveillance Related */}
<div className="relative z-10 -mt-30 mb-5 px-6 ">
  <div className="w-full bg-red-300 py-10 px-6 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-blue-200">
    
    {/* Left Side */}
    <div className="flex items-center gap-4">
      <div className="w-1 h-16 bg-blue-600"></div>
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 leading-snug">
        Looking for Smart Security & Surveillance <br /> Solutions for Your Premises?
      </h2>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-3 group cursor-pointer">
      <span className="text-blue-700 font-medium text-lg group-hover:underline">
        Contact Us
      </span>
      <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-800 transition">
        <FaArrowRight className="text-white text-base" />
      </div>
    </div>

  </div>
</div>





    
    </>
      
    
  )
}

export default DataDigitization;
