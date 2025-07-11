import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const SolutionsDropdown = ({ openDropdown, setOpenDropdown }) => {
  const isSolutionsOpen = openDropdown === "solutions";
  const timeoutRef = useRef(null);

  const solutionItems = [
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
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown("solutions");
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 10000); // 1 seconds
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer hover:text-yellow-500 flex items-center gap-1">
        SOLUTIONS
        <MdKeyboardArrowDown
          className={`transition-transform duration-300 ${
            isSolutionsOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isSolutionsOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[250px] md:w-[300px] bg-blue-100 text-black p-4 shadow-lg z-50 rounded-md">
          <ul className="flex flex-col gap-2 text-xs md:text-sm">
            {solutionItems.map((item, index) => (
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
  );
};

export default SolutionsDropdown;
