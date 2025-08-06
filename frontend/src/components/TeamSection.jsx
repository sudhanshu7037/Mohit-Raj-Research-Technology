import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jitendra Singh Rajput ",
    role: "Managing Director",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQHbWu84U5FnTA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516610954126?e=1752710400&v=beta&t=DVtuojlFa11XSht6ZtNPgo4Y_S7ObKjF4AEGil7Tdqw",
  },
  {
    name: "Sonali Bhatia",
    role: "Senior HR Manager",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEKtUGKDAZ8_Q/profile-displayphoto-shrink_400_400/B56Zc09TmVHoAo-/0/1748940176895?e=1754524800&v=beta&t=SYCRCoPDRssTN1bP999yqrI5Mhu-R77YrW8hs_Ly8wg",
  },
  {
    name: "Anne Arias",
    role: "Statistical Analyst",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Gerald Ruggiero",
    role: "Business Eng.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-7xl mx-auto">
        <p className="text-yellow-500 font-bold text-xl uppercase mb-2"> Meet Our Team</p>
        <h2 className="text-4xl font-bold text-blue-900 font-houschka mb-12">Our Specialized Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#f3faff] rounded-xl p-6 flex flex-col items-center shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="w-32 h-32 rounded-full border-[4px] border-yellow-400 overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-[#001d3d]">{member.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{member.role}</p>

              <div className="flex gap-4 text-gray-600">
                <a href="#"><FaFacebookF className="hover:text-yellow-500" /></a>
                <a href="#"><FaTimes className="hover:text-yellow-500" /></a>
                <a href="#"><FaInstagram className="hover:text-yellow-500" /></a>
                <a href="https://www.linkedin.com/in/jitendra-singh-rajput-36192316/  "><FaLinkedinIn className="hover:text-yellow-500" /></a>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
