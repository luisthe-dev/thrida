import React from "react";
import { Outlet } from "react-router-dom";
import DashHeader from "../../components/Dash/DashHeader";

const MainDash = () => {
  return (
    <>
      <DashHeader />
      <Outlet />
    </>
  );
};

export default MainDash;
