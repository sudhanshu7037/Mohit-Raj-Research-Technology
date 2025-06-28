import React, { useState } from "react";
import icon1 from "../assets/homepageicons/servicesicons/Software_Development1.png";
import icon2 from "../assets/homepageicons/servicesicons/Development_Hosting.png";
import icon3 from "../assets/homepageicons/servicesicons/Hardware_Networking.png";
const MainBanner = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const servicesData = [
    {
      id: 1,
      title: "Software Development Services",
      description:
        "Crafting bespoke software solutions tailored to amplify your digital presence and elevate your business.",
      icon: icon1,
    },
    {
      id: 2,
      title: "Development, Hosting & Promotion of Websites",
      description: "Empowering your online business with custom web development and dependable hosting services that are as impressive as they are reliable.",
      icon: icon2,
    },
    {
      id: 3,
      title: "Hardware & Networking Management Solutions",
      description: "Creating a seamless ecosystem of hardware and networking solutions to optimize your digital infrastructure and propel your business forward.",
      icon: icon3,
    },
    {
      id: 4,
      title: "Multimedia & Animation Solutions ",
      description:
        "Crafting captivating multimedia and animation solutions that breathe life into your vision and captivate your audience with creativity.",
      icon: "💰",
    },
    {
      id: 5,
      title: "Digital Marketing Solutions",
      description:
        "Elevating your brand's digital presence with innovative marketing strategies that resonate and inspire meaningful connections.",
      icon: "🏫",
    },
    {
      id: 6,
      title: "Mobile Application Development",
      description:
        "Transforming your ideas into stunning, intuitive mobile applications that set new standards for innovation and user experience.",
      icon: "📚",
    },
    {
      id: 7,
      title: "IT Consultancy Services",
      description:
        "Navigating the digital landscape with expertise and precision, our IT consultancy service transforms challenges into opportunities for sustainable growth and success.",
      icon: "🏠",
    },
    {
      id: 8,
      title: "E-Commerce Solutions",
      description:
        "Elevating your online business with our cutting-edge e-commerce solutions that seamlessly blend innovation and functionality for unparalleled success in the digital marketplace.",
      icon: "🚌",
    },
    {
      id: 9,
      title: "Cloud Computing Solutions",
      description:
        "Empowering businesses with scalable cloud computing solutions that transcend boundaries and unlock limitless possibilities for growth and efficiency.",
      icon: "☁️",
    },
    {
      id: 10,
      title: "Cybersecurity Solutions",
      description:
        "Safeguarding your digital assets with our robust cyber security solutions, providing peace of mind in an ever-evolving threat landscape.",
      icon: "🔒",
    },
    {
      id: 11,
      title: "Data Analytics and Business Intelligence",
      description:
        "Unleashing the power of data through innovative analytics solutions, driving strategic decisions for sustainable business growth and prosperity.",
      icon: "📊",
    },
    {
      id: 12,
      title: "Artificial Intelligence and Machine Learning",
      description:
        "Harnessing the transformative potential of AI and machine learning to redefine industries and elevate human experiences with cutting-edge innovations.",
      icon: "🤖",
    },
    {
      id: 13,
      title: "Robotic Process Automation",
      description: "Streamlining operations and enhancing efficiency through our intelligent robotics process automation solution, paving the way for a smarter, automated future.",
      icon: "🤖",
    },
    {
      id: 14,
      title: "CCTV Security and Surveillance Solutions",
      description:
        "Empowering safety and security through our advanced CCTV surveillance solutions, ensuring peace of mind and unparalleled protection for your environment.",
      icon: "🔗",
    },
    {
      id: 15,
      title: "Data Center Development and Management",
      description: "Building the foundation of innovation and reliability with our bespoke data center solutions, where precision meets performance for seamless business operations.",
      icon: "🌐",
    },
    {
      id: 16,
      title: "AR and VR Solutions",
      description: "Transforming reality into a realm of endless possibilities through our immersive VR and AR solutions, where innovation meets imagination to shape a new digital frontie.",
      icon: "🕶️",
    },
  ];

  return (
    <>
      <section className="py-16 px-4 w-full flex flex-col items-center gap-4 rounded-none shadow-inner bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 animate-gradient-x">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-[#2b2a7f] font-houschka drop-shadow-md">
            Excellent Services For Your Business
          </h1>
          <h2 className="text-[#ff4d4f] font-semibold mb-1 mt-3 tracking-wide uppercase text-xl">
            Our Dedicated Services
          </h2>
        </div>

        {/* Show only first 4 or all depending on state */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(showAll ? servicesData : servicesData.slice(0, 4)).map(
            (service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-3xl text-center shadow-xl hover:shadow-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:border-[#2b2a7f] hover:bg-[#f1f5ff] group"
              >
                <div className="w-full flex justify-center items-center mb-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-20 h-20 rounded-xl object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#2b2a7f] mb-2 group-hover:text-[#ff4d4f]">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 group-hover:text-gray-700">
                  {service.description}
                </p>
                <button className="relative group overflow-hidden w-full border-2 px-5 py-2 text-sm font-semibold text-[#2b2a7f] transition-all duration-500 ease-in-out hover:text-white border-[#2b2a7f] rounded-md">
                  <span className="absolute inset-0 bg-[#2b2a7f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    READ MORE
                    <span className="hidden group-hover:inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </button>
              </div>
            )
          )}
        </div>

        {/* See More / See Less Button */}
        <div className="mt-6">
          <button
            onClick={toggleShowAll}
            className="bg-[#2b2a7f] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#ff4d4f] transition-colors duration-300"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </section>
    </>
  );
};

export default MainBanner;
