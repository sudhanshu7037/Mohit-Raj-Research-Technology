import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const IndustriesDropdown = ({ openDropdown, handleDropdownToggle }) => {
  const isOpen = openDropdown === "industries";

  return (
    <div className="relative">
      <div
        className="cursor-pointer hover:text-yellow-500 flex items-center gap-1"
        onClick={() => handleDropdownToggle("industries")}
      >
        INDUSTRIES
        <MdKeyboardArrowDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[250px] md:w-[300px] bg-white text-black p-4 shadow-lg z-50">
          <ul className="flex flex-col gap-2 text-xs md:text-sm">
            {[
              "Education",
              "Healthcare",
              "Banking",
              "Manufacturing",
              "Retail",
              "Life Sciences",
              "Consumer Goods",
            ].map((item, index) => (
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

export default IndustriesDropdown;
