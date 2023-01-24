import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetTransactions } from "../../components/apis/transactionsApi";

const Cashier = () => {
  const {
    userWallets: { realAccount },
  } = useSelector((state) => state.userStore);

  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTransactions = async () => {
      const allTransactions = await GetTransactions();
      setTransactions(allTransactions?.data || []);
      setLoading(false);
    };
    getTransactions();
  }, []);

  return (
    <>
      <div className="cashierPageContainer">
        <div className="cashierPageHeader">
          <div className="cashierPageHeaderWalletSummary">
            <div className="cashierPageHeaderWalletSummaryCard">
              <h5> Live Account </h5>
              <h3>
                ₦
                {Number(realAccount)?.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>
              <p>
                Last Transaction Date :{" "}
                <span>
                  {loading
                    ? `Loading...`
                    : transactions.length > 0
                    ? transactions[0].created_at.toString().split("T")[0]
                    : `No transaction yet`}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="cashierPageBody">
          <div className="cashierPageBodyMenu">
            <div className="cashierPageBodyMenuItems">
              <Link to="/dashboard/cashier/deposit"> Deposit </Link>
              <Link to="/dashboard/cashier/withdraw"> Withdraw </Link>
              <Link to="/dashboard/cashier/history"> Transaction History </Link>
              <Link to="/dashboard/status"> VIP Status </Link>
            </div>
          </div>
          <div className="cashierPageBodySection">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cashier;
