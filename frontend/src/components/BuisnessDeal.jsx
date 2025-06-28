import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
          <img
            src="https://advisorhtml.websitelayout.net/img/content/about-01.jpg"
            alt="Teamwork"
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-[#001d3d] text-white px-6 py-4 rounded-xl text-center shadow-lg">
            <p className="text-lg">Trusted By</p>
            <h3 className="text-3xl font-bold">50K+</h3>
          </div>
        </div>

        {/* Right Text Content */}
        <div className="space-y-6" data-aos="fade-left">
          <p className="text-red-600 font-semibold uppercase tracking-wide">
            • About Mohitraj
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 font-houschka">
            Empowering Businesses with Creative Tech Solutions
          </h2>
          <p className="text-gray-700 font-basis">
           Mohitraj Research Tech Pvt. Ltd. Company Incorporated under Company Act 1956 by the Registrar of companies, NCT of Delhi & Haryana. Company Provides world class consultancy and service in the field of Education & Development, IT enables services, marketing research, Industrial Research, Media Research, Social Research, Feed back Analysis & Advertising etc.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="bg-white bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-md hover:scale-105 transition">
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold text-[#001d3d]">Digital Transformation</h4>
              <p className="text-gray-600 text-sm">Innovative and scalable solutions</p>
            </div>

            <div className="bg-white bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-md hover:scale-105 transition">
              <div className="text-3xl mb-2">💼</div>
              <h4 className="font-semibold text-[#001d3d]">Business Strategy</h4>
              <p className="text-gray-600 text-sm">Customized market-driven plans</p>
            </div>

            <div className="bg-white bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-md hover:scale-105 transition">
              <div className="text-3xl mb-2">🔍</div>
              <h4 className="font-semibold text-[#001d3d]">Research & Analysis</h4>
              <p className="text-gray-600 text-sm">Data-driven decision making</p>
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
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default BuisnessDeal;
