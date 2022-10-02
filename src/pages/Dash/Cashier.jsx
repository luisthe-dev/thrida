import React from "react";
import { Link, Outlet } from "react-router-dom";

const Cashier = () => {
  return (
    <>
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
              <Link to="/dashboard/cashier/deposit"> Deposit </Link>
              <Link to="/dashboard/cashier/withdraw"> Withdraw </Link>
              <Link to="/dashboard/cashier/history"> Transaction History </Link>
              <Link to="/dashboard/status"> VIP Status </Link>
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
