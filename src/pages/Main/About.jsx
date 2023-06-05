import React from "react";
import Footer from "../../components/Footer";
import MainNavBar from "../../components/MainNavBar";

const About = () => {
  return (
    <>
      <MainNavBar />
      <main className="mainText">
        <h3> About Us </h3>
        <div className="mainTextParagraph">
          Thrida is a client-centered company, creating new potentialities in
          the market of leading trading technologies. At Thrida, we consider
          everything down to the tiniest of detail. On the road to creating an
          Outstanding trading platform, we feel that it is priority to offer top
          quality services and support, including: professional level tutorials,
          analytical services, and client support. We know how important the
          quality of the trading platform is to a trader's success. That is
          precisely why Thrida places great emphasis on quality service, and a
          wide spectrum of intellectual offers. In addition, the broker
          dedicates a huge amount of attention to the professional preparation
          of beginner traders, while at the same time making provision for the
          highest level needs of the most sophisticated traders in the market.
          Thrida works with clients all over the world, guaranteeing the most
          advantageous terms and providing top quality access to the world's
          financial markets. We build our collaboration with our clients in the
          form of a conversation: we want to find out your needs and comments,
          and what you would like to get from working with Thrida, and we want
          to hear it directly from you. Our collaboration with our clients is
          completely transparent, while our high-tech service allows traders to
          see the actual picture of the world's financial markets, and to
          evaluate your risk objectively. Thrida is certified by the NGCAC, and
          all of the risks of our clients are insured in accordance with the
          current laws, which makes us one of the safest trading platforms in
          the world. All of this gives us and our clients the highest level of
          mutual trust and makes for a pleasant investing climate at Thrida.
          <span className="highlightText">Our advantage:</span>
          <ul>
            <li>
              High-end virtual trading platform with a wide range of financial
              assets.
            </li>
            <li>
              Some of the most advantageous trading terms and investment
              opportunities on the market.
            </li>
            <li>Analytical virtual trading services.</li>
            <li>Convenient for both experienced and novice traders.</li>
            <li>Helpful high quality tutorials.</li>
            <li>Efficient and highly professional client support staff.</li>
            <li>The Chance to Copy a pro trader's trade everyday.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
