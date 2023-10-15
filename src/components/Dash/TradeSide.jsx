import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails, setUserWallets } from "../../redux/userStore";
import { getAllActiveAssets } from "../apis/assetApi";
import { getTrades } from "../apis/tradesApi";
import { GetUserDetails } from "../apis/userApi";

const TradeSide = ({ active }) => {
  const [tradesData, setTradesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allAssets, setAllAssets] = useState([]);
  const { activeWallet } = useSelector((state) => state.userStore);

  const myDispatch = useDispatch();

  const months = useRef([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);
  useEffect(() => {
    const getMyTrades = async () => {
      setIsLoading(true);
      const tradesRes = await getTrades();
      const assetsRes = await getAllActiveAssets();
      setAllAssets(assetsRes.data);
      setIsLoading(false);
      GetUserDetails().then((response) => {
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
      });
      const currentWallet =
        activeWallet === "demo"
          ? "demo_wallet"
          : activeWallet === "tourney"
          ? "tournament_wallet"
          : activeWallet === "live" && "real_wallet";
      setTradesData(
        tradesRes.data.data
          .filter((trade) => trade.Wallet_Type === currentWallet)
          .map((trade) => {
            const tradeDate = new Date(trade.created_at);
            trade.created_hour = tradeDate.getHours();
            trade.created_minute = tradeDate.getMinutes();
            trade.created_date = tradeDate.getDate();
            trade.created_month = tradeDate.getMonth();
            return trade;
          })
      );
    };
    getMyTrades();
    return;
  }, [active, activeWallet]);

  return (
    <div className={active ? "tradeHistoryPopUp active" : "tradeHistoryPopUp"}>
      <div className="tradeHistoryList">
        {isLoading ? (
          <p> Loading Trade History ... </p>
        ) : tradesData.length < 1 ? (
          <p> No Trade History! </p>
        ) : (
          tradesData.map((trade, tradeId) => (
            <div className="tradeHistoryBlock" key={tradeId}>
              <div className="tradeHistoryBlockImg">
                <img src="#" alt="" />
              </div>
              <div className="tradeHistoryBlockDets">
                <p>
                  <span>
                    {
                      allAssets.filter(
                        (asset) => Number(asset.id) === Number(trade.assets_id)
                      )[0]?.asset_name
                    }
                  </span>
                  <label>
                    {
                      allAssets.filter(
                        (asset) => Number(asset.id) === Number(trade.assets_id)
                      )[0]?.volatility
                    }
                    %
                  </label>
                </p>
                <label
                  className={
                    trade.Direction === "GAIN"
                      ? "tradeHistoryBlockDetsGain"
                      : "tradeHistoryBlockDetsLoss"
                  }
                >
                  {trade.Direction === "GAIN" ? (
                    <BsArrowUpShort />
                  ) : (
                    <BsArrowDownShort />
                  )}
                  <span>
                    {`${trade.created_hour}:${trade.created_minute} - ${
                      trade.created_date
                    } ${months.current[trade.created_month - 1]}`}
                  </span>
                </label>
              </div>
              <div className="tradeHistoryBlockMon">
                <h5>
                  ₦
                  {trade.status === "Pending"
                    ? "..."
                    : Number(trade.amount_won).toLocaleString()}
                </h5>
                <h6> ₦{Number(trade.amount).toLocaleString()} </h6>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TradeSide;
