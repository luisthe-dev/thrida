import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Main/Home";
import NotFound from "./pages/Main/NotFound";
import Trading from "./pages/Dash/Trading";
import Profile from "./pages/Dash/Profile";
import Cashier from "./pages/Dash/Cashier";
import Deposit from "./pages/Dash/Cashier/Deposit";

import Signin from "./components/Admin/Signin";
import Signup from "./components/Admin/Signup
import MainDash from "./pages/Dash/MainDash";
import Withdraw from "./pages/Dash/Cashier/Withdraw";
import Status from "./pages/Dash/Status";
import History from "./pages/Dash/Cashier/History";

// import "./assets/themes/light_mode.css";
import "./assets/themes/dark_mode.css";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover
        theme="dark"
      />

      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Auth Pages */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Dashboard Pages */}
            <Route path="/dashboard" element={<MainDash />}>
              <Route path="" element={<Navigate to={"trading"} />} />
              <Route path="trading" element={<Trading />} />
              <Route path="myaccount" element={<Profile />} />

              {/* Cashier And Transaction Routes */}
              <Route path="cashier" element={<Cashier />}>
                <Route path="" element={<Navigate to={"deposit"} />} />
                <Route path="deposit" element={<Deposit />} />
                <Route path="withdraw" element={<Withdraw />} />
                <Route path="history" element={<History />} />
              </Route>

              <Route path="status" element={<Status />} />
            </Route>

          {/* Admin Pages */}
          <Route path="/admin">
            <Route path="" element={<Navigate to={"signin"} />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>

            {/* Utility Pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
