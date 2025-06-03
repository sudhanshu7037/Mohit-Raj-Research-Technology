import React from "react";

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
      <section className="py-12 px-4 bg-white md:max-w-[80%] mx-auto flex flex-col items-center gap-4">
        <div className="text-center mb-10">
          <p className="text-yellow-500 font-semibold mb-1">
            OUR DEDICATED SERVICES
          </p>
          <h2 className="text-5xl font-bold text-gray-800">
            Excellent Services For Your Business
          </h2>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="border  rounded-xl text-center shadow-sm p-8 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                {service.description}
              </p>
              <button className= "bottom-0 group relative inline-flex items-center justify-center w-full overflow-hidden  border-2 px-5 py-2 text-sm font-semibold text-gray-900 transition-all duration-500 ease-in-out hover:text-white">
              <span className="absolute inset-0 h-full w-full bg-[#051b2e] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></span>
                <span className="relative z-10 flex items-center gap-2">
                  READ MORE{" "}
                  <span className="hidden group-hover:flex transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>
          <div className="flex items-center gap-4 mt-4" >
            <div>
              <img src={`https://advisorhtml.websitelayout.net/img/icons/11.png`} alt="logo" width={'40px'}/>
            </div>
            <p className="text-[#68747a] font-semibold text-[1.2rem]">We’re committed to create a change that matters!</p>
          </div>

      </section>

    </>
  );
};

export default MainBanner;
