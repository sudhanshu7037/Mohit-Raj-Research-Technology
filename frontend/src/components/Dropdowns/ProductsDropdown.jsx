import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductsDropdown = ({ handleMouseEnter, handleMouseLeave, activeMenu }) => {
  return (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter("products")}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-md font-semibold cursor-pointer hover:text-yellow-400 flex items-center gap-1 font-basis transition duration-300">
        OUR PRODUCTS <MdKeyboardArrowDown />
      </div>

      {activeMenu === "products" && (
        <div
          className="fixed top-[104px] left-0 w-screen z-50 min-h-[400px]" // ⭐ Minimum height added
          onMouseEnter={() => handleMouseEnter("products")}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-gradient-to-br from-purple-100 via-yellow-50 to-blue-100 px-10 py-12 shadow-2xl backdrop-blur-md transition-all duration-300 max-h-[600px] overflow-visible"> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  title: "Education Domain",
                  items: [
                    "University Automation Software",
                    "Engineering College Management and Information System",
                    "College/Institute Management Systems",
                    "School Management System",
                    "Online Examination Management System",
                    "Entrance Exam Management and Information System",
                    "Smart Learning & Content Management System (SLCMS)",
                    "Library Management System",
                  ],
                },
                {
                  title: "Medical Domain",
                  items: [
                    "Medical College Management and Information System.",
                    "Hospital Management & Information system.",
                    "E-Hospital Management",
                    "E-clinic Management",
                    "Bioinformatics Management and Information System",
                  ],
                },
                {
                  title: "Corporate Domain",
                  items: [
                    "E-Company System",
                    "E- Business Management",
                    "CRM Software",
                    "Account Management System (Trulymax-S)",
                    "Account Management System (Trulymax-M)",
                    "Finance Account Management System (Trulymax-L)",
                    "Human Resource Management System",
                    "Inventory Management System",
                    "Purchase Management System",
                    "E-Banking Management System",
                  ],
                },
                {
                  title: "Public & Mixed Domain",
                  items: [
                    "Police Management System",
                    "E-Govt.Office Management System",
                    "Credit Cooperative Society Management Information System",
                  ],
                },
              ].map((domain, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-yellow-400 border border-gray-200 hover:border-yellow-300 transition duration-300 transform hover:-translate-y-1"
                >
                  <h2 className="text-center text-lg font-bold bg-gradient-to-r from-yellow-400 to-pink-500 text-white py-2 px-3 rounded-lg shadow-md hover:shadow-xl hover:from-pink-500 hover:to-yellow-400 transition-all duration-300">
                    {domain.title}
                  </h2>

                  <ul className="mt-5 space-y-2">
                    {domain.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="hover:bg-gradient-to-r from-yellow-100 via-pink-100 to-blue-100 hover:text-black px-3 py-1 rounded-md transition duration-300 cursor-pointer text-sm"
                      >
                        <Link to="#">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDropdown;
