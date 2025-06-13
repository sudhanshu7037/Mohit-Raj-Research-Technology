import React from "react";
import Logo3 from "../../assets/softwaredev.png";

const SoftwareDevelopment = () => {
  return (
    <>
      {/* Parent wrapper with relative for positioning overlay */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={Logo3}
          alt="Software Development Background"
          className="w-full h-full object-cover"
        />

        {/* Dark Transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Content on top of overlay */}
        <div className="absolute inset-0 z-20 flex items-center   ">
          <h1 className="text-white text-4xl font-bold font-houschka">
            Software Development
          </h1>
        </div>
      </div>
      <div className="w-full h-screen flex items-start justify-start ml-6 bg-white pt-20">
        <div className="max-w-3xl px-4 text-left  ">
          <h1 className="text-5xl font-semibold mb-6 text-gray-900 font-houschka">
           Why Mohit Raj
          </h1>
          <p className="text-lg text-gray-700 leading-8 font-basis">
            With our team of experienced developers and cutting-edge
            technologies, we strive to elevate your digital presence and
            revolutionize the way you do business. At MOHITRAJ RESEARCH AND
            TECHNOLOGY PRIVATE LIMITED, we understand the importance of staying
            ahead in today's competitive market. That's why we offer a wide
            range of bespoke software development services designed to drive
            your success. From web and mobile app development to custom software
            solutions, we are committed to delivering high-quality products that
            exceed your expectations.
          </p>
         
        </div>
      </div>
      <div>hello</div>
    </>
  );
};

export default SoftwareDevelopment;
