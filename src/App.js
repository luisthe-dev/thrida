import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

// import "./assets/themes/light_mode.css";
// import "./assets/themes/dark_mode.css";
import ScrollToTop from "./components/ScrollToTop";
import { addChartStoreData } from "./redux/chartStore";

// const Home = lazy(() => import("./pages/Main/Home"));
const Landing = lazy(() => import("./pages/Main/Landing"));
const NotFound = lazy(() => import("./pages/Main/NotFound"));
const SignIn = lazy(() => import("./pages/Auth/SignIn"));
const SignUp = lazy(() => import("./pages/Auth/SignUp"));
const Trading = lazy(() => import("./pages/Dash/Trading"));
const Profile = lazy(() => import("./pages/Dash/Profile"));
const MainDash = lazy(() => import("./pages/Dash/MainDash"));
const Cashier = lazy(() => import("./pages/Dash/Cashier"));
const Status = lazy(() => import("./pages/Dash/Status"));
const Deposit = lazy(() => import("./pages/Dash/Cashier/Deposit"));
const Withdraw = lazy(() => import("./pages/Dash/Cashier/Withdraw"));
const History = lazy(() => import("./pages/Dash/Cashier/History"));
const DarkMode = lazy(() => import("./assets/themes/DarkMode"));
const LightMode = lazy(() => import("./assets/themes/LightMode"));

const AdminSignIn = lazy(() => import("./pages/Admin/Auth/AdminSignIn"));
const AdminSignUp = lazy(() => import("./pages/Admin/Auth/AdminSignUp"));
const DashboardContainer = lazy(() =>
  import("./components/Admin/DashboardContainer")
);
const Stats = lazy(() => import("./pages/Admin/Dashboard/Stats"));
const Users = lazy(() => import("./pages/Admin/Dashboard/Users"));
const Verified = lazy(() => import("./pages/Admin/Dashboard/Verified"));
const Assets = lazy(() => import("./pages/Admin/Dashboard/Assets"));

const App = () => {
  const myDispatch = useDispatch();

  useEffect(() => {
    const allChartData = [];
    const currentTime = Math.floor(new Date().getTime() / 1000);
    for (let i = 0; i < 1000; i++) {
      const newOpen =
        allChartData[allChartData.length - 1]?.close ||
        Number(Math.floor(Math.random() * (50 - 20 + 1) + 20).toFixed(5));
      const newClose = Number(
        (
          Math.random() * (newOpen + 50 - (newOpen - 50) + 1) +
          (newOpen - 50)
        ).toFixed(5)
      );
      const newLow =
        newOpen >= newClose
          ? Number(
              (
                Math.random() * (newClose - (newClose - 10) + 1) +
                (newClose - 10)
              ).toFixed(5)
            )
          : Number(
              (
                Math.random() * (newOpen - (newOpen - 10) + 1) +
                (newOpen - 10)
              ).toFixed(5)
            );
      const newHigh =
        newOpen >= newClose
          ? Number(
              (Math.random() * (newOpen + 10 - newOpen + 1) + newOpen).toFixed(
                5
              )
            )
          : Number(
              (
                Math.random() * (newClose + 10 - newClose + 1) +
                newClose
              ).toFixed(5)
            );
      const newValue = (newOpen + newClose) / 2;

      const generatedData = {
        time: currentTime - (1000 - i),
        open: newOpen,
        high: newHigh,
        low: newLow,
        close: newClose,
        value: newValue,
      };

      allChartData.push(generatedData);
      myDispatch(addChartStoreData(generatedData));
    }
  }, [myDispatch]);

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
          <Suspense
            fallback={
              <div className="loadingState">
                <img
                  src="/public_assets/images/Thrida-01-02.png"
                  alt="Thrida Logo"
                />
              </div>
            }
          >
            {Number(localStorage.getItem("themeMode")) === 1 ? (
              <DarkMode />
            ) : (
              <LightMode />
            )}
            <Routes>
              <Route path="/" element={<Landing />} />

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
                <Route path="signin" element={<AdminSignIn />} />
                <Route path="signup" element={<AdminSignUp />} />

                {/* Admin Dashboard */}
                <Route path="dashboard" element={<DashboardContainer />}>
                  <Route path="" element={<Stats />} />
                  <Route path="stats" element={<Stats />} />
                  <Route path="users" element={<Users />} />
                  <Route path="verified" element={<Verified />} />
                  <Route path="assets" element={<Assets />} />
                </Route>
              </Route>

              {/* Utility Pages */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
