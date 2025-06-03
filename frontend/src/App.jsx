import React from "react";
import NabBar from "./components/NabBar";
import Banner from "./components/Banner";
import MainBanner from "./components/MainBanner";
import BuisnessDeal from "./components/BuisnessDeal";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import Blog from "./pages/Blog";
import About from "./pages/About";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import DevelopmentHosting from "./pages/DevelopmentHosting";
import ErpSolutions from "./pages/ErpSolution";
import CostumApplication from "./pages/CostumApplication";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<SoftwareDevelopment />} />
          <Route path="/DevelopmentHosting" element={<DevelopmentHosting />} />
          <Route path="/erpSolutions" element={<ErpSolutions />} />
          <Route path="/customApplication" element={<CostumApplication />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
