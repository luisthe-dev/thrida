import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import ScrollToTop from "./components/ScrollToTop";
import {
  intializeChartStoreData,
  updateActiveAsset,
  updateChartStore,
} from "./redux/chartStore";
import { getAllActiveAssets } from "./components/apis/assetApi";
import ProRequests from "./pages/Admin/Dashboard/ProRequests";
import Withdrawal from "./pages/Admin/Dashboard/Withdrawal";

const Landing = lazy(() => import("./pages/Main/Landing"));
const About = lazy(() => import("./pages/Main/About"));
const Glossary = lazy(() => import("./pages/Main/Glossary"));
const Contact = lazy(() => import("./pages/Main/Contact"));
const Regulations = lazy(() => import("./pages/Main/Regulations"));
const Privacy = lazy(() => import("./pages/Main/Privacy"));
const Agreement = lazy(() => import("./pages/Main/Agreement"));

const ThemeSwitch = lazy(() => import("./components/ThemeSwitch"));

const NotFound = lazy(() => import("./pages/Main/NotFound"));
const SignIn = lazy(() => import("./pages/Auth/SignIn"));
const SignUp = lazy(() => import("./pages/Auth/SignUp"));
const Forgot = lazy(() => import("./pages/Auth/Forgot"));
const Trading = lazy(() => import("./pages/Dash/Trading"));
const Training = lazy(() => import("./pages/Dash/Training"));
const Profile = lazy(() => import("./pages/Dash/Profile"));
const MainDash = lazy(() => import("./pages/Dash/MainDash"));
const Cashier = lazy(() => import("./pages/Dash/Cashier"));
const Status = lazy(() => import("./pages/Dash/Status"));
const Deposit = lazy(() => import("./pages/Dash/Cashier/Deposit"));
const Withdraw = lazy(() => import("./pages/Dash/Cashier/Withdraw"));
const History = lazy(() => import("./pages/Dash/Cashier/History"));
const AllTourney = lazy(() => import("./pages/Dash/Tourney/All"));
const Host = lazy(() => import("./pages/Dash/Tourney/Host"));
const AllPro = lazy(() => import("./pages/Dash/Pro/All"));
const RequestPro = lazy(() => import("./pages/Dash/Pro/Request"));

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
const Transaction = lazy(() => import("./pages/Admin/Dashboard/Transaction"));
const Settings = lazy(() => import("./pages/Admin/Dashboard/Settings"));
const Tournaments = lazy(() => import("./pages/Admin/Dashboard/Tournaments"));
const HostTourney = lazy(() => import("./pages/Admin/Dashboard/HostTourney"));

const App = () => {
  const myDispatch = useDispatch();
  const { chartActiveAsset } = useSelector((state) => state.chartStore);

  const intiateAllAssets = async () => {
    let activeChart;
    if (!chartActiveAsset) {
      const activeAssets = await getAllActiveAssets();
      if (activeAssets.status !== 1) return;
      const filteredFree = activeAssets.data.filter(
        (asset) => asset.level === "Free"
      );
      if (filteredFree.length === 0) return;
      activeChart = filteredFree[0].asset_name;
    } else {
      activeChart = chartActiveAsset;
    }
    myDispatch(updateActiveAsset(activeChart));
    myDispatch(intializeChartStoreData(activeChart));
    localStorage.setItem("activeAsset", activeChart);
    setInterval(() => {
      myDispatch(updateChartStore(activeChart));
    }, 2000);
  };

  useEffect(() => {
    intiateAllAssets();
    return;
  }, [chartActiveAsset]);

  useEffect(() => {
    localStorage.getItem("themeMode") || localStorage.setItem("themeMode", 0);
    return;
  }, []);

  const switchTheme = () => {
    Number(localStorage.getItem("themeMode")) === 1
      ? localStorage.setItem("themeMode", 0)
      : localStorage.setItem("themeMode", 1);

    window.location.reload();
  };

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
        limit={2}
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
            <ThemeSwitch click={switchTheme} />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/regulations" element={<Regulations />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/agreement" element={<Agreement />} />

              {/* Auth Pages */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot" element={<Forgot />} />

              {/* Dashboard Pages */}
              <Route path="/dashboard" element={<MainDash />}>
                <Route path="" element={<Navigate to={"trading"} />} />
                <Route path="trading" element={<Trading />} />
                <Route path="training" element={<Training />} />
                <Route path="myaccount" element={<Profile />} />

                {/* Cashier And Transaction Routes */}
                <Route path="cashier" element={<Cashier />}>
                  <Route path="" element={<Navigate to={"deposit"} />} />
                  <Route path="deposit" element={<Deposit />} />
                  <Route path="withdraw" element={<Withdraw />} />
                  <Route path="history" element={<History />} />
                </Route>

                <Route path="tournaments" element={<Outlet />}>
                  <Route path="" element={<AllTourney />} />
                  <Route path="host" element={<Host />} />
                </Route>

                <Route path="pro" element={<Outlet />}>
                  <Route path="" element={<AllPro />} />
                  <Route path="request" element={<RequestPro />} />
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
                  <Route path="pro" element={<Verified />} />
                  <Route path="pro/requests" element={<ProRequests />} />
                  <Route path="transactions" element={<Transaction />} />
                  <Route path="withdrawals" element={<Withdrawal />} />
                  <Route path="tournaments" element={<Tournaments />} />
                  <Route path="tournaments/host" element={<HostTourney />} />
                  <Route path="assets" element={<Assets />} />
                  <Route path="settings" element={<Settings />} />
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
