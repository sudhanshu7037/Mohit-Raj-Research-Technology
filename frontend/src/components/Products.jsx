import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

// ---------- images ----------
import EngineeringCollege from "../assets/homepageicons/productsicons/Engineering College.png";
import university from "../assets/homepageicons/productsicons/university.jpg";
import college from "../assets/homepageicons/productsicons/Institute_Management.png";
import onlineexam from "../assets/homepageicons/productsicons/Online_Examination[2].png";
import Entrance from "../assets/homepageicons/productsicons/Entrance_Exam[1].png";
import Liberary from "../assets/homepageicons/productsicons/Library[1].png";
import ismart from "../assets/homepageicons/productsicons/Smart_Learning[1].png";
import medical from "../assets/homepageicons/productsicons/Medical_Collage[1].png";
import Hospital from "../assets/homepageicons/productsicons/Hospital_Management[1].png";
import ehospital from "../assets/homepageicons/productsicons/E-_Hospital[1].png";
import eClinic from "../assets/homepageicons/productsicons/E- clinic[1].png";
import Bioinformation from "../assets/homepageicons/productsicons/Bioinformation[1].png";
import Ecompany from "../assets/homepageicons/productsicons/E - Company[1].png";
import Crm from "../assets/homepageicons/productsicons/CRM Software[1].png";
import Account from "../assets/homepageicons/productsicons/Account Management[1].png";
import HumanResourse from "../assets/homepageicons/productsicons/Human Resource[1].png";
import Inventry from "../assets/homepageicons/productsicons/Inventory Management[1].png";
import Purchase from "../assets/homepageicons/productsicons/Purchase[1].png";
import Ebanking from "../assets/homepageicons/productsicons/E - Banking[1].png";
import Police from "../assets/homepageicons/productsicons/Police Management[1].png";
import Egov from "../assets/homepageicons/productsicons/E- Gov[1].png";
import Creative from "../assets/homepageicons/productsicons/creative cooperative[1].png";
import ProductImage from "../assets/homepageimages/productsimages/image1.jpg";

// ---------- data ----------
const servicesData = [
  {
    id: 1,
    title: "University Automation Software",
    icon: university,
    link: "/product/education/university-automation-software",
  },
  {
    id: 2,
    title: "Engineering College Management",
    icon: EngineeringCollege,
    link: "/product/education/engineering-college-management-system",
  },
  {
    id: 3,
    title: "College/Institute Management",
    icon: college,
    link: "/product/education/college-institute-management",
  },
  {
    id: 4,
    title: "Online Examination System",
    icon: onlineexam,
    link: "/product/education/online-examination-management",
  },
  {
    id: 5,
    title: "Entrance Exam Management",
    icon: Entrance,
    link: "/product/education/entrance-exam-management",
  },
  {
    id: 6,
    title: "Smart Learning System",
    icon: ismart,
    link: "/product/education/smart-learning-content-management",
  },
  {
    id: 7,
    title: "Library Management System",
    icon: Liberary,
    link: "/product/education/library-management-system",
  },
  {
    id: 8,
    title: "Medical College Management",
    icon: medical,
    link: "/product/medical/medical-college-management",
  },
  {
    id: 9,
    title: "Hospital Management System",
    icon: Hospital,
    link: "/product/medical/hospital-management-system",
  },
  {
    id: 10,
    title: "E-Hospital Management",
    icon: ehospital,
    link: "/product/medical/e-hospital-management",
  },
  {
    id: 11,
    title: "E‑clinic Management",
    icon: eClinic,
    link: "/product/medical/e-clinic-management",
  },
  {
    id: 12,
    title: "Bioinformatics System",
    icon: Bioinformation,
    link: "/product/medical/bioinformatics-management",
  },
  {
    id: 13,
    title: "E‑Company System",
    icon: Ecompany,
    link: "/product/corporate/e-company-system",
  },
  {
    id: 14,
    title: "CRM Software",
    icon: Crm,
    link: "/product/corporate/crm-software",
  },
  {
    id: 15,
    title: "Account Mgmt (Trulymax‑S)",
    icon: Account,
    link: "/product/corporate/account-management-trulymax-s",
  },
  {
    id: 16,
    title: "Account Mgmt (Trulymax‑M)",
    icon: Account,
    link: "/product/corporate/account-management-trulymax-m",
  },
  {
    id: 17,
    title: "Finance Account (Trulymax‑L)",
    icon: Account,
    link: "/product/corporate/finance-account-management-trulymax-l",
  },
  {
    id: 18,
    title: "HR Management System",
    icon: HumanResourse,
    link: "/product/corporate/human-resource-management",
  },
  {
    id: 19,
    title: "Inventory Management",
    icon: Inventry,
    link: "/product/corporate/inventory-management",
  },
  {
    id: 20,
    title: "Purchase Management",
    icon: Purchase,
    link: "/product/corporate/purchase-management",
  },
  {
    id: 21,
    title: "E‑Banking Management",
    icon: Ebanking,
    link: "/product/corporate/e-banking-management",
  },
  {
    id: 22,
    title: "Police Management System",
    icon: Police,
    link: "/product/Public & Mixed Domain /police-management-system",
  },
  {
    id: 23,
    title: "E‑Govt Office Management",
    icon: Egov,
    link: "/product/Public & Mixed Domain/e-govt-office-management",
  },
  {
    id: 24,
    title: "Credit Cooperative Society",
    icon: Creative,
    link: "/product/Public & Mixed Domain/credit-cooperative-society-management",
  },
];

const Products = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null); // save the Swiper instance

  return (
    <section className="relative w-full min-h-[100vh] py-16 px-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 shadow-2xl flex flex-col justify-center">
      {/* heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-blue-900 font-houschka">
          Transform Your Business with Advanced Technologies
        </h2>
        <p className="text-red-600 font-semibold mt-4 text-2xl"></p>
      </div>

      <section className="w-full px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
          {/* Left Side Image */}
          <div className="w-full md:w-1/2 h-full">
            <img
              src={ProductImage}
              alt="our products"
              className=" w-full h-full object-cover"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-full md:w-1/2 h-full flex items-center">
            <div>
              <h2 className="text-4xl font-bold text-red-600 mb-4 font-houschka">
                OUR TRUSTED PRODUCTS
              </h2>
              <p className="text-gray-700 mb-4 text-xl text-justify">
                At MRT, we are proud to offer a diverse range of reliably
                strong, safe and scalable software products by institutions,
                enterprises and public sector organizations in industries. Our
                solutions are designed to automate operations, streamline
                workflows, ensure compliance and run digital changes with
                average results. Each product is designed with a user-centered
                design, modern technology piles and end-to-end functionality to
                meet the challenges of the real world. From university and
                school management systems to hospitals, police and finance
                management software, our products are designed to simplify
                complex operations with smart, scalable and safe platforms. We
                provide industry-based solutions including Institute Automation,
                E-Company System, Bioinformatics Platform, Learning and Library
                Management, Accounting and Inventory Control, College ERP and
                Textile Management System-which are ready to run efficiency,
                accurate and performance. Equally trusted by institutions and
                enterprises, MRT defines again how business and public sector
                work in the digital age.
              </p>
            </div>
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
