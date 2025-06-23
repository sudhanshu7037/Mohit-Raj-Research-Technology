import React, { useState, useEffect } from "react";
import ServicesDropdown from "./Dropdowns/ServicesDropdown";

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
    <div className="fixed top-0 left-0 w-full z-50 text-white text-xs md:text-sm overflow-hidden h-8 md:h-10">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 transform -skew-x-12 origin-left"></div>
      </div>

      {/* Foreground */}
      <div className="relative flex justify-between px-4 lg:px-20 items-center h-full z-10">
        {/* Left */}
        <div className="flex items-center gap-2">
          <FaPhone />
          <span>+9999910150</span>
          <span className="px-1 md:px-2">|</span>
          <FaEnvelope />
          <a href="#" className="hover:underline">mohitrajit@gmail.com</a>
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-3 text-orange-500">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
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
              src={Logo2}
              alt="MRTPL Logo"
              className="h-10 md:h-12 lg:h-16 w-auto cursor-pointer items-center"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-4 lg:gap-6 items-center text-sm md:text-md font-semibold font-basis">
            <li className="hover:text-yellow-500 cursor-pointer">
              <a href="/who we are">WHO WE ARE</a>
            </li>

            <ProductsDropdown
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              activeMenu={activeMenu}
            />

           
{/*our services(what we do)*/}


<ServicesDropdown
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              activeMenu={activeMenu}
            />


           {/* Solutions Dropdown */}
<div
  className="relative"
  onMouseEnter={() => handleMouseEnter("solutions")}
  onMouseLeave={handleMouseLeave}
>
  <div className="cursor-pointer hover:text-yellow-500 flex items-center gap-1">
    SOLUTIONS <MdKeyboardArrowDown />
  </div>
  {activeMenu === "solutions" && (
    <div className="absolute top-full left-0 mt-2 w-[250px] md:w-[300px] bg-blue-100 text-black p-4 shadow-lg z-50">
      <ul className="flex flex-col gap-2 text-xs md:text-sm">
        {[
          "University Digitalization",
          "Medical College Digitalization",
          "MRTiON Digital Education",
          "Library Digitalization",
          "Digital Marketing Solutions",
          "Smart Learning",
          "Conference Room Solutions",
          "Auditorium Solutions",
          "Security & Surveillance",
          "Multimedia & Animation",
          "Police Automation",
          "Audio Video Broadcasting",
        ].map((item, index) => (
          <li key={index}>
            <Link
              to="#"
              className="inline-block pb-1 hover:border-b-2 hover:border-blue-500 hover:text-orange-500 transition duration-200"
            >
              {item}
            </Link>
          </li>
        ))}
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
  <div className="cursor-pointer hover:text-yellow-500 flex items-center gap-1">
    INDUSTRIES <MdKeyboardArrowDown />
  </div>
  {activeMenu === "industries" && (
    <div className="absolute top-full left-0 mt-2 w-[250px] md:w-[300px] bg-blue-100 text-black p-4 shadow-lg z-50">
      <ul className="flex flex-col gap-2 text-xs md:text-sm">
        {[
          "Education",
          "Healthcare",
          "Banking",
          "Manufacturing",
          "Retail",
          "Life Sciences",
          "Consumer Goods",
        ].map((item, index) => (
          <li key={index}>
            <Link
              to="#"
              className="inline-block pb-1 hover:border-b-2 hover:border-blue-500 hover:text-orange-500 transition duration-200"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>


            <li className="cursor-pointer hover:text-yellow-500"><a href="/blog">BLOG</a></li>
            <li className="cursor-pointer hover:text-yellow-500"><a href="/career">CAREER</a></li>
            <li className="cursor-pointer hover:text-yellow-500"><a href="/contact">CONTACT</a></li>
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
              LOGIN
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
