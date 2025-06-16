import React from "react";

import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Career from "./pages/Career"
import SoftwareDevelopment from "./components/Services/SoftwareDevelopment";
import DevelopmentHosting from "./components/Services/DevelopmentHosting";
import HardwareNetworking from "./components/Services/HardwareNetworking";
import MedicalCollegeManagement from "./pages/casestudies/MedicalCollegeManagement";






const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/who we are" element={<About />} />
          <Route path ="/career" element= {<Career/>}/>
          <Route path="/SoftwareDevelopment" element={<SoftwareDevelopment />} />
          <Route path="/DevelopmentHosting" element={<DevelopmentHosting />} />
          <Route path="/HardwareNetworking" element={<HardwareNetworking />} />
           <Route path="/MedicalCollegeManagement" element={<MedicalCollegeManagement />} />


        </Routes>
      </Layout>
    </div>
  );
};

export default App;
