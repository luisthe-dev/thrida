import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { MdCheck } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import { GoChevronDown } from "react-icons/go";

const DashHeader = () => {
  const [showAccounts, setShowAccount] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="dashbordHeader">
        <div className="dashbordHeaderLeft">
          <button>
            <RiMenu4Fill />
          </button>
          <img src="/public_assets/images/Thrida-01-02.png" alt="Thrida" />
        </div>
        <div className="dashbordHeaderRight">
          <div className="dashboardHeaderAccountWalletSwitch">
            <div className="dashboardHeaderAccountWalletMain">
              <AiOutlineReload />
              <div
                className="dashboardHeaderAccountWalletCurrentDetails"
                onClick={() => setShowAccount(!showAccounts)}
              >
                <p> Demo Account </p>
                <h6> ₦123,209.12 </h6>
              </div>
              <GoChevronDown />
            </div>
            <div
              className={
                showAccounts
                  ? "dashboardHeaderAccountWalletMenu active"
                  : "dashboardHeaderAccountWalletMenu"
              }
            >
              <div className="dashboardHeaderAccountWalletMenuItem">
                <MdCheck />
                <p> Demo Account </p>
                <label>₦12.00</label>
              </div>
              <div className="dashboardHeaderAccountWalletMenuItem">
                <p> Live Account </p>
                <label>₦12.00</label>
              </div>
              <div className="dashboardHeaderAccountWalletMenuItem">
                <p> Tourney Account </p>
                <label>₦12.00</label>
              </div>
            </div>
          </div>
          <button> Let's Trade </button>
          <div className="dashboardHeaderAccount">
            <div
              className="dashboardHeaderAccountMain"
              onClick={() => setShowMenu(!showMenu)}
            >
              <p> A </p>
            </div>
            <div
              className={
                showMenu
                  ? "dashboardHeaderAccountMenu active"
                  : "dashboardHeaderAccountMenu"
              }
            >
              <div className="dashboardHeaderAccountMenuItem">
                <p> Level </p>
              </div>
              <div className="dashboardHeaderAccountMenuItem">
                <p> Account </p>
              </div>
              <div className="dashboardHeaderAccountMenuItem">
                <p> Help </p>
              </div>
              <div className="dashboardHeaderAccountMenuItem">
                <p> Logout </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashHeader;
