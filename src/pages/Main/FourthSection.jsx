import React from 'react';
import { RiKey2Fill } from "react-icons/ri";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoFingerPrintOutline } from "react-icons/io5";

const FourthSection = () => {
    return (
        <div className="fourth__section__container">
            <div className="fourth__section__content">
                <h1 className="fourth__section__about">About Thrida</h1>
                <div className="fourth__section__features__content">
                    <RiKey2Fill className="fourth__section__features__content__icon" />
                </div>
                <div className="fourth__section__features__content__text">
                    <h1 className="fourth__section__features__content__text__title">Security</h1>
                    <p className="fourth__section__features__content__text__description">Our system is developed with the most sophisticated technology<br></br>
                        you can find anywhere. it is highly secured and safe.</p>
                </div>

                <div className="fourth__section__features__content">
                    <BsSpeedometer2 className="fourth__section__features__content__icon" />
                </div>
                <div className="fourth__section__features__content__text">
                    <h1 className="fourth__section__features__content__text__title">Speed</h1>
                    <p className="fourth__section__features__content__text__description">The use of small data language makes our platform<br></br>
                        one of the fastest in processing data and transactions.</p>
                </div>

                <div className="fourth__section__features__content">
                    <IoFingerPrintOutline className="fourth__section__features__content__icon" />
                </div>
                <div className="fourth__section__features__content__text">
                    <h1 className="fourth__section__features__content__text__title">2FA Authentication</h1>
                    <p className="fourth__section__features__content__text__description">For a safer experience on our platform, we<br></br>
                        have included a second level identification for our users.<br></br>Please activate yours</p>
                </div>

                <div className="fourth__section__features__content">
                    <p className="fourth__section__features__content__icon_i">5%</p>
                </div>

                <div className="fourth__section__features__content__text">
                    <h1 className="fourth__section__features__content__text__title">Affiliate Commission</h1>
                    {/*<p className="fourth__section__features__content__text__description">For a safer experience on our platform, we<br></br>
                        have included a second level identification for our users.<br></br>Please activate yours</p>*/}
                </div>

            </div>
        </div>
    );
}

export default FourthSection;
