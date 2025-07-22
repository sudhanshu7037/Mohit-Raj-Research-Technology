import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const modules = [
  "Genomic Data Management",
  "Sequence Analysis",
  "Gene Expression Tracking",
  "Clinical Genomics Integration",
  "Bioinformatics Reporting",
  "Sample Registration",
  "Patient Genomic History",
  "Research Collaboration",
  "Biomarker Discovery",
  "Genetic Counseling Workflow",
  "Database Interoperability",
  "Secure Data Archiving"
];

const departments = [
  "Genomics",
  "Proteomics",
  "Transcriptomics",
  "Metabolomics",
  "Clinical Research",
  "Patient Genetic Profiling",
  "Biostatistics",
  "Health Informatics",
  "Lab Information Systems",
  "Data Science",
  "Ethics & Compliance",
  "Bioinformatics Admin"
];

const lifecycle = [
  "Sample Collection",
  "Genomic Sequencing",
  "Data Processing",
  "Annotation & Mapping",
  "Result Interpretation",
  "Clinical Reporting",
  "Research Utilization",
  "Follow-up & Genetic Counseling"
];

const whyChooseUs = [
  { title: 'Precision Workflow', desc: 'Automated modules for genomic research and clinical use' },
  { title: 'Data Security', desc: 'HIPAA & GDPR compliant genomic data handling' },
  { title: 'Lab Integration', desc: 'Smooth integration with genomic labs and sequencing machines' },
  { title: 'Customizable Pipelines', desc: 'Adaptable for diverse bioinformatics research needs' },
  { title: 'Collaboration Ready', desc: 'Facilitates cross-departmental data sharing' },
  { title: 'Real-Time Access', desc: 'Live insights into genomic profiles and sample status' }
];

const analyticsImages = [
  {
    url: "https://www.encstore.com/assets/blogs/bcat1/1719855955-rfid-labels-and-blood-sample-tube-tracking-for-accuracy.webp",
    title: "Sample Tracking Overview",
    desc: "Real-time tracking of sequencing samples, metadata, and pipeline stage."
  },
  {
    url: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1186%2Fs13059-019-1724-1/MediaObjects/13059_2019_1724_Fig2_HTML.png",
    title: "Genomic Data Analytics",
    desc: "Detailed visualization of genomic variations and gene expression maps."
  },
  {
    url: "https://www.ebmconsult.com/app/article/images/100205",
    title: "Cross-Study Integration",
    desc: "Aggregate genomic data from multiple studies and trials for meta-analysis."
  }
];

const benefits = [
  "Enhances bioinformatics workflow efficiency and traceability.",
  "Supports multi-omics data integration and analysis.",
  "Improves clinical interpretation through structured genomic data.",
  "Centralized database with easy access to research outcomes.",
  "Speeds up research timelines with automation & AI tools.",
  "Cost-effective and scalable for labs and research centers."
];

const BioinformaticsManagementandInformationSystem = () => {
  
    
    
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="https://media.istockphoto.com/id/1221783874/photo/holographic-display-of-advance-dna-sequence-analysis.jpg?s=612x612&w=0&k=20&c=gMXUnHhW-lM5cuua9qUVwirihUVuArGmxj8VwFl-uD4="
          alt="Genomic Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="text-white max-w-2xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white font-houschka">
              Bioinformatic Management & Information System
            </h1>
            <p className="text-lg md:text-xl text-green-400 font-basis mt-4">
              Integrated Platform for Genomic Research & Clinical Data
            </p>
            <p className="text-gray-200 mt-3 font-basis">
              Empowering labs and researchers with real-time genomics data, analytics, and structured patient records.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
              REQUEST A QUICK DEMO TODAY!
            </button>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <section className="relative w-full py-24 bg-gradient-to-br from-blue-100 via-red-100 to-green-100 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 font-houschka">
            Bioinformatics Features & Functionality
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-basis">
            Explore structured genomic processes seamlessly integrated into a single research ecosystem.
          </p>
        </div>
        <div className="relative h-[600px] w-[600px] mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white font-bold flex items-center justify-center h-40 w-40 rounded-full shadow-lg">
            BMIS
          </div>
          {modules.map((title, index) => {
            const angle = (index / modules.length) * 2 * Math.PI;
            const radius = 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={index}
                className="absolute flex items-center justify-center h-28 w-28 bg-white hover:bg-red-200 rounded-full shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-110 text-sm font-semibold text-blue-700 text-center px-2"
                style={{
                  top: `calc(50% + ${y}px - 56px)`,
                  left: `calc(50% + ${x}px - 56px)`
                }}
              >
                {title}
              </div>
            );
          })}
        </div>
      </section>

      {/* Department Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 font-houschka">
            Supported Departments & Clinical Integration
          </h2>
          <p className="text-gray-700 mb-6 font-basis">
            BMIS integrates multiple departments including Genomics, Transcriptomics, and Clinical Research to streamline multi-omics workflows.
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

      {/* Lifecycle Section */}
      <section className="w-full py-20 px-4 md:px-16 bg-gradient-to-br from-blue-100 via-red-100 to-green-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-pink-600 to-green-700 text-transparent bg-clip-text mb-12 font-houschka">
            Bioinformatics Research Lifecycle
          </h2>
          <div className="mb-12">
            <img
              src="https://img.freepik.com/free-photo/lab-scientist-research-sequencing-data-genomics_53876-102351.jpg"
              alt="genomic research lifecycle"
              className="w-full h-[450px] md:h-[550px] object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="py-10">
            <h3 className="text-3xl font-bold text-blue-900 mb-10 font-houschka">BMIS Workflow Stages</h3>
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
       {/* Analytics Section */}
      <section className="py-20 px-4 md:px-16 bg-blue-100">
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold text-blue-900 font-houschka">
            Bioinformatics Dashboard & Analytics
          </h2>
          <p className="text-gray-700 mt-2 max-w-3xl mx-auto font-basis">
            Monitor critical genomics and sample data including sequencing pipelines, annotation stages, and research utilization metrics.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="md:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              {analyticsImages[activeIndex].title}
            </h2>
            <p className="text-gray-700">
              {analyticsImages[activeIndex].desc}
            </p>
          </div>
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

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12 font-houschka">
            Why Choose Our Bioinformatic System?
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="relative w-48 h-48 bg-blue-100 transform rotate-45 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute text-center w-full transform -rotate-45">
                  <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 px-2 font-basis">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-20 px-6 md:px-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-600 to-green-700 mb-8 font-houschka">
            Benefits of Bioinformatics Management System
          </h2>
          <p className="text-gray-700 text-lg mb-12 font-basis">
            A robust digital platform to manage multi-omics data, streamline lab workflows, and accelerate clinical genomics research.
          </p>
          <ol className="list-decimal list-inside space-y-6 text-left max-w-3xl mx-auto">
            {benefits.map((benefit, i) => (
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
  )
}

export default BioinformaticsManagementandInformationSystem