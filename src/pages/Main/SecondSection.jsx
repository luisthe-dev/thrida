import React from 'react';
import { BsFillBarChartFill } from "react-icons/bs";
import { BsLadder } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";

const SecondSection = () => {
    return (
        <div className="second__section__container">
            <div className="second__section__content">
                <h1>Virtual Trading</h1>
            </div>
            <div className='second__section__content__text'>
                <p>Thrida, experts in the digital economy brings forth the newest financial instruments.</p>
                <p className="context__text_i">We focus on virtual forex, crypto, commodities, index and EFTs. Don't let it slide, get your share of profits!</p>
            </div>
            <div className='second__section__features'>
                <h1>Features</h1>
                <div className='second__section__features__content'>
                    <p className="second__section__features__content__item">$10</p>
                </div>
                <div className="second__features__minimum">
                    <p>Minimum account balance from $10</p>
                    <p className="second__features__minimum_i">start making trades with minimum investments</p>
                </div>
                <div className="second__section__features__content_i">
                    <BsFillBarChartFill className="second__section__features__content__item_i" />
                </div>
                <div className="second__features__minimum">
                    <p>The Trade amount starting from  $1.</p>
                    <p>The minimum cost of a trade is quite low and affordable</p>
                </div>
                <div className="second__section__features__content_i">
                    <BsLadder className="second__section__features__content__item_i" />
                </div>
                <div className="second__features__minimum">
                    <p>Copytrading: ability to copy positions taken by pro traders</p>
                </div>
                <div className="second__section__features__content_i">
                    <FaCertificate className="second__section__features__content__item_i" />
                </div>
                <div className="second__features__minimum">
                    <p>There are no restrictions on the platform regarding the number of trades that can be concluded simultaneously.</p>
                    <p>You can open several positions at the same time and continue trading</p>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
