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
import { useDispatch, useSelector } from "react-redux";
import {
  clearUserStore,
  setActiveWallet,
  setUserDetails,
  setUserWallets,
} from "../../redux/userStore";
import { useEffect } from "react";
import { GetUserDetails } from "../apis/userApi";

const DashHeader = () => {
  const [showAccounts, setShowAccount] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSide, setShowSide] = useState(false);
  const [userFetchLoading, setUserFetchLoading] = useState(false);

  const myNavigate = useNavigate();
  const myDispatch = useDispatch();

  const { userDetails, userWallets, activeWallet } = useSelector(
    (state) => state.userStore
  );

  const logoutUser = () => {
    myDispatch(clearUserStore());
    myNavigate("/signin");
  };

  const reloadUserDetails = () => {
    setUserFetchLoading(true);
    GetUserDetails()
      .then((response) => {
        if (response.status === 1) {
          const userWallets = JSON.parse(response.data.wallets);
          myDispatch(
            setUserDetails({
              id: response.data.id,
              name: response.data.name,
              email: response.data.email,
              level: response.data.level,
              is_pro: Number(response.data.is_pro),
            })
          );
          myDispatch(
            setUserWallets({
              demoAccount: userWallets.demo_wallet,
              realAccount: userWallets.real_wallet,
              tourneyAccount: userWallets.tournament_wallet,
            })
          );
        }
      })
      .finally(() => setUserFetchLoading(false));
  };

  useEffect(() => {
    if (userDetails.name.trim() === "") {
      reloadUserDetails();
    }
  }, [userDetails.name]);

  return (
    <>
      <MainSidebar showMenu={showSide} setShowMenu={setShowSide} />
      <div className="dashboardHeader">
        <div className="dashboardHeaderLeft">
          <button onClick={() => setShowSide(true)}>
            <RiMenu4Fill />
          </button>
          <img
            src="/public_assets/images/Thrida-01-02.png"
            alt="Thrida"
            onClick={() => myNavigate("/")}
          />
        </div>
        <div className="dashboardHeaderRight">
          <div className="dashboardHeaderAccountWalletSwitch">
            <div className="dashboardHeaderAccountWalletMain">
              <AiOutlineReload
                onClick={userFetchLoading ? () => {} : reloadUserDetails}
                className={userFetchLoading ? "loading" : ""}
              />
              <div
                className="dashboardHeaderAccountWalletCurrentDetails"
                onClick={() =>
                  setShowMenu(false) || setShowAccount(!showAccounts)
                }
              >
                <p> {activeWallet} account </p>
                <h6>
                  ₦
                  {activeWallet === "demo" &&
                    Number(userWallets.demoAccount)?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  {activeWallet === "live" &&
                    Number(userWallets.realAccount)?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  {activeWallet === "tourney" &&
                    Number(userWallets.tourneyAccount)?.toLocaleString(
                      "en-US",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }
                    )}
                </h6>
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
              <div
                className={
                  activeWallet === "demo"
                    ? "dashboardHeaderAccountWalletMenuItem active"
                    : "dashboardHeaderAccountWalletMenuItem"
                }
                onClick={() =>
                  myDispatch(setActiveWallet("demo")) &&
                  setShowAccount(!showAccounts)
                }
              >
                <p>
                  <MdCheck /> Demo Account
                </p>
                <label>
                  ₦
                  {Number(userWallets.demoAccount)?.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </label>
              </div>
              <div
                className={
                  activeWallet === "live"
                    ? "dashboardHeaderAccountWalletMenuItem active"
                    : "dashboardHeaderAccountWalletMenuItem"
                }
                onClick={() =>
                  myDispatch(setActiveWallet("live")) &&
                  setShowAccount(!showAccounts)
                }
              >
                <p>
                  <MdCheck /> Live Account
                </p>
                <label>
                  ₦
                  {Number(userWallets.realAccount)?.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </label>
              </div>
              {Number(userWallets.tourneyAccount) !== 0 && (
                <div
                  className={
                    activeWallet === "tourney"
                      ? "dashboardHeaderAccountWalletMenuItem active"
                      : "dashboardHeaderAccountWalletMenuItem"
                  }
                  onClick={() =>
                    myDispatch(setActiveWallet("tourney")) &&
                    setShowAccount(!showAccounts)
                  }
                >
                  <p>
                    <MdCheck /> Tourney Account
                  </p>
                  <label>
                    ₦
                    {Number(userWallets.tourneyAccount)?.toLocaleString(
                      "en-US",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }
                    )}
                  </label>
                </div>
              )}
            </div>
          </div>
          <button onClick={() => myNavigate("/dashboard")}>Let's Trade</button>
          <div className="dashboardHeaderAccount">
            <div
              className="dashboardHeaderAccountMain"
              onClick={() => setShowAccount(false) || setShowMenu(!showMenu)}
            >
              {userDetails?.name?.split("")[0]}
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
                <p onClick={() => setShowMenu(!showMenu) || myNavigate("/contact")}>
                  <FiHelpCircle /> Help
                </p>
              </div>
              <div className="dashboardHeaderAccountMenuItem">
                <p onClick={logoutUser}>
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
