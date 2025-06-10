import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const backgrounds = [
  "https://advisorhtml.websitelayout.net/img/banner/slider-02.jpg",
  "https://advisorhtml.websitelayout.net/img/banner/slider-01.jpg",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="relative w-full h-[750px] flex items-center text-white transition-all duration-1000"
        style={{
          backgroundImage: `url(${backgrounds[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051b2e]   to-transparent  z-0" />

        {/* Optional: dark overlay on top of gradient (stacked) */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-30 z-0" /> */}

        {/* Content */}
        <div className="z-10 max-w-7xl mx-auto px-10 font-houschka ">
          <motion.h1
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Excellent Services  For Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-lg mb-6 max-w-xl"
          >
            We design secure, scalable, and innovative IT solutions for
            businesses around the globe.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-md shadow-lg"
          >
            Discover More
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default Banner;
