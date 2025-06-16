import React, { useState } from "react";
import Logo3 from "../../assets/softwaredev.png";
import Logo1 from "../../assets/SofwareConsulting.png";
import Logo2 from "../../assets/Custom.png";
import Logo4 from "../../assets/Erp.png";
import CityImage from "../../assets/cityimage.jpg";
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

    title: "Software Consulting & Transformation",
    description:
      "Superior custom software development services combined with expert resources, and technical prowess to strengthen overall business strategy. Our prototyping approach allows us to create tailored applications from scratch across mobile, web, and cloud platforms.",
    points: [
      "Crafted Innovation",
      "Unique Applications",
      "Precision Engineering",
    ],
  },
  {
    img: Logo4,

    title: "ERP Software Development",
    description:
      "TatvaSoft excels in designing secure, high-performing, and well-documented APIs that help businesses forge new connections, automate processes, and enable seamless communication.",
    points: [
      "Integration Innovation",
      "Communication Gateway",
      "Service Architecture",
    ],
  },
  {
    img: Logo2,

    title: "Custom Software Development",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "E-Commerce Platform Development",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "Web Application Development",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "Mobile Application Development",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "Software Testing & QA",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "Performance Engineering",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "Software Maintenance & Support",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "E-Commerce Platform Development",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "Migration & Re-engineering",
    description:
      "Let us handle all the hassles of cloud infrastructure. We help you transition to cloud models and streamline operations to improve overall agility.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
];

const caseStudies = [
  {
    title: "Smart City",
    tags: ["Node.JS", "Energy & Utility"],
    description:
      "Leveraging our technical expertise to build a smart city application, we created an integrated system connecting multiple IoT based sensors to achieve a bird's eye view on all climatic parameters of the city. Our solution helped client to overcome roadblocks of inefficient management of lights, floods, air and energy within the city. Know how our software solution transformed client's ecosystem.",
    image: CityImage,
  },
  {
    title: "Industrial Automation",
    tags: ["Python", "Manufacturing"],
    description:
      "Developed an intelligent industrial automation system to streamline operations, reduce costs, and improve manufacturing efficiency using AI and IoT.",
    image: CityImage,
  },
  {
    title: "Healthcare Platform",
    tags: ["React", "Healthcare"],
    description:
      "Built a secure, scalable healthcare platform that connects doctors and patients via telemedicine, AI-driven diagnostics, and health data analytics.",
    image: CityImage,
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
    question: "What is custom software development?",
    answer:
      "Custom software development is the process of creating software applications tailored to meet the specific needs of a business or user.",
  },
  {
    question: "Why should one go for custom software development?",
    answer:
      "It allows businesses to have software designed specifically for their unique processes, increasing efficiency and productivity.",
  },
  {
    question: "What technologies are used to develop a custom software?",
    answer:
      "It depends on the project, but popular choices include JavaScript, Python, .NET, Java, React, Node.js, and more.",
  },
  {
    question: "What technologies are used to develop a custom software?",
    answer:
      "It depends on the project, but popular choices include JavaScript, Python, .NET, Java, React, Node.js, and more.",
  },
  {
    question: "What technologies are used to develop a custom software?",
    answer:
      "It depends on the project, but popular choices include JavaScript, Python, .NET, Java, React, Node.js, and more.",
  },
  {
    question: "What technologies are used to develop a custom software?",
    answer:
      "It depends on the project, but popular choices include JavaScript, Python, .NET, Java, React, Node.js, and more.",
  },
  {
    question: "What technologies are used to develop a custom software?",
    answer:
      "It depends on the project, but popular choices include JavaScript, Python, .NET, Java, React, Node.js, and more.",
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
          <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
            SOFTWARE DEVELOPMENT SERVICES
          </h1>
          <p className="text-white text-base md:text-lg max-w-2xl mb-8">
            Mohitraj offers reliable custom software development solutions for
            your unique business requirements. We focus on innovation,
            scalability, and agility to help your business evolve and gain a
            competitive edge in a rapidly changing market.
          </p>
          <div className="flex gap-4">
            <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
              GET IN TOUCH
            </button>
            <button className="bg-transparent text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </div>
      {/* Second div */}
      <div className="bg-white py-16 px-4 lg:px-24 text-center">
        {/* Top Text */}
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed font-basis">
          The custom software development process encompasses designing,
          developing, deploying, and maintaining custom software. As a leading
          custom software development company, our domain experts explicate the
          client's needs and accordingly create a strategic plan to optimize
          each stage of the software development life cycle. Our dynamic team of
          skilled software developers, architects, and project managers, coupled
          with industry-driven experience, provides a solid foundation for
          developing high-quality software solutions. We implement dedicated QA
          practices that align with specific business needs, budget, and time.
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
          Custom Software Development Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base md:text-lg">
          Our tailor-made business solutions comprehensively offer custom
          software services to multiple businesses.
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
              <ul className="list-disc list-inside text-blue-800 space-y-1">
                {card.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Case Study*/}
      <div className="w-full  ">
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
              <div className="flex flex-col md:flex-row bg-white  shadow-lg overflow-hidden w-full">
                {/* Image */}
                <div className="md:w-1/2">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 bg-blue-500 text-white p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">
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
                  <button className="border border-white px-2 py-1 text-sm hover:bg-white hover:text-blue-900 transition w-fit ">
                    VIEW CASE STUDY
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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
          How to Start Your Custom Software Development Project With TatvaSoft?
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
