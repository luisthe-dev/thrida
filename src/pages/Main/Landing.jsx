import { Link } from "react-router-dom";
import MainNavBar from "../../components/MainNavBar";

const Landing = () => {
  const services = [
    {
      name: "Speed",
      description:
        "TThe use of small data language makes our platform one of the fastest in processing data and transactions.",
      lottie: "https://assets10.lottiefiles.com/packages/lf20_yvmyimd3.json",
    },
    {
      name: "Security",
      description:
        "We use the latest security protocols to ensure that your data is safe and secure.",
      lottie: "https://assets7.lottiefiles.com/packages/lf20_cgjrfdzx.json",
    },
    {
      name: "Reliability",
      description:
        "Our platform is built on a reliable and robust infrastructure that ensures that your data is always available.",
      lottie: "https://assets8.lottiefiles.com/packages/lf20_rMIWDc0fSB.json",
    },
  ];

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
      <main>
        <section className="whatWeDo">
          <h2> What We Do </h2>
          <p>
            We provide a platform for you to trade in the financial markets
            without the need for a broker. We also provide you with the
            opportunity to earn from your trading activities.
          </p>
          <Link to={"/signup"}> Get Started </Link>
        </section>
        <section className="ourServices">
          <h2> Our Services </h2>
          <div className="ourServicesBlock">
            {services.map((service, index) => (
              <div key={index}>
                <lottie-player
                  src={service.lottie}
                  speed={1}
                  style={{
                    background: "transparent",
                  }}
                  loop
                  autoplay
                />
                <h3> {service.name} </h3>
                <p> {service.description} </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <p id="copyright"> &copy; 2022. All Rights Reserved | Thrida </p>
      </footer>
    </>
  );
};

export default Landing;
