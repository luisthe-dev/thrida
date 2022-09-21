import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";

const ThirdSection = () => {
    return (
        <div className="third__section__container">
            <div className="third__section__content">
                <h1 className="third__section__steps">3 very simple steps to get started on thrida</h1>
                <p className='third__section__thrida'>Thrida is the best platform to start tradin on virtual assets.
                    It is the best platform for beginners that wants to go into real trading.
                </p>
            </div>
            <div className="third__section__content__steps">
                <div className="third__section__content__steps__item">
                    <div className="third__section__content__create">
                        <FaUser className="third__section__content__create__icon" />
                    </div>
                    <div className="third__section__content__create__text">
                        <h1 className="third__section__content__create__text__title">Create an Account</h1>
                        <p className="third__section__content__create__text__description">Simply open a new account to get started</p>
                    </div>
                </div>

                <div className="third__section__content__steps__item">
                    <div className="third__section__content__create_fa">
                        <FaGraduationCap className="third__section__content__create__icon" />
                    </div>
                    <div className="third__section__content__create__text">
                        <h1 className="third__section__content__create__text__title">Demo Account</h1>
                        <p className="third__section__content__create__text__description">You can always learn and improve your<br></br>
                            trading skills on the demo account when you're<br></br>
                            ready, switch to your real account.</p>
                    </div>
                </div>

                <div className="third__section__content__steps__item">
                    <div className="third__section__content__create_gi">
                        <GiWallet className="third__section__content__create__icon" />
                    </div>
                    <div className="third__section__content__create__text">
                        <h1 className="third__section__content__create__text__title">Make Deposit</h1>
                        <p className="third__section__content__create__text__description">More than 50+ virtual assets and minimum<br></br>
                            deposit of $10 for optimal trading.</p>
                    </div>
                </div>

                <div className="third__section__content__create__button">
                    <button className="third__section__content__create__button__item">Create Account</button>
                </div>
            </div>
        </div>
    );
}

export default ThirdSection;
