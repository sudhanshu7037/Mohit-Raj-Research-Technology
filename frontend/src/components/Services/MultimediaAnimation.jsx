import React from 'react';
import Logo6 from "../../assets/servicespage/multimediaanimation/images/multimediabanner.png";
import Logo1 from "../../assets/SofwareConsulting.png";
import Logo2 from "../../assets/Custom.png";
import Logo4 from "../../assets/Erp.png";
import { FaPaintBrush, FaVideo, FaArrowRight } from "react-icons/fa";
import bgImage from "../../assets/Backgroundsoftware.jpg";
import { FaCheckCircle } from "react-icons/fa";
import video from "../../assets/servicespage/multimediaanimation/video/animation vedio.mp4"; 
import { FaTools, FaLaptopCode, FaMagic } from "react-icons/fa";
import {   FaPalette, FaRocket } from "react-icons/fa";
import { FaHeadphones, FaRegLightbulb,FaMap, FaUsers, FaClipboardCheck } from "react-icons/fa";
import DevImage from "../../assets/servicespage/multimediaanimation/images/image1.jpg";

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



const multimediaServices = [
  {
    title: "2D & 3D Animation Services ",
    description:
      "Bring your ideas to life with our visually striking 2D and 3D animations. From explainer videos to product demos to educational content and ads, we design animations that not only look great but also connect with your audience. ",
    icon: <FaVideo className="text-pink-500 text-2xl" />,
  },
  {
    title: "Motion Graphics",
    description:
      "Make your content pop with professionally designed motion graphics. Perfect for presentations, social media, mobile apps, and promo videos—our graphics add movement and clarity to your message while reflecting your brand's personality. ",
    icon: <FaRocket className="text-blue-500 text-2xl" />,
  },
  {
    title: "Visual Effects (VFX)",
    description:
      "Add a cinematic touch to your videos with our VFX services. We handle CGI, green screen editing, and advanced compositing to produce eye-catching effects that elevate your content, whether for commercials, short films, or digital campaigns. ",
    icon: <FaMagic className="text-purple-500 text-2xl" />,
  },
  {
    title: "Professional Video Editing",
    description:
      "Got raw footage? We turn it into polished, high-quality videos. Our video editing services include smooth transitions, audio balancing, color grading, and everything else needed to make your visuals stand out and feel professional.",
    icon: <FaPalette className="text-yellow-500 text-2xl" />,
  },
  {
    title: "Explainer Video Creation",
    description:
      "Simplify complex ideas with clear, creative explainer videos. Ideal for startups, product launches, employee training, or service walkthroughs—these videos are a great way to inform and engage in a short span.",
    icon: <FaPaintBrush className="text-red-500 text-2xl" />,
  },
  {
    title: " Logo Animation & Brand Intro Videos",
    description:
      "Make your brand memorable with custom logo animations and intro videos. These short, high-impact visuals are perfect for websites, YouTube channels, presentations, and digital ads—instantly giving your content a branded, professional feel.",
    icon: <FaMagic className="text-indigo-500 text-2xl" />,
  },
];

