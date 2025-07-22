import React, { useState } from "react";
import { Link } from "react-router-dom";

import image1 from "../assets/homepageimages/Solutionimages/university_image[1].png";
import image2 from "../assets/homepageimages/Solutionimages/medical collage.png";
import image3 from "../assets/homepageimages/Solutionimages/DigitalEducation.png";
import image4 from "../assets/homepageimages/Solutionimages/Library.png";
import image5 from "../assets/homepageimages/Solutionimages/Digitalmarketing.png";
import image6 from "../assets/homepageimages/Solutionimages/SmartLearning.png";
import image7 from "../assets/homepageimages/Solutionimages/ConferenceRoom.png";
import image8 from "../assets/homepageimages/Solutionimages/AuditoriumSolutions.png";
import image9 from "../assets/homepageimages/Solutionimages/SecuritySurveillance.png";
import image10 from "../assets/homepageimages/Solutionimages/MultimediaAnimation.png";
import image11 from "../assets/homepageimages/Solutionimages/PoliceAutomation.png";
import image12 from "../assets/homepageimages/Solutionimages/AudioVideoBroadcasting.png";
const services = [
  {
    title: "University Digitalization",
    image: image1,
    path: "/solutions/university-digitalization",
  },
  {
    title: "Medical College Digitalization",
    image: image2,
    path: "/solutions/medical-college-digitalization",
  },
  {
    title: "MRTiON Digital Educations",
    image: image3,
    path: "/solutions/mrtion-digital-education",
  },
  {
    title: "Library Digitalization",
    image: image4,
    path: "/solutions/library-digitalization",
  },
  {
    title: "Digital Marketing Solutions",
    image: image5,
    path: "/solutions/digital-marketing",
  },
  {
    title: "Smart Learning",
    image: image6,
    path: "/solutions/smart-learning",
  },
  {
    title: "Conference Room Solutions",
    image: image7,
    path: "/solutions/conference-room",
  },
  {
    title: "Auditorium Solutions",
    image: image8,
    path: "/solutions/auditorium",
  },
  {
    title: "Security & Surveillance",
    image: image9,
    path: "/solutions/security-surveillance",
  },
  {
    title: "Multimedia & Animation",
    image: image10,
    path: "/solutions/multimedia-animation",
  },
  {
    title: "Police Automation",
    image: image11,
    path: "/solutions/police-automation",
  },
  {
    title: "Audio Video Broadcasting",
    image: image12,
    path: "/solutions/audio-video-broadcasting",
  },
];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="bg-blue-100 text-white py-12 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-houschka font-bold text-blue-800 drop-shadow">
          Cutting edge solutions with digital technologies
        </h2>
        
      </div>

        <section className="w-full px-6 py-12 ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
              {/* Left Side Image */}
              <div className="w-full md:w-1/2">
                <img
                  src=""
                  alt="our products"
                  className="rounded-2xl  w-full object-cover"
                />
              </div>
      
              {/* Right Side Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold text-red-600 mb-4 font-houschka ">
                  OUR DEDICATED SOLUTIONS
                </h2>
               <p className="text-gray-700 mb-4">
  We offer an extensive range of automation software solutions tailored to the diverse needs of the Education, Medical, Corporate, and Government sectors. Our product line includes University and Engineering College Management Systems, School ERP, Online and Entrance Exam Management Systems, Smart Learning Platforms, and Library Management Systems. In the healthcare domain, we provide advanced solutions like Hospital Information Systems, E-Hospital and E-Clinic Management, and Bioinformatics Systems. For corporate and enterprise needs, we deliver powerful tools such as CRM Software, E-Business Management, Trulymax Accounting Systems (S, M, L variants), HR Management, Inventory and Purchase Management, and Finance Solutions. Additionally, our offerings extend to E-Governance tools like Police Management Systems, E-Govt. Office Management, and Credit Cooperative Society MIS, all built to ensure efficiency, transparency, and seamless digital operations.
</p>

                {/* <ul className="list-disc pl-5 space-y-2 text-gray-800">
                  <li>Expert team with deep domain knowledge</li>
                  <li>Custom-built software solutions</li>
                  <li>24x7 technical support and maintenance</li>
                  <li>Transparent process & timely delivery</li>
                  <li>Scalable and secure architecture</li>
                </ul> */}
              </div>
            </div>
          </section>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleServices.map(({ title, image, path }, idx) => (
          <Link
            key={idx}
            to={path}
            className="rounded-xl overflow-hidden relative h-96 group shadow-lg cursor-pointer"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="absolute top-6 left-6 right-6 text-xl font-semibold font-basis">
              {title}
            </h3>
          </Link>
        ))}
      </div>

      {/* Show More / Show Less */}
      <div className="mt-10 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 bg-blue-900 text-black font-medium rounded-full hover:bg-[#ff4d4f] transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
