import React, { useEffect, useState } from "react";
import { createChart } from "lightweight-charts";
import { useSelector, useDispatch } from "react-redux";
import { BsGiftFill, BsTrophyFill, BsChevronDoubleRight } from "react-icons/bs";
import {
  AiFillClockCircle,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { HiBadgeCheck } from "react-icons/hi";
import { TbSpeakerphone, TbChartCandle } from "react-icons/tb";
import { TiChartArea, TiChartLine } from "react-icons/ti";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { useRef } from "react";
import AssetsDropdown from "../../components/Dash/AssetsDropdown";
import { endTrade, startTrade } from "../../components/apis/tradesApi";
import { toast } from "react-toastify";
import { setUserWallets } from "../../redux/userStore";
import { getAllActiveAssets } from "../../components/apis/assetApi";
import TradeSide from "../../components/Dash/TradeSide";
import TourneySide from "../../components/Dash/TourneySide";
import { RiMenu4Fill } from "react-icons/ri";
import TourneyInfoSide from "../../components/Dash/TourneyInfoSide";
import ProTraderSide from "../../components/Dash/ProTraderSide";
import ProTraderInfo from "../../components/Dash/ProTraderInfo";
import BonusSide from "../../components/Dash/BonusSide";

const Trading = () => {
  const [amount, setAmount] = useState(100);
  const [time, setTime] = useState("");
  const [tradeHistory, setTradeHistory] = useState(false);
  const [tourneyHistory, setTourneyHistory] = useState(false);
  const [tourneyInfo, setToureyInfo] = useState(0);
  const [proTrader, setProTrader] = useState(false);
  const [traderInfo, setTraderInfo] = useState(0);
  const [bonusActive, setBonusActive] = useState(false);
  const { chartActiveAsset } = useSelector((state) => state.chartStore);
  const { activeWallet } = useSelector((state) => state.userStore);

  const myChart = useRef();
  const myAreaSeries = useRef();
  const myCandleSeries = useRef();
  const myLineSeries = useRef();
  const myBarSeries = useRef();
  const myDispatch = useDispatch();

  useEffect(() => {
    const myDate = new Date();
    const hour = myDate.getHours();
    const minutes = myDate.getMinutes();

    if (minutes < 57) {
      setTime(
        `${hour < 10 ? `0${hour}` : hour}:${
          minutes + 5 < 10 ? `0${minutes + 2}` : minutes + 2
        }`
      );
    } else {
      setTime(`${hour + 1}:02`);
    }
  }, []);

  const { chartDetails } = useSelector((state) => state.chartStore);

  useEffect(() => {
    if (!chartActiveAsset) return;
    if (!chartDetails[chartActiveAsset]) return;

    myChart?.current?.remove();
    if (document.getElementsByClassName("tv-lightweight-charts")[0])
      document.getElementsByClassName("tv-lightweight-charts")[0].innerHTML =
        "";

    const chart = createChart(document.getElementById("TradeChapter"), {
      layout: {
        backgroundColor: "#2B2B43",
        lineColor: "#2B2B43",
        textColor: "#D9D9D9",
      },
      watermark: {
        color: "rgba(0, 0, 0, 0)",
      },
      crosshair: {
        color: "#758696",
      },
      grid: {
        vertLines: {
          color: "#2B2B43",
        },
        horzLines: {
          color: "#363C4E",
        },
      },
      rightPriceScale: {
        borderVisible: true,
      },
      timeScale: {
        borderVisible: true,
      },
    });

    const candlestickSeries = chart.addCandlestickSeries({
      visible: false,
    });
    const areastickSeries = chart.addAreaSeries({
      lineWidth: 2,
      topColor: "rgba(33, 150, 243, 0.56)",
      bottomColor: "rgba(33, 150, 243, 0.04)",
      lineColor: "rgba(33, 150, 243, 1)",
      visible: false,
    });
    const linestickSeries = chart.addLineSeries({
      lineWidth: 2,
      lineColor: "#20e22f",
      visible: false,
    });
    const barstickSeries = chart.addBarSeries({
      visible: true,
    });

    myChart.current = chart;
    myAreaSeries.current = areastickSeries;
    myCandleSeries.current = candlestickSeries;
    myLineSeries.current = linestickSeries;
    myBarSeries.current = barstickSeries;

    myCandleSeries?.current?.setData(chartDetails[chartActiveAsset]);
    myAreaSeries?.current?.setData(chartDetails[chartActiveAsset]);
    myLineSeries?.current?.setData(chartDetails[chartActiveAsset]);
    myBarSeries?.current?.setData(chartDetails[chartActiveAsset]);

    new ResizeObserver((entries) => {
      if (
        entries.length === 0 ||
        entries[0].target !== document.getElementById("TradeChapter")
      ) {
        return;
      }
      const newRect = entries[0].contentRect;
      chart.applyOptions({ height: newRect.height, width: newRect.width });
    }).observe(document.getElementById("TradeChapter"));

    chart.timeScale().applyOptions({
      rightOffset: window.innerWidth < 700 ? 30 : 100,
      timeVisible: true,
      secondsVisible: true,
      tickMarkFormatter: (time) => {
        const myTime = new Date(time * 1000);
        const hours = myTime.getHours();
        const minutes = myTime.getMinutes();
        const seconds = myTime.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
      },
    });

    document.getElementById("ScrollToBtn").addEventListener("click", () => {
      chart.timeScale().scrollToRealTime();
      document.getElementById("ScrollToBtn").style.display = "none";
    });

    document.querySelectorAll("#chartBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.getAttribute("data-type") === "candle"
          ? myCandleSeries?.current?.applyOptions({ visible: true })
          : myCandleSeries?.current?.applyOptions({ visible: false });
        btn.getAttribute("data-type") === "area"
          ? myAreaSeries?.current?.applyOptions({ visible: true })
          : myAreaSeries?.current?.applyOptions({ visible: false });
        btn.getAttribute("data-type") === "line"
          ? myLineSeries?.current?.applyOptions({ visible: true })
          : myLineSeries?.current?.applyOptions({ visible: false });
        btn.getAttribute("data-type") === "bar"
          ? myBarSeries?.current?.applyOptions({ visible: true })
          : myBarSeries?.current?.applyOptions({ visible: false });
      });
    });
    return;
  }, [chartActiveAsset]);

  useEffect(() => {
    if (!chartActiveAsset) return;
    if (!chartDetails[chartActiveAsset]) return;
    const updateData =
      chartDetails[chartActiveAsset][
        chartDetails[chartActiveAsset]?.length - 1
      ];
    myChart?.current?.timeScale()?.scrollPosition() < 0
      ? (document.getElementById("ScrollToBtn").style.display = "flex")
      : (document.getElementById("ScrollToBtn").style.display = "none");

    myCandleSeries?.current?.update(updateData);
    myAreaSeries?.current?.update(updateData);
    myLineSeries?.current?.update(updateData);
    myBarSeries?.current?.update(updateData);
    return;
  }, [chartDetails, chartActiveAsset]);

  useEffect(() => {
    const currentTime = new Date();
    if (!time) return;
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    let tempTime = time;

    const timeSplit = tempTime.split(":");

    if (
      (Number(timeSplit[1]) <= Number(currentMinute) &&
        Number(currentHour) === Number(timeSplit[0])) ||
      Number(timeSplit[0]) < Number(currentHour)
    ) {
      editTime("plus");
    }
  }, [new Date().getMinutes()]);

  const editAmount = (process) => {
    process === "plus"
      ? setAmount(Number(amount) + 25)
      : amount > 25 && setAmount(Number(amount) - 25);
  };

  const editTime = (process, passedtime = "") => {
    let newTime = time;
    const timeSplit =
      passedtime !== ""
        ? passedtime.toString().split(":")
        : time.toString().split(":");
    if (process === "plus") {
      newTime =
        Number(timeSplit[1]) >= 57
          ? `${
              Number(timeSplit[0]) + 1 === 24 ? "00" : Number(timeSplit[0]) + 1
            }:00`
          : `${timeSplit[0]}:${Number(timeSplit[1]) + 2}`;
    } else {
      newTime =
        Number(timeSplit[1]) <= 5
          ? `${Number(timeSplit[0]) - 1}:55`
          : `${timeSplit[0]}:${Number(timeSplit[1]) - 2}`;
    }
    setTime(newTime);
  };

  const placeBid = async (bidDirection) => {
    closeTradingSide();

    let timeOut = 0;

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    const timeSplit = time.toString().split(":");

    if (
      (Number(timeSplit[1]) <= Number(currentMinute) &&
        Number(currentHour) >= Number(timeSplit[0])) ||
      Number(currentHour) > Number(timeSplit[0])
    ) {
      toast.error("You can't place a past trade");
      editTime("plus", currentHour + ":" + currentMinute);
      return;
    }

    const myAssets = await getAllActiveAssets();

    const theAsset = myAssets.data.filter(
      (asset) => asset.asset_name === chartActiveAsset
    );

    if (theAsset.length < 1) {
      toast.error("Error Placing Bid");
      return;
    }

    const bidWallet =
      activeWallet === "demo"
        ? "demo_wallet"
        : activeWallet === "tourney"
        ? "tournament_wallet"
        : "real_wallet";

    if (Number(currentHour) === Number(timeSplit[0])) {
      const timeDifference = Number(timeSplit[1]) - Number(currentMinute);
      timeOut = timeDifference * 60;
    } else {
      const hourDifference =
        Number(currentHour) === "00"
          ? 1
          : Number(timeSplit[0] - Number(currentHour));
      const completeHourDifference = 60 - currentMinute;
      const hourToMinutes = (hourDifference - 1) * 60 + completeHourDifference;
      const completeMinutes = hourToMinutes + Number(timeSplit[1]);
      timeOut = completeMinutes * 60;
    }

    timeOut = timeOut - currentSeconds;

    const tradeData = {
      asset_id: theAsset[0].id,
      walletType: bidWallet,
      userPredict: bidDirection,
      amount_staked: amount,
      entry_value:
        chartDetails[chartActiveAsset][
          chartDetails[chartActiveAsset]?.length - 1
        ]?.value,
      time_period: time,
      timeOut: timeOut,
    };

    const bidRes = await startTrade(tradeData);

    if (bidRes.status !== 1) {
      toast.error("Error Placing Trade");
      return;
    }

    toast.success("Trade Started Successfully");

    setTimeout(() => {
      closeBid(bidRes?.trade?.id, bidWallet);
    }, timeOut * 1000);

    const userWallets = JSON.parse(bidRes?.user?.wallets);
    myDispatch(
      setUserWallets({
        demoAccount: userWallets.demo_wallet,
        realAccount: userWallets.real_wallet,
        tourneyAccount: userWallets.tournament_wallet,
      })
    );
  };

  const closeBid = async (bidId, walletType) => {
    const bidRes = await endTrade(bidId, walletType);

    if (bidRes.status !== 1) {
      toast.error("Error Closing Trade");
      return;
    }

    toast.success("Trade Closed Successfully");

    const userWallets = JSON.parse(bidRes?.user?.wallets);
    myDispatch(
      setUserWallets({
        demoAccount: userWallets.demo_wallet,
        realAccount: userWallets.real_wallet,
        tourneyAccount: userWallets.tournament_wallet,
      })
    );
  };

  const toggleTradeSideMenu = (toggle) => {
    document
      .getElementsByClassName("TradingSideMenu")[0]
      .classList.remove("active");
    if (toggle === "TradeHistory") {
      setTourneyHistory(false);
      setTradeHistory(!tradeHistory);
      setToureyInfo(0);
      setProTrader(false);
      setTraderInfo(0);
      setBonusActive(false);
    }

    if (toggle === "TourneyHistory") {
      setTradeHistory(false);
      setTourneyHistory(!tourneyHistory);
      setToureyInfo(0);
      setProTrader(false);
      setTraderInfo(0);
      setBonusActive(false);
    }

    if (toggle === "BonusSection") {
      setTradeHistory(false);
      setTourneyHistory(false);
      setToureyInfo(0);
      setProTrader(false);
      setTraderInfo(0);
      setBonusActive(!bonusActive);
    }

    if (toggle === "ProTrader") {
      setTradeHistory(false);
      setTourneyHistory(false);
      setToureyInfo(0);
      setProTrader(!proTrader);
      setTraderInfo(0);
      setBonusActive(false);
    }
  };

  const showTradingSide = () => {
    document
      .getElementsByClassName("TradingSideMenu")[0]
      .classList.toggle("active");
    document
      .getElementsByClassName("TradingMenuBackie")[0]
      .classList.toggle("active");
  };

  const closeTradingSide = () => {
    document
      .getElementsByClassName("TradingSideMenu")[0]
      .classList.remove("active");
    document
      .getElementsByClassName("TradingMenuBackie")[0]
      .classList.remove("active");

    setTradeHistory(false);
    setTourneyHistory(false);
    setToureyInfo(0);
    setProTrader(false);
    setTraderInfo(0);
  };

  return (
    <div className="TradingPageContainer">
      <div className="TradingMenuBackie" onClick={closeTradingSide}></div>
      <div className="TradingSideMenu">
        <TradeSide active={tradeHistory} />
        <TourneySide
          active={tourneyHistory}
          infoActive={setToureyInfo}
          setActive={setTourneyHistory}
        />
        <TourneyInfoSide active={tourneyInfo} />
        <ProTraderSide
          active={proTrader}
          setActive={setProTrader}
          proActive={setTraderInfo}
        />
        <ProTraderInfo active={traderInfo} />
        <BonusSide active={bonusActive} />
        <div className="TradingSideMenuItems">
          <div
            className="TradingSideMenuItem"
            onClick={() => toggleTradeSideMenu("TradeHistory")}
          >
            <AiFillClockCircle /> <span> Trades </span>
          </div>
          <div
            className="TradingSideMenuItem"
            // onClick={() => toggleTradeSideMenu("BonusSection")}
          >
            <BsGiftFill />
            <span> Bonuses </span>
          </div>
          <div
            className="TradingSideMenuItem"
            onClick={() => toggleTradeSideMenu("TourneyHistory")}
          >
            <BsTrophyFill /> <span> Tournaments </span>
          </div>
          <div
            className="TradingSideMenuItem"
            onClick={() => toggleTradeSideMenu("ProTrader")}
          >
            <HiBadgeCheck /> <span> Pro Traders </span>
          </div>
          <div className="TradingSideMenuItem">
            <TbSpeakerphone />
            <span> What's New? </span>
          </div>
        </div>
        <div className="TradingSideMenuFooter">
          <div className="TradingSideMenuFooterItem">
            <TbChartCandle id="chartBtn" data-type="candle" />
          </div>
          <div className="TradingSideMenuFooterItem">
            <TiChartArea id="chartBtn" data-type="area" />
          </div>
          <div className="TradingSideMenuFooterItem">
            <TiChartLine id="chartBtn" data-type="line" />
          </div>
          <div className="TradingSideMenuFooterItem">
            <TiChartLine id="chartBtn" data-type="bar" />
          </div>
        </div>
      </div>
      <div id="TradeChapter" className="TradeChapter">
        <AssetsDropdown />
        {/* <div className="TradingMobileSwitches">
          <div className="TradingMobileSwitchesItem">
            <TbChartCandle id="chartBtn" data-type="candle" />
          </div>
          <div className="TradingMobileSwitchesItem">
            <TiChartArea id="chartBtn" data-type="area" />
          </div>
          <div className="TradingMobileSwitchesItem">
            <TiChartLine id="chartBtn" data-type="line" />
          </div>
          <div className="TradingMobileSwitchesItem">
            <TiChartLine id="chartBtn" data-type="bar" />
          </div>
        </div> */}
        <button className="SideMobileBtn" onClick={showTradingSide}>
          <RiMenu4Fill />
        </button>

        <button className="ScrollToBtn" id="ScrollToBtn">
          <BsChevronDoubleRight />
        </button>
      </div>
      <div className="TradingRuns">
        <div className="TradingRunsBlock">
          <div className="TradingBlock">
            <label> Amount </label>
            <div className="TradingBlockInput">
              <input
                type="text"
                value={amount}
                onInput={(e) => setAmount(e.target.value)}
              />
              <div className="TradingBlockInputStackBtns">
                <button onClick={() => editAmount("plus")}>
                  <AiOutlinePlus />
                </button>
                <button onClick={() => editAmount("minus")}>
                  <AiOutlineMinus />
                </button>
              </div>
            </div>
          </div>
          <div className="TradingBlock">
            <label> Time </label>
            <div className="TradingBlockInput">
              <input
                type="text"
                value={time}
                onInput={(e) => setTime(e.target.value)}
                disabled
              />
              <div className="TradingBlockInputStackBtns">
                <button onClick={() => editTime("plus")}>
                  <AiOutlinePlus />
                </button>
                <button onClick={() => editTime("minus")}>
                  <AiOutlineMinus />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="TradingRunsBtns">
          <button
            className="TradingRunsBtnsBuy"
            onClick={() => placeBid("GAIN")}
          >
            <BiUpvote />
          </button>
          <button
            className="TradingRunsBtnsSell"
            onClick={() => placeBid("LOSE")}
          >
            <BiDownvote />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trading;
