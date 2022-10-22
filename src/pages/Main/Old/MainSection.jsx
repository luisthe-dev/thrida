import React from 'react';
import mainphoneImg from "../../assets/css/images/mainphoneImg.jpg";

const MainSection = () => {
    return (
        <div className="main__section__container">
            <div className="main__section__content">
                <img src={mainphoneImg} alt="landing" className="main__landing" />
                <div className='overlay'></div>
            </div>

            <div className="main__section__content__text">
                <h1 className="main__text__section">THINK BIG <br></br>STRATEGIZE <br></br> MAKING PROFIT IN A TRADE</h1>
                <p className="secondary__text">Thrida is a virtual platform that helps in the development of the</p>
                <p className="secondary__text_i">digital economy and also brings forth the newest digital financial instruments.</p>
                <p className="secondary__text__i">We focus on virtual assets - Forex, crypto, commodities, index, stocks and ETFs.</p>
                <div className="main__section__content__text__button">
                    <button type="submit" className="main__section__button">start trading now!!</button>
                </div>
                <p className="trade__section">Trade virtual stocks, forex, crypto, commodities and ETFs to get your share of profits</p>
            </div>

        </div>
    );
}

export default MainSection;
