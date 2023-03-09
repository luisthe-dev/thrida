import React, { useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const MainSidebar = ({ showMenu, setShowMenu }) => {
  const myLocation = useLocation();

  useEffect(() => {
    showMenu && setShowMenu(false);
  }, [myLocation]);

  return (
    <>
      <div
        className={showMenu ? "MainBackground active" : "MainBackground"}
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
          <Link to="/dashboard/trading">
            <label>Trading</label> <BsChevronRight />
          </Link>
          <Link to="/training">
            <label>Training</label> <BsChevronRight />
          </Link>
          <Link to="/about-us">
            <label>About Us</label> <BsChevronRight />
          </Link>
          <Link to="/agreement">
            <label>Terms &amp; Conditions</label> <BsChevronRight />
          </Link>
          <Link to="/help">
            <label>Help</label> <BsChevronRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
