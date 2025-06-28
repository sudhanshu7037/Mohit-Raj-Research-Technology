import React, { useState } from "react";
import Logo3 from "../../assets/softwaredev.png";
import Logo1 from "../../assets/SofwareConsulting.png";
import Logo2 from "../../assets/Custom.png";
import Logo4 from "../../assets/Erp.png";
import Logo5 from "../../assets/E-Commerce Platform Development.png";
import Logo6 from "../../assets/Web Application Development.png";
import Logo7 from "../../assets/Mobile Application Development.png";
import Logo8 from "../../assets/Software Testing & QA.png";
import Logo9 from "../../assets/Performance Engineering.png";
import Logo10 from "../../assets/Software Maintenance & Support.png";
import Logo11 from "../../assets/Migration & Re-engineering.png";
import Medical from "../../assets/medical collage.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import bgImage from "../../assets/Backgroundsoftware.jpg";
import DevImage from "../../assets/whychoseus.png";
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
      "Empower your company with professional transformation and consulting services designed to promote sustainability and growth. With the help of our knowledgeable staff's creative solutions and strategic direction, realize your full potential.",
      button : "Download Catalog",
      button1:"Get a Quote",
  },
  {
    img: Logo4,

    title: "ERP Software Development",
    description:
      "Streamline your processes with customized solutions such as University & College Management, Medical & Hospital Information Systems, Online Examination, Police & Banking Systems, E-Library, CRM, E-Company Management, and Business Intelligence platforms .",
       button : "Download Catalog",
      button1:"Get a Quote",
  },
  {
    img: Logo2,

    title: "Custom Software Development",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility. ",
      button : "Download Catalog",
      button1:"Get a Quote",
  },
  {
    img: Logo5,

    title: "E-Commerce Platform Development",
    description:
      "We create powerful e-commerce storefronts to maximize sales and improve user experience while strengthening your digital retail operations.",
      button : "Download Catalog",
      button1:"Get a Quote",
  },
  {
    img: Logo6,

    title: "Web Application Development",
    description:
      "We develop state-of-the-art web applications designed to attract users and generate web traffic while improving both online visibility and user interaction.",
      button : "Download Catalog",
      button1:"Get a Quote",
  },
  {
    img: Logo7,

    title: "Mobile Application Development",
    description:
      "Our Mobile App Development software delivers accessible mobile applications designed for diverse users while strengthening mobile engagement and presence.",
      button : "Download Catalog",
      button1:"Get a Quote",
  },
  {
    img: Logo8,

    title: "Software Testing & QA",
    description:
      "Our rigorous testing procedures together with performance optimization strategies deliver high-quality software and improved user experiences.",
      button : "Download Catalog",
      button1:"Get a Quote",
  },
  {
    img: Logo9,

    title: "Performance Engineering",
    description:
      "By applying advanced optimization techniques we enhance software performance which results in better speed and reliability while heightening user satisfaction.",
      button : "Download Catalog",
      button1:"Get a Quote",
  },
  {
    img: Logo11,

    title: "Migration & Re-engineering",
    description:
      "Your systems can move smoothly to modern platforms which enhance efficiency while optimizing performance to future-proof your technology stack.",
      button : "Download Catalog",
      button1:"Get a Quote",
  },
  {
    img: Logo10,

    title: "Software Maintenance & Support",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility.",
      button : "Download Catalog",
      button1:"Get a Quote",
  },
];

