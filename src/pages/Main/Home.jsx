import React from "react";
import MainSection from "./MainSection";
import NavBar from "./NavBar";
import SecondSection from "./SecondSection";

const Home = () => {
  return (
    <div className="homepage__container">
      <NavBar />
      <MainSection />
      <SecondSection />
    </div>
  );
};

export default Home;


