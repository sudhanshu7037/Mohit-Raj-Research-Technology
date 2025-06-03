import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


const MobileMenuNavbar = ({openSubMenu, toggleSubMenu}) => {
  return (
     <div className="md:hidden bg-white   text-black px-6 py-4 space-y-4">
            <ul>
              <li className="cursor-pointer">HOME</li>
              <li className="cursor-pointer">ABOUT</li>
            </ul>
            {/* Toggle Submenus */}
            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSubMenu("services")}
              >
                <span>SERVICES</span>
                <MdKeyboardArrowDown />
              </div>
              {openSubMenu === "services" && (
                <ul className="ml-4 space-y-1 mt-2 text-sm text-black">
                  <li>Service1</li>
                  <li>Service2</li>
                  <li>Service3</li>
                </ul>
              )}
            </div>

            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSubMenu("products")}
              >
                <span>PRODUCTS</span>
                <MdKeyboardArrowDown />
              </div>
              {openSubMenu === "products" && (
                <ul className="ml-4 space-y-1 mt-2 text-sm  text-black">
                  <li>Product 1</li>
                  <li>Product 2</li>
                  <li>Product 3</li>
                </ul>
              )}
            </div>

            <div>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSubMenu("industries")}
              >
                <span>INDUSTRIES</span>
                <MdKeyboardArrowDown />
              </div>
              {openSubMenu === "industries" && (
                <ul className="ml-4 space-y-1 mt-2 text-sm  text-black  ">
                  <li>Industry 1</li>
                  <hr className="border-gray-300" />
                  <li>Industry 2</li>
                  <li>Industry 3</li>
                </ul>
              )}
            </div>

            <ul>
              <li className="cursor-pointer">BLOG</li>
              <li className="cursor-pointer">CONTACT</li>
            </ul>
            <button className="w-full bg-yellow-500 py-2 rounded-md text-white mt-4">
              FREE QUOTE
            </button>
          </div>
  )
}

export default MobileMenuNavbar