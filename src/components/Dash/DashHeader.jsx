import React, { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";
import { FiUser, FiHelpCircle, FiLogOut } from "react-icons/fi";
import { GoChevronDown } from "react-icons/go";
import { MdCheck } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { SiOpslevel } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import MainSidebar from "../MainSidebar";

const DashHeader = () => {
  const [showAccounts, setShowAccount] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSide, setShowSide] = useState(false);

  const myNavigate = useNavigate();

  return (
    <>
      <MainSidebar showMenu={showSide} setShowMenu={setShowSide} />
      <div className="dashbordHeader">
        <div className="dashbordHeaderLeft">
          <button onClick={() => setShowSide(true)}>
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
                onClick={() =>
                  setShowMenu(false) || setShowAccount(!showAccounts)
                }
              >
                <p> Demo Account </p>
                <h6> ₦123,209.12 </h6>
              </div>
              <GoChevronDown
                onClick={() =>
                  setShowMenu(false) || setShowAccount(!showAccounts)
                }
              />
            </div>
            <div
              className={
                showAccounts
                  ? "dashboardHeaderAccountWalletMenu active"
                  : "dashboardHeaderAccountWalletMenu"
              }
            >
              <div className="dashboardHeaderAccountWalletMenuItem active">
                <p>
                  <MdCheck /> Demo Account
                </p>
                <label>₦12.00</label>
              </div>
              <div className="dashboardHeaderAccountWalletMenuItem">
                <p>
                  <MdCheck /> Live Account
                </p>
                <label>₦12.00</label>
              </div>
              <div className="dashboardHeaderAccountWalletMenuItem">
                <p>
                  <MdCheck /> Tourney Account
                </p>
                <label>₦360,000.00</label>
              </div>
            </div>
          </div>
          <button> Let's Trade </button>
          <div className="dashboardHeaderAccount">
            <div
              className="dashboardHeaderAccountMain"
              onClick={() => setShowAccount(false) || setShowMenu(!showMenu)}
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
                <p
                  onClick={() =>
                    setShowMenu(!showMenu) || myNavigate("/dashboard/status")
                  }
                >
                  <SiOpslevel /> Level
                </p>
              </div>
              <div className="dashboardHeaderAccountMenuItem">
                <p
                  onClick={() =>
                    setShowMenu(!showMenu) || myNavigate("/dashboard/cashier")
                  }
                >
                  <BsWallet2 /> Cashier
                </p>
              </div>
              <div className="dashboardHeaderAccountMenuItem">
                <p
                  onClick={() =>
                    setShowMenu(!showMenu) || myNavigate("/dashboard/myaccount")
                  }
                >
                  <FiUser /> Account
                </p>
              </div>
              <div className="dashboardHeaderAccountMenuItem">
                <p onClick={() => setShowMenu(!showMenu) || myNavigate("")}>
                  <FiHelpCircle /> Help
                </p>
              </div>
              <div className="dashboardHeaderAccountMenuItem">
                <p onClick={() => setShowMenu(!showMenu) || myNavigate("")}>
                  <FiLogOut /> Logout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashHeader;
