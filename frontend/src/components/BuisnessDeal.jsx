import React from "react";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const BuisnessDeal = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation will trigger only once
    });
  }, []);

  return (
    <section className="bg-[#f5f9fc] py-16 px-4 md:px-20 ">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image with Animation */}
        <div data-aos="fade-up" className="relative">
          <img
            src="https://advisorhtml.websitelayout.net/img/content/about-01.jpg"
            alt="Business Meeting"
            className="rounded-xl shadow-lg"
          />
         <div className="absolute -bottom-6 -left-6 bg-[#001d3d] text-white px-6 py-4 rounded-xl text-center shadow-lg">
  <p className="   text-xl">Trusted By</p>
  <h3 className="text-4xl font-bold">75k</h3>
</div>

        </div>

        {/* Right Text Section */}
        <div className="space-y-6"> 
          <p className="text-[#ffc107] font-semibold uppercase ">
           • About Us
          </p>
          <h2 className="text-5xl font-bold text-[#001d3d] font-houschka ">
            The essential steps for <br /> business success
          </h2>
          <p className="text-gray-600">
            Our objective is to offer a high-quality service and a dependable
            source of income to our investors while minimizing risks and
            simplifying relationships.
          </p>

          {/* Features */}
          <div className="flex items-center gap-12">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="text-2xl">🔄</div>
                <div>
                  <h4 className="font-semibold text-[#001d3d]">
                    Business Innovations
                  </h4>
                  <p className="text-gray-500 text-sm">Best working</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-2xl">📝</div>
                <div>
                  <h4 className="font-semibold text-[#001d3d]">
                    Marketing Solution
                  </h4>
                  <p className="text-gray-500 text-sm">Best working</p>
                </div>
              </div>
            </div>

            {/* Bottom Right Small Image with Animation */}
            <div data-aos="fade-up" className="mt-6 max-w-xs flex">
              <img
                src="https://advisorhtml.websitelayout.net/img/content/about-02.jpg"
                alt="Laptop Handshake"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuisnessDeal;
