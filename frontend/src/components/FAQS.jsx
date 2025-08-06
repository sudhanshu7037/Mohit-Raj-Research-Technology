import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Mohitraj Research Tech specializes in what kinds of software development services?",
      answer:
        "We are experts in developing custom software, including web applications, mobile applications (iOS/Android), SaaS products, and enterprise solutions (CRM, ERP). We are also very good at combining blockchain, IoT, and AI/ML technologies.",
    },
    {
      question: "How is artificial intelligence used in software development by Mohitraj Research Tech ?",
      answer:
        "By combining AI, we develop intelligent software that improves user experience and operational efficiency. Examples of this software include generative AI applications  and machine learning models for automation and prediction .",
    },
    {
      question: "What is your process  about developing  a software? ",
      answer:
        "To guarantee adaptability  and continuous delivery, we use an Agile development methodology. Requirements gathering  , UI/UX design, iterative development, QA and testing, deployment, and continues  support are all the  steps that we follow  in our process.",
    },
    {
      question: "How do you guarantee about the  security of software you developed ? ",
      answer:
        "Security  comes first. We apply secure coding standards, carry  security audits, evaluate vulnerabilities, integrate cybersecurity best practices across the whole SDLC, and guarantee data privacy compliance and the security of the application we developed .",
    },
    {
      question: "Are you able to assist us in updating our legacy systems?  ",
      answer:
        "Definitely, By Using  cloud technology to enhance performance and maintenance, that lowers the  operating costs, as well as transferring antiquated software to  scalable architectures like microservices.",
    },
    {
      question: "How much does a custom software project  cost and how much time will it take? ",
      answer:
        "The complexity, scope, and  requirements of the project  tells us about the  timeline and cost of project we developed. After  careful calculations     and consultation, we provide comprehensive proposals  that  guarantees transparency and alignment with your  plan and schedule.",
    },
    {
      question: "Do you provide maintenance support after development? ",
      answer:
        "o guarantee that your software stays stable, secure, and adapts to your company's needs, we offers the  post-launch maintenance and support services that include performance optimization, security and updates.",
    },


  ];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQs Section  */}
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-10 font-houschka text-blue-600 drop-shadow">
        Commonly Asked Questions (FAQs)
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-red-200 border rounded-xl p-4 transition duration-300 ${
                openIndex === index
                  ? "border-blue-500 shadow-md"
                  : "border-red-300"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800 hover:text-blue-700 transition duration-300">
                  {faq.question}
                </span>
                <span className="text-blue-700 text-xl">
                  {openIndex === index ? (
                    <FiChevronUp className="transition-transform duration-300" />
                  ) : (
                    <FiChevronDown className="transition-transform duration-300" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-700 leading-relaxed transition duration-300">
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

export default FAQS;
