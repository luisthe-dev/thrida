import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const DashboardContainer = () => {
  const [sidebarActive, setSideBarActive] = useState(false);
  const myLocation = useLocation();
  const myNavigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("thridaAdminAuthToken"))
      myNavigate("/admin/signin");
  }, [myLocation, myNavigate]);

  useEffect(() => setSideBarActive(false), [myLocation]);

  return (
    <>
      <div className="MainAdminDashboardContainer">
        <TopBar toggleBar={() => setSideBarActive(!sidebarActive)} />
        <div className="BodyAdminDashboardContainer">
          <div className="BodyAdminDashboardContainerSideMenu">
            <SideBar active={sidebarActive} />
          </div>
          <div className="BodyAdminDashboardContainerMainContent">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;
