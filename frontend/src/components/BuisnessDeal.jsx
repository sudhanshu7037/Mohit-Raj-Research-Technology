import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutus from "../assets/homepageimages/aboutusimage/image.png";

const BuisnessDeal = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 animate-gradient-x opacity-30"></div>

      <div className="relative grid md:grid-cols-2 gap-10 items-center z-10">
        {/* Left Image */}
        <div data-aos="fade-up" className="relative">
          <img src={Aboutus} alt="Teamwork" className=" shadow-2xl" />
        </div>

        {/* Right Text Content */}
        <div className="space-y-6" data-aos="fade-left">
          <p className="text-red-600 font-semibold uppercase tracking-wide text-2xl">
            About Mohitraj
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 font-houschka">
            Empowering Businesses with Creative Tech Solutions
          </h2>
          <p className="text-gray-700 font-basis text-xl text-justify">
            Mohitraj Research Tech Pvt Ltd is leading ISO 9001:2015 and ISO
            27001:2022 certified company providing wordclass consultancy and
            services from more than 20 years under the brand name <span className="text-red-600 text-xl font-bold">Godigitally</span> and deliver his services from a
            cluster to international level. We at Mohitraj Research 
            Tech Private Limited are experts in providing innovative
            software development for multiple platforms and domains , IT
            consulting solutions and IT Infrastructure development that empower
            enterprises to succeed in the constantly changing digital world.
            From idea to code, strategy to scaling, we help organizations
            convert ideas into smart, scalable, and secure digital solutions.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="bg-white bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-md hover:scale-105 transition">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold text-[#001d3d]">
                Digital Transformation
              </h4>
              <p className="text-gray-600 text-sm">
                Innovative and scalable solutions
              </p>
            </div>

            <div className="bg-white bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-md hover:scale-105 transition">
              <div className="text-3xl mb-2">💼</div>
              <h4 className="font-semibold text-[#001d3d]">
                Business Strategy
              </h4>
              <p className="text-gray-600 text-sm">
                Customized market-driven plans
              </p>
            </div>

            <div className="bg-white bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-md hover:scale-105 transition">
              <div className="text-3xl mb-2">🔍</div>
              <h4 className="font-semibold text-[#001d3d]">
                Research & Analysis
              </h4>
              <p className="text-gray-600 text-sm">
                Data-driven decision making
              </p>
            </div>

            <div className="bg-white bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-md hover:scale-105 transition">
              <div className="text-3xl mb-2">🌐</div>
              <h4 className="font-semibold text-[#001d3d]">Global Presence</h4>
              <p className="text-gray-600 text-sm">Serving clients worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Animation CSS */}
      <style jsx="true">{`
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradientMove 10s ease infinite;
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default BuisnessDeal;
