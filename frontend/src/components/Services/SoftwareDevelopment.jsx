import React, { useState } from "react";
import Logo1 from "../../assets/servicespage/softwaredevelopmentimages/softwareicons/SofwareConsulting.png";
import Logo2 from "../../assets/servicespage/softwaredevelopmentimages/softwareicons/Custom.png";
import Logo4 from "../../assets/servicespage/softwaredevelopmentimages/softwareicons/Erp.png";
import Logo5 from "../../assets/servicespage/softwaredevelopmentimages/softwareicons/E-Commerce Platform Development.png";
import Logo6 from "../../assets/servicespage/softwaredevelopmentimages/softwareicons/Web Application Development.png";
import Logo7 from "../../assets/servicespage/softwaredevelopmentimages/softwareicons/Mobile Application Development.png";
import Logo8 from "../../assets/servicespage/softwaredevelopmentimages/softwareicons/Software Testing & QA.png";
import Logo9 from "../../assets/servicespage/softwaredevelopmentimages/softwareicons/Performance Engineering.png";
import Logo10 from "../../assets/servicespage/softwaredevelopmentimages/softwareicons/Software Maintenance & Support.png";
import Logo11 from "../../assets/servicespage/softwaredevelopmentimages/softwareicons/Migration & Re-engineering.png";
import Medical from "../../assets/servicespage/softwaredevelopmentimages/softwareicons/medical collage.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import BannerImage from "../../assets/servicespage/softwaredevelopmentimages/bannerimage/softwarebanner.jpg";
import DevImage from "../../assets/servicespage/softwaredevelopmentimages/bannerimage/softwareimage.jpg";
import {
  FaServer,
  FaLaptopCode,
  FaCloud,
  FaDatabase,
  FaVial,
  FaMobileAlt,
  FaCogs,
  FaShieldAlt,
  FaUsers,
  FaClipboardList,
  FaUserFriends,
  FaHeadphones,
  FaMap,
  FaClipboardCheck,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const cardsData = [
  {
    img: Logo1,

    title: "Business Consulting & Transformation",
    description:
      "Mohitraj Research and Technology Private Limited offers strategic business consulting and transformation services to assist companies in increasing operational efficiency, fostering innovation, and delivering sustainable growth. We offer tailored solutions that harmonize technology, people, and processes for measurable impact",
    button: "Download Catalog",
    button1: "Get a Quote",
  },
  {
    img: Logo4,

    title: "ERP Software Development",
    description:
      "Streamline your process with tailored University Management and Information System , Medical College Management and Information System ,Online Examination System ,Police Management System , Banking Management System ,College and institute management system , school management system ,E-Library Management System , Hospital  Management and Information System, CRM Software , E-Company Management System  and Business Intelligence System",
    button: "Download Catalog",
    button1: "Get a Quote",
  },
  {
    img: Logo2,

    title: "Custom Software Development",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility. ",
    button: "Download Catalog",
    button1: "Get a Quote",
  },
  {
    img: Logo5,

    title: "E-Commerce Platform Development",
    description:
      "We create powerful e-commerce storefronts to maximize sales and improve user experience while strengthening your digital retail operations.",
    button: "Download Catalog",
    button1: "Get a Quote",
  },
  {
    img: Logo6,

    title: "Web Application Development",
    description:
      "We develop state-of-the-art web applications designed to attract users and generate web traffic while improving both online visibility and user interaction.",
    button: "Download Catalog",
    button1: "Get a Quote",
  },
  {
    img: Logo7,

    title: "Mobile Application Development",
    description:
      "Our Mobile App Development software delivers accessible mobile applications designed for diverse users while strengthening mobile engagement and presence.",
    button: "Download Catalog",
    button1: "Get a Quote",
  },
  {
    img: Logo8,

    title: "Software Testing & QA",
    description:
      "Our rigorous testing procedures together with performance optimization strategies deliver high-quality software and improved user experiences.",
    button: "Download Catalog",
    button1: "Get a Quote",
  },
  {
    img: Logo9,

    title: "Performance Engineering",
    description:
      "By applying advanced optimization techniques we enhance software performance which results in better speed and reliability while heightening user satisfaction.",
    button: "Download Catalog",
    button1: "Get a Quote",
  },
  {
    img: Logo11,

    title: "Migration & Re-engineering",
    description:
      "Your systems can move smoothly to modern platforms which enhance efficiency while optimizing performance to future-proof your technology stack.",
    button: "Download Catalog",
    button1: "Get a Quote",
  },
  {
    img: Logo10,

    title: "Software Maintenance & Support",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility.",
    button: "Download Catalog",
    button1: "Get a Quote",
  },
];

const caseStudies = [
  {
    title: "Medical College Management & Information System",
    tags: [".NET", "Complete Automation"],
    description:
      "A  leading Medical College approached us to improve their students , doctor and patient engagement strategies. They wanted to change their approach by using artificial intelligence (AI) in a new mobile application.",
    image: Medical,
  },
  {
    title: "Industrial Automation",
    tags: ["Python", "Manufacturing"],
    description:
      "Transform Industrial Operations with Intelligent Automation Solutionsjoin the future of production and manufacturing with state-of-the-art industrial automation software from Mohitraj Research and Technology Private Limited. ",
  },
  {
    title: " Revolutionizing Customer Engagement with an AI-Powered Mobile App",
    tags: ["React", "Healthcare"],
    description:
      "A  Software Development, a leading Medical College approached us to improve their customer engagement strategies. They wanted to change their approach by using artificial intelligence (AI) in a new mobile application.Understanding the client's vision and goals, our team of developers and AI experts worked together to design and create a customized mobile app. This app used AI algorithms to analyses customer behaviour, preferences, andproblems . By using the insights generated by AI, the app provided personalized recommendations, targeted promotions, and smooth interactions tailored to each customer.",
    image: Medical,
  },
];
const techStack = [
  {
    category: "Backend",
    icon: <FaServer />,
    items: [".NET", "Java", "Node", "PHP", "Ruby on Rails"],
  },
  {
    category: "Frontend",
    icon: <FaLaptopCode />,
    items: ["Angular", "React", "Vue"],
  },
  {
    category: "Cloud & DevOps",
    icon: <FaCloud />,
    items: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase />,
    items: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Azure SQL",
      "Amazon RDS",
      "Oracle",
      "Cassandra",
      "Elasticsearch",
      "Dynamo",
    ],
  },
  {
    category: "Testing",
    icon: <FaVial />,
    items: [
      "Postman",
      "Selenium",
      "TestRail",
      "Apache JMeter",
      "Katalon Studio",
      "Jest",
      "OWASP ZAP",
      "JUnit, NUnit",
      "BrowserStack",
      "Jasmine, Mocha, Chai",
    ],
  },
  {
    category: "Mobility",
    icon: <FaMobileAlt />,
    items: ["iOS", "Android", "React Native", "Flutter", "Ionic"],
  },
  {
    category: "Others",
    icon: <FaCogs />,
    items: ["SharePoint", "Apache Kafka", "BizTalk", "Power BI"],
  },
];
const services = [
  {
    title: "Industry-Specific Software",
    description:
      "Mohitraj Research and Technology Private Limited is a company that specializes in creating tailored industry-specific software solutions for meeting specific operation requirements of industries like healthcare, education, manufacturing, retail, and logistics. Our secure and scalable applications induce efficiency and digital change.",
  },
  {
    title: "Business Process Automation (BPA)",
    description:
      "Mohitraj Research and Technology Private Limited provides smart business process automation solutions that automate processes, minimize manual effort, and boost productivity. We enable organizations to speed up digital operations with smart and scalable automation solutions.",
  },
  {
    title: "Customer-facing Applications",
    description:
      "Mohitraj Research and Technology Private Limited creates innovative customer-centric applications that increase user interactions, optimize service delivery, and maximize customer satisfaction. Our offerings are optimized for web, mobile, and cross-platform deployments.",
  },
  {
    title: "Integration and Middleware solutions",
    description:
      "Mohitraj Research and Technology Private Limited offers strong integration and middleware solutions to integrate enterprise systems, applications, and data sources in a seamless fashion. We provide simplified workflows, real-time data interchange, and increased IT agility across systems.",
  },
  {
    title: "Enterprise Solutions",
    description:
      "Mohitraj Research and Technology Private Limited offers scalable and secure business solutions that enable companies to maximize operations, improve collaboration, and fuel digital progress. Our solutions are designed to address intricate business requirements across sectors.",
  },
  {
    title: "Analytical Tools",
    description:
      "Mohitraj Research and Technology Private Limited provides innovative analytics solutions that turn information into real-time insights for better decision-making and business strategy development. Our solutions enable real-time analytics, dashboards, and predictive modeling in various industries.",
  },
];
const steps = [
  {
    icon: <FaHeadphones className="text-2xl text-blue-600" />,
    title: "Contact Us",
    description:
      "Begin your digital transformation journey with *Mohitraj Research and Technology Private Limited (MRT)* through a process of streamlined and client-centric engagement. This is how we assist you in getting started???? Contact Us",
  },
  {
    icon: <FaMap className="text-2xl text-blue-600" />,
    title: "Project Strategy and Roadmap",
    description:
      "Our specialists will develop a strategic roadmap according to your project's goals. We set concise milestones, suggest the optimal tech stack, and define a step-by-step plan to guarantee timely delivery and technical quality.",
  },
  {
    icon: <FaClipboardCheck className="text-2xl text-blue-600" />,
    title: "Project Onboarding",
    description:
      "As soon as the plan is approved, we onboard an exclusive team immediately to start the project. You have complete visibility into the process and can track progress, performance, and personnel in real time—ensuring flexibility and alignment with shifting business demands.",
  },
];
const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: "Affordable Technology Solutions",
    description:
      "Choose us for our  efficient and  affordable IT solutions that drives maximum value without sacrificing quality. We provides reliable and  scalable solutions that are  designed to fit your budget and deliver long-term efficiency and ROI-based success.",
  },
  {
    icon: <FaUsers className="text-3xl text-blue-600" />,
    title: "Experienced Developers",
    description:
      "Our developers have the knowledge and creativity to ensure every task has perfection .",
  },
  {
    icon: <FaClipboardList className="text-3xl text-blue-600" />,
    title: "Truly-Tailored Solutions",
    description:
      "We are using the latest technologies to offer you innovative solutions that stand out from the competition and make an impact in a market.",
  },
  {
    icon: <FaUserFriends className="text-3xl text-blue-600" />,
    title: "Customer-Centric Approach",
    description:
      "It matters to us that we create what you want. We work with you throughout the entire process, so your vision comes to life.",
  },
];

