import React from "react";
import MainBanner from "../components/MainBanner";
import NavBar from "../components/NabBar";
import BuisnessDeal from "../components/BuisnessDeal";
import Banner from "../components/Banner";
import MoreInfo from "../components/MoreInfo";
import TeamSection from "../components/TeamSection";
import TestimonialSlider from "../components/TestimonialSlider";
import VideoSection from "../components/VideoSection";
import NewsSection from "../components/NewsSection";
import Products from "../components/Products";
import Solutions from "../components/Solutions";
import DiscriptionFooter from "../components/DiscriptionFooter";
import WhyChoose from "../components/whychoose";
import Godigitally from "../components/Godigitally";
import CaseStudies from "../components/CaseStudies";
import FAQS from "../components/FAQS";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="">
        <Banner />
        <Godigitally />
        <BuisnessDeal />
        <Products />
        <MainBanner />
        <Solutions />
        <WhyChoose />
        <MoreInfo />
        <TeamSection />
        <TestimonialSlider />
        <VideoSection />
        <NewsSection />
        <CaseStudies />
        <FAQS />
        <DiscriptionFooter />
      </div>
    </div>
  );
};

export default Home;
