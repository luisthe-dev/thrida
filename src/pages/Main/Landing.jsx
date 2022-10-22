import { Link } from "react-router-dom";
import MainNavBar from "../../components/MainNavBar";

const Landing = () => {
  return (
    <>
      <MainNavBar />
      <header>
        <h1> Think Big, Strategize </h1>
        <h3> Make Profit With Every Trade </h3>
        <p>
          Thrida is a virtual platform that helps in the development of the
          digital economy and also brings forth the newest digital financial
          instruments. We focus on virtual assets - Forex, crypto, commodities,
          index, stocks and ETFs.
        </p>
        <Link to={"/signup"}> Get Started </Link>
      </header>
      <div>
        <lottie-player
          src={"https://assets2.lottiefiles.com/packages/lf20_obkemuop.json"}
          speed={1}
          style={{
            background: "transparent",
          }}
          loop
          autoplay
        />
      </div>
    </>
  );
};

export default Landing;
