import React from "react";
import MainSection from "./MainSection";
import NavBar from "./NavBar";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FooterSection from "./FooterSection";

const Home = () => {
  return (
    <div className="homepage__container">
      <NavBar />
      <MainSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FooterSection />
    </div>
  );
};

export default Home;


