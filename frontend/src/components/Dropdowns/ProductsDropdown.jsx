
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";


const ProductsDropdown = ({handleMouseEnter, handleMouseLeave, activeMenu}) => {
  return (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter("products")}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-md font-semibold cursor-pointer hover:text-yellow-300 flex items-center gap-1 font-basis">
        OUR PRODUCTS <MdKeyboardArrowDown />
      </div>

      {activeMenu === "products" && (
        <div className=" fixed top-[104px] left-0 w-screen bg-white text-black p-4 shadow-lg z-50 ">
          <div className="flex gap-8  ">
            <div>
              <h1 className="text-lg font-bold mb-2">Eduction Domain</h1>
              <ul className="flex flex-col gap-4 text-sm font-basis">
                <li className="hover:text-yellow-300">
                  <Link to="#">University Automation Software</Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">
                    Engineering College Management <br /> and Information System
                  </Link>
                </li >
                <li className="hover:text-yellow-300">
                  <Link to="#">College/Institute Management Systems</Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">School Management System</Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">Online Examination Management System</Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">
                    Entrance Exam Management <br /> and Information System
                  </Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">
                    Smart Learning & Content <br /> Management System (SLCMS){" "}
                  </Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">Library Management System </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-bold mb-2">Medical domain</h1>
              <ul className="flex flex-col gap-4 text-sm ">
                <li className="hover:text-yellow-300">
                  <Link to="#">
                    Medical College Management <br /> and Information System.{" "}
                  </Link>
                </li >
                <li className="hover:text-yellow-300">
                  <Link to="#">Hospital Management & Information system. </Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">E-Hospital Management</Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#"> E-clinic Management</Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">
                    Bioinformatics Management <br />
                    and Information System
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-bold mb-2">Corporate Domain</h1>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="hover:text-yellow-300">
                  <Link to="#">E-Company System </Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">E- Business Management</Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">CRM Software</Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">
                    Account Management System <br /> (Trulymax-S)
                  </Link>
                </li >
                <li className="hover:text-yellow-300">
                  <Link to="#">
                    Account Management System <br />
                    (Trulymax-M)
                  </Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">
                    {" "}
                    Finance Account Management System <br />
                    (Trulymax-L)
                  </Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">Human Resource Management System</Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">Inventory Management System</Link>
                </li>

                <li className="hover:text-yellow-300">
                  <Link to="#">Purchase Management System </Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">E-Banking Management System</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg font-bold mb-2">Public & Mixed Domain</h1>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="hover:text-yellow-300">
                  <Link to="#">Police Management System </Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">E-Govt.Office Management System</Link>
                </li>
                <li className="hover:text-yellow-300">
                  <Link to="#">
                    Credit Cooperative Society <br /> Management Infromation
                    System
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsDropdown;
