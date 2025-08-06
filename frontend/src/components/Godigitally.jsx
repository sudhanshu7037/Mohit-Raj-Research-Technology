import React from 'react';
import GodigitallyLogo from "../assets/homepageimages/godigitallyimage/godigitallylogo.png";

const Godigitally = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly px-4 py-6 gap-4 bg-red-50 ">
        {/* Gradient Text */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#ea4335] via-[#fbbc05] via-[#34a853] to-[#4c8af3] bg-clip-text text-transparent font-houschka text-center md:text-left">
          Better Tomorrow Starts With Us
        </div>

        {/* Logo aligned to text height */}
        <div className="h-12 sm:h-14 md:h-[60px] w-auto">
          <img
            src={GodigitallyLogo}
            alt="Godigitally Logo"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Godigitally;
