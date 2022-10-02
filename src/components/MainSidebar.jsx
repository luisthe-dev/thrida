import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainSidebar = ({ showMenu, setShowMenu }) => {
  return (
    <>
      <div
        className={
          showMenu ? "MainSidebarBackground active" : "MainSidebarBackground"
        }
        onClick={() => setShowMenu(!showMenu)}
      ></div>
      <div
        className={
          showMenu ? "MainSidebarContainer active" : "MainSidebarContainer"
        }
      >
        <div className="MainSidebarLogoContainer">
          <img
            src="/public_assets/images/Thrida-01-02.png"
            alt="Thrida"
            width={60}
          />
        </div>
        <div className="MainSidebarLinksContainer">
          <Link to="#">
            <label>Trading</label> <BsChevronRight />
          </Link>
          <Link to="#">
            <label>Professionals</label> <BsChevronRight />
          </Link>
          <Link to="#">
            <label>Tournaments</label> <BsChevronRight />
          </Link>
          <Link to="#">
            <label>Training</label> <BsChevronRight />
          </Link>
          <Link to="#">
            <label>About Us</label> <BsChevronRight />
          </Link>
          <Link to="#">
            <label>Terms &amp; Conditions</label> <BsChevronRight />
          </Link>
          <Link to="#">
            <label>Help</label> <BsChevronRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
