import React, { useState } from "react";
import image1 from "../assets/homepageimages/Solutionimages/university_image[1].png";
import image2 from "../assets/homepageimages/Solutionimages/medical collage.png"


const services = [
  {
    title: "University Digitalization",
    image: image1
      
  },
  {
    title: "Medical College Digitalization",
    image:image2,
  },
  {
    title: "MRTiON Digital Educations",
    image: "",
  },
  {
    title: "Library Digitalization",
    image:
      "https://img.freepik.com/free-photo/team-meeting-brainstorming-working-office_1303-21043.jpg",
  },
  {
    title: "Digital Marketing Solutions",
    image:
      "https://img.freepik.com/free-photo/business-analytics-technology_53876-120667.jpg",
  },
  {
    title: "Smart Learning",
    image:
      "https://img.freepik.com/free-photo/lock-icon-security-data-privacy-digital-concept_53876-124998.jpg",
  },
  {
    title: "Conference Room Solutions",
    image:
      "https://img.freepik.com/free-photo/business-people-working-together-project_23-2149153795.jpg",
  },
  {
    title: "Auditorium Solutions",
    image:
      "https://img.freepik.com/free-photo/social-media-marketing-concept_53876-121044.jpg",
  },
  {
    title: "Security & Surveillance",
    image:
      "https://img.freepik.com/free-photo/social-media-marketing-concept_53876-121044.jpg",
  },
  {    title: "Multimedia & Animation",
    image:    

      "https://img.freepik.com/free-photo/business-people-working-together-project_23-2149153795.jpg",
  },
  {
    title: "Police Automation",
    image:
      "https://img.freepik.com/free-photo/business-people-working-together-project_23-2149153795.jpg",
  },
  {
    title: "Audio Video Broadcasting",
    image:
      "https://img.freepik.com/free-photo/business-people-working-together-project_23-2149153795.jpg",
  },  

];

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="bg-blue-100 text-white py-12 px-6 md:px-20">
      <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-houschka font-bold text-blue-800 drop-shadow">
            Cutting edge solutions with digital technologies
          </h2>
          <p className="text-[#ff4d4f] font-semibold mt-3 tracking-wide uppercase text-2xl">
            OUR DEDICATED SOLUTIONS
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden relative h-96 group shadow-lg cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="absolute top-6 left-6 right-6 text-xl font-semibold font-basis">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
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
