import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const SolutionsDropdown = ({ openDropdown, setOpenDropdown }) => {
  const isSolutionsOpen = openDropdown === "solutions";
  const timeoutRef = useRef(null);

  const solutionItems = [
    {
      title: "University Digitalization Solution",
      path: "/solutions/university-digitalization",
    },
    {
      title: "Medical College Digitalization Solution",
      path: "/solutions/medical-college-digitalization",
    },
    {
      title: "MRTiON Digital Education Solution",
      path: "/solutions/mrtion-digital-education",
    },
    {
      title: "Library Digitalization Solution",
      path: "/solutions/library-digitalization",
    },
    {
      title: "Digital Marketing Solution",
      path: "/solutions/digital-marketing",
    },
    {
      title: "Smart Learning Solution",
      path: "/solutions/smart-learning",
    },
    {
      title: "Conference Room Solution",
      path: "/solutions/conference-room",
    },
    {
      title: "Auditorium Solution",
      path: "/solutions/auditorium",
    },
    {
      title: " CCTV & Security & Surveillance Solution",
      path: "/solutions/security-surveillance",
    },
    {
      title: "Multimedia & Animation Solution",
      path: "/solutions/multimedia-animation",
    },
    {
      title: "Police Automation Solution",
      path: "/solutions/police-automation",
    },
    {
      title: "Audio Video Broadcasting Solution",
      path: "/solutions/audio-video-broadcasting",
    },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown("solutions");
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 1000); // 1 second
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
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[250px] md:w-[300px] bg-red-100 text-black p-4 shadow-lg z-50 rounded-md">
          <ul className="flex flex-col gap-2 text-xs md:text-sm">
            {solutionItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="inline-block pb-1 hover:border-b-2 hover:border-blue-500 hover:text-orange-500 transition duration-200"
                >
                  {item.title}
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
