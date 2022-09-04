import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./assets/css/Auth.css";
import { Provider } from "react-redux";
import { masterStore } from "./redux/masterStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={masterStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
