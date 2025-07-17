
import React, { useState } from "react";
import image1 from "../../assets/videoconferencingbanner.png"
import Banner from "../../assets/Banner.png"
import enterprizes from "../../assets/videoconferencingbanner.png"
import { FiChevronDown, FiChevronUp } from "react-icons/fi";



import {
  FaVideo,
  FaLock,
  FaCloud,
  FaBroadcastTower,
   FaHeadset,
   FaServer,
   FaArrowRight,
   FaLaptopCode,
   FaMobileAlt,
   FaCogs,
   FaTools,
   FaClipboardCheck,
   FaDraftingCompass,
    FaCode,
    FaShieldAlt,
    FaStream,
    FaUserShield,
     FaClock
  
} from "react-icons/fa";

const videoConferencingServices = [
  {
    icon: <FaVideo className="text-3xl text-blue-600" />, 
    title: "Live HD Video Calls",
    description: "Host high-definition video meetings with low latency and real-time interaction support."
  },
  {
    icon: <FaHeadset className="text-3xl text-blue-600" />, 
    title: "Multi-Participant Support",
    description: "Connect multiple users across regions with scalable group conferencing features."
  },
  {
    icon: <FaCloud className="text-3xl text-blue-600" />, 
    title: "Cloud Recording & Playback",
    description: "Secure cloud-based recording and playback features for future reference and training."
  },
  {
    icon: <FaBroadcastTower className="text-3xl text-blue-600" />, 
    title: "Webinar & Broadcasting",
    description: "Run live webinars, public sessions, and virtual conferences seamlessly."
  },
  {
    icon: <FaLock className="text-3xl text-blue-600" />, 
    title: "Encrypted & Secure Sessions",
    description: "End-to-end encryption to ensure the privacy and safety of all communications."
  },
  {
    icon: <FaServer className="text-3xl text-blue-600" />, 
    title: "Server Integration",
    description: "Integrate with backend systems or LMS platforms for a unified learning experience."
  }
];

const faqs = [
  {
    question: "What types of video conferencing solutions do you offer?",
    answer:
      "We offer HD video conferencing platforms, webinar systems, real-time chat, and screen sharing built using technologies like WebRTC, Zoom SDK, or Jitsi integrations.",
  },
  {
    question: "Is your video conferencing solution secure?",
    answer:
      "Yes, we use end-to-end encryption, role-based access, secure authentication, and regular vulnerability audits to ensure your communication is completely safe.",
  },
  {
    question: "Can the platform support large virtual meetings or webinars?",
    answer:
      "Absolutely. Our scalable cloud architecture supports hundreds to thousands of participants with adaptive streaming for smooth performance.",
  },
  {
    question: "Do you offer cross-platform compatibility?",
    answer:
      "Yes, our solutions are compatible with Android, iOS, Windows, macOS, and browsers so users can join from any device.",
  },
  {
    question: "Can we integrate the conferencing tool into our LMS or CRM?",
    answer:
      "Definitely. We offer seamless integration with LMS platforms like Moodle, Blackboard, and business tools like Salesforce or HubSpot.",
  },
  {
    question: "Do you provide support after deployment?",
    answer:
      "Yes, we provide 24/7 monitoring, upgrades, troubleshooting, and performance optimization as part of our post-launch maintenance.",
  },
];




