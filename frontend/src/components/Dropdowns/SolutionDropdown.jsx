import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const SolutionsDropdown = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const toggleSolutions = () => setIsSolutionsOpen(!isSolutionsOpen);

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

  return (
    <div className="relative">
      <div
        className="cursor-pointer hover:text-yellow-500 flex items-center gap-1"
        onClick={toggleSolutions} 
      >
        SOLUTIONS
        <MdKeyboardArrowDown
          className={`transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`} // rotate upar niche
        />
      </div>

      {isSolutionsOpen && (
        <div className="absolute top-full left-0 mt-2 w-[250px] md:w-[300px] bg-blue-100 text-black p-4 shadow-lg z-50">
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
