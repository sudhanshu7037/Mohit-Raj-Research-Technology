import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import EducationBanner from "../../assets/industriespages/education/images/educationbanner.png";



const educationItems = [
  {
    title: "University Automation Software",
    description: "Comprehensive suite to digitize university operations, academics, and governance.",
    link: "/product/education/university-automation-software",
  },
  {
    title: "Engineering College Management System",
    description: "Digitally manage admissions, faculty, academics, and infrastructure.",
    link: "/product/education/engineering-college-management-system",
  },
  {
    title: "College/Institute Management System",
    description: "Streamline academic and administrative tasks for private and public colleges.",
    link: "/product/education/college-institute-management",
  },
  {
    title: "School Management System",
    description: "Digitize school attendance, homework, exams, transport and parent communication.",
    link: "/product/education/school-management-system",
  },
  {
    title: "Online Examination Management System",
    description: "Conduct secure, scalable, and efficient online tests and evaluations.",
    link: "/product/education/online-examination-management",
  },
  {
    title: "Entrance Exam Management and Information System",
    description: "Automate entrance registration, admit cards, results, and counselling workflows.",
    link: "/product/education/entrance-exam-management",
  },
  {
    title: "Smart Learning & Content Management System (SLCMS)",
    description: "Centralized platform for video lectures, notes, and personalized learning.",
    link: "/product/education/smart-learning-content-management",
  },
  {
    title: "Library Management System",
    description: "Easily manage digital/physical library resources and track usage analytics.",
    link: "/product/education/library-management-system",
  },
  {
    title: "University Digitalization",
    description: "Easily manage digital/physical library resources and track usage analytics.",
    link: "/solutions/university-digitalization",
  },
];

const liveProducts = [
    {
      title: "Smart University Portal",
      description:
        "A live platform handling admissions, academics, and e-learning for over 10,000 students.",
      image: "https://static-blog.onlyoffice.com/wp-content/uploads/2023/08/04132139/halston-stephenson-paod-student-portal-dashboard.jpg",
      link: "#",
    },
    {
      title: "Online Examination Platform",
      description:
        "Secure, scalable test system used in real-time across multiple universities.",
      image: "https://s3.envato.com/files/293801748/Online%20Exam-Screenshots/1-Dashboard.png",
      link: "#",
    },
    {
      title: "Digital Library System",
      description:
        "Fully digitalized library resource system with real-time analytics and search.",
      image: "https://www.library-management.com/screenshots/screenshot_dashboard.png?",
      link: "#",
    },
    {
      title: "eLearning Content Hub",
      description:
        "Cloud-based learning content system with interactive quizzes and video lectures.",
      image: "https://s3-alpha.figma.com/hub/file/2302870659/ec2619cb-1123-41d7-9ad4-8b2ca678f46e-cover.png",
      link: "#",
    },
    {
      title: "College ERP Suite",
      description:
        "Integrated college management solution streamlining operations and reporting.",
      image: "https://www.netsuite.com/portal/assets/img/products-redwood/erp/social.jpg?v3",
      link: "#",
    },
  ];


const Education = () => {
  return (
    <>
      {/* === Hero Section === */}
      <section
        className="relative bg-blue-950 text-white min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:  `url(${EducationBanner})`,  // Change to your actual image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug font-houschka">
            Revolutionizing Education through Digital Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Empowering universities and colleges with smart technology-driven solutions
          </p>
          <a
            href="#education"
            className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Explore Our Solutions
          </a>
        </div>
      </section>

      {/* === Intro Paragraph Section === */}
      <section id="education" className="py-20 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight mb-4 font-houschka">
            Smarter Technology for Smarter Education
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We deliver scalable, innovative, and customized IT solutions for
            universities, colleges, and schools to streamline operations and enhance
            learning outcomes. From smart learning platforms to automated management
            systems, we empower institutions with next-gen technology.
          </p>
        </div>

        {/* === Cards Grid Section === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
              </div>
              <div>
                <a href={item.link}>
                  <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300 text-sm font-medium shadow-md">
                    Explore Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/*new section*/}

    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">Live Products Showcase</h2>
        <p className="text-gray-700 text-lg">
          Explore our live, deployed products that are solving real problems across institutions and industries.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {liveProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                  View Live
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
{/*working flow*/}
    <section className="bg-gray-100 py-20 px-6">
  <div className="max-w-3xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">Our Working Flow</h2>
    <p className="text-gray-600 text-lg">Step-by-step process we follow to deliver quality solutions.</p>
  </div>

  <div className="relative border-l-4 border-blue-600 max-w-3xl mx-auto">
    {[
      { title: "Requirement Gathering", desc: "We begin with understanding your needs and vision." },
      { title: "Planning & Strategy", desc: "Clear roadmap and milestones are created." },
      { title: "Design & Development", desc: "User-friendly UI and functional backend are built." },
      { title: "Testing & Feedback", desc: "Your product is tested and improved based on your input." },
      { title: "Deployment", desc: "We launch your solution with complete documentation." },
      { title: "Maintenance", desc: "Continuous support and updates ensure long-term success." }
    ].map((step, index) => (
      <div key={index} className="mb-10 ml-6">
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 mt-1.5"></div>
        <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
      </div>
    ))}
  </div>
</section>

{/*why choose*/}
<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
    
    {/* Left Text */}
    <div>
      <h2 className="text-4xl font-bold text-blue-900 mb-6 font-houschka">Why Choose Us?</h2>
      <p className="text-gray-700 mb-6 text-lg">
        We provide cutting-edge IT solutions tailored to your needs with an experienced team of developers, designers, and consultants.
      </p>
      <ul className="space-y-3 text-gray-600">
        <li className="flex items-start gap-2">
          ✅ &nbsp; Industry-expert developers and designers
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Timely delivery with 100% transparency
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Affordable packages for every business
        </li>
        <li className="flex items-start gap-2">
          ✅ &nbsp; Continuous support and maintenance
        </li>
      </ul>
    </div>

    {/* Right Image with Hover Effect */}
    <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-500">
      <img
        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80"
        alt="Why Choose Us"
        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
      />
    </div>

  </div>
</section>
{/*new section*/}
<section className="py-20 px-6 bg-gray-100">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-900 mb-4 font-houschka">Key Benefits of Choosing Us</h2>
    <p className="text-gray-700 text-lg">
      We offer more than just services – we offer complete digital transformation with measurable outcomes.
    </p>
  </div>

  <div className="max-w-4xl mx-auto">
    <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg leading-relaxed">
      <li><span className="font-semibold text-blue-800">Tailored Solutions:</span> Customized products to meet your unique institutional needs.</li>
      <li><span className="font-semibold text-blue-800">Proven Track Record:</span> Successfully deployed live projects across diverse sectors.</li>
      <li><span className="font-semibold text-blue-800">Ongoing Support:</span> Dedicated post-deployment support and maintenance.</li>
      <li><span className="font-semibold text-blue-800">Affordable Pricing:</span> Competitive rates without compromising on quality.</li>
      <li><span className="font-semibold text-blue-800">Tech Expertise:</span> Built with modern technologies including React, Node.js, and more.</li>
    </ul>
  </div>
</section>




    </>
  );
};

export default Education;