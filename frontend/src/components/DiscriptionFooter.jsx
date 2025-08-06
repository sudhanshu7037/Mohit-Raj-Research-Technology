import React from "react";
import { Link } from "react-router-dom";
import LogoMohitraj from "../assets/logo/new MRTPL-Logo.png";
import IndianFlag from "../assets/logo/indianflag.png";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
const DiscriptionFooter = () => {
  return (
    <div className="text-white p-6 bg-cover bg-center bg-no-repeat bg-blue-900">
      {/* Overlay for text visibility */}
      <div className="bg-opacity-10 p-8 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 ">
          {/* 0. Information   Section */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-2 text-white relative inline-block">
              <span className="relative inline-block font-houschka">
                <img
                  src={LogoMohitraj}
                  alt=""
                  className="h-12 w-auto lg:h-16 mt-2 ml-4"
                />
              </span>
            </h1>
            <ul className="space-y-3 text-md space-x-3">
              <div className=" hover hover:text-red-400">
                <div className="flex items-center">
                  <img
                    src={IndianFlag}
                    alt="Indian flag"
                    className="h-5 ml-4"
                  />
                  <a className="ml-2 mb-0" href="tel:+919999910150">
                    +919999910150
                  </a>
                </div>
                <span className="ml-4 mt-0 text-md  ">
                  (Jitendra Singh Arya, MD)
                </span>
              </div>
              <div className=" hover hover:text-red-400">
                <div className="flex items-center ">
                  <img
                    src={IndianFlag}
                    alt="Indian flag"
                    className="h-5 ml-1"
                  />
                  <a className="ml-2 mb-0" href="tel:+919999910150">
                    +919999910150
                  </a>
                </div>
                <span className="ml-1 mt-0 text-md">
                  (Jitendra Singh Arya, MD)
                </span>
              </div>
              <div className="flex items-center ml-1 hover:text-red-400">
                <MdEmail className="text-lg font-bold" />
                <span className="ml-2 text-md pb-0">mohitrajit@gmail.com</span>
              </div>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex  ml-1 hover:text-red-400"
              >
                <FaMapMarkerAlt className="text-5xl pb-0" />
                <span className="ml-2 text-md">
                  Corporate Office: Mohitraj Research Tech Pvt Ltd, 3rd Floor,
                  Shiva Tower - Chaudary More, Ghaziabad, Uttar Pradesh 201001
                </span>
              </a>
            </ul>
          </div>

          {/* 1. Services Section */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-2 text-white relative inline-block">
              <span className="relative inline-block font-houschka">
                Services
              </span>
            </h1>
            <ul className="space-y-3 text-md">
              <li>
                <Link
                  to="/service/Software-Development"
                  className="hover:underline"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  to="/service/DevelopmentHosting"
                  className="hover:underline"
                >
                  Development, Hosting & Promotion
                </Link>
              </li>
              <li>
                <Link
                  to="/service/HardwareNetworking"
                  className="hover:underline"
                >
                  Hardware & Networking
                </Link>
              </li>
              <li>
                <Link
                  to="/service/MultimediaAnimation"
                  className="hover:underline"
                >
                  Multimedia & Animation
                </Link>
              </li>
              <li>
                <Link
                  to="/service/DigitalMarketing"
                  className="hover:underline"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/service/DataCentersDevelopment"
                  className="hover:underline"
                >
                  Data Centers Development
                </Link>
              </li>
              <li>
                <Link to="/service/Elearning" className="hover:underline">
                  E-Learning
                </Link>
              </li>
              <li>
                <Link
                  to="/service/VideoConferencing"
                  className="hover:underline"
                >
                  Video Conferencing
                </Link>
              </li>
              <li>
                <Link
                  to="/service/SecuritySurvillance"
                  className="hover:underline"
                >
                  Security and Surveillance
                </Link>
              </li>
              <li>
                <Link
                  to="/service/DataDigitization"
                  className="hover:underline"
                >
                  Data Digitization
                </Link>
              </li>
              <li>
                <Link
                  to="/service/RemoteInfrastructure"
                  className="hover:underline"
                >
                  Remote Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Products and Platforms Section */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-2 text-white relative inline-block">
              <span className="relative inline-block font-houschka">
                Products & Platform
              </span>
            </h1>
            <ul className="space-y-2 text-md">
              <li>
                <Link
                  to="/products/university-automation"
                  className="hover:underline"
                >
                  University Automation Software
                </Link>
              </li>
              <li>
                <Link
                  to="/products/medical-college"
                  className="hover:underline"
                >
                  Medical College Management System
                </Link>
              </li>
              <li>
                <Link
                  to="/products/engineering-college"
                  className="hover:underline"
                >
                  Engineering College Management System
                </Link>
              </li>
              <li>
                <Link to="/products/e-company" className="hover:underline">
                  E-Company System
                </Link>
              </li>
              <li>
                <Link
                  to="/products/hospital-management"
                  className="hover:underline"
                >
                  Hospital Management System
                </Link>
              </li>
              <li>
                <Link to="/products/bioinformatics" className="hover:underline">
                  Bioinformatics MIS
                </Link>
              </li>
              <li>
                <Link to="/products/crm" className="hover:underline">
                  CRM Software
                </Link>
              </li>
              <li>
                <Link
                  to="/products/institute-management"
                  className="hover:underline"
                >
                  College/Institute Management Systems
                </Link>
              </li>
              <li>
                <Link
                  to="/products/school-management"
                  className="hover:underline"
                >
                  School Management System
                </Link>
              </li>
              <li>
                <Link to="/products/erp" className="hover:underline">
                  ERP Software
                </Link>
              </li>
              <li>
                <Link to="/products/slcms" className="hover:underline">
                  Smart Learning & Content Management System (SLCMS)
                </Link>
              </li>
              <li>
                <Link
                  to="/products/account-management"
                  className="hover:underline"
                >
                  Account Management System (Trulymax-S)
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Industries Section */}
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-2 text-white relative inline-block">
              <span className="relative inline-block font-houschka">
                Industries
              </span>
            </h1>
            <ul className="space-y-2 text-md">
              <li>
                <Link to="/industries/education" className="hover:underline">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/industries/healthcare" className="hover:underline">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link to="/industries/banking" className="hover:underline">
                  Banking
                </Link>
              </li>
              <li>
                <Link
                  to="/industries/manufacturing"
                  className="hover:underline"
                >
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/industries/retail" className="hover:underline">
                  Retail
                </Link>
              </li>
              <li>
                <Link to="/industries/life-science" className="hover:underline">
                  Life Science
                </Link>
              </li>
              <li>
                <Link
                  to="/industries/consumer-goods"
                  className="hover:underline"
                >
                  Consumer Goods
                </Link>
              </li>
            </ul>
          </div>
          {/* 4. QuickLinks Section */}
           <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-2 text-white relative inline-block">
              <span className="relative inline-block font-houschka">
                Quick Links
              </span>
            </h1>
            <ul className="space-y-2 text-md">
              <li>
                <Link to="/industries/education" className="hover:underline">
                 Company Gallery
                </Link>
              </li>
              <li>
                <Link to="/industries/healthcare" className="hover:underline">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/industries/banking" className="hover:underline">
                  Digital Tools

                </Link>
              </li>
              <li>
                <Link
                  to="/industries/manufacturing"
                  className="hover:underline"
                >
                 Payments
                </Link>
              </li>
              <li>
                <Link to="/industries/retail" className="hover:underline">
                  Downloads
                </Link>
              </li>
              <li>
                <Link to="/industries/life-science" className="hover:underline">
                 press Kit & Design
                </Link>
              </li>
              <li>
                <Link
                  to="/industries/consumer-goods"
                  className="hover:underline"
                >
                  In the Media
                </Link>
              </li>
              <li>
                <Link
                  to="/industries/consumer-goods"
                  className="hover:underline"
                >
                  Products
                </Link>
              </li>
                <li>
                <Link
                  to="/industries/consumer-goods"
                  className="hover:underline"
                >
                 Feedback
                </Link>
              </li>
                 <li>
                <Link
                  to="/industries/consumer-goods"
                  className="hover:underline"
                >
                 Corporate Social Responsibility

                </Link>
              </li>
               <li>
                <Link
                  to="/industries/consumer-goods"
                  className="hover:underline"
                >
                 Sales Team

                </Link>
              </li>
               <li>
                <Link
                  to="/industries/consumer-goods"
                  className="hover:underline"
                >
                Support

                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
      <hr className="my-6 border-gray-300" />
    </div>
  );
};

export default DiscriptionFooter;
