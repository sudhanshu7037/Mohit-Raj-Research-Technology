import React from 'react';
import Logo6 from "../../assets/NEWIMG.png";
import Logo1 from "../../assets/SofwareConsulting.png";
import Logo2 from "../../assets/Custom.png";
import Logo4 from "../../assets/Erp.png";
import { FaPaintBrush, FaVideo, FaArrowRight } from "react-icons/fa";
import bgImage from "../../assets/Backgroundsoftware.jpg";
import { FaCheckCircle } from "react-icons/fa";
import video from "../../assets/animation vedio.mp4"
import { FaTools, FaLaptopCode, FaMagic } from "react-icons/fa";

const techStack = [
  {
    icon: <FaMagic className="text-pink-500 text-xl" />,
    label: "Animation Tools",
    items: ["Adobe After Effects", "Blender", "Toon Boom", "Cinema 4D"],
  },
  {
    icon: <FaLaptopCode className="text-purple-500 text-xl" />,
    label: "Development Stack",
    items: ["React.js", "GSAP", "Three.js", "WebGL", "Lottie"],
  },
  {
    icon: <FaTools className="text-blue-500 text-xl" />,
    label: "Editing & Design",
    items: ["Adobe Premiere", "Photoshop", "Illustrator", "Figma"],
  },
];

// Enhanced services array with img, alt, and points
const services = [
  {
    title: "2D & 3D Animation",
    description:
      "We create visually engaging 2D and 3D animations that bring your ideas to life. From explainer videos to animated commercials, our animations are designed to captivate and communicate effectively.",
    img: Logo6,
    alt: "2D & 3D Animation",
    points: ["High-quality visuals", "Custom animations", "Engaging storytelling"],
  },
  {
    title: "Motion Graphics & VFX",
    description:
      "Our experts blend creativity and technology to produce high-quality motion graphics and visual effects. Ideal for promotional videos, presentations, and films that demand a cinematic touch.",
    img: Logo1,
    alt: "Motion Graphics & VFX",
    points: ["Cinematic effects", "Dynamic visuals", "Brand-focused design"],
  },
  {
    title: "Interactive Media Design",
    description:
      "We specialize in interactive multimedia that engages users through interactive videos, presentations, and simulations. Perfect for e-learning, product demos, and digital storytelling.",
    img: Logo2,
    alt: "Interactive Media Design",
    points: ["User engagement", "Interactive storytelling", "E-learning solutions"],
  },
  {
    title: "Character Design & Storyboarding",
    description:
      "Our creative team crafts unique characters and detailed storyboards to visualize concepts before production begins. This ensures storytelling clarity and artistic alignment from the start.",
    img: Logo4,
    alt: "Character Design & Storyboarding",
    points: ["Unique character creation", "Detailed storyboards", "Concept visualization"],
  },
  {
    title: "Multimedia Presentations",
    description:
      "We design multimedia presentations that combine audio, video, text, and animations to make your corporate or educational content compelling and memorable.",
    img: Logo6,
    alt: "Multimedia Presentations",
    points: ["Engaging presentations", "Multimedia integration", "Corporate branding"],
  },
  {
    title: "Video Editing & Post Production",
    description:
      "From basic editing to advanced post-production including color correction, sound design, and transitions — we provide end-to-end video enhancement services tailored to your brand voice.",
    img: Logo1,
    alt: "Video Editing & Post Production",
    points: ["Professional editing", "Sound design", "Color correction"],
  },
];

