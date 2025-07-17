import { useRef } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const IndustriesDropdown = ({ openDropdown, setOpenDropdown }) => {
  const isOpen = openDropdown === "industries";
  const timeoutRef = useRef(null);

  const industryLinks = [
    { name: "Education", path: "/Education" },
    { name: "Healthcare", path: "/Healthcare" },
    { name: "Banking", path: "/Banking" },
    { name: "Manufacturing", path: "/Manufacturing" },
    { name: "Retail", path: "/Retail" },
    { name: "Life Sciences", path: "/LifeSciences" },
    { name: "Consumer Goods", path: "/ConsumerGoods" },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown("industries");
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 1000); // 1 seconds
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cursor-pointer hover:text-yellow-500 flex items-center gap-1">
        INDUSTRIES
        <MdKeyboardArrowDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[250px] md:w-[300px] bg-white text-black p-4 shadow-lg z-50 rounded-md">
          <ul className="flex flex-col gap-2 text-xs md:text-sm">
            {industryLinks.map((item, index) => (
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

export default IndustriesDropdown;
