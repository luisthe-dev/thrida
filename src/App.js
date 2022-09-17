import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Main/Home";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/Main/NotFound";
import Trading from "./pages/Dash/Trading";
import Profile from "./pages/Dash/Profile";
import Cashier from "./pages/Dash/Cashier";
import Deposit from "./pages/Dash/Cashier/Deposit";

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
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Auth Pages */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Dashboard Pages */}
          <Route path="/dashboard">
            <Route path="" element={<Navigate to={"trading"} />} />
            <Route path="trading" element={<Trading />} />
            <Route path="myaccount" element={<Profile />} />

            {/* Cashier And Transaction Routes */}
            <Route path="cashier" element={<Cashier />}>
              <Route path="" element={<Navigate to={"deposit"} />} />
              <Route path="deposit" element={<Deposit />} />
            </Route>
          </Route>

          {/* Utility Pages */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
