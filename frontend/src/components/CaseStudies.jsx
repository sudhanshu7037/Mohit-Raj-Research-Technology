import React from 'react'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "University Digitalization",
      industry: "Education",
      image:
        "https://www.nowystyl.com/getmedia/5d46fbb0-2526-471f-947a-ac4bbc9b77e2/abb-nowy-stylmannheim-germany-25526.jpg?height=270",
      summary:
        "Developed a centralized ERP solution for an engineering college to manage academics, exams, hostel, and fee systems.",
      link: "/Education/Casestudies/university-Digitalization-casestudies",
    },
    {
      title: "Digital Health Infrastructure",
      industry: "Healthcare",
      image:
        "https://img.theweek.in/content/dam/week/news/2022/images/2022/12/21/Medicine-doctor-laptop-computer-patient-x-ray-scans-digital-healthcare-virtual-screen-interface-icons-Medical-technology-shut.jpg",
      summary:
        "Streamlined hospital workflows with integrated patient records, lab modules, and appointment systems.",
      link: "/healthcare/casestudies/digital-health-infrastructure-casestudy",
    },
    {
      title: "Retail Analytics Platform",
      industry: "E-Commerce",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWhJguxRyleyE3e8qNEOhnreIiAz8kSsyYw&s",
      summary:
        "Created a real-time inventory and customer insights dashboard to enhance business intelligence for an online retailer.",
      link: "/ecommerce/casestudies/retail-analytics-platform-casestudy",
    },
  ];

  return (
    <>
      <section className="py-20 bg-blue-50 px-4 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 font-houschka">
            Success Stories That Inspire
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-14 font-basis">
            See how our tailored IT solutions have helped institutions and enterprises transform their digital ecosystems.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {caseStudies.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 text-left">
                  <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
                    {item.industry}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2 duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {item.summary}
                  </p>
                  <a
                    href={item.link}
                    className="inline-block mt-4 text-blue-700 hover:underline text-sm font-medium"
                  >
                    Explore Full Case Study →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
