import React from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Trading = () => {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">other pages</div>
      </div>
    </div>
  );
};

export default Trading;
