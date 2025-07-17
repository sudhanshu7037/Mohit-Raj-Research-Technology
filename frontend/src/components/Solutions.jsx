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
        <p className="text-[#ff4d4f] font-semibold mt-3 tracking-wide uppercase text-2xl">
          OUR DEDICATED SOLUTIONS
        </p>
      </div>

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
