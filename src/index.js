import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { masterStore } from "./redux/masterStore";

import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import "./assets/css/Auth.css";
import "./assets/css/Main.css";
import "./assets/css/Landing.css";
import "./assets/css/Dash/DashHeader.css";
import "./assets/css/Dash/Trading.css";
import "./assets/css/Dash/Profile.css";
import "./assets/css/Dash/AssetsDropdown.css";
import "./assets/css/Dash/Cashier.css";
import "./assets/css/Dash/Trading.css";
import "./assets/css/Dash/Cashier/Deposit.css";
import "./assets/css/Dash/Cashier/Withdraw.css";
import "./assets/css/Dash/Cashier/History.css";
import "./assets/css/Dash/Tourney/Host.css";
import "./assets/css/components/MainSidebar.css";
import "./assets/css/components/Footer.css";
import "./assets/css/components/MainNavBar.css";
import "./assets/css/components/HistoryBlock.css";
import "./assets/css/components/DepositModal.css";
import "./assets/css/components/TradeSide.css";
import "./assets/css/components/Bonus.css";
import "./assets/css/components/Status.css";
import "./assets/css/components/TourneySide.css";
import "./assets/css/components/TourneyInfoSide.css";
import "./assets/css/components/ProTraderSide.css";
import "./assets/css/components/ProTraderInfo.css";
import "./assets/css/components/Admin/Container.css";
import "./assets/css/components/Admin/TopBar.css";
import "./assets/css/components/Admin/SideBar.css";
import "./assets/css/components/Admin/Table.css";
import "./assets/css/components/Admin/UserInfo.css";
import "./assets/css/Admin/Auth.css";
import "./assets/css/Admin/Dashboard/stats.css";
import "./assets/css/Admin/Dashboard/assets.css";
import "./assets/css/Utils.css";
import "./assets/css/rcode.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={masterStore}>
    <App />
  </Provider>
  // </React.StrictMode>
);
