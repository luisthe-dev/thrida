import React from 'react';
import { Link } from "react-router-dom";
/*import { useNavigate } from 'react-router-dom';*/
const NavBar = () => {
    /*const navigate = useNavigate();*/
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
                <div className="navbar__logo">
                    <img src="/public_assets/images/Thrida-01-02.png" alt="Thrida" />
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
                </div>
            </div>
        </div>
    );
}

export default NavBar;
