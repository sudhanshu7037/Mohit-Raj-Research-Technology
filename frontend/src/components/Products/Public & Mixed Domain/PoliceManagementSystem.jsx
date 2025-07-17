import React from "react";

// Public‑domain hero background (Wikimedia Commons)
const bgImage =
  "https://upload.wikimedia.org/wikipedia/commons/5/57/Usa_Police_Station.JPG";

// Dashboard mock‑up illustrating police‑analytics software (InetSoft)
const demoImage =
  "https://www.inetsoft.com/images/website/police-dashboard.png";

const PoliceManagementPage = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-black/50 p-8 rounded-xl text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Police Management Software
          </h1>
          <p className="text-lg">
            Streamlining law‑enforcement operations with smart, secure,
            and scalable solutions.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Overview</h2>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src={demoImage}
            alt="Police analytics dashboard"
            className="w-full md:w-1/2 rounded-xl shadow"
          />
          <p className="text-lg md:w-1/2">
            Our Police Management Software offers an end‑to‑end solution for
            efficient policing. From digital FIR filing to personnel tracking,
            case progress, criminal‑database integration, and advanced
            analytics — everything is centralized and secure.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Modules</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "FIR & Case Management",
              "Criminal Records Database",
              "Personnel & Duty Roster",
              "Station & Beat Management",
              "Evidence & Document Handling",
              "Incident Reporting & Analytics",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Efficient digital tools to manage{" "}
                  {feature.toLowerCase()} securely and seamlessly.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Why Choose Our Software?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg list-disc pl-6">
          <li>Faster response time and better coordination</li>
          <li>Complete digitization of police workflows</li>
          <li>Real‑time tracking of cases and officers</li>
          <li>Secure and scalable cloud infrastructure</li>
          <li>Analytics to assist in predictive policing</li>
          <li>Mobile‑friendly access for on‑field officers</li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <ol className="space-y-6 border-l-4 border-blue-500 pl-6">
          <li>
            <span className="font-semibold">1. Registration & Setup</span> – The
            admin registers the department, configures access and modules.
          </li>
          <li>
            <span className="font-semibold">2. Data Migration</span> – Import
            old records into the centralized system.
          </li>
          <li>
            <span className="font-semibold">3. Live Usage</span> – Officers start
            using modules for FIR, incident logs, and more.
          </li>
          <li>
            <span className="font-semibold">4. Reporting & Analysis</span> –
            Admins get real‑time dashboards, crime heat‑maps, and reports.
          </li>
        </ol>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Modernize Your Police Operations?
        </h2>
        <p className="mb-6 text-lg">
          Contact us today to schedule a free demo and consultation.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
          Request Demo
        </button>
      </section>
    </div>
  );
};

export default PoliceManagementPage;