const MultimediaAnimation = () => {

{/*const industries = [
    'Film & Entertainment',
    'Advertising & Marketing',
    'Education & E-learning',
    'Gaming Industry',
    'Corporate Presentations',
    'Healthcare Visualizations',
    'Architecture Walkthroughs',
    'Social Media Content'
  ];*/}
  const points = [
    "2D & 3D Animation Design",
    "Motion Graphics for Brands",
    "Interactive Training Videos",
    "VFX & Visual Storytelling",
    "Augmented Reality Integration",
    "Explainer and Promo Videos",
  ];



  return (
    <>
      {/* First div */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={Logo6}
          alt="Multimedia and Animation Services"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
            MULTIMEDIA & ANIMATION SERVICES
          </h1>
          <p className="text-white text-base md:text-lg max-w-2xl mb-8">
            We bring your ideas to life through stunning animations, interactive
            media, and captivating visuals. Our multimedia and animation services
            help you communicate your message creatively and effectively across digital platforms.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              type="button"
              aria-label="Contact us to get started"
              className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition focus:outline-none focus:ring-2 focus:ring-white"
            >
              GET IN TOUCH
            </button>
            <button
              type="button"
              aria-label="View our portfolio"
              className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition focus:outline-none focus:ring-2 focus:ring-white"
            >
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </div>

      {/* Second div */}
      <div className="bg-white py-16 px-4 lg:px-24 text-center">
        {/* Top Text */}
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed font-basis">
          Our multimedia and animation services transform concepts into visual experiences.
          From 2D/3D animations to interactive videos and visual effects, we blend creativity with
          technology to bring stories to life. With a team of skilled animators, designers, and motion artists,
          we deliver content that enhances user engagement, marketing impact, and brand value across digital platforms.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">1200+</h3>
            <p className="text-gray-600 mt-2 text-center">
              Animation <br /> Projects Delivered
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">15+</h3>
            <p className="text-gray-600 mt-2 text-center">
              Years of <br /> Creative Expertise
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">500+</h3>
            <p className="text-gray-600 mt-2 text-center">
              Global <br /> Clients Served
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">25</h3>
            <p className="text-gray-600 mt-2 text-center">
              Countries <br /> Reached
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-300 max-w-5xl mx-auto" />
      </div>

      {/* Third div - Revamped Attractive Design */}
      <div className="bg-gradient-to-b from-gray-50 to-blue-50 py-16 px-4 lg:px-24 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 font-houschka animate-fade-in-down">
          Our Multimedia & Animation Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed font-basis animate-fade-in">
          Discover our cutting-edge multimedia solutions that captivate audiences with stunning visuals and interactive experiences.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((card, index) => (
            <div
              key={card.title}
              className="relative bg-white rounded-xl shadow-lg p-6 text-left transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500 border border-transparent animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image/Icon */}
              <div className="relative w-16 h-16 mb-4">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-contain rounded-md"
                />
                <div className="absolute inset-0 bg-blue-100 opacity-10 rounded-md"></div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {card.description}
              </p>

              {/* Points */}
              <ul className="space-y-2">
                {card.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-blue-800 text-sm"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-500 bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
{/* === New Section: Multimedia & Animation === */}
<section className="bg-gray-100 py-16 px-4 md:px-10 font-sans">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row gap-10 items-stretch">
      
      {/* === Left: Image === */}
      <div className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
        <img
          src={Logo6}
          alt="Multimedia & Animation Case Study"
          className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-500" />
      </div>

      {/* === Right: Content === */}
      <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-4">
          Multimedia & Animation Solutions
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Our team helped a creative studio elevate their digital content using
          powerful animation tools, 3D rendering, and interactive multimedia experiences.
          From explainer videos to real-time motion graphics, we delivered immersive
          solutions across platforms.
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>High-Quality 2D/3D Animation Production</li>
          <li>Interactive UI with Motion Graphics</li>
          <li>Real-Time Rendering & VFX Integration</li>
          <li>Custom Multimedia Portfolios & Storytelling</li>
        </ul>
<button className="w-28 bg-purple-700 hover:bg-purple-500 text-white text-xs sm:text-sm py-1.5 sm:py-2 rounded-md shadow-sm transition duration-300">
  View Case Study
</button>



      </div>

    </div>
  </div>
</section>


    
<section className="w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-14 px-4">
  <div className="max-w-7xl mx-auto group transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_25px_60px_-10px_rgba(255,255,255,0.2)] rounded-2xl p-6 bg-opacity-60 backdrop-blur-lg">
    
    {/* Content Wrapper */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
      {/* Left Text Content */}
      <div className="flex items-start md:items-center gap-4">
        <div className="hidden md:flex flex-col gap-2 text-pink-400 text-3xl animate-pulse">
          <FaPaintBrush />
          <FaVideo />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-3 transition-all duration-300 group-hover:text-pink-400">
            Let's Animate Your <br className="hidden md:block" />
            Vision into Reality
          </h2>
          <p className="text-gray-300 max-w-md text-sm md:text-base group-hover:text-white transition-all duration-300">
            From 2D/3D animation to motion graphics, our creative team transforms your ideas into 
            stunning visual experiences. Capture attention, tell stories, and engage your audience like never before.
          </p>
        </div>
      </div>

      {/* Right Call-to-Action */}
      <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative z-10 flex items-center gap-3 bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-full shadow-xl transition-all duration-300">
          <span className="text-white font-medium text-lg">Let's Collaborate</span>
          <FaArrowRight className="text-white text-sm" />
        </div>
      </div>
    </div>
  </div>
</section>


<div className="relative w-full h-auto py-16 px-4 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />c:\Users\Kajal Yadav\OneDrive\Desktop\animation2.mp4
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-houschka">
            Multimedia & Animation Expertise
          </h2>
          <p className="max-w-3xl mx-auto text-lg font-basis text-gray-200">
            Let your brand shine through powerful animation and visual storytelling.
            We create immersive experiences to captivate your audience across all platforms.
          </p>
        </div>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 text-left">
          {points.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-pink-400 mt-1 text-lg" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/*new section*/}
    <div className="w-full bg-gradient-to-r from-indigo-950 via-purple-900 to-slate-900 py-16 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 font-houschka text-pink-400 drop-shadow-lg">
          Creative Technology Stack
        </h2>

        {/* Stack Sections */}
        <div className="space-y-12">
          {techStack.map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Left Box */}
              <div className="flex items-center gap-4 min-w-[220px] border-l-4 border-pink-500 pl-4">
                {section.icon}
                <div>
                  <p className="text-xl font-semibold text-pink-300">
                    {section.label}
                  </p>
                  <div className="text-sm text-gray-300">Specialized Tools</div>
                </div>
              </div>

              {/* Items Grid */}
              <div className="flex flex-wrap gap-3">
                {section.items.map((item, index) => (
                  <span
                    key={index}
                    className="bg-white text-slate-900 px-4 py-2 text-sm rounded shadow hover:bg-pink-100 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


      
    </>
  );
};

export default MultimediaAnimation;
