import React from "react";
import bgImage from "../assets/sft.png";


const MainBanner = () => {
  const servicesData = [
    {
      id: 1,
      title: "Software Development",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: "📝",
    },
    {
      id: 2,
      title: "Development, Hosting & Promotion of Websites",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: "📊",
    },
    {
      id: 3,
      title: "Hardware & Networking Management Solutions",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: "📈",
    },
    {
      id: 4,
      title: "Multimedia & Animation Solutions ",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: "💰",
    },
    {
      id: 5,
      title: "Digital Marketing Solutions",
      description:
        "Digitalize attendance, homework, exams, and parent communication easily.",
      icon: "🏫",
    },
    {
      id: 6,
      title: "Mobile Application Development",
      description:
        "Efficiently track and manage books, journals, and digital resources.",
      icon: "📚",
    },
    {
      id: 7,
      title: "IT Consultancy Services",
      description:
        "Manage room allocations, complaints, and student records hassle-free.",
      icon: "🏠",
    },
    {
      id: 8,
      title: "E-Commerce Solutions",
      description:
        "Track vehicles, routes, and schedules for safe student transportation.",
      icon: "🚌",
    },
    {
      id: 9,
      title: "Cloud Computing Solutions",
      description:
        "Leverage the power of the cloud for scalable and flexible solutions.",
      icon: "☁️",
    },
    {
      id: 10,
      title: "Cybersecurity Solutions",
      description:
        "Protect your digital assets with our comprehensive cybersecurity services.",
      icon: "🔒",
    },
    {
      id: 11,
      title: "Data Analytics and Business Intelligence",
      description:
        "Transform data into actionable insights for better decision-making.",
      icon: "📊",
    },
    {
      id: 12,
      title: "Artificial Intelligence and Machine Learning",
      description:
        "Implement AI and ML solutions to enhance business processes.",
      icon: "🤖",
    },
    {
      id: 13,
      title: "Robotic Process Automation",
      description:
        "Automate repetitive tasks with our RPA solutions.",
      icon: "🤖",
    },
    {
      id: 14,
      title: "CCTV Security and Surveillance Solutions",
      description:
        "Utilize CCTV technology for secure and transparent monitoring.",
      icon: "🔗",
    },
    {
      id: 15,
      title: "Data Center Development and Management",
      description:
        "Connect devices and systems for smarter operations.",
      icon: "🌐",
    },
    {
      id: 16,
      title: "",
      description:
        "Create immersive experiences with VR and AR technologies.",
      icon: "🕶️",
    },
  ];

  return (
    <>
      <section
        className="py-16 px-4 w-full flex flex-col items-center gap-4 rounded-none shadow-inner bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage })`, backgroundColor: "#fff4f7" }}
      >
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-[#2b2a7f] font-houschka drop-shadow-md">
            Excellent Services For Your Business
          </h2>
          <p className="text-[#ff4d4f] font-semibold mb-1 mt-3 tracking-wide uppercase">
            Our Dedicated Services
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-3xl text-center shadow-xl hover:shadow-2xl p-8 transition-all duration-300 transform hover:scale-105 hover:border-[#2b2a7f] hover:bg-[#f1f5ff] group"
            >
              <div className="text-5xl mb-4 group-hover:animate-bounce">{service.icon}</div>
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
          ))}
        </div>
        <div className="flex items-center gap-4 mt-6">
          <img
            src="https://advisorhtml.websitelayout.net/img/icons/11.png"
            alt="logo"
            width="40px"
          />
          <p className="text-[#4c4c4c] font-semibold text-[1.2rem]">
            We’re committed to create a change that matters!
          </p>
        </div>
      </section>
    </>
  );
};

export default MainBanner;
