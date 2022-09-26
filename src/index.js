import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { masterStore } from "./redux/masterStore";

// import "./assets/themes/light_mode.css";
import "./assets/themes/dark_mode.css";

import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import "./assets/css/Auth.css";
import "./assets/css/Dash/DashHeader.css";
import "./assets/css/Dash/Profile.css";
import "./assets/css/Dash/Cashier.css";
import "./assets/css/Dash/Cashier/Deposit.css";
import "./assets/css/components/MainSidebar.css";
import "./assets/css/Utils.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={masterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
