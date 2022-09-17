import React from 'react';
import { Link } from "react-router-dom";
import { GiOilySpiral } from "react-icons/gi";
const NavBar = () => {
    return (
        <div>
            <div className="navbar__container">
                <div className="navbar__content">
                    <ul>
                        <li className='navbar__login'>Home</li>
                        <li className="navbar__login">Contact</li>
                        <li className='navbar__login'>About</li>
                        <li className="navbar__login">Products</li>
                    </ul>
                </div>
                <div className="navabar__logo">
                    <GiOilySpiral style={{ position: "absolute", top: "6%", left: "52%" }} /> <h1>THRIDA</h1>
                </div>
                <div className="navbar__second__content">
                    <ul>
                        <Link to={"/signin"}>
                            <li className="navbar__login">Login</li>
                        </Link>
                        <Link to={"/signup"}>
                            <li className='navbar__login'>Sign Up</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
