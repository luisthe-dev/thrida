import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [click, setClick] = useState(false);

    return (
        <div>
            <div className={
                click ? "navbar__container__active" : "navbar__container"
            }>
                <div className={
                    click ? "navbar__active__content" : "navbar__content"
                }>
                    <ul>
                        <li className='navbar__login'>Home</li>
                        <li className="navbar__login" onClick={() =>
                            window.scrollTo({
                                top: 10000,
                                behavior: "smooth"
                            })
                        }>Contact</li>
                        <li className='navbar__login' onClick={() =>
                            window.scrollTo({
                                top: 2330,
                                behavior: "smooth"
                            })
                        }>About</li>
                        <li className="navbar__login">Products</li>
                        <Link to={"/signin"}>
                            <li className="navbar__login login">Login</li>
                        </Link>
                        <Link to={"/signup"}>
                            <li className='navbar__login login'>Signup</li>
                        </Link>
                    </ul>
                </div>
                <div className="navbar__logo">
                    <img src="/public_assets/images/Thrida-01-02.png" alt="Thrida" className="navbar__img" />
                </div>
                <div className="navbar__second__content">
                    <ul>
                        <Link to={"/signin"}>
                            <li className="navbar__login">Login</li>
                        </Link>
                        <Link to={"/signup"}>
                            <li className='navbar__login'>Signup</li>
                        </Link>
                    </ul>
                    <div className="navbar__hamburger">
                        {click ? <FaTimes onClick={() => setClick(!click)} className="navbar__icon" /> :

                            <GiHamburgerMenu onClick={() => setClick(!click)} className="navbar__icon" />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
