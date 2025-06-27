import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner3 from "../assets/bannerimages/digital_university_solutions[1].png"
const slides = [
  {
    image: "https://advisorhtml.websitelayout.net/img/banner/slider-02.jpg",
    title: "Excellent Services For Your Business",
    description: "We design secure, scalable, and innovative IT solutions for businesses around the globe.",
  },
  {
    image: "https://advisorhtml.websitelayout.net/img/banner/slider-01.jpg",
    title: "Empowering Your Digital Transformation",
    description: "Transform your ideas into reality with our cutting-edge technology and expert solutions.",
  },
  {
    image: Banner3,
    title: "",
    description: "Stay ahead of the competition with our innovative approach to solving complex business challenges.",
  },
  {
    image: "https://advisorhtml.websitelayout.net/img/banner/slider-01.jpg",
    title: "University digitalization solution for digital transformation of universities ",
    description: "Revolutionizing Learning , Innovative Education, Elevate Excellence by our unique Digital University Solution  Digital Transformation for Higher Education.",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
   <section
  className="relative w-full h-[750px] flex items-center text-white transition-all duration-1000"
  style={{
    backgroundImage: `url(${currentSlide.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#051b2e] to-transparent z-0" />

  {/* Content Wrapper */}
  <div className="z-10 w-full px-4 md:px-10 font-houschka">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[600px] text-left"
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
          {currentSlide.title}
        </h1>
        <p className="text-base md:text-lg mb-6 max-w-md">
          {currentSlide.description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-md shadow-lg"
        >
          Discover More
        </motion.button>
      </motion.div>
    </AnimatePresence>
  </div>
</section>

  );
};

export default Banner;
