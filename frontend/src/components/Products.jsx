import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

// ---------- images ----------
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
import eClinic from "../assets/E- Clinic[1].png";
import Bioinformation from "../assets/Bioinformation[1].png";
import Ecompany from "../assets/E - Company[1].png";
import Crm from "../assets/CRM Software[1].png";
import Account from "../assets/Account Management[1].png";
import HumanResourse from "../assets/Human Resource[1].png";
import Inventry from "../assets/Inventory Management[1].png";
import Purchase from "../assets/Purchase[1].png";
import Ebanking from "../assets/E - Banking[1].png";
import Police from "../assets/Police Management[1].png";
import Egov from "../assets/E- Gov[1].png";
import Creative from "../assets/creative cooperative[1].png";

// ---------- data ----------
const servicesData = [
  { id: 1, title: "University Automation Software", icon: university, link: "/university-automation-software" },
  { id: 2, title: "Engineering College Management", icon: EngineeringCollege, link: "/engineering-college-management-system" },
  { id: 3, title: "College/Institute Management", icon: college, link: "/college-institute-management" },
  { id: 4, title: "Online Examination System", icon: onlineexam, link: "/online-examination-management" },
  { id: 5, title: "Entrance Exam Management", icon: Entrance, link: "/entrance-exam-management" },
  { id: 6, title: "Smart Learning System", icon: ismart, link: "/smart-learning-content-management" },
  { id: 7, title: "Library Management System", icon: Liberary, link: "/library-management-system" },
  { id: 8, title: "Medical College Management", icon: medical, link: "/products/medical-college" },
  { id: 9, title: "Hospital Management System", icon: Hospital, link: "/products/hospital-management" },
  { id: 10, title: "E-Hospital Management", icon: ehospital, link: "/products/e-hospital" },
  { id: 11, title: "E‑clinic Management", icon: eClinic, link: "/products/e-clinic" },
  { id: 12, title: "Bioinformatics System", icon: Bioinformation, link: "/products/bioinformatics" },
  { id: 13, title: "E‑Company System", icon: Ecompany, link: "/e-company-system" },
  { id: 14, title: "CRM Software", icon: Crm, link: "/crm-software" },
  { id: 15, title: "Account Mgmt (Trulymax‑S)", icon: Account, link: "/account-management-trulymax-s" },
  { id: 16, title: "Account Mgmt (Trulymax‑M)", icon: Account, link: "/account-management-trulymax-m" },
  { id: 17, title: "Finance Account (Trulymax‑L)", icon: Account, link: "/finance-account-management-trulymax-l" },
  { id: 18, title: "HR Management System", icon: HumanResourse, link: "/human-resource-management" },
  { id: 19, title: "Inventory Management", icon: Inventry, link: "/inventory-management" },
  { id: 20, title: "Purchase Management", icon: Purchase, link: "/purchase-management" },
  { id: 21, title: "E‑Banking Management", icon: Ebanking, link: "/e-banking-management" },
  { id: 22, title: "Police Management System", icon: Police, link: "/police-management-system" },
  { id: 23, title: "E‑Govt Office Management", icon: Egov, link: "/e-govt-office-management" },
  { id: 24, title: "Credit Cooperative Society", icon: Creative, link: "/credit-cooperative-society-management" },
];

const Products = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);        // save the Swiper instance

  return (
    <section className="relative w-full min-h-[100vh] py-16 px-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-2xl flex flex-col justify-center">
      {/* heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-blue-900 font-houschka">
          Transform Your Business with Advanced Technologies
        </h2>
        <p className="text-red-600 font-semibold mt-4 text-2xl">
          
        </p>
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
                  OUR DEDICATED PRODUCTS
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

      

      {/* carousel */}
  <Swiper
  modules={[Autoplay, Navigation]}
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  navigation
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  className="w-full"
>
  {servicesData.map((service) => (
    <SwiperSlide key={service.id}>
      <div className="h-[250px] bg-white border rounded-xl  p-4 flex flex-col justify-between items-center text-center mt-6">
        <img
          src={service.icon}
          alt={service.title}
          className="w-16 h-16 mb-3 object-cover"
        />
        <h3 className="text-base font-medium text-gray-900 mb-2">
          {service.title}
        </h3>
        <button
          onClick={() => navigate(service.link)}
          className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
        >
          Read More
        </button>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      {/* navigation buttons */}
     

      {/* <button
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-md transition-all duration-300 group"
      >
        <MdChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
      </button> */}
    </section>
  );
};

export default Products;
