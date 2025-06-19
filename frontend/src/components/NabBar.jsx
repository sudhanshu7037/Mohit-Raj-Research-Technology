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
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => {
    return setTimeout(() => {
      setActiveMenu(null);
    }, 5000);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubMenu = (menu) =>
    setOpenSubMenu(openSubMenu === menu ? null : menu);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-black h-8 md:h-10 flex justify-between px-4 lg:px-20 items-center text-white fixed top-0 w-full z-50 text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <FaPhone />
          <span>+9999910150</span>
          <span className="px-1 md:px-2">|</span>
          <FaEnvelope />
          <span>
            <a href="">mohitrajit@gmail.com</a>
          </span>
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
        className={`fixed top-8 md:top-10 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white border-b border-gray-600"
        }`}
      >
        <div className="h-16 md:h-20 flex justify-between items-center px-4 lg:px-20">
          <Link to="/">
            <img
              src={Logo}
              alt="MRTPL Logo"
              className="h-10 md:h-12 lg:h-16 w-auto cursor-pointer items-center"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-4 lg:gap-6 items-center text-sm md:text-md font-semibold font-basis">
            <li className="hover:text-yellow-400 cursor-pointer">
              <a href="/who we are">WHO WE ARE</a>
            </li>

            <ProductsDropdown
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              activeMenu={activeMenu}
            />

            {/* What We Do Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="cursor-pointer hover:text-yellow-300 flex items-center gap-1">
                WHAT WE DO <MdKeyboardArrowDown />
              </div>
              {activeMenu === "services" && (
                <div className="absolute top-full left-0 mt-2 w-[250px] md:w-[300px] bg-white text-black p-4 shadow-lg z-50">
                  <ul className="flex flex-col gap-4 text-xs md:text-sm">
                    <li><Link to="/SoftwareDevelopment">Software Development</Link></li>
                    <li><Link to="/DevelopmentHosting">Development, Hosting & Promotion</Link></li>
                    <li><Link to="/HardwareNetworking">Hardware & Networking</Link></li>
                    <li><Link to="/MultimediaAnimation">Multimedia & Animation</Link></li>
                    <li><Link to="/DigitalMarketing">Digital Marketing</Link></li>
                    
                    <li><Link to="#">Digital Marketing</Link></li>
                    <li><Link to="#">Data Centers Development</Link></li>
                    <li><Link to="#">E-Learning</Link></li>
                    <li><Link to="#">Video Conferencing</Link></li>
                    <li><Link to="#">Security & Surveillance</Link></li>
                    <li><Link to="#">Data Digitization</Link></li>
                    <li><Link to="#">Remote Infrastructure</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="cursor-pointer hover:text-yellow-300 flex items-center gap-1">
                SOLUTIONS <MdKeyboardArrowDown />
              </div>
              {activeMenu === "solutions" && (
                <div className="absolute top-full left-0 mt-2 w-[250px] md:w-[300px] bg-white text-black p-4 shadow-lg z-50">
                  <ul className="flex flex-col gap-4 text-xs md:text-sm">
                    <li><Link to="#">University Digitalization</Link></li>
                    <li><Link to="#">Medical College Digitalization</Link></li>
                    <li><Link to="#">MRTiON Digital Education</Link></li>
                    <li><Link to="#">Library Digitalization</Link></li>
                    <li><Link to="#">Digital Marketing Solutions</Link></li>
                    <li><Link to="#">Smart Learning</Link></li>
                    <li><Link to="#">Conference Room Solutions</Link></li>
                    <li><Link to="#">Auditorium Solutions</Link></li>
                    <li><Link to="#">Security & Surveillance</Link></li>
                    <li><Link to="#">Multimedia & Animation</Link></li>
                    <li><Link to="#">Police Automation</Link></li>
                    <li><Link to="#">Audio Video Broadcasting</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("industries")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="cursor-pointer hover:text-yellow-300 flex items-center gap-1">
                INDUSTRIES <MdKeyboardArrowDown />
              </div>
              {activeMenu === "industries" && (
                <div className="absolute top-full left-0 mt-2 w-[250px] md:w-[300px] bg-white text-black p-4 shadow-lg z-50">
                  <ul className="flex flex-col gap-4 text-xs md:text-sm">
                    <li><Link to="#">Education</Link></li>
                    <li><Link to="#">Healthcare</Link></li>
                    <li><Link to="#">Banking</Link></li>
                    <li><Link to="#">Manufacturing</Link></li>
                    <li><Link to="#">Retail</Link></li>
                    <li><Link to="#">Life Sciences</Link></li>
                    <li><Link to="#">Consumer Goods</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <li><a href="/blog">BLOG</a></li>
            <li><a href="/career">CAREER</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-yellow-500 px-3 py-2 rounded-md text-white text-xs md:text-sm">
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
