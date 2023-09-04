import React, { useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import { MdMoneyOffCsred } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { checkCopyStatus, initCopyTrading } from "../apis/tradesApi";
import { getProUserDetail } from "../apis/userApi";
import { toast } from "react-toastify";

const ProTraderInfo = ({ active }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [proInfo, setProInfo] = useState({
    name: "",
    profitRate: 0,
    recentTrades: [],
    totalProfit: 0,
    description: "",
    percentage_win: 0,
    tradeCounts: {
      allTrades: 0,
      successTrades: 0,
      failedTrades: 0,
      copiers: 0,
      totalProfits: 0,
      totalLosses: 0,
    },
  });
  const [formActive, setFormActive] = useState(false);
  const [copyAmount, setCopyAmount] = useState("");
  const [copyAmountType, setCopyAmountType] = useState("Naira");
  const [ruleFactor, setRuleFactor] = useState("");
  const [ruleFactorInput, setRuleFactorInput] = useState("");
  const [copyActive, setCopyActive] = useState(false);

  const getProInfo = async () => {
    setIsLoading(true);

    const proRes = await getProUserDetail(active);

    const isCopyRes = await checkCopyStatus(active);

    if (isCopyRes.data === 0) {
      setCopyActive(false);
    } else {
      const copyData = JSON.parse(isCopyRes.data.copy_rule);
      setCopyActive(true);
      setCopyAmount(copyData.amount);
      setCopyAmountType(copyData.amountType);
      setRuleFactor(copyData.ruleFactor);
      setRuleFactorInput(copyData.rule);
    }

    setProInfo({
      name: proRes.data.TraderInfo.name,
      profitRate: proRes.data.win_index,
      recentTrades: proRes.data.TraderTrades.splice(0, 10),
      description:
        proRes.data.TraderInfo.proInfo.description || "No Description",
      percentage_win: proRes.data.TraderInfo.proInfo.percentage_win,
      tradeCounts: {
        allTrades: proRes.data.tradeCounts.totalTrades,
        successTrades: proRes.data.tradeCounts.successTrades,
        failedTrades: proRes.data.tradeCounts.failedTrades,
        copiers: proRes.data.tradeCounts.copiers,
        totalProfits: proRes.data.tradeStats.totalProfit,
        totalLosses: proRes.data.tradeStats.totalLosses,
      },
    });

    setIsLoading(false);
  };

  const initCopyTrade = async () => {
    const tradeData = {
      amount: copyAmount,
      amountType: copyAmountType,
      ruleFactor: ruleFactor,
      rule: ruleFactorInput,
    };

    const copyTradeData = {
      trader_id: active,
      copy_rule: tradeData,
    };

    const copyInit = await initCopyTrading(copyTradeData);

    copyInit.status === 1
      ? toast.success("Copy Rule Updated Successfully")
      : toast.error("Error Updating Copy Rule");
  };

  useEffect(() => {
    if (active === 0) return;
    setFormActive(false);
    getProInfo();
  }, [active]);

  return (
    <div
      className={
        active !== 0 ? "tradeHistoryPopUp active" : "tradeHistoryPopUp"
      }
    >
      <div className="proTraderInfoBlock">
        {isLoading ? (
          <p> Loading Trader Info ... </p>
        ) : (
          <>
            <div className="proTraderInfoHeader">
              <h4> {proInfo.name} </h4>
              <p> {proInfo.profitRate}% Profit Rate </p>
            </div>
            <div className="proTraderInfoBodyBtn">
              {formActive && (
                <div className="proTraderInfoBodyForm">
                  <label> Amount To Use For Copy </label>
                  <div className="proTraderInfoBodyFormDiv">
                    <input
                      type={"number"}
                      placeholder={"Amount To Use For Copy"}
                      value={copyAmount}
                      onInput={(e) => setCopyAmount(e.target.value)}
                    />
                    <select
                      value={copyAmountType}
                      onChange={(e) => setCopyAmountType(e.target.value)}
                    >
                      <option value={"Naira"}> Naira </option>
                      <option value={"Percent"}> Percentage </option>
                    </select>
                  </div>
                  <label> Rule Factor </label>
                  <select
                    value={ruleFactor}
                    onChange={(e) =>
                      setRuleFactor(e.target.value) || setRuleFactorInput("")
                    }
                  >
                    <option disabled value={""}>
                      Select A Rule Factor
                    </option>
                    <option value={"nth"}> nth Trade Of The Day </option>
                    <option value={"time_before"}> Trade Before Time </option>
                    <option value={"time_after"}> Trade After Time </option>
                  </select>
                  {ruleFactor === "nth" && (
                    <input
                      type={"number"}
                      placeholder={"Nth Trade"}
                      value={ruleFactorInput}
                      onInput={(e) => setRuleFactorInput(e.target.value)}
                    />
                  )}
                  {(ruleFactor === "time_before" ||
                    ruleFactor === "time_after") && (
                    <input
                      type={"time"}
                      placeholder={"Time Period"}
                      value={ruleFactorInput}
                      onInput={(e) => setRuleFactorInput(e.target.value)}
                    />
                  )}
                  <span>You can copy just one trade per day</span>
                  <span>
                    If Trade is successful, a{" "}
                    {Number(proInfo.percentage_win).toLocaleString()}%
                    commission will be deducted from your profit
                  </span>
                </div>
              )}
              <button
                onClick={formActive ? initCopyTrade : () => setFormActive(true)}
              >
                {formActive ? `Save` : copyActive ? "Update" : `Initiate`} Copy
                Trade Rule
              </button>
            </div>
            <div className="proTraderInfoStats">
              <div className="proTraderInfoStatsBlock">
                <BiDollar />
                <label>
                  {Number(proInfo.tradeCounts.allTrades).toLocaleString()}
                </label>
                <p> All Trades </p>
              </div>
              <div className="proTraderInfoStatsBlock">
                <GiReceiveMoney />
                <label>
                  {Number(proInfo.tradeCounts.successTrades).toLocaleString()}
                </label>
                <p> Profit Trades </p>
              </div>
              <div className="proTraderInfoStatsBlock">
                <MdMoneyOffCsred />
                <label>
                  {Number(proInfo.tradeCounts.failedTrades).toLocaleString()}
                </label>
                <p> Loss Trades </p>
              </div>
            </div>
            <div className="proTraderInfoBlockDesc">
              <h4> Tournament Description </h4>
              <div className="proTraderInfoBlockDescFlex">
                <p> Number of copiers </p>
                <p> {Number(proInfo.tradeCounts.copiers).toLocaleString()} </p>
              </div>
              <div className="proTraderInfoBlockDescFlex">
                <p> Total Profit </p>
                <p>
                  ₦{Number(proInfo.tradeCounts.totalProfits).toLocaleString()}
                </p>
              </div>
              <div className="proTraderInfoBlockDescFlex">
                <p> Total Losses </p>
                <p>
                  ₦{Number(proInfo.tradeCounts.totalLosses).toLocaleString()}
                </p>
              </div>
              <p>{proInfo.description}</p>
            </div>
            <div className="proTraderInfoBody">
              <h3> Last 10 Trades (in 30 days) </h3>
              <div className="proTraderInfoBodyTrades">
                <div className="proTraderInfoBodyTradesHeader">
                  <p> Trade Status </p>
                  <p> Profit Gained </p>
                  <p> Time Traded </p>
                </div>
                {proInfo.recentTrades.length > 0 ? (
                  proInfo.recentTrades.map((recent, key) => (
                    <div className="proTraderInfoBodyTradesBody" key={key}>
                      <p> {recent.status} </p>
                      <p> ₦{Number(recent.amount_won).toLocaleString()} </p>
                      <p> {recent.created_at.split("T")[0]} </p>
                    </div>
                  ))
                ) : (
                  <p> No Recent Trades </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProTraderInfo;