// Enhanced services array with img, alt, and points
const services = [
  {
    title: "2D & 3D Animation",
    description:
      "Turn your imagination, or your ideas, into spectacular 3D animation that can showcase your ideas , products, services or concepts, with accurate detail.Our animators can construct immersive worlds to capture your audience's imagination.",
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
      "Bring your story to life! With our visual storytelling capability, whether a promotional video, an interactive presentation, or an animated explainers, we can produce visuals essential to showcasing your brand's story.",
    img: Logo4,
    alt: "Character Design & Storyboarding",
    points: ["Unique character creation", "Detailed storyboards", "Concept visualization"],
  },
  {
    title: "Multimedia Presentations",
    description:
      "Make an impact on your audience and engage them with compelling dynamic and engaging interactive multimedia presentations.",
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

const steps = [
    {
      icon: <FaHeadphones className="text-xl text-indigo-600" />,
      title: "Connect with MRT",
      description:
        "Share your multimedia or hosting project requirements with our expert consultants. We take the time to understand your goals and offer tailored guidance that aligns with your business needs.",
    },
    {
      icon: <FaMap className="text-xl text-indigo-600" />,
      title: " Project Planning & Technical Roadmap",
      description:
        "We outline a clear project roadmap, that  defines the ideal tech stack (including media servers, CDNs, CMS platforms, and more), and provide accurate timelines based on your scope and objectives.",
    },
    {
      icon: <FaClipboardCheck className="text-xl text-indigo-600" />,
      title: "Onboarding & Project Launch",
      description:
        "Once aligned, our dedicated team gets to work. From design to deployment, we keep you updated with real-time progress while ensuring quality, scalability, and performance every step of the way.",
    },
  ];

  const multimediaFeatures = [
  {
    icon: <FaRegLightbulb className="text-pink-500 text-3xl" />,
    title: "Creative Direction + Technical Expertise",
    description:
      " Our team combines creative direction with leading edge animation tools and VFX to deliver high quality results—optimised for web, mobile, presentations and digital campaigns.",
  },
  {
    icon: <FaMagic className="text-purple-500 text-3xl" />,
    title: "Creative Excellence with a Strategic Mindset",
    description:
      "We don’t just animate—we think about your goals, audience and message. Every project is purposeful whether it’s a product explainer, brand intro or marketing video.",
  },
  {
    icon: <FaRocket className="text-indigo-500 text-3xl" />,
    title: "Full Service Multimedia",
    description:
      "From concept to storyboarding to final production we offer all-in-one multimedia services. Whether it’s 2D/3D animation, motion graphics or video editing we handle everything.",
  },
  {
    icon: <FaUsers className="text-blue-600 text-3xl" />,
    title: "Custom Visual Content",
    description:
      "No templates. No one-size-fits-all. Every animation or video we create is bespoke for your brand’s tone, values and visuals—ensuring brand consistency across all platforms.",
  },
];

const MultimediaAnimation = () => {


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
                alt="Custom Software Development"
                className="w-full h-full object-cover"
              />
      
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
              {/* Hero Content */}
             <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-4">
        <h3 className="text-white text-xl md:text-6xl font-semibold leading-tight mb-10 font-houschka">
          Transform Your Business With 
          <br />
          Multimedia Animation
          <br />
        
          Development Services
        </h3>
        
        <div className="flex gap-4">
          <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-6">
            GET IN TOUCH
          </button>
         
        </div>
      </div>
      
            </div>

      {/* Second div */}
      <div className="bg-white py-16 px-4 lg:px-24 text-center">
        {/* Top Text */}
        <h1 className="text-blue-500 text-4xl font-bold font-houschka">Overview</h1>
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed font-basis">
          Our expertise in multimedia and animation offers the flexibility to you to engage with your audience, and tell stories through a visual experience.
           Let us work together to leverage the collaborative creativity of multimedia experiences that can engage your audience and create a connection. 


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

{/*fourth div*/}
    
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
           Technology Stack
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
{/*new section*/}
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
         custom Multimedia & Animation Services We Offer
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto mb-12">
        We don’t just create visuals—we craft immersive experiences that helps  brand to communicate, engage, and grow with their respective audience . Whether it's for marketing, branding, or storytelling, our multimedia and animation solutions are built to leave a lasting impact. 

      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {multimediaServices.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500"
          >
            <div className="mb-3">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
{/*new section*/}
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-blue-900 text-center mb-4 font-houschka">
        Start Your Multimedia or Hosting Project with <span className="text-pink-600">MRT</span>
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        At Mohitraj Research and Technology Private Limited, we empower businesses to deliver immersive multimedia experiences and robust hosting infrastructure through customized development solutions. From idea to execution, we ensure a seamless and strategic approach to every project.
      </p>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Animated Dev Image */}
        <div className="flex-1 relative group transition duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            src={DevImage}
            alt="Multimedia Development"
            className="rounded-xl w-full h-auto object-cover shadow-lg"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 rounded-xl" />
        </div>

        {/* Steps List */}
        <div className="flex-1 space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-100 p-4 rounded-md shadow-sm hover:bg-blue-50 transition-all duration-300"
            >
              <div className="mt-1">{step.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Why Choose MRT Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4 font-houschka">
          Why Choose <span className="text-pink-600">MRT</span>?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Enhancing Brand Identity Using Animation And Multimedia

        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {multimediaFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white border-t-4 border-pink-500 p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div>
            <p className="text-2xl uppercase tracking-wider text-pink-600 mb-2 font-bold font-houschka">
              Benefits
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 font-houschka leading-snug">
              Empower your brand with multimedia & animation
            </h2>
          </div>

          {/* Right Side */}
          <div className="border-l-4 border-pink-500 pl-6 space-y-4 text-gray-800 text-lg">
            <p>🎥 Tell your story through immersive animation and visual design.</p>
            <p>🚀 Drive engagement with scroll-triggered visuals & explainer videos.</p>
            <p>💡 Simplify complex ideas using intuitive motion graphics.</p>
            <p>🧠 Build a memorable brand with interactive video content.</p>
            <p>📱 Optimized for all screens – mobile, desktop, and large displays.</p>
          </div>
        </div>
      </section>

      {/* === New Section: Multimedia & Animation === */}

      
    </>
  );
};

export default MultimediaAnimation;
