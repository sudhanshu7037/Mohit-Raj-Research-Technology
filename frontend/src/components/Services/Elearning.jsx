import React, { useState } from "react";
import backimage from "../../assets/Elearningbanner.png";
import DevImage from "../../assets/backimage.png";
import {FaChalkboard, FaGraduationCap,  FaLaptop,FaUsers, FaCheckCircle,FaLaptopCode, FaChalkboardTeacher, FaBookOpen, FaMobileAlt, FaVideo,FaCloud } from "react-icons/fa";
import { FiChevronDown,FiChevronUp } from 'react-icons/fi';



const elearningservices = [
  {
    title: "Virtual Classroom Platforms",
    icon: <FaChalkboardTeacher className="text-pink-500 text-3xl" />, 
    description: "Live interactive teaching environments with video conferencing, whiteboards, and real-time Q&A."
  },
  {
    title: "Learning Management Systems (LMS)",
    icon: <FaLaptopCode className="text-pink-500 text-3xl" />, 
    description: "Custom LMS solutions for managing, tracking, and delivering educational content seamlessly."
  },
  {
    title: "eContent Development",
    icon: <FaBookOpen className="text-pink-500 text-3xl" />, 
    description: "Engaging digital learning materials like videos, quizzes, and interactive modules."
  },
  {
    title: "Mobile Learning Apps",
    icon: <FaMobileAlt className="text-pink-500 text-3xl" />, 
    description: "Responsive mobile apps for learning on the go, accessible across devices."
  },
  {
    title: "Video-Based Learning",
    icon: <FaVideo className="text-pink-500 text-3xl" />, 
    description: "Dynamic and visually rich video content for enhanced learner engagement."
  },
  {
    title: "Cloud-Based eLearning",
    icon: <FaCloud className="text-pink-500 text-3xl" />, 
    description: "Scalable and secure cloud solutions for seamless access to learning platforms."
  }
];

const industries = [
  "Online Course Platforms",
  "Corporate Training Solutions",
  "EdTech Startups",
  "Virtual Universities",
  "School & College Portals",
  "Professional Certification Providers"
];

const techStack = [
  {
    label: "Frontend",
    icon: <FaLaptopCode />,
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    label: "Backend",
    icon: <FaCloud />,
    items: ["Node.js", "Express.js", "Python", "Django"]
  },
  {
    label: "Learning Tools",
    icon: <FaChalkboardTeacher />,
    items: ["SCORM", "xAPI", "H5P", "LTI Integration"]
  },
  {
    label: "Content Management",
    icon: <FaBookOpen />,
    items: ["Strapi", "WordPress", "Moodle", "Contentful"]
  },
  {
    label: "Mobile Learning",
    icon: <FaMobileAlt />,
    items: ["React Native", "Flutter", "PWA"]
  },
  {
    label: "Multimedia & Video",
    icon: <FaVideo />,
    items: ["Figma", "After Effects", "Camtasia", "Vimeo API"]
  }
];
{/*custom services*/}
const elearningServices = [
  {
    icon: <FaGraduationCap className="text-3xl text-blue-600" />, 
    title: "Interactive Course Videos",
    description: "Designing visually rich educational videos with animation and narration for effective learning."
  },
  {
    icon: <FaVideo className="text-3xl text-blue-600" />, 
    title: "2D & 3D Animation",
    description: "Creating immersive animated content to explain complex e-learning topics visually."
  },
  {
    icon: <FaChalkboard className="text-3xl text-blue-600" />, 
    title: "Virtual Classrooms",
    description: "Enabling real-time teaching sessions with whiteboard, chat, and multimedia support."
  },
  {
    icon: <FaLaptop className="text-3xl text-blue-600" />, 
    title: "E-Learning Content Editing",
    description: "Professional editing of audio, video, and visuals to enhance content quality."
  },
  {
    icon: <FaBookOpen className="text-3xl text-blue-600" />, 
    title: "Gamified Assessments",
    description: "Building game-based quizzes and modules to improve learner engagement."
  },
  {
    icon: <FaMobileAlt className="text-3xl text-blue-600" />, 
    title: "Mobile-First Media",
    description: "Optimizing multimedia content for mobile devices for on-the-go learning."
  }
];
const elearningSteps = [
  {
    icon: <FaChalkboardTeacher className="text-blue-600 text-2xl" />,
    title: "Requirement Analysis",
    description: "We understand your learning goals and define the content structure accordingly.",
  },
  {
    icon: <FaUsers className="text-blue-600 text-2xl" />,
    title: "Content Design",
    description: "Our team creates interactive, multimedia-rich modules tailored to your audience.",
  },
  {
    icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
    title: "Platform Integration",
    description: "We integrate your content into LMS platforms for easy distribution and management.",
  },
  {
    icon: <FaCheckCircle className="text-blue-600 text-2xl" />,
    title: "Testing & Launch",
    description: "Before deployment, we ensure your content is polished, responsive, and accessible.",
  },
];


