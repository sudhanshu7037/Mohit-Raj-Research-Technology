import React from "react";
import EngineeringCollege from "../assets/Engineering College.png";
import university from "../assets/university.jpg";
import college from "../assets/Institute_Management[2].png";
import onlineexam from "../assets/Online_Examination[2].png";
import Entrance from "../assets/Entrance_Exam[1].png";
import Liberary from "../assets/Library[1].png";
import ismart from "../assets/Smart_Learning[1].png";
import medical from "../assets/Medical_Collage[1].png";
import Hospital from "../assets/Hospital_Management[1].png";
import ehospital from "../assets/E-_Hospital[1].png";
import eClinic from  "../assets/E- Clinic[1].png";
import Bioinformation from "../assets/Bioinformation[1].png";
import Ecompany from "../assets/E - Company[1].png";
import Crm from "../assets/CRM Software[1].png";
import Account from "../assets/Account Management[1].png";
import HumanResourse from "../assets/Human Resource[1].png";
import Inventry from "../assets/Inventory Management[1].png";;
import Purchase from "../assets/Purchase[1].png";
import Ebanking from "../assets/E - Banking[1].png";
import Police from "../assets/Police Management[1].png";
import Egov from "../assets/E- Gov[1].png";
import Creative from "../assets/creative cooperative[1].png";
const Products = () => {
  const servicesData = [
    {
      id: 1,
      title: "University Automation Software",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: university,
    },
    {
      id: 2,
      title: "Engineering College Management and Information System",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: EngineeringCollege,
    },
    {
      id: 3,
      title: "College/Institute Management Systems",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: college,
    },
    {
      id: 4,
      title: "Online Examination Management System",
      description:
        "We help a business generate new product ideas with intelligence.",
      icon: onlineexam,
    },
    {
      id: 5,
      title: "Entrance Exam Management and Information System",
      description:
        "Digitalize attendance, homework, exams, and parent communication easily.",
      icon: Entrance,
    },
    {
      id: 6,
      title: "Smart Learning & Content  Management System (SLCMS)",
      description:
        "Efficiently track and manage books, journals, and digital resources.",
      icon: ismart,
    },
    {
      id: 7,
      title: "Library Management System",
      description:
        "Manage room allocations, complaints, and student records hassle-free.",
      icon: Liberary,
    },
    {
      id: 8,
      title: "Medical College Management  and Information System ",
      description:
        "Track vehicles, routes, and schedules for safe student transportation.",
      icon: medical,
    },
    {
      id: 9,
      title: "Hospital Management & Information system",
      description: "Manage student data, grades, and attendance seamlessly.",
      icon: Hospital,
    },
    {
      id: 10,
      title: "E-Hospital Management",
      description:
        "Facilitate online learning with course management and assessments.",
      icon: ehospital,
    },
    {
      id: 11,
      title: "E-clinic Management",
      description:
        "Streamline exam scheduling, grading, and results publication.",
      icon: eClinic,
    },
    {
      id: 12,
      title: "Bioinformatics Management and Information System",
      description:
        "Simplify the admission process with online applications and tracking.",
      icon: Bioinformation,
    },
    {
      id: 13,
      title: "E-Company System",
      description:
        "Digitalize attendance, homework, exams, and parent communication easily.",
      icon: Ecompany,
    },
    {
      id: 14,
      title: "CRM Software",
      description:
        "Efficiently track and manage complaints from students and parents.",
      icon: Crm,
    },
    {
      id: 15,
      title: " Account Management System  (Trulymax-S)",
      description:
        "Manage room allocations, complaints, and student records hassle-free.",
      icon: Account,
    },
    {
      id: 16,
      title: "Account Management System (Trulymax-M)",
      description:
        "Track vehicles, routes, and schedules for safe student transportation.",
      icon: Account,
    },
    {
      id: 17,
      title: "Finance Account Management System (Trulymax-L)",
      description: "Manage student data, grades, and attendance seamlessly.",
      icon: Account,
    },
    {
      id: 18,
      title: "Human Resource Management System",
      description:
        "Facilitate online learning with course management and assessments.",
      icon:  HumanResourse,
    },
    {
      id: 19,
      title: "Inventory Management System",
      description:
        "Streamline exam scheduling, grading, and results publication.",
      icon: Inventry,
    },
    {
      id: 20,
      title: "Purchase Management System",
      description:
        "Simplify the admission process with online applications and tracking.",
      icon: Purchase,
    },
    {
      id: 21,
      title: "E- Banking Management",
      description:
        "Digitalize attendance, homework, exams, and parent communication easily.",
      icon: Ebanking,
    },
    {
      id: 22,
      title: "Police Management System",
      description:
        "Efficiently track and manage complaints from students and parents.",
      icon: Police,
    },
    {
      id: 23,
      title: "E-Govt.Office Management System",
      description:
        "Manage room allocations, complaints, and student records hassle-free.",
      icon: Egov,
    },
    {
      id: 24,
      title: " Credit Cooperative Society  Management Infromation  System",
      description:
        "Track vehicles, routes, and schedules for safe student transportation.",
      icon:  Creative,
    },
  ];
  return (
    <>
      <section className="py-12 px-4 bg-white md:max-w-[80%] mx-auto flex flex-col items-center gap-4">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-blue-900 font-houschka">
            Transform your business with advance innovative technologies
          </h2>
          <p className="text-yellow-500 font-semibold mb-1 mt-3">
            OUR DEDICATED PRODUCTS
          </p>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="border  rounded-xl text-center  p-8 hover:shadow-lg transition border-gray-500"
            >
              <div className="text-5xl mb-4">
                {typeof service.icon === "string" &&
                !service.icon.includes("/") ? (
                  service.icon
                ) : (
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-14 mx-auto"
                  />
                )}
              </div>
              <h3 className="text-md font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                {service.description}
              </p>
              <button className="bottom-0 group relative inline-flex items-center justify-center w-full overflow-hidden  border-2 px-5 py-2 text-sm font-semibold text-gray-900 transition-all duration-500 ease-in-out hover:text-white">
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
        <div className="flex items-center gap-4 mt-4">
          <div>
            <img
              src={`https://advisorhtml.websitelayout.net/img/icons/11.png`}
              alt="logo"
              width={"40px"}
            />
          </div>
          <p className="text-[#68747a] font-semibold text-[1.2rem]">
            We’re committed to create a change that matters!
          </p>
        </div>
      </section>
    </>
  );
};

export default Products;