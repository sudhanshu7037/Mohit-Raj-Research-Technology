import React, { useState, useEffect } from "react";

import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Link } from "react-router-dom";
import ProductsDropdown from "./Dropdowns/ProductsDropdown";
import MobileMenuNavbar from "./Dropdowns/MobileMenuNavbar";
import Logo from "../assets/MRTPL-Logo1.png";
import Logo2 from "../assets/new MRTPL-Logo.png";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => {
    return setTimeout(() => {
      setActiveMenu(null);
    }, 10000);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubMenu = (menu) =>
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-black h-10 flex justify-between px-4 md:px-20 items-center text-white fixed top-0 w-full z-50 text-sm ">
        <div className="flex items-center gap-2">
          <FaPhone />
          <span>+012 345 6789</span>
          <span className="px-2">|</span>
          <FaEnvelope />
          <span>info@example.com</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.facebook.com/profile.php?id=100066869172911">
            <FaFacebook />
          </a>
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-10 w-full z-50 transition-all duration-300  ${
          isScrolled
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white border-b border-gray-600"
        }`}
      >
        <div className="h-20 flex justify-between items-center px-4 md:px-20">
          <Link to="/">
            <img 
            src={Logo2}
            alt="MRTPL Logo"
            className="h-12 md:h-13 lg:h-16 w-auto font-bold items-center cursor-pointer"
          />
          </Link>
          {/* <h1 className="text-2xl font-bold text-yellow-400">Logo</h1> */}

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 items-center text-lg font-semibold">
           
            <li className="hover:text-yellow-400 cursor-pointer">
              <a href="/about">ABOUT</a>
            </li>

            {/* Products Dropdown */}
            <ProductsDropdown
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              activeMenu={activeMenu}
            />

            {/* SERVICES Dropdown */}
            {/* <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-xl font-semibold cursor-pointer hover:text-yellow-300 flex items-center gap-1">
                SERVICES <MdKeyboardArrowDown />
              </div>

              {activeMenu === "services" && (
                <div className="fixed top-[104px] left-0 w-screen bg-white text-black p-4 shadow-lg z-50">
                  <div className="flex gap-8">
                    <div>
                      <h1 className="text-lg font-bold mb-2">
                        Software Development
                      </h1>
                      <ul className="flex flex-col gap-2  font-thin ">
                        <li>
                          <Link to="#">
                            Software Consulting & Transformation{" "}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">ERP Software Development</Link>
                        </li>
                        <li>
                          <Link to="#">Custom Software Development</Link>
                        </li>
                        <li>
                          <Link to="#">E-Commerce Platform Development</Link>
                        </li>
                        <li>
                          <Link to="#">Web Application Development</Link>
                        </li>
                        <li>
                          <Link to="#">Mobile Application Development</Link>
                        </li>
                        <li>
                          <Link to="#">Software Testing & QA</Link>
                        </li>
                        <li>
                          <Link to="#">Migration & Re-engineering</Link>
                        </li>
                        <li>
                          <Link to="#">Performance Engineering</Link>
                        </li>
                        <li>
                          <Link to="#">Software Maintenance & Support</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h1 className="text-lg font-bold mb-2">
                        Development , Hosting & Promotion of Website
                      </h1>
                      <ul className="flex flex-col gap-2">
                        <li>
                          <Link to="#">Domain name Registation</Link>
                        </li>
                        <li>
                          <Link to="#">
                            Website Hosting & Web Administration
                          </Link>
                        </li>
                        <li>
                          <Link to="#">Website Development</Link>
                        </li>
                        <li>
                          <Link to="#"> Static Website Development</Link>
                        </li>
                        <li>
                          <Link to="#">Dynamic Website Development</Link>
                        </li>
                        <li>
                          <Link to="#">
                            E-commerce Platforms (with cart, payment gateway,
                            inventory)
                          </Link>
                        </li>
                        <li>
                          <Link to="#">Custom CMS Development </Link>
                        </li>
                        <li>
                          <Link to="#"> Full-Stack Web Applications</Link>
                        </li>
                        <li>
                          <Link to="#">UI/UX Design & Responsiveness</Link>
                        </li>

                        <li>
                          <Link to="#">Website Maintenance & Support</Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h1 className="text-lg font-bold mb-2">
                        {" "}
                        Networking Management Solutions
                      </h1>
                      <ul className="flex flex-col gap-2">
                        <li>
                          <Link to="#">Local Area Network (LAN's)</Link>
                        </li>
                        <li>
                          <Link to="#">Wide Area Network (WAN)</Link>
                        </li>
                        <li>
                          <Link to="#">Wireless Networking</Link>
                        </li>
                        <li>
                          <Link to="#">Corporate Internet</Link>
                        </li>
                        <li>
                          <Link to="#">Structured Cabling & Rack Setup</Link>
                        </li>
                        <li>
                          <Link to="#">System Integration</Link>
                        </li>
                        <li>
                          <Link to="#">Network Security Configuration</Link>
                        </li>
                        <li>
                          <Link to="#">Wi-Fi Installation & Optimization</Link>
                        </li>
                        <li>
                          <Link to="#">
                            Router, Switch & Firewall Configuration
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Annual Maintenence Contract(AMC) & Support
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h1 className="text-lg font-bold mb-2">
                        Hardware & Networking Solutions
                      </h1>
                      <ul className="flex flex-col gap-2">
                        <li>
                          <Link to="#">
                            Computer & Laptop Sales and Support
                          </Link>
                        </li>
                        <li>
                          <Link to="#">Printer & Scanner Installation</Link>
                        </li>
                        <li>
                          <Link to="#">AMC (Annual Maintenance Contracts)</Link>
                        </li>
                        <li>
                          <Link to="#">Server Setup & Configuration</Link>
                        </li>
                        <li>
                          <Link to="#">Biometric Attendance Systems</Link>
                        </li>
                        <li>
                          <Link to="#">Peripheral Device Integration</Link>
                        </li>
                        <li>
                          <Link to="#">Remote Infrastructure Facility</Link>
                        </li>
                        <li>
                          <Link to="#">Data Center Development Facility</Link>
                        </li>
                        <li>
                          <Link to="#">Security & Surveillance Solutions</Link>
                        </li>
                        <li>
                          <Link to="#">Multimedia & Animation Solutions</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
               <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-xl font-semibold cursor-pointer hover:text-yellow-300 flex items-center gap-1">
                Who we are <MdKeyboardArrowDown />
              </div>

              {activeMenu === "services" && (
                <div className="absolute top-full left-0 mt-2 w-[300px] bg-white text-black p-4 shadow-lg z-50 ">
                  <div className="flex gap-8">
                    <div>
                      {/* <h1 className="text-lg font-bold mb-2">
                        Server Room & Data Center Development
                      </h1> */}
                      <ul className="flex flex-col gap-4  text-sm">
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="/SoftwareDevelopment">
                            Software Development
                          </Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="/DevelopmentHosting">
                           Development, Hosting & Promotion of Websites
                          </Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="/HardwareNetworking">Hardware & Networking Management Solutions</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Multimedia & Animation Solutions</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Digital Marketing</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Data Centers Development Facility</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">E-Learning </Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">
                            Video Conferencing
                          </Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Security & Surveillances Solutions</Link>
                        </li>
                        
                        
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Data Digitization Services</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Remote Infrastructure Facility</Link>
                        </li>

                        
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Services Dropdown */}
            {/* <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("otherServices")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-xl font-semibold cursor-pointer hover:text-yellow-300 flex items-center gap-1">
                OTHER SERVICES <MdKeyboardArrowDown />
              </div>

              {activeMenu === "otherServices" && (
                <div className="fixed top-[104px] left-1/2 -translate-x-1/2 w-[300px] bg-white text-black p-4 shadow-lg z-50 ">
                  <div className="flex gap-8">
                    <div>
                      {/* <h1 className="text-lg font-bold mb-2">
                        Server Room & Data Center Development
                      </h1> }
                      <ul className="flex flex-col gap-2">
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Software Development</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">
                            Development , Hosting & Promotion of Websites
                          </Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">
                            Hardware & Networking Management Solutions
                          </Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Remote Infrastructure Facility</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Data Center Development Facility</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Intetractive Learning </Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">E- Learning</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Video Conferencing</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Security & Surveillance Solutions</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Multimedia & Animation Solutions</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Data Digitization Services</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
            {/* Solutions Dropdown */}

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-xl font-semibold cursor-pointer hover:text-yellow-300 flex items-center gap-1">
                SOLUTIONS <MdKeyboardArrowDown />
              </div>

              {activeMenu === "solutions" && (
                <div className="absolute top-full left-0 mt-2 w-[300px] bg-white text-black p-4 shadow-lg z-50  ">
                  <div className="flex gap-8">
                    <div>
                      {/* <h1 className="text-lg font-bold mb-2">
                        Server Room & Data Center Development
                      </h1> */}
                      <ul className="flex flex-col gap-4 text-sm">
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">
                            University Digitalization Solutions
                          </Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">
                            Medical College Digitalization Solutions
                          </Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">MRTiON Digital Education Solution</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Library Digitalization Solution</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Digital Marketing Solutions</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Smart Learning Solution </Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">
                            Interactive Conference Room Solutions
                          </Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Interactive Auditorium Solutions</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Security & Surveillance Solutions</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Multimedia & Animation Solutions</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Police Automation Solutions</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">
                            Audio Video Recording And Broadcasting Solution
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries  Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-xl font-semibold cursor-pointer hover:text-yellow-300 flex items-center gap-1">
                INDUSTRIES <MdKeyboardArrowDown />
              </div>

              {activeMenu === "industries" && (
                <div className="absolute top-full left-0 mt-2 w-[300px] bg-white text-black p-4 shadow-lg z-50 ">
                  <div className="flex gap-8">
                    <div>
                      {/* <h1 className="text-lg font-bold mb-2">
                        Server Room & Data Center Development
                      </h1> */}
                      <ul className="flex flex-col gap-4 text-sm">
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Education</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Healthcare</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Banking</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Manufacturing</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Retail</Link>
                        </li>
                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Life Sciences</Link>
                        </li>

                        <li className="hover:text-yellow-400 cursor-pointer">
                          <Link to="#">Consumer Goods and Services</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <li className="hover:text-yellow-400 cursor-pointer">
              <a href="/blog">BLOG</a>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <a href="/contact">CONTACT</a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-yellow-500 px-4 py-2 rounded-md text-white">
              FREE QUOTE
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {menuOpen && (
          <MobileMenuNavbar
            openSubMenu={openSubMenu}
            toggleSubMenu={toggleSubMenu}
          />
        )}
      </nav>
    </>
  );
};

export default NavBar;
