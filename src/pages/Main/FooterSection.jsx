import React from 'react';
import { AiOutlineBank } from "react-icons/ai";
/*import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";*/

const FooterSection = () => {
    return (
        <div className="footer__section__container">
            <div className="footer__section__content">
                <h2 className='footer__section__title'>Thrida is a virtual trading platform, which guarantees the company's users quality and outstanding services.</h2>
                <div className="footer__section__content__logos">
                    <div className="footer__section__content__logos__item">
                        <AiOutlineBank className="footer__section__content__logos__item__icon" />
                        <p className="footer__section__content__logos__item__text">Nigeria Local Banks</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;
