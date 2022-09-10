import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashHeader from "../../components/Dash/DashHeader";
// import MainSidebar from "../../components/MainSidebar";

const Cashier = () => {
  return (
    <>
      {/* <MainSidebar /> */}
      <DashHeader />
      <div className="cashierPageContainer">
        <div className="cashierPageHeader">
          <div className="cashierPageHeaderWalletSummary">
            <div className="cashierPageHeaderWalletSummaryCard">
              <h5> Wallet Balance </h5>
              <h3> ₦0.00 </h3>
              <p>
                Last Transaction Date : <span>12/30/2010</span>
              </p>
            </div>
          </div>
        </div>
        <div className="cashierPageBody">
          <div className="cashierPageBodyMenu">
            <div className="cashierPageBodyMenuItems">
              <Link to="/dash/cashier/deposit"> Deposit </Link>
              <Link to="/dash/cashier/deposit"> Withdraw </Link>
              <Link to="/dash/cashier/deposit"> Transaction History </Link>
              <Link to="/dash/cashier/deposit"> VIP Status </Link>
            </div>
          </div>
          <div className="cashierPageBodySection">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cashier;
