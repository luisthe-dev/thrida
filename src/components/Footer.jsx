import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerFlex">
        <div className="footerBox">
          <h6> Quick Links </h6>
          <Link to={"/"}> Home </Link>
          <Link to={"/about"}> About </Link>
          <Link to={"/signin"}> Sign In </Link>
          <Link to={"/signup"}> Sign Up </Link>
        </div>
        <div className="footerBox">
          <h6> Legals </h6>
          <Link to={"/privacy"}> Privacy Policy </Link>
          <Link to={"/agreement"}> User's Agreement </Link>
          <Link to={"/"}> Glossary </Link>
          <Link to={"/regulations"}> Regulations (Terms Of Use) </Link>
        </div>

        <div className="footerBox">
          <h6> Support </h6>
          <Link to={"/contact"}> Contact Us </Link>
          <Link to={"/"}> FAQs </Link>
          <Link to={"/"}> Report Abuse </Link>
        </div>
        <div className="footerBox">
          <h6> Socials </h6>
          <a href={"https://instagram.com/thrida1"}> Instagram </a>
          <a href={"https://t.me/thridaa"}> Telegram </a>
        </div>
      </div>
      <div id="copyright">
        <p className="innerCopy">
          The financial operations offered on this site may involve increased
          risk. By using the financial services and tools this site offers, you
          may suffer serious financial loss, or completely lose the funds in
          your guaranted trading account. Please evaluate all the financial
          risks and seek advice from an independent financial advisor before
          trading. Thrida is not responsible for any direct, indirect or
          consequential losses, or any other damages resulting from the user's
          actions on this site.
        </p>
      </div>
      <p id="copyright"> &copy; 2022. All Rights Reserved | Thrida </p>
    </footer>
  );
};

export default Footer;