const faqs = [
  {
    question:
      "Mohitraj Research Tech specializes in what kinds of software development services?",
    answer:
      "We are experts in developing custom software, including web applications, mobile applications (iOS/Android), SaaS products, and enterprise solutions (CRM, ERP). We are also very good at combining blockchain, IoT, and AI/ML technologies.",
  },
  {
    question:
      "How is artificial intelligence used in software development by Mohitraj Research Tech?",
    answer:
      "By combining AI, we develop intelligent software that improves user experience and operational efficiency. Examples of this software include generative AI applications  and machine learning models for automation and prediction . .",
  },
  {
    question: "What is your process  about developing  a software?",
    answer:
      "To guarantee adaptability  and continuous delivery, we use an Agile development methodology. Requirements gathering  , UI/UX design, iterative development, QA and testing, deployment, and continues  support are all the  steps that we follow  in our process.",
  },
  {
    question:
      "How do you guarantee about the  security of software you developed ?",
    answer:
      "Security  comes first. We apply secure coding standards, carry  security audits, evaluate vulnerabilities, integrate cybersecurity best practices across the whole SDLC, and guarantee data privacy compliance and the security of the application we developed.",
  },
  {
    question: "Are you able to assist us in updating our legacy systems ",
    answer:
      "Definitely, By Using  cloud technology to enhance performance and maintenance, that lowers the  operating costs, as well as transferring antiquated software to  scalable architectures like microservices.",
  },
  {
    question:
      "How much does a custom software project  cost and how much time will it take?",
    answer:
      "The complexity, scope, and  requirements of the project  tells us about the  timeline and cost of project we developed. After  careful calculations     and consultation, we provide comprehensive proposals  that  guarantees transparency and alignment with your  plan and schedule.",
  },
  {
    question: "Do you provide maintenance support after development?",
    answer:
      "To guarantee that your software stays stable, secure, and adapts to your company's needs, we offers the  post-launch maintenance and support services that include performance optimization, security and updates.",
  },
];

