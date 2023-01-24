import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import { getAllActiveAssets } from "../apis/assetApi";
import { getTrades } from "../apis/tradesApi";

const TradeSide = ({ active }) => {
  const [tradesData, setTradesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allAssets, setAllAssets] = useState([]);
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
      setTradesData(tradesRes.data.data);
      setAllAssets(assetsRes.data);
      setIsLoading(false);
    };
    getMyTrades();
    return;
  }, [active]);

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
                <label className="tradeHistoryBlockDetsGain">
                  <BsArrowDownShort />
                  <span>
                    {trade.created_at.split("T")[1].split(".")[0]} -{" "}
                    {trade.created_at.split("T")[0].split("-")[2]}{" "}
                    {
                      months.current[
                        Number(trade.created_at.split("T")[0].split("-")[1]) - 1
                      ]
                    }
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
