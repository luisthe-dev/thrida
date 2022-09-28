import React from 'react';
import { AiOutlineBank } from "react-icons/ai";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";

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
                    <div className="footer__section__content__logos__item">
                        <FaBitcoin className="footer__section__content__logos__item__icon_i" />
                        <p className="footer__section__content__logos__item__text_i">Bitcoin</p>
                    </div>
                    <div className="footer__section__content__logos__item">
                        <FaEthereum className="footer__section__content__logos__item__icon" />
                        <p className="footer__section__content__logos__item__text">Ethereum (ERC 20)</p>
                    </div>
                    <div className="footer__section__content__logos__item">
                        <HiCurrencyBangladeshi className="footer__section__content__logos__item__icon__i" />
                        <p className="footer__section__content__logos__item__text">Tether (TRC 20)</p>
                    </div>
                    <div className="footer__section__content__logos__item">
                        <HiOutlineCurrencyBangladeshi className="footer__section__content__logos__item__icon__i" />
                        <p className="footer__section__content__logos__item__text">Tether (ERC 20)</p>
                    </div>
                </div>

                <div className="footer__section__context">
                    <div className="footer__section__context__links">
                        <h1 className="footer__section__content__quick">Quick Links</h1>
                        <div className='footer__section__context__links__content'>
                            <ul className="footer__section__context__links__content__list">
                                <li className="footer__section__context__links__content__list__item">Sign up</li>
                                <li className="footer__section__context__links__content__list__item">Login</li>
                                <li className="footer__section__context__links__content__list__item">Promotions</li>
                                <li className="footer__section__context__links__content__list__item">Glossary</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__section__context__links">
                        <h1 className="footer__section__content__quick">Platform</h1>
                        <div className='footer__section__context__links__content'>
                            <ul className="footer__section__context__links__content__list">
                                <li className="footer__section__context__links__content__list__item">Home</li>
                                <li className="footer__section__context__links__content__list__item">About Us</li>
                                <li className="footer__section__context__links__content__list__item">FAQs</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__section__context__links">
                        <h1 className="footer__section__content__quick">Support</h1>
                        <div className='footer__section__context__links__content'>
                            <p className="footer__section__context__links__content__list__item">Support Center</p>
                            <p className="footer__section__context__links__content__list__item">Report Abuse</p>
                            <p className="footer__section__context__links__content__list__item">FAQs</p>
                        </div>
                    </div>
                </div>

                <div className="footer__section__social__media">
                    <h1 className="footer__section__social__media__title">Follow us on</h1>
                    <div className="footer__section__social__media__icons">
                        <FaYoutube className="footer__section__social__media__icons__icon" />
                        <BsInstagram className="footer__section__social__media__icons__icon" />
                        <BsTwitter className="footer__section__social__media__icons__icon" />
                        <FaTelegram className="footer__section__social__media__icons__icon" />
                    </div>
                </div>

                <div className="footer__section__copy__right">
                    <h1 className="footer__section__copy__right__text">Privacy Policy</h1>
                    <div className='footer__section__copy__right__text__content'>
                        <p className="footer__section__copy__right__text__content__text">The financial operations offered on this site may involve increased risk.<br></br>
                            By using the financial services and tools this site offers, you <br></br>may suffer serious financial loss, or completely lose the funds in your<br></br>
                            guaranted trading account. Please evaluate all the financial risks and seek <br></br>advice from an independent financial advisor before trading.<br></br>
                            Thrida is not responsible for any direct, indirect or consequential<br></br> losses, or any other damages resulting from the user's actions on this site.</p>
                    </div>
                    <p className="footer__section__copy__right__text__content__text_i">© 2021 Thrida. All rights reserved.</p>
                </div>

            </div>
        </div>
    );
}

export default FooterSection;