const SoftwareDevelopment = () => {
  const industries = [
    "Fintech & Insurance",
    "Oil & Gas, Mining",
    "Education",
    "Retail & eCommerce",
    "Energy and Utilities",
    "Logistics & Distribution",
    "Healthcare",
    "Travel & Hospitality",
    "Media",
    "Public Sector",
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // 👈 Yeh function hona chahiye tha

  return (
    <>
      {/* First div */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={BannerImage}
          alt="Custom Software Development"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-4">
          <h3 className="text-white text-xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
            Transform Your Business
            <br />
            With Custom Software
            <br />
            Development Services
          </h3>

          <div className="flex gap-4">
            <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-2">
              GET IN TOUCH
            </button>
          </div>
        </div>

        <div
          className=""
          absolute
          inset-0
          flex
          flex-col
          justify-center
          items-start
          text-left
          px-4
        >
          <h3 className="text-white text-xl md:text-6xl font-semibold leading-tight mb-10 font-houschka">
            Transform Your Business With
            <br />
            Custom Software Development
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
      <div className="bg-blue-50 py-16 px-4 lg:px-24 text-center">
        {/* Top Text */}
        <h1 className="text-blue-500 text-4xl font-bold font-houschka">
          Overview
        </h1>
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed font-basis text-justify mt-4">
          MOHITRAJ RESEARCH AND TECHNOLOGY PRIVATE LIMITED is the leading
          software development company in India , it is specializes in software
          development and delivers many ERP software solutions in educational
          domain , Healthcare domain and industrial domain that are designed to
          fulfil the business requirements of all the organizations Empowering
          business in Delhi NCR region , Our team of experienced developers are
          combined with the special art of technologies that enables us to boost
          your digital footprint while transforming your business operations.
          MOHITRAJ RESEARCH AND TECHNOLOGY PRIVATE LIMITED recognizes the
          necessity of maintaining market leadership in the competitive business
          environment of today. Our wide range of bespoke software development
          services exists to help drive your success. Our dedication to
          high-quality product delivery extends from ERP, web and mobile app
          development through custom software solutions which consistently
          surpass your expectations.
        </p>
      </div>

      {/* Third div */}
      <div className="bg-red-50  py-16 px-4 lg:px-24 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-4xl font-bold text-blue-900 mb-4 font-houschka">
          Our Software Development Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-2xl md:text-lg font-semibold">
          We offer a comprehensive suite of software development services,
          meticulously designed to meet the user requirements.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="relative backdrop-blur-xl bg-white/80 hover:bg-white border border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              {/* Glowing Edge */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 via-red-100 to-orange-100 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500 pointer-events-none" />

              {/* Image */}
              <img
                src={card.img}
                alt={card.alt}
                className="h-16 mb-5 mx-auto group-hover:scale-110 transition-transform duration-300"
              />

              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-pink-600 transition-all duration-300">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {card.description}
              </p>

              {/* Buttons */}
            </div>
          ))}
        </div>
      </div>

      {/*Contact us div*/}
      <div className="w-full bg-white py-8 px-4 flex justify-center items-center gap-12 max-w-7xl mx-auto h-[200px]">
        {/* Left Side */}
        <div className="flex items-center">
          <div className="w-1 h-16 bg-orange-500 mr-4"></div>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 leading-snug">
            Have a Custom Software <br /> Development Challenge to address?
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-800 font-medium">Contact Us</span>
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer">
            <FaArrowRight className="text-white text-sm" />
          </div>
        </div>
      </div>
      {/*new  div*/}
      {/* <div
        className="w-full bg-cover bg-center py-16 px-4"
        style={{ backgroundImage: `url(${Logo3})` }} // 👈 imported image yaha laga di
      >
        <div className="text-center text-white mb-8">
          <h2 className="text-4xl font-bold mb-4 font-houschka">
            Software Development Experience
          </h2>
          <p className="max-w-2xl mx-auto text-lg font-basis">
             MRT has successfully completed 1800+ projects with 810+
            customers in multiple industries. Here are some of the domains in
            which we have worked:
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded shadow-lg overflow-hidden">
          <div className="bg-blue-700 text-white py-3 text-center text-xl font-semibold">
            Industries We Serve
          </div>
          <div className="p-8 text-gray-800">
            <p className="mb-6">
              With over years of Industry experience, we facilitate diversified
              clients from domains such as
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {industries.map((industry, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-600" />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      {/*new  div*/}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-blue-50">
        <h2 className="text-4xl text-center font-bold text-blue-900 mb-12 font-houschka">
          Technology Stack
        </h2>
        <div className="space-y-10 ">
          {techStack.map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 "
            >
              {/* Left Label */}
              <div className="flex items-center min-w-[180px] gap-3 border p-2  border-black text-white bg-blue-900">
                {section.icon}
                <span className="text-lg font-semibold text-blue-800">
                  {section.label}
                </span>
                <h1>{section.category}</h1>
              </div>

              {/* Right Items */}
              <div className="flex flex-wrap gap-3">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className=" bg-red-200 hover:bg-white text-gray-800 px-4 py-2  border border-black text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* New Section – Custom Software Types we offer */}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center bg-red-50">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
          Custom Software Types, We Offer
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-12">
          We offer a comprehensive suite of software development services
          ,meticulously designed to meet the user requirements:-
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left ">
          {services.map((service, index) => (
            <div
              key={index}
              className={` ~rounded-xl border-t-4 border-red-500 p-6 shadow-md hover:shadow-xl transition-all duration-300 ${
                index === 1 ? "bg-blue-100" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/*new  div*/}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12 font-houschka">
          How to Begin Your Custom Software Development Project with MRT
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={DevImage}
              alt="Development Process"
              className=" h-full object-cove "
            />
          </div>

          {/* Steps Section */}
          <div className="flex-1 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
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
      {/*new  div*/}

      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-4 font-houschka">
          Why Choose MRT?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          When you partner with MOHITRAJ RESEARCH TECHNOLOGY PRIVATE LIMITED,
          you can trust that professionals will handle your software solution.
          Let us help you turn your ideas into reality and grow your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border border-gray-500 p-6 rounded-md text-center bg-red-100 hover:bg-blue-900 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4 text-blue-900 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
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

      {/* Benifits*/}

      <div>
        <section className="bg-gray-50 py-16 px-4 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto flex flex-col items-start gap-8">
            {/* Left Side */}
            <div className="flex-1">
              <p className="text-2xl uppercase tracking-widest text-blue-600 mb-2 font-houschka font-bold">
                Benefits
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-900 leading-snug font-houschka">
                Future-proof your business with solutions tailored for you.
              </h2>
            </div>

            {/* Right Side */}
            <div className="flex-1 border-l-4 border-blue-600 pl-6">
              <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                <li>
                  • Imaginenew possibilities with intelligent, scalable
                  technologies
                </li>
                <li>
                  • Transform, adapt, and evolve through purpose-led digital
                  ecosystems.
                </li>
                <li>
                  • Construct and scale innovative business models that align to
                  market expectations.
                </li>
                <li>
                  • Tap into emerging technologies to unlock operational
                  excellence.
                </li>
                <li>
                  • Drive lasting transformation and unlock unrealized growth
                  potential.
                </li>
                <li>
                  • Collaborate with us to fuel innovation that lasts—and
                  solutions that adapt to you.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Case Study*/}

      {/*new  div*/}
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-4xl font-semibold text-center mb-8 font-houschka text-blue-500">
          {" "}
          Costum Software Development FAQs
        </h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-700 font-basis">
                {faq.question}
              </span>
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 font-basis">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SoftwareDevelopment;
