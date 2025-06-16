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
    }, 5000);
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
          <span>+9999910150</span>
          <span className="px-2">|</span>
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
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 items-center text-md font-semibold font-basis">
            <li className="hover:text-yellow-400 cursor-pointer font-basis">
              <a href="/who we are">WHO WE ARE</a>
            </li>

            {/* Products Dropdown */}
            <ProductsDropdown
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              activeMenu={activeMenu}
            />

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-md font-semibold cursor-pointer hover:text-yellow-300 flex items-center gap-1 font-basis">
                WHAT WE DO <MdKeyboardArrowDown />
              </div>

              {activeMenu === "services" && (
                <div className="absolute top-full left-0 mt-2 w-[300px] bg-white text-black p-4 shadow-lg z-50 ">
                  <div className="flex gap-8">
                    <div>
                      <ul className="flex flex-col gap-4  text-sm font-basis">
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
                          <Link to="/HardwareNetworking">
                            Hardware & Networking Management Solutions
                          </Link>
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
                          <Link to="#">Video Conferencing</Link>
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

            {/* Solutions Dropdown */}

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-md font-semibold cursor-pointer hover:text-yellow-300 flex items-center gap-1 font-basis">
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
              <div className="text-md font-basis font-semibold cursor-pointer hover:text-yellow-300 flex items-center gap-1">
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

            <li className="hover:text-yellow-400 cursor-pointer text-md font-basis">
              <a href="/blog">BLOG</a>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer text-md font-basis">
              <a href="/career">CAREER</a>
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
