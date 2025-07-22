import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import Logo2 from "../assets/new MRTPL-Logo.png";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8  bottom-0 w-full">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Left Section - Logo */}
        <div className="flex items-center mb-4 lg:mb-0">
          <img src={Logo2} alt="Footer Logo" className="h-12 w-auto lg:h-16 mt-2 ml-4 " />
        </div>
        {/* Center Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Row 1 - Copyright */}
          <div className="mb-2">
            <p>©2025 MOHIT RAJ Research tech pvt ltd</p>
          </div>
          {/* Row 2 - Services and Policies */}
          <div className="mb-2 tracking-wider">
            <ul className="flex flex-wrap justify-center lg:justify-start space-x-4">
              <li className="hover:underline">
                <a href="">Privacy</a>
              </li>
              <li className="hover:underline">
                <a href="">Cookie Policy</a>
              </li>
              <li className="hover:underline">
                <a href="">Accessibility Declaration</a>
              </li>
              <li className="hover:underline">
                <a href="">Disclaimer</a>
              </li>
              <li className="hover:underline">
                <a href="">Security Policy</a>
              </li>
              <li className="hover:underline">
                <a href="">California Notice at Collection</a>
              </li>
            </ul>
            <p className="hover:underline mt-2">Customize cookies</p>
          </div>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="flex space-x-4 items-center mt-4 lg:mt-0 gap-4 lg:mr-8">
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-gray-400" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="text-white hover:text-gray-400" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn className="text-white hover:text-gray-400" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}