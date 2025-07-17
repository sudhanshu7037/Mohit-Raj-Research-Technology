import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ----- icons -----
import icon1  from "../assets/homepageicons/servicesicons/Software_Development[1].png";
import icon2  from "../assets/homepageicons/servicesicons/Development,_Hosting_&_Promotion_of_Websites[1].png";
import icon3  from "../assets/homepageicons/servicesicons/Hardware_&_Networking_Management_Solutions[1].png";
import icon4  from "../assets/homepageicons/servicesicons/Multimedia_&_Animation_Solutions[1].png";
import icon5  from "../assets/homepageicons/servicesicons/Digital_Marketing_Solutions[1].png";
import icon6  from "../assets/homepageicons/servicesicons/Mobile_Application_Development[1].png";
import icon7  from "../assets/homepageicons/servicesicons/IT_Consultancy_Services[1].png";
import icon8  from "../assets/homepageicons/servicesicons/E-Commerce_Solutions[1].png";
import icon9  from "../assets/homepageicons/servicesicons/Cloud_Computing_Solutions[1].png";
import icon10 from "../assets/homepageicons/servicesicons/Cybersecurity_Solutions[1].png";
import icon11 from "../assets/homepageicons/servicesicons/Data_Analytics_and_Business_Intelligence[1].png";
import icon12 from "../assets/homepageicons/servicesicons/Artificial_Intelligence_and_Machine_Learning[1].png";
import icon13 from "../assets/homepageicons/servicesicons/Robotic_Process_Automation[1].png";
import icon14 from "../assets/homepageicons/servicesicons/CCTV_Security_and_Surveillance_Solutions[1].png";
import icon15 from "../assets/homepageicons/servicesicons/Data_Center_Development_and_Management[1].png";
import icon16 from "../assets/homepageicons/servicesicons/Create_immersive_experiences_with_VR_and_AR_technologies[1].png";

// ----- component -----
const MainBanner = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();    // 👈 navigation hook

  const servicesData = [
    {
      id: 1,
      title: "Software Development Services",
      description:
        "Crafting bespoke software solutions tailored to amplify your digital presence and elevate your business.",
      icon: icon1,
      link: "/SoftwareDevelopment",             // 👈 route for this card
    },
    {
      id: 2,
      title: "Development, Hosting & Promotion of Websites",
      description:
        "Empowering your online business with custom web development and dependable hosting services that are as impressive as they are reliable.",
      icon: icon2,
      link: "/DevelopmentHosting",
    },
    {
      id: 3,
      title: "Hardware & Networking Management Solutions",
      description:
        "Creating a seamless ecosystem of hardware and networking solutions to optimize your digital infrastructure and propel your business forward.",
      icon: icon3,
      link: "/HardwareNetworking",
    },
    {
      id: 4,
      title: "Multimedia & Animation Solutions",
      description:
        "Crafting captivating multimedia and animation solutions that breathe life into your vision and captivate your audience with creativity.",
      icon: icon4,
      link: "/MultimediaAnimation",
    },
    {
      id: 5,
      title: "Digital Marketing Solutions",
      description:
        "Elevating your brand's digital presence with innovative marketing strategies that resonate and inspire meaningful connections.",
      icon: icon5,
      link: "/DigitalMarketing",
    },
    {
      id: 6,
      title: "Mobile Application Development",
      description:
        "Transforming your ideas into stunning, intuitive mobile applications that set new standards for innovation and user experience.",
      icon: icon6,
      link: "/services/mobile-apps",
    },
    {
      id: 7,
      title: "IT Consultancy Services",
      description:
        "Navigating the digital landscape with expertise and precision, our IT consultancy service transforms challenges into opportunities for sustainable growth and success.",
      icon: icon7,
      link: "/services/it-consultancy",
    },
    {
      id: 8,
      title: "E‑Commerce Solutions",
      description:
        "Elevating your online business with our cutting‑edge e‑commerce solutions that seamlessly blend innovation and functionality.",
      icon: icon8,
      link: "/services/e-commerce",
    },
    {
      id: 9,
      title: "Cloud Computing Solutions",
      description:
        "Empowering businesses with scalable cloud computing solutions that unlock limitless possibilities for growth and efficiency.",
      icon: icon9,
      link: "/services/cloud-computing",
    },
    {
      id: 10,
      title: "Cybersecurity Solutions",
      description:
        "Safeguarding your digital assets with robust cyber‑security solutions, providing peace of mind in an ever‑evolving threat landscape.",
      icon: icon10,
      link: "/services/cybersecurity",
    },
    {
      id: 11,
      title: "Data Analytics & Business Intelligence",
      description:
        "Unleashing the power of data through innovative analytics, driving strategic decisions for sustainable business growth.",
      icon: icon11,
      link: "/services/data-analytics",
    },
    {
      id: 12,
      title: "AI & Machine Learning",
      description:
        "Harnessing the transformative potential of AI and ML to redefine industries and elevate human experiences.",
      icon: icon12,
      link: "/services/ai-ml",
    },
    {
      id: 13,
      title: "Robotic Process Automation",
      description:
        "Streamlining operations and enhancing efficiency through intelligent RPA solutions for a smarter future.",
      icon: icon13,
      link: "/services/rpa",
    },
    {
      id: 14,
      title: "CCTV Security & Surveillance",
      description:
        "Empowering safety through advanced CCTV surveillance solutions, ensuring peace of mind and protection.",
      icon: icon14,
      link: "/SecuritySurvillance",
    },
    {
      id: 15,
      title: "Data Center Development & Management",
      description:
        "Building reliable data‑center solutions where precision meets performance for seamless operations.",
      icon: icon15,
      link: "/DataCentersDevelopment",
    },
    {
      id: 16,
      title: "AR and VR Solutions",
      description:
        "Transforming reality with immersive AR/VR that turns imagination into new‑age digital experiences.",
      icon: icon16,
      link: "/services/ar-vr",
    },
  ];

  return (
    <section className="py-16 px-4 w-full flex flex-col items-center gap-4 rounded-none shadow-inner bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 animate-gradient-x">
      {/* heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#2b2a7f] font-houschka drop-shadow-md">
          Excellent Services For Your Business
        </h1>
        <h2 className="text-[#ff4d4f] font-semibold mb-1 mt-3 tracking-wide uppercase text-2xl">
          Our Dedicated Services
        </h2>
      </div>

      {/* service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {(showAll ? servicesData : servicesData.slice(0, 4)).map((service) => (
          <div
            key={service.id}
            className="bg-white border border-gray-200 rounded-3xl text-center shadow-xl hover:shadow-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:border-[#2b2a7f] hover:bg-[#f1f5ff] group"
          >
            <div className="w-full flex justify-center items-center mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-24 h-20 rounded-xl object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-[#2b2a7f] mb-2 group-hover:text-[#ff4d4f]">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6 group-hover:text-gray-700">
              {service.description}
            </p>

            {/* READ MORE button with navigation */}
            <button
              onClick={() => navigate(service.link)}   // 👈 move to detail page
              className="relative group overflow-hidden w-full border-2 px-5 py-2 text-sm font-semibold text-[#2b2a7f] transition-all duration-500 ease-in-out hover:text-white border-[#2b2a7f] rounded-md"
            >
              <span className="absolute inset-0 bg-[#2b2a7f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                READ MORE
                <span className="hidden group-hover:inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>
          </div>
        ))}
      </div>

      {/* Show‑More / Show‑Less toggle */}
      <div className="mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#2b2a7f] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#ff4d4f] transition-colors duration-300"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default MainBanner;