const caseStudies = [
  {
    title: "Medical College Management & Information System",
    tags: [".NET", "Complete Automation"],
    description:
      "Hospital Management System is powerful, flexible, easy to use and is designed and developed to deliver real conceivable benefits to hospitals and clinics. And more importantly it is backed by reliable and dependable support.",
    image: Medical,
  },
  {
    title: "Industrial Automation",
    tags: ["Python", "Manufacturing"],
    description:
      "Developed an intelligent industrial automation system to streamline operations, reduce costs, and improve manufacturing efficiency using AI and IoT.",
    image: Medical,
  },
  {
    title: "Healthcare Platform",
    tags: ["React", "Healthcare"],
    description:
      "Built a secure, scalable healthcare platform that connects doctors and patients via telemedicine, AI-driven diagnostics, and health data analytics.",
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
      "Professionals at TatvaSoft have experience in different sectors. They understand your unique requirements and help build custom solutions like ERP and CRM with industry-specific features and functionalities.",
  },
  {
    title: "Business Process Automation (BPA)",
    description:
      "Collaborate with TatvaSoft to automate your business processes and streamline the workflow. Our experts deliver custom business applications for document management, task and project management that drive organizational productivity and efficiency.",
  },
  {
    title: "Customer-facing Applications",
    description:
      "We develop solutions keeping users in mind. That’s why TatvaSoft excels at creating customer-facing software like eCommerce, booking engines, and various mobile apps. They feature user-friendly interfaces and are specially created to meet your customers’ needs.",
  },
  {
    title: "Integration and Middleware solutions",
    description:
      "Our custom-built software facilitates seamless integration with various apps and databases. It ensures effortless data exchange between systems and that different programs and workflows function together without any conflict.",
  },
  {
    title: "Enterprise Solutions",
    description:
      "With over two decades of experience, TatvaSoft can develop and deploy enterprise software solutions of varying complexities including ERP asset management and SCM. Our experts help you scale business infrastructure and strengthen core operational KPIs.",
  },
  {
    title: "Analytical Tools",
    description:
      "TatvaSoft assists you in leveraging big data, BI tools, and advanced analytics to unlock endless business opportunities. Our experts deliver data management and analytics systems to help you gain holistic visibility and actionable insights.",
  },
];
const steps = [
  {
    icon: <FaHeadphones className="text-2xl text-blue-600" />,
    title: "Contact Us",
    description:
      "Reach out to our executives and brief your project requirements and objectives. Following that, our technical consultants will contact you to understand your requirements in detail and suggest the best approach.",
  },
  {
    icon: <FaMap className="text-2xl text-blue-600" />,
    title: "Project Strategy and Roadmap",
    description:
      "Our experts will draw out a road map to determine the best path forward. They would also suggest the best tech stack to handle the project’s complications and help meet your technical needs.",
  },
  {
    icon: <FaClipboardCheck className="text-2xl text-blue-600" />,
    title: "Project Onboarding",
    description:
      "Your new team will immediately start working right after we prep them and assign your project. You can easily monitor the progress of the project and adjust the staff as per your changing requirements.",
  },
];
const features = [
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: "Quality and Security",
    description:
      "Our programmers adhere to best coding practices to write clean code and test it thoroughly to eliminate security vulnerabilities. We also obtain customer feedback to ensure your product meets expectations.",
  },
  {
    icon: <FaUsers className="text-3xl text-blue-600" />,
    title: "Experienced Developers",
    description:
      "Our software developers have experience in diverse fields and technologies. They understand your unique business requirements or complex challenges and help you successfully navigate through them.",
  },
  {
    icon: <FaClipboardList className="text-3xl text-blue-600" />,
    title: "Truly-Tailored Solutions",
    description:
      "We provide robust solutions that work independently or integrate seamlessly with a variety of applications. Our experts can craft a custom solution that suits your unique business requirements.",
  },
  {
    icon: <FaUserFriends className="text-3xl text-blue-600" />,
    title: "Customer-Centric Approach",
    description:
      "Our professionals pursue software development keeping customers in mind at every step. We offer flexible engagement models, seamless communication, regular project updates and seek client feedback.",
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
          src={Logo3}
          alt="Custom Software Development"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-white text-xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
            Transform your Business with Innovative Software Development
            Technology
          </h3>
          
          <div className="flex gap-4">
            <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-2">
              GET IN TOUCH
            </button>
            <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-2">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </div>
      {/* Second div */}
      <div className="bg-white py-16 px-4 lg:px-24 text-center">
        {/* Top Text */}
        <h1 className="text-blue-500 text-4xl font-bold">Overview</h1>
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">1800+</h3>
            <p className="text-gray-600 mt-2 text-center">
              Completed <br /> Projects
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">21+</h3>
            <p className="text-gray-600 mt-2 text-center">
              Years of <br /> Experience
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">810+</h3>
            <p className="text-gray-600 mt-2 text-center">
              Global <br /> Customers
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center">
            <h3 className="text-blue-800 text-3xl font-bold">36</h3>
            <p className="text-gray-600 mt-2 text-center">
              Countries <br /> Clients Served
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-300 max-w-5xl mx-auto" />
      </div>
      {/* Third  div */}
      <div className="bg-white py-16 px-4 lg:px-24 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-4xl font-bold text-blue-900 mb-4 font-houschka ">
          Our Software Development Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-2xl md:text-lg font-semibold ">
          We offer a comprehensive suite of software development services
          ,meticulously designed to meet the user requirements.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto ">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="border  border-black  p-6 text-left  transition"
            >
              <img src={card.img} alt={card.alt} className="h-16 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              {/* <ul className="list-disc list-inside text-blue-800 space-y-1">
                {card.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul> */}
              {card.button && (
                <button className="bg-blue-900 text-white px-4 py-2 rounded   hover:bg-blue-700 transition mt-4 mr-8">
                  {card.button}
                </button>
              )}
              {card.button1 && (
                <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-4 ml-8">
                  {card.button1}
                </button>
              )}
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
      <div
        className="w-full bg-cover bg-center py-16 px-4"
        style={{ backgroundImage: `url(${bgImage})` }} // 👈 imported image yaha laga di
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
      </div>
      {/*new  div*/}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl text-center font-bold text-blue-900 mb-12 font-houschka">
          Technology Stack
        </h2>
        <div className="space-y-10">
          {techStack.map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              {/* Left Label */}
              <div className="flex items-center min-w-[180px] gap-3 border p-2  border-black">
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
                    className="bg-gray-100 hover:bg-blue-100 text-gray-800 px-4 py-2  border border-black text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*new  div*/}
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">
          Custom Software Types, We Offer
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-12">
          TatvaSoft specializes in creating various software solutions to fit
          unique business requirements. Our experts offer tailor-made services
          to drive growth and efficiency in your business.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <div key={index} className="border-t-4 border-blue-500 pt-4">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
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
          How to Start Your Custom Software Development Project With MRT?
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
          Why Choose TatvaSoft?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          As a leading software development company, TatvaSoft is dedicated to
          upholding industry standards. Hire TatvaSoft as your custom software
          development partner to leverage our qualities for your benefit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-500 p-6 rounded-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
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
          <li>• Reimagine new possibilities for your business.</li>
          <li>• Transform, adapt, and grow with purpose-led ecosystems.</li>
          <li>• Create new business models and scale rapidly.</li>
          <li>• Take advantage of new technologies.</li>
          <li>• Accelerate innovation and unlock new growth potential.</li>
        </ul>
      </div>
    </div>
  </section>
</div>


             
{/* Case Study*/}
      <div className="w-full mt-4 ">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-4xl font-bold text-blue-900 mb-4 font-houschka">
            Custom Software Development Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-basis">
            Getting into the nitty-gritty of each software project and achieving
            a measurable result is what we do for the world's leading companies.
            Take a look!
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          className="w-full  "
        >
          {caseStudies.map((caseStudy, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row bg-white  shadow-lg overflow-hidden w-full h-[460px] ">
                {/* Image */}
                <div className="md:w-1/2">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 bg-slate-600 text-white p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-houschka font-semibold mb-4">
                    {caseStudy.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex gap-2 mb-4">
                    {caseStudy.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="border border-white px-2 py-1 text-sm rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-200 mb-6">{caseStudy.description}</p>

                  {/* Button */}
                  <Link to={'/MedicalCollegeManagement'} className="border border-white px-2 py-1 text-sm hover:bg-white hover:text-blue-900 transition w-fit ">
                    VIEW CASE STUDY
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


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
