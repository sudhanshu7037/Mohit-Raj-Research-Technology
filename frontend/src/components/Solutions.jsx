import React from "react";
import police from "../assets/PoliceManagement.png";
import university from "../assets/university.jpg";
import medical from "../assets/Medical_Collage[1].png";
import DigitalEducation from "../assets/DigitalEducation.png";
import Multimedia from "../assets/mulltimedia[1].png";

const Solutions = () => {
  const servicesData = [
    {
      id: 1,
      title: "University Digitalization Solutions",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: university,
    },
    {
      id: 2,
      title: "Medical College Digitalization Solutions",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: medical,
    },
    {
      id: 3,
      title: "MRTiON Digital Education Solution",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: DigitalEducation,
    },
    {
      id: 4,
      title: "Multimedia & Animation Solutions ",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: Multimedia,
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
      title: "Library Digitalization Solution",
      description:
        "Efficiently track and manage books, journals, and digital resources.",
      icon: "📚",
    },
    {
      id: 7,
      title: "Interactive Conference Room Solutions",
      description:
        "Manage room allocations, complaints, and student records hassle-free.",
      icon: "🏠",
    },
    {
      id: 8,
      title: "Interactive Auditorium Solutions",
      description:
        "Track vehicles, routes, and schedules for safe student transportation.",
      icon: "🚌",
    },
    {
      id: 9,
      title: "Security & Surveillance Solutions",
      description:
        "Leverage the power of the cloud for scalable and flexible solutions.",
      icon: "☁️",
    },
    {
      id: 10,
      title: "Multimedia & Animation Solutions",
      description:
        "Protect your digital assets with our comprehensive cybersecurity services.",
      icon: "🔒",
    },
    {
      id: 11,
      title: "Police Automation  Solutions",
      description:
        "Transform data into actionable insights for better decision-making.",
      icon: police,
    },
    {
      id: 12,
      title: "Audio Video Recording And Broadcasting Solution",
      description:
        "Implement AI and ML solutions to enhance business processes.",
      icon: "🤖",
    },
  ];
  return (
    <>
      <section className="py-16 px-4 bg-gradient-to-br from-[#e3f2fd] via-[#ffffff] to-[#e3f2fd] w-full flex flex-col items-center gap-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-houschka font-bold text-blue-800 drop-shadow">
            Cutting edge solutions with digital technologies.
          </h2>
          <p className="text-yellow-500 font-semibold mt-3 tracking-wide uppercase">
            OUR DEDICATED SOLUTIONS
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative group bg-white border border-gray-200 rounded-2xl shadow-xl p-6 transition-all duration-500 hover:bg-blue-900 hover:shadow-2xl hover:scale-105"
            >
              <div className="text-5xl mb-4 transition-all duration-500 group-hover:opacity-100 group-hover:text-white">
                {typeof service.icon === "string" && !service.icon.includes("/") ? (
                  service.icon
                ) : (
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 mx-auto rounded-md group-hover:opacity-100"
                  />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 group-hover:text-gray-300">
                {service.description}
              </p>
              <button className="relative w-full px-5 py-2 text-sm font-semibold text-blue-700 border-2 border-blue-700 rounded-md bg-white transition-all duration-500 ease-in-out group-hover:text-red-600 group-hover:border-white">
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
        <div className="flex items-center gap-4 mt-8">
          <img
            src="https://advisorhtml.websitelayout.net/img/icons/11.png"
            alt="logo"
            width="40px"
          />
          <p className="text-[#68747a] font-semibold text-[1.2rem]">
            We’re committed to create a change that matters!
          </p>
        </div>
      </section>
    </>
  );
};

export default Solutions;
