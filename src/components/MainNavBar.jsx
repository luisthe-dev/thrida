import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const MainNavBar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <>
      <nav className={sideMenu ? "sideMenu active" : "sideMenu"}>
        <CgClose onClick={() => setSideMenu(false)} />
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/glossary"}>Glossary</Link>
        <Link to={"/contact"}>Contact</Link>
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
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/glossary"}>Glossary</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <Link to={"/"}>
          <img src="/public_assets/images/thrida.png" alt="Thrida Logo" />
        </Link>
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