const elearningFaqs = [
  {
    question: "What types of e-learning content do you develop?",
    answer:
      "We create interactive modules, video lectures, quizzes, animations, and mobile-friendly lessons tailored to your learning objectives.",
  },
  {
    question: "Can you integrate the content with my LMS?",
    answer:
      "Yes, we provide seamless integration with popular Learning Management Systems like Moodle, Canvas, TalentLMS, and more.",
  },
  {
    question: "Is the content mobile responsive?",
    answer:
      "Absolutely. All our e-learning content is optimized for desktops, tablets, and smartphones to ensure smooth learning across devices.",
  },
  {
    question: "Do you provide SCORM or xAPI-compliant content?",
    answer:
      "Yes, we build content that adheres to SCORM, xAPI, and AICC standards for compatibility and tracking within LMS platforms.",
  },
];







const Elearning = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  
  return (
    <>
 {/* === Hero Section === */}
      <section className="relative bg-black text-white font-sans min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backimage})` }}
        ></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            E-LEARNING SERVICES
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-6 sm:mb-8">
           "Empowering Minds, Enriching Knowledge ".

 

Mohitraj Research and Technology Private Limited E-learning System, a leading software development company, is engineered to transform the delivery and consumption of education. 

          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition">
              GET IN TOUCH
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-medium transition">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </section>
      {/*second section*/}
      {/* Second div */}
<div className="bg-white py-16 px-4 lg:px-24 text-center">
  {/* Top Text */}
  <h1 className="text-blue-500 text-4xl font-bold">Overview</h1>
  <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed font-basis text-justify mt-4">
    MOHITRAJ RESEARCH AND TECHNOLOGY PRIVATE LIMITED is a pioneering provider of
    comprehensive <strong>e-learning solutions</strong> in India. We specialize in
    developing robust Learning Management Systems (LMS), virtual classroom platforms,
    and custom educational software that transform how institutions deliver learning.
    Our EdTech innovations support schools, colleges, and professional training providers
    with tools for course management, student assessment, content delivery, and seamless communication.
    <br />
    <br />
    With over two decades of expertise, our dedicated team merges technology and education to
    create scalable, engaging, and interactive digital learning environments. Whether you're looking to
    implement blended learning, manage digital classrooms, or provide skill-based training at scale,
    our solutions are crafted to drive measurable learning outcomes and educational excellence.
  </p>

  {/* Stats Section */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
    {/* Stat 1 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">1800+</h3>
      <p className="text-gray-600 mt-2 text-center">
        E-learning <br /> Modules Delivered
      </p>
    </div>

    {/* Stat 2 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">21+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Years of <br /> EdTech Experience
      </p>
    </div>

    {/* Stat 3 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">810+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Educational <br /> Institutions Served
      </p>
    </div>

    {/* Stat 4 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">36</h3>
      <p className="text-gray-600 mt-2 text-center">
        Countries <br /> Empowered Globally
      </p>
    </div>
  </div>

  {/* Divider Line */}
  <hr className="border-gray-300 max-w-5xl mx-auto" />
</div>
{/*new section third*/}
<div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-4 font-houschka">
        E-Learning Services We Offer
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        At MRT, we empower educational institutions and enterprises with robust e-learning technologies tailored for engagement, accessibility, and performance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {elearningservices.map((feature, index) => (
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

    {/*new section */}

    {/* Contact Section */}
      <div className="group relative bg-gradient-to-tr from-white via-blue-50 to-orange-100 py-14 px-6 sm:px-10 md:px-20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 
      hover:from-blue-100 hover:to-orange-200 hover:bg-opacity-80 hover:cursor-pointer">

        {/* Glassy Box */}
        <div className="backdrop-blur-xl bg-white/70 border border-white/30 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 
        hover:shadow-2xl transition-all duration-500">

          {/* Text Content */}
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 group-hover:text-orange-600 leading-tight tracking-tight transition duration-300">
              Boost Your Brand With Strategic E-Learning Solutions
            </h2>
            <p className="mt-4 text-gray-700 group-hover:text-blue-800 text-base sm:text-lg transition duration-300">
              Empower learners and educators through interactive platforms, mobile learning, and tailored content strategies designed to drive educational excellence.
            </p>
          </div>

          {/* CTA Button */}
          <div className="relative group/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-base flex items-center gap-3 transition-all duration-300 transform group-hover:scale-105 shadow-md">
              Contact Us
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Ping Animation Circle */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-orange-300 blur-2xl opacity-40 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
      {/*new section for experience*/}
       {/* E-Learning Experience Section */}
      <div className="w-full bg-cover bg-center py-16 px-4" style={{ backgroundColor: '#dbeafe' }}>
        <div className="text-center text-blue-900 mb-8">
          <h2 className="text-4xl font-bold mb-4 font-houschka">
            E-Learning Development Experience
          </h2>
          <p className="max-w-2xl mx-auto text-lg font-basis">
            MRT has successfully deployed scalable and secure e-learning systems for educational institutions, corporate clients, and online academies. Here are the key industries we serve:
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded shadow-lg overflow-hidden">
          <div className="bg-red-700 hover:bg-blue-900 text-white py-3 text-center text-xl font-semibold ">
            Industries We Serve
          </div>
          <div className="p-8 text-gray-800">
            <p className="mb-6">
              Our e-learning solutions cater to a broad range of domains ensuring learner engagement, performance tracking, and seamless content delivery.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {industries.map((industry, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-red-700  hover:text-blue-900" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*new section*/}

       {/* Technology Stack Section */}
      <div className="relative w-full bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 py-20 px-4 overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-purple-300 rounded-full opacity-20 blur-3xl mix-blend-multiply animate-spin-slow z-0"></div>
        <div className="absolute bottom-[-100px] right-[-60px] w-[260px] h-[260px] bg-pink-200 rounded-full opacity-20 blur-3xl mix-blend-multiply animate-pulse z-0"></div>
        <div className="absolute top-[40%] left-[40%] w-[200px] h-[200px] bg-blue-300 rounded-full opacity-20 blur-2xl mix-blend-multiply z-0"></div>

        <div className="relative max-w-6xl mx-auto z-10">
          <div className="bg-white/90 backdrop-blur-lg border border-purple-200 shadow-2xl rounded-3xl p-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-12 font-houschka tracking-tight hover:text-orange-500 hover:drop-shadow-md cursor-pointer transition duration-300">
              E-Learning Technology Stack
            </h2>
            <div className="space-y-12">
              {techStack.map((section, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 bg-blue-100 px-5 py-3 rounded-xl shadow-inner border border-blue-300 min-w-[220px]">
                    <div className="text-blue-700 text-2xl">{section.icon}</div>
                    <span className="text-lg sm:text-xl font-semibold text-blue-900">
                      {section.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {section.items.map((item, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full border border-blue-200 text-sm font-medium shadow-sm hover:bg-blue-600 hover:text-white hover:scale-105 transition duration-300"
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
      </div>
      {/*new section*/}

<div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
        Custom E-Learning Services We Offer
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto mb-12">
        We provide end-to-end e-learning content development services that combine technology and creativity to boost learning outcomes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {elearningServices.map((service, index) => (
          <div
            key={index}
            className="bg-red-200 hover:bg-blue-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500"
          >
            <div className="mb-3 text-blue-600 group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-blue-900 group-hover:text-white mb-2 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-700 group-hover:text-blue-900 text-sm leading-relaxed transition-colors duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    {/* New Section */}
<div className="max-w-7xl mx-auto px-4 py-16">
  {/* Section Header */}
  <h2 className="text-4xl font-bold text-blue-900 text-center mb-4 font-houschka">
    Start Your <span className="text-pink-600">E-Learning</span> Project with MRT
  </h2>
  <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
    MRT provides complete e-learning development solutions using interactive content, animations, and intuitive LMS integration.
  </p>

  {/* Content */}
  <div className="grid md:grid-cols-2 gap-12 items-stretch">
    {/* Left Image */}
    <div className="relative group w-full h-full">
      <div className="h-full w-full rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
        <img
          src={DevImage}
          alt="E-learning Development"
          className="w-full h-full object-cover min-h-[100%]"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
      </div>
    </div>

    {/* Right Steps */}
    <div className="flex flex-col justify-center space-y-8 h-full">
      {elearningSteps.map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-white/90 p-5 rounded-xl shadow-md hover:bg-red-100 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
        >
          <div className="mt-1">{step.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900">
              {step.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
{/* Why Choose MRT Section for E-Learning */}
<div className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-center text-blue-900 mb-4 font-houschka">
    Why Choose <span className="text-pink-600">MRT</span> for E-Learning?
  </h2>
  <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
    MRT is your trusted partner in delivering high-impact e-learning solutions. From interactive modules to mobile-ready content, we help educators and businesses transform learning experiences.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        icon: <FaChalkboardTeacher className="text-3xl text-pink-500" />,
        title: "Expert Instructional Design",
        description: "We create learner-centric modules tailored to your training goals."
      },
      {
        icon: <FaLaptopCode className="text-3xl text-pink-500" />,
        title: "Custom LMS Integration",
        description: "Seamless LMS development and integration for smooth learner tracking."
      },
      {
        icon: <FaBookOpen className="text-3xl text-pink-500" />,
        title: "Content Interactivity",
        description: "Engage users with quizzes, animations, and real-time assessments."
      },
      {
        icon: <FaMobileAlt className="text-3xl text-pink-500" />,
        title: "Mobile-Optimized Learning",
        description: "Deliver smooth learning experiences across all screen sizes and devices."
      },
    ].map((feature, index) => (
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
{/*new section*/}
<div className="max-w-4xl mx-auto px-4 py-16 bg-blue-300">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-10 font-houschka">
        E-Learning Development FAQs
      </h2>

      <div className="space-y-4 bg-red-300">
        {elearningFaqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-xl p-5 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-blue-400 ${
              openIndex === index ? "bg-blue-100" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-blue-900">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FiChevronUp className="text-blue-600" />
              ) : (
                <FiChevronDown className="text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 leading-relaxed transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
      
    
  )
}

export default Elearning
