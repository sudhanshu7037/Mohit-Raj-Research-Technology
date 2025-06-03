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
import Footer from "../components/Footer";
import Products from "../components/Products";
import Solutions from "../components/Solutions";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="">
        <Banner />
        <Products />
        <MainBanner />
        <Solutions />
        <BuisnessDeal />
        <MoreInfo />
        <TeamSection />
        <TestimonialSlider />
        <VideoSection />
        <NewsSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
