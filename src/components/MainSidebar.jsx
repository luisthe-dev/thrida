import React from "react";
import { Link } from "react-router-dom";

const MainSidebar = () => {
  return (
    <>
      <div className="MainSidebarBackground"></div>
      <div className="MainSidebarContainer">
        <div className="MainSidebarLogoContainer">
          <img
            src="/public_assets/images/Thrida-01-02.png"
            alt="Thrida"
            width={60}
          />
        </div>
        <div className="MainSidebarLinksContainer">
          <Link to="#"> Home </Link>
          <Link to="#"> Home </Link>
          <Link to="#"> Home </Link>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
