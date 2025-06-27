import React, { useState, useEffect } from "react";
import ServicesDropdown from "./Dropdowns/ServicesDropdown";
import SolutionsDropdown from "./Dropdowns/SolutionDropdown";
import IndustriesDropdown from "./Dropdowns/IndustriesDropdown";
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
import Logo2 from "../assets/new MRTPL-Logo.png";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

 const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close if same dropdown clicked
    } else {
      setOpenDropdown(dropdownName); // Open clicked dropdown
    }
  };


  // const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  // const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  

  // const toggleSolutions = () => {
  //   setIsSolutionsOpen(!isSolutionsOpen);
  //   setIsIndustriesOpen(false);
  // };

  // const toggleIndustries = () => {
  //   setIsIndustriesOpen(!isIndustriesOpen);
  //   setIsSolutionsOpen(false);
  // };

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

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
        <div className="absolute inset-0 w-full h-full bg-black">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800 transform -skew-x-12 origin-left"></div>
        </div>
        <div className="relative flex justify-between px-4 lg:px-20 items-center h-full z-10">
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>+9999910150</span>
            <span className="px-1 md:px-2">|</span>
            <FaEnvelope />
            <a href="#" className="hover:underline">mohitrajit@gmail.com</a>
          </div>
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
      <nav className={`fixed top-8 md:top-10 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white "
      }`}>
        <div className="h-16 md:h-20 flex justify-between items-center px-4 lg:px-20">
          <Link to="/">
            <img src={Logo2} alt="MRTPL Logo" className="h-10 md:h-12 lg:h-16 w-auto cursor-pointer" />
          </Link>

          <ul className="hidden md:flex gap-4 lg:gap-6 items-center text-sm md:text-md font-semibold">
            <li className="hover:text-yellow-500 cursor-pointer">
              <a href="/who we are">WHO WE ARE</a>
            </li>

            <ProductsDropdown
              openDropdown={openDropdown}
  handleDropdownToggle={handleDropdownToggle}
            />

            <ServicesDropdown
              openDropdown={openDropdown}
  handleDropdownToggle={handleDropdownToggle}
            />

            {/* Solutions */}
           <SolutionsDropdown 
           
           openDropdown={openDropdown}
  handleDropdownToggle={handleDropdownToggle}
           
           />

            {/* Industries */}
           <IndustriesDropdown
            openDropdown={openDropdown}
  handleDropdownToggle={handleDropdownToggle}
           
           />

            <li><a href="/blog">BLOG</a></li>
            <li><a href="/career">CAREER</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>

          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div className="hidden md:block">
            <Link to="/admin/login" className="bg-yellow-500 font-semibold px-5 py-2 rounded-md text-white text-2xl md:text-sm">
              Login
            </Link>
          </div>
        </div>

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