const VideoConferencing=() =>{

     const [openIndex, setOpenIndex] = useState(null);
    
      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
  return (
    <>
    
    {/* Hero Section for Video Conferencing Services */}
<div className="relative w-full h-screen overflow-hidden">
  {/* Background Image */}
  <img
    src={image1} // 👈 Make sure this image is related to video conferencing
    alt="Video Conferencing Services"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Hero Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
      VIDEO CONFERENCING SOLUTIONS
    </h1>
    <p className="text-white text-base md:text-lg max-w-2xl mb-8">
      Empower your remote teams with our secure, high-quality video conferencing platforms.
      We offer scalable, real-time communication solutions with screen sharing, cloud recording,
      and cross-platform compatibility to boost productivity and collaboration.
    </p>
    <div className="flex gap-4 flex-wrap justify-center">
      <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
        REQUEST A DEMO
      </button>
      <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
        VIEW FEATURES
      </button>
    </div>
  </div>
</div>

{/* Second div */}
<div className="bg-white py-16 px-4 lg:px-24 text-center">
  {/* Top Text */}
  <h1 className="text-blue-500 text-4xl font-bold font-houschka">Overview</h1>
  <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed font-basis text-justify mt-4">
    MOHITRAJ RESEARCH AND TECHNOLOGY PRIVATE LIMITED delivers secure, scalable, and feature-rich video conferencing solutions
    tailored for modern enterprises, educational institutions, and healthcare providers. Our platform empowers teams to connect,
    collaborate, and communicate seamlessly across the globe with HD video, crystal-clear audio, screen sharing, chat,
    recording, and virtual whiteboarding. Designed with flexibility and user experience in mind, our services ensure reliable
    communication from any device, anywhere. With over two decades of industry experience, we enable organizations to host
    meetings, webinars, and live sessions with confidence and control — ensuring maximum productivity and engagement.
  </p>

  {/* Stats Section */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
    {/* Stat 1 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">2500+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Secure <br /> Sessions Delivered
      </p>
    </div>

    {/* Stat 2 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">20+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Industries <br /> Served
      </p>
    </div>

    {/* Stat 3 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">99.9%</h3>
      <p className="text-gray-600 mt-2 text-center">
        Uptime <br /> Guaranteed
      </p>
    </div>

    {/* Stat 4 */}
    <div className="flex flex-col items-center">
      <h3 className="text-blue-800 text-3xl font-bold">1000+</h3>
      <p className="text-gray-600 mt-2 text-center">
        Clients <br /> Worldwide
      </p>
    </div>
  </div>

  {/* Divider Line */}
  <hr className="border-gray-300 max-w-5xl mx-auto" />
</div>

{/*third section*/}

 
   <div className="max-w-7xl mx-auto px-4 py-16 text-center bg-red-100">
      <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
        Video Conferencing Services We Offer
      </h2>
      <p className="text-gray-600 max-w-4xl mx-auto mb-12">
        Our platform offers scalable, secure, and feature-rich video conferencing capabilities to empower e-learning and corporate collaboration.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left bg-white">
        {videoConferencingServices.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500 "
          >
            <div className="mb-3 ">{service.icon}</div>
            <h3 className="text-xl font-semibold text-blue-900  mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/*fourth section*/}
    {/* Contact Us - Video Conferencing Related */}
      <div className="relative z-10 -mt-30 mb-5 px-6">
        <div className="w-full bg-white py-10 px-6 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border border-blue-200">
          {/* Left Side */}
          <div className="flex items-center gap-4">
            <div className="w-1 h-16 bg-blue-600"></div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 leading-snug font-houschka">
              Need Custom Video Conferencing <br /> Solutions for Your Organization?
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="text-blue-700 font-medium text-lg group-hover:underline">Contact Us</span>
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center group-hover:bg-blue-800 transition">
              <FaArrowRight className="text-white text-base" />
            </div>
          </div>
        </div>
      </div>

{/* === Video Conferencing Experience Section === */}
<section
  className="relative bg-cover bg-center bg-no-repeat py-20"
  style={{ backgroundImage: `url(${Banner})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-houschka">
      Video Conferencing Experience
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
      {/* Column 1 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">HD Video & Audio</h3>
        <p>
          Seamless communication is achieved through high-definition video and noise-free audio, which is crucial for collaboration, remote work, webinars, and virtual meetings. Our platform significantly boosts productivity and engagement.  


        </p>
      </div>

      {/* Column 2 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">Secure Communication</h3>
        <p>
          Ensure complete confidentiality of sensitive conversations with stringent end-to-end encryption, password-protected meeting rooms, guest links, and other advanced security features. All necessary security standards are strictly followed.  
        </p>
      </div>

      {/* Column 3 */}
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <h3 className="text-2xl font-semibold mb-4">Cross-Platform Access  </h3>
        <p>
          Achieve full device and location mobility without interruptions or loss in connectivity. With full flexibility across smartphones, tablets, and desktops, our solution works seamlessly on Android, iOS, Windows, and macOS.
        </p>
      </div>
    </div>
  </div>
</section>

{/**/ }

{/* === Video Conferencing Technology Stack === */}
<div className="w-full bg-gradient-to-r from-indigo-950 via-purple-900 to-slate-900 py-10 px-4 text-white">
  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 font-houschka text-pink-400 drop-shadow-lg">
      Video Conferencing Technology Stack
    </h2>

    {/* Stack Sections */}
    <div className="space-y-12">
      {[
        {
          category: "Core Technologies",
          icon: <FaVideo />,
          items: ["WebRTC", "RTMP", "SIP", "VoIP", "SFU / MCU"],
        },
        {
          category: "Frontend",
          icon: <FaLaptopCode />,
          items: ["React.js", "Next.js", "Tailwind CSS", "Socket.io", "Redux"],
        },
        {
          category: "Backend & Servers",
          icon: <FaServer />,
          items: ["Node.js", "Express.js", "Nginx", "WebSockets", "Firebase"],
        },
        {
          category: "Security",
          icon: <FaLock />,
          items: ["End-to-End Encryption", "OAuth 2.0", "JWT", "2FA", "TLS/SSL"],
        },
        {
          category: "Mobility",
          icon: <FaMobileAlt />,
          items: ["Android", "iOS", "React Native", "Flutter"],
        },
        {
          category: "Cloud & DevOps",
          icon: <FaCloud />,
          items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
        },
        {
          category: "Integrations & Tools",
          icon: <FaCogs />,
          items: ["Zoom SDK", "Jitsi Meet", "Twilio", "Daily.co", "Agora.io"],
        },
      ].map((section, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300"
        >
          {/* Left Box */}
          <div className="flex items-center gap-4 min-w-[220px] border-l-4 border-pink-500 pl-4">
            {section.icon}
            <div>
              <p className="text-xl font-semibold text-pink-300">
                {section.category}
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
{/* === Custom Video Conferencing Services Section === */}
<div className="max-w-7xl mx-auto px-4 py-16 text-center bg-red-100">
  <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
    Custom Video Conferencing Services We Offer
  </h2>
  <p className="text-gray-600 max-w-4xl mx-auto mb-12">
    We offer tailor-made video conferencing solutions built to meet the specific needs of your business, education system, or hybrid workforce. From feature-rich platforms to seamless integration and support — we cover it all.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
    {[
      {
        icon: <FaVideo className="text-3xl text-blue-600" />,
        title: "Custom Tailored Video Conferencing Solutions",
        description:
          "We design video conferencing solutions specifically for businesses, educational institutions, and hybrid workforces. From advanced multifunctional features to holistic integration, persistent assistance, and everything in between—full service is guaranteed.",
      },
      {
        icon: <FaLock className="text-3xl text-blue-600" />,
        title: "HD Video & Audio Integration",
        description:
          "Our noise-canceling audio and high-definition cameras enhance the clarity of your feeds. This ensures that all virtual meetings, webinars, and live streamed events are noise-free and uninterrupted.",
      },
      {
        icon: <FaCogs className="text-3xl text-blue-600" />,
        title: "End-to-End Encryption",
        description:
          "Your privacy and data security are our main concerns. Secure and confidential communications are achieved by use of advanced encryption, access control, and multi-layered authentication mechanisms.",
      },
      {
        icon: <FaCloud className="text-3xl text-blue-600" />,
        title: "Custom Conferencing Solutions",
        description:
          "We design video conferencing solutions using platforms like Zoom and Jitsi as well as fully customized systems based on WebRTC to meet your organizational technical and operational requirements.",
      },
      {
        icon: <FaMobileAlt className="text-3xl text-blue-600" />,
        title: "Cross-Device Compatibility",
        description:
          "Seamless access across smartphones, tablets, and desktops – we ensure platform-independent functionality.",
      },
      {
        icon: <FaTools className="text-3xl text-blue-600" />,
        title: "Ongoing Support & Monitoring",
        description:
          "We provide 24/7 support, real-time analytics, and monitoring tools to keep your video communication running smoothly.",
      },
    ].map((service, index) => (
      <div
        key={index}
        className="bg-white hover:bg-blue-200 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-blue-500"
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

{/* === How to Start Your Video Conferencing Project With MRT === */}
<div className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-houschka bg-gradient-to-r from-red-500 via-green-900 to-pink-400 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
    How to Start Your Video Conferencing Project With MRT?
  </h2>

  <div className="flex flex-col md:flex-row items-stretch gap-12">
    {/* Image Section */}
    <div className="flex-1">
      <div className="h-full">
        <img
          src={enterprizes}
          alt="Video Conferencing Process"
          className="rounded-xl shadow-lg hover:scale-105 transition duration-500 w-full h-full object-cover min-h-[500px]"
        />
      </div>
    </div>

    {/* Steps Section */}
    <div className="flex-1 flex flex-col justify-between space-y-8 h-full">
      {[
        {
          icon: <FaClipboardCheck className="text-blue-500 text-xl" />,
          title: "Requirement Gathering",
          description:
            "We understand your business goals, user base, and must-have features like screen sharing, chat, or recordings.",
        },
        {
          icon: <FaDraftingCompass className="text-blue-500 text-xl" />,
          title: "Platform Design & Architecture",
          description:
            "Our team drafts a scalable, secure architecture with intuitive UI/UX for cross-device video conferencing.",
        },
        {
          icon: <FaCode className="text-blue-500 text-xl" />,
          title: "Custom Development",
          description:
            "We develop your platform using technologies like WebRTC, Node.js, React, and integrate APIs for chat, streaming, etc.",
        },
        {
          icon: <FaShieldAlt className="text-blue-500 text-xl" />,
          title: "Security Implementation",
          description:
            "We ensure complete protection with end-to-end encryption, meeting locks, and access control layers.",
        },
        {
          icon: <FaServer className="text-blue-500 text-xl" />,
          title: "Cloud Deployment",
          description:
            "We deploy your solution on scalable cloud platforms like AWS, Azure, or GCP for seamless global access.",
        },
        {
          icon: <FaTools className="text-blue-500 text-xl" />,
          title: "Support & Optimization",
          description:
            "Our team provides 24/7 support, real-time analytics, and performance tuning for an uninterrupted experience.",
        },
      ].map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-4 bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500 hover:border-pink-500 transition-transform transform hover:-translate-y-1 hover:shadow-xl group"
        >
          <div className="mt-1">{step.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900 group-hover:text-pink-600 transition">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm group-hover:text-gray-800 transition">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* === Why Choose MRT for Video Conferencing === */}
<div className="max-w-7xl mx-auto px-4 py-16 bg-red-100">
  <h2 className="text-4xl font-bold text-blue-900 text-center mb-4 font-houschka">
    Why Choose MRT for Video Conferencing?
  </h2>

  <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto hover:text-blue-800 transition duration-300">
    MRT delivers secure, scalable, and customizable video conferencing platforms tailored to your business needs. With robust features and technical expertise, we ensure your communication is always seamless and reliable.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        icon: <FaUserShield className="text-3xl text-blue-600" />,
        title: "Secure Communication",
        description:
          "We implement end-to-end encryption, token-based access, and advanced authentication.",
      },
      {
        icon: <FaStream className="text-3xl text-blue-600" />,
        title: "Real-Time Streaming",
        description:
          "Low-latency, high-quality audio/video delivery powered by WebRTC and CDN support.",
      },
      {
        icon: <FaTools className="text-3xl text-blue-600" />,
        title: "Custom Feature Set",
        description:
          "Integrate screen sharing, chat, whiteboard, polling, breakout rooms, and more as per your requirement.",
      },
      {
        icon: <FaClock className="text-3xl text-blue-600" />,
        title: "24/7 Monitoring & Support",
        description:
          "Continuous support, analytics, and performance tracking to ensure reliability round the clock.",
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="border border-gray-500 p-6 rounded-md text-center transition-shadow duration-300 group hover:bg-blue-900"
      >
        <div className="flex justify-center mb-4">{feature.icon}</div>

        <h3 className="text-lg font-semibold text-blue-900 mb-2 group-hover:text-white transition-colors duration-300">
  {feature.title}
</h3>

<p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
  {feature.description}
</p>

      </div>
    ))}
  </div>
</div>


{/*benefits*/}
{/* === Benefits Section: Video Conferencing === */}
<div>
  <section className="bg-gray-50 py-16 px-4 md:px-16 lg:px-24">
    <div className="max-w-6xl mx-auto flex flex-col items-start gap-8">
      {/* Left Side */}
      <div className="flex-1">
        <p className="text-2xl uppercase tracking-widest text-blue-600 mb-2 font-houschka font-bold">
          Benefits
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-900 leading-snug font-houschka">
          Elevate communication with tailored video conferencing solutions.
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex-1 border-l-4 border-blue-600 pl-6">
        <ul className="space-y-4 text-gray-700 text-base md:text-lg">
          <li>• Enable seamless virtual collaboration across teams and locations.</li>
          <li>• Reduce travel costs and boost productivity with real-time meetings.</li>
          <li>• Ensure secure and encrypted communication for sensitive data.</li>
          <li>• Scale effortlessly with cloud-based conferencing platforms.</li>
          <li>• Enhance customer support, training, and webinars with interactive tools.</li>
        </ul>
      </div>
    </div>
  </section>
</div>
{/*case study*/}



{/*faqs*/}
<div className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-10 font-houschka text-blue-600 drop-shadow">
        Video Conferencing FAQs
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-xl p-4 transition duration-300 ${
              openIndex === index
                ? "bg-blue-50 border-blue-400 shadow-md"
                : "bg-white border-gray-300"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800 hover:text-blue-600 transition duration-300">
                {faq.question}
              </span>
              <span className="text-blue-600 text-xl">
                {openIndex === index ? (
                  <FiChevronUp className="transition-transform rotate-180 duration-300" />
                ) : (
                  <FiChevronDown className="transition-transform duration-300" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 leading-relaxed transition duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>



    </>
      
    
  );
};

export default  VideoConferencing;
