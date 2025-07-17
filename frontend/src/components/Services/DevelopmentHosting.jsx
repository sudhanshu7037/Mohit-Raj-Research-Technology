
import React, { useState } from 'react';

import image1 from "../../assets/developmenthostingbanner.png"
import Logo3 from "../../assets/softwaredev.png";
import Logo1 from "../../assets/SofwareConsulting.png";
import Logo2 from "../../assets/Custom.png";
import Logo4 from "../../assets/Erp.png";
import CityImage from "../../assets/cityimage.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import bgImage from "../../assets/Backgroundsoftware.jpg";
import DevImage from "../../assets/Dproject.png";
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

    title: "Web Development Services",
    description:
      "Mohitraj Research and Technology Pvt. Ltd. provides personalized web development services employing innovative technologies to develop secure, responsive, and scalable websites designed to suit your business objectives.",
    points: [
      "Custom websites",
      "Responsive design",
      "Scalable tech",
    ],
  },
  {
    img: Logo4,

    title: "Cloud Hosting Solutions",
    description:
      "Our cloud hosting solutions offers rapid, flexible, and secure infrastructure with  uptime, promising hassle-free scalability and performance for mission-critical applications.",
    points: [
      "99.9% uptime",
      "Scalable infra",
      "Data security",
    ],
  },
  {
    img: Logo2,

    title: "Website Promotion & SEO",
    description:
      "We are SEO and website promotion experts specializing in search engine rankings, targeted traffic, and online visibility for your brand.",
    points: [
      "SEO ranking",
      "Targeted traffic",
      "Online visibility",
    ],
  },
  {
    img: Logo2,

    title: "Server Management",
    description:
      "Our experienced team delivers enterprise-grade server management services, such as monitoring, security hardening, performance optimization, and 24/7 support for seamless operations.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "Content Delivery Network (CDN) Integration",
    description:
      "Give your website a speed boost and global presence with our CDN integration services, optimizing content delivery and improving user experience across geographies.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "Domain Registration & Management",
    description:
      "Streamline your online presence with our domain registration and management solutions, such as DNS configuration, renewals, and domain protection in one reliable roof.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "E-Marketing Campaigns",
    description:
      "Reach out to your brand's maximum audience with data-driven e-marketing campaigns, such as email marketing, paid advertising, and social media engagement optimised for your audience.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "Website Maintenance",
    description:
      "Keep your site secure, up-to-date, and fully operational with our professional website maintenance services, from regular backups, bug fixes, and content updates.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "Progressive Web App (PWA) Development",
    description:
      "We are experts at Progressive Web App development that provides native app-like performance with web technologies. Our PWAs provide instant loading, offline capability, and frictionless user experience on every device—keeping your business connected with customers at any time, anywhere.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "DevOps & CI/CD Integration",
    description:
      "Boost your software delivery pipeline with our Continuous Integration/Continuous Deployment (CI/CD) and DevOps services. We automate infrastructure provisioning, deployment, and testing to accelerate release cycles and enhance the quality of your web applications.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
  },
  {
    img: Logo2,

    title: "Scalable E-Commerce Platform Development",
    description:
      "Create solid and scalable web stores through our bespoke e-commerce solutions. From payment gateway integration to product management and customer analysis, we offer SEO-friendly, mobile-based solutions optimized for online commerce success.",
    points: [
      "Infrastructure Management",
      "Scalable Solutions",
      "Cloud Migration",
    ],
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
    title: "Custom Web Development",
    description:
      "We specialize in crafting custom websites that truly reflect your brand identity and align with your business goals. Our websites are not only search engine optimized but also responsive, dynamic  as per customer requirement ensuring they perform well across all devices and browsers.",
  },
  {
    title: "CMS-Based Website Solutions",
    description:
      "Unlock the full potential of platforms like WordPress, Joomla, and Drupal with our tailored CMS development services. We offer user-friendly, secure, and scalable content management systems that cater to businesses of all sizes.",
  },
  {
    title: "E-Commerce Website Development",
    description:
      "Boost your online sales with our personalized e-commerce website design solutions. From seamless shopping cart integration to secure payment processing, we create scalable, mobile-friendly online stores that turn visitors into loyal customers.",
  },
  {
    title: " Secure Web Hosting Solutions",
    description:
      "Experience lightning-fast speed and robust security with our secure web hosting solutions, boasting 99.9% uptime. We offer a range of hosting packages, including shared, VPS, and dedicated options, tailored to meet your business needs.",
  },
  {
    title: "Website Performance Optimization",
    description:
      "Enhance user experience and improve your search rankings with our website performance optimization services. We focus on optimizing page load times, mobile responsiveness, and overall site effectiveness through expert fine-tuning.",
  },
  {
    title: " Scalable Cloud Hosting Infrastructure",
    description:
      "Deploy your applications on our scalable cloud hosting infrastructure, featuring real-time monitoring, auto-scaling, and high availability. It's the ideal solution for everyone from startups to large enterprises seeking a robust cloud architecture.",
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
    title: "One-Stop All-Inclusive Web Solutions",
    description:
      "From bespoke website design to a robust web hosting infrastructure, we provide a complete spectrum of services. You won't need to deal with multiple vendors—our integrated process ensures faster delivery and increased reliability.",
  },
  {
    icon: <FaUsers className="text-3xl text-blue-600" />,
    title: "Customized and Scalable Web Development",
    description:
      "We develop custom-made websites and applications that grow with your business. Be it a nascent startup or a large enterprise, our solutions are designed to scale seamlessly without compromise on performance.",
  },
  {
    icon: <FaClipboardList className="text-3xl text-blue-600" />,
    title: "Hostile Infrastructure",
    description:
      "Our dedicated and cloud-based hosting services guarantee uptime, incredibly fast speeds, and enterprise-level security. ",
  },
  {
    icon: <FaUserFriends className="text-3xl text-blue-600" />,
    title: "SEO-Friendly and Mobile-Responsive Designs",
    description:
      "We create SEO-friendly websites that are well-ranked on search engines and offer seamless experiences on any device. Our responsive design focus maximizes engagement and reach.",
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



const DevelopmentHosting = () => {

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



  return (
    <>
    {/*  FIrst Div */ }
    <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <img
              src={image1}
              alt="Custom Software Development"
              className="w-full h-full object-cover"
            />
    
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    
            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight mb-6 font-houschka">
                 DEVELOPMENT & HOSTING SERVICES
              </h1>
              <p className="text-white text-base md:text-lg max-w-2xl mb-8">
                We, at Mohitraj Research & Technology Pvt. Ltd., have expertise in providing customized software development and secure hosting services designed to fulfill your specific business requirements. 
                Our team of experts uses this  latest technology to develop strong, scalable, and nimble digital solutions that facilitate business change.

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
          
          <div className="bg-white py-16 px-4 lg:px-24 text-center">
        {/* Top Text */}
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-12 leading-relaxed font-basis">
          At Mohitraj Research and Technology Private Limited, we are experts in providing end-to-end development and hosting solutions for the specific demands of contemporary businesses.

With our custom software development, we aim to turn your vision into high-performance, scalable applications. From web application development and mobile app solutions to cloud integration and eCommerce platforms, we provide a full-fledged list of digital development requirements.
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
          {/*new div*/}
                  <div
                         className="w-full bg-cover bg-center py-16 px-4"
                         style={{ backgroundImage: `url(${bgImage})` }} // 👈 imported image yaha laga di
                       >
                         <div className="text-center text-white mb-8">
                           <h2 className="text-4xl font-bold mb-4 font-houschka">
                              Development  & Hosting Experience
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
          Custom Development & Hosting Types, We Offer
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-12">
         Welcome to our full-service Website Development, Hosting & Promotion company,
         where we specialize in creating cutting-edge websites, providing reliable hosting solutions, and implementing effective promotion strategies to boost your online presence.
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
                How to Start Your Custom Development & Hosting  Project With MRT?
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
                      Why You Should Choose Mohitraj Research and Technology Pvt. Ltd. for Your Web Hosting and Development Requirements :-
At Mohitraj Research and Technology Private Limited, we do not merely build websites—we craft secure, scalable, and high-performance digital experiences that make your business flourish. 


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
                      Costum  Development  & Hosting FAQs
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

export default DevelopmentHosting
