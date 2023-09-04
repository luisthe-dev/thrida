import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DashHeader from "../../components/Dash/DashHeader";

const MainDash = () => {
  const myLocation = useLocation();
  const myNavigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("thridaUserAuthToken")) myNavigate("/signin");
  }, [myLocation, myNavigate]);

  return (
    <>
      <DashHeader />
      <Outlet />
    </>
  );
};

export default MainDash;
