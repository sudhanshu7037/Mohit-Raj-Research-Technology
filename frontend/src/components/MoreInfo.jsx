import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import projectcomplete from "../assets/homepageimages/ProjectcompleteBackgroundImage/projectcomplete.png";

const MoreInfo = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("stats");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setInView(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { end: 2000, suffix: "+", label: "Happy Clients" },
    { end: 20, suffix: "+", label: "Years Experience" },
    { end: 200, suffix: "+", label: "Project Completed" },
    { end: 226, suffix: "+", label: "Consultation" },
    
  ];

  return (
    <div className="relative w-full pb-32">
      <div
        className="relative h-[450px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${projectcomplete})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-houschka">
            Offering the best experience of <br /> business consulting
          </h1>
          <button className="mt-4 bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition">
            DISCOVER MORE INFO
          </button>
        </div>

        <div
          id="stats"
          className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-white shadow-xl rounded-2xl p-6 md:p-10 z-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((item, index) => (
              <div key={index}>
                <h2 className="text-4xl font-bold text-blue-900">
                  {inView && (
                    <CountUp end={item.end} suffix={item.suffix} duration={2} />
                  )}
                </h2>
                <div className="h-1 w-12 bg-yellow-400 mx-auto mt-2 mb-1 rounded" />
                <p className="text-gray-500 font-bold text-xl">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
