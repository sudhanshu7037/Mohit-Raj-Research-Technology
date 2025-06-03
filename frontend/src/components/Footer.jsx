import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#0A203B] text-white mt-20 pt-16 pb-8 relative">
      {/* ========================== */}
      {/* Top Footer Section (Logo + Contact Info) */}
      {/* ========================== */}
      <div className="absolute -top-20 w-full max-w-7xl mx-auto left-0 right-0 flex flex-col md:flex-row justify-between items-center bg-white rounded-md p-6 mb-16">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0 md:flex-1">
          <div className="flex items-center gap-3 bg-yellow-400 px-6 py-4 rounded-md w-fit">
            <img
              src="/advisor-logo-white.svg"
              alt=""
              className="w-10 h-10"
            />
            <div>
              <h1 className="font-bold text-xl text-white">MOHITRAJ</h1>
              <p className="text-white text-xs uppercase tracking-wider font-semibold">
                RESEARCH . TECH
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 text-sm">
          {/* Address */}
          <div className="flex items-center gap-2">
            <IoLocationOutline className="w-14 h-10 text-yellow-400" />
            <p>74 Norava Street 542B, Great North Town 51 MT.</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <BsPhone className="w-6 h-6 text-yellow-400" />
            <div>
              <p>(+44) 123 456 789</p>
              <p>(+1) 523-567-987</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <TfiEmail className="w-7 h-7 text-yellow-400" />
            <div>
              <p>addyour@email</p>
              <p>info@yourdomain</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========================== */}
      {/* Bottom Footer Main Section */}
      {/* ========================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-white">
          {/* About Us */}
          <div>
            <h3 className="font-semibold mb-4 uppercase">About Us</h3>
            <p className="mb-6">
              We have 25+ years experience. Helping you overcome business challenges.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-slate-700 rounded-full p-3 hover:bg-yellow-400 hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-slate-700 rounded-full p-3 hover:bg-yellow-400 hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="bg-slate-700 rounded-full p-3 hover:bg-yellow-400 hover:text-white transition"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-slate-700 rounded-full p-3 hover:bg-yellow-400 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 uppercase">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Strategic Planning</li>
              <li>Market Analysis</li>
              <li>Finance Planning</li>
              <li>Investment Idea</li>
              <li>Digital Solutions</li>
            </ul>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="font-semibold mb-4 uppercase">Recent News</h3>
            <div className="space-y-6">
              <div className="flex gap-3 items-center">
                <img
                  src="https://advisorhtml.websitelayout.net/img/blog/blog-01.jpg"
                  alt="People saying about business."
                  className="w-16 h-12 rounded-md object-cover"
                />
                <div>
                  <p className="font-semibold">People saying about business.</p>
                  <p className="text-gray-400 text-xs mt-1">8 Jan, 2024</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src="https://advisorhtml.websitelayout.net/img/blog/blog-02.jpg"
                  alt="Providing all types of business"
                  className="w-16 h-12 rounded-md object-cover"
                />
                <div>
                  <p className="font-semibold">Providing all types of business</p>
                  <p className="text-gray-400 text-xs mt-1">3 Jan, 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4 uppercase">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for discounts and more.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Subscribe with us"
                className="flex-grow px-4 py-2 rounded-md text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-400 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer Text */}
        <div className="mt-16 text-center text-gray-400 text-sm">
          ©2025 - Copyright Mohitraj Research Tech Pvt. Ltd., All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
