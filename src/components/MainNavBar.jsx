import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { CgClose } from "react-icons/cg";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const MainNavBar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <>
      <nav className={sideMenu ? "sideMenu active" : "sideMenu"}>
        <CgClose onClick={() => setSideMenu(false)} />
        <ScrollLink spy={true} smooth={true} offset={-70} duration={500}>
          Home
        </ScrollLink>
        <ScrollLink spy={true} smooth={true} offset={-70} duration={500}>
          About
        </ScrollLink>
        <ScrollLink spy={true} smooth={true} offset={-70} duration={500}>
          Services
        </ScrollLink>
        <ScrollLink spy={true} smooth={true} offset={-70} duration={500}>
          Contact
        </ScrollLink>
        <Link to={"/signin"} className="btnLink">
          Login
        </Link>
        <Link to={"/signup"} className="btnLink">
          Sign Up
        </Link>
      </nav>
      <div
        className={sideMenu ? "sideMenuBg active" : "sideMenuBg"}
        onClick={() => setSideMenu(false)}
      ></div>
      <nav className="navBar">
        <div className="navPageLinks">
          <ScrollLink spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </ScrollLink>
          <ScrollLink spy={true} smooth={true} offset={-70} duration={500}>
            About
          </ScrollLink>
          <ScrollLink spy={true} smooth={true} offset={-70} duration={500}>
            Services
          </ScrollLink>
          <ScrollLink spy={true} smooth={true} offset={-70} duration={500}>
            Contact
          </ScrollLink>
        </div>
        <img src="/public_assets/images/thrida.png" alt="Thrida Logo" />
        <div className="navAuthLinks">
          <Link to={"/signin"}> Login </Link>
          <Link to={"/signup"}> Sign Up </Link>
        </div>
        <div className="navMenuIcon">
          <RiMenu4Line onClick={() => setSideMenu(true)} />
        </div>
      </nav>
    </>
  );
};

export default MainNavBar;
