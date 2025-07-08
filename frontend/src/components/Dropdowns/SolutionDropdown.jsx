import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

const SolutionsDropdown = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const toggleSolutions = () => setIsSolutionsOpen(!isSolutionsOpen);

  const solutionItems = [
    { name: "University Digitalization", path: "/solutions/university-digitalization" },
    { name: "Medical College Digitalization", path: "/solutions/medical-college-digitalization" },
    { name: "MRTiON Digital Education", path: "/solutions/mrtion-digital-education" },
    { name: "Library Digitalization", path: "/solutions/library-digitalization" },
    { name: "Digital Marketing Solutions", path: "/solutions/digital-marketing" },
    { name: "Smart Learning", path: "/solutions/smart-learning" },
    { name: "Conference Room Solutions", path: "/solutions/conference-room" },
    { name: "Auditorium Solutions", path: "/solutions/auditorium" },
    { name: "Security & Surveillance", path: "/solutions/security-surveillance" },
    { name: "Multimedia & Animation", path: "/solutions/multimedia-animation" },
    { name: "Police Automation", path: "/solutions/police-automation" },
    { name: "Audio Video Broadcasting", path: "/solutions/audio-video-broadcasting" },
  ];

  return (
    <div className="relative">
      <div
        className="cursor-pointer hover:text-yellow-500 flex items-center gap-1"
        onClick={toggleSolutions}
      >
        SOLUTIONS
        <MdKeyboardArrowDown
          className={`transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isSolutionsOpen && (
        <div className="absolute top-full left-0 mt-2 w-[250px] md:w-[300px] bg-blue-100 text-black p-4 shadow-lg z-50">
          <ul className="flex flex-col gap-2 text-xs md:text-sm">
            {solutionItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="inline-block pb-1 hover:border-b-2 hover:border-blue-500 hover:text-orange-500 transition duration-200"
                >
                  {item.name}
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
