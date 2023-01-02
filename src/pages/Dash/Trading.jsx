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
import { startTrade } from "../../components/apis/tradesApi";
import { toast } from "react-toastify";
import { setUserWallets } from "../../redux/userStore";

const Trading = () => {
  const [amount, setAmount] = useState(100);
  const [time, setTime] = useState("");
  const { chartActiveAsset } = useSelector((state) => state.chartStore);

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

    if (minutes < 55) {
      setTime(
        `${hour < 10 ? `0${hour}` : hour}:${
          minutes + 5 < 10 ? `0${minutes + 5}` : minutes + 5
        }`
      );
    } else {
      setTime(`${hour + 1}:05`);
    }
  }, []);

  const { chartDetails } = useSelector((state) => state.chartStore);

  useEffect(() => {
    if (!chartActiveAsset) return;
    if (!chartDetails[chartActiveAsset]) return;

    myChart?.current?.remove();

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
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
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
      visible: false,
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

    // myBarSeries?.current?.applyOptions({ visible: true });

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

  const editAmount = (process) => {
    process === "plus"
      ? setAmount(Number(amount) + 25)
      : amount > 25 && setAmount(Number(amount) - 25);
  };

  const editTime = (process) => {
    let newTime = time;
    const timeSplit = time.toString().split(":");
    if (process === "plus") {
      newTime =
        Number(timeSplit[1]) >= 55
          ? `${Number(timeSplit[0]) + 1}:00`
          : `${timeSplit[0]}:${Number(timeSplit[1]) + 5}`;
    } else {
      newTime =
        Number(timeSplit[1]) <= 5
          ? `${Number(timeSplit[0]) - 1}:55`
          : `${timeSplit[0]}:${Number(timeSplit[1]) - 5}`;
    }
    setTime(newTime);
  };

  const placeBid = async (bidDirection) => {
    console.log("clicked");
    const tradeData = {
      asset_id: 3,
      walletType: "demo_wallet",
      userPredict: bidDirection,
      amount_staked: amount,
      entry_value:
        chartDetails[chartActiveAsset][
          chartDetails[chartActiveAsset]?.length - 1
        ]?.value,
      time_period: time,
    };

    const bidRes = await startTrade(tradeData);

    console.log(bidRes);

    if (bidRes.status !== 1) {
      toast.error("Error Placing Trade");
      return;
    }

    const userWallets = JSON.parse(bidRes?.user?.wallets);
    myDispatch(
      setUserWallets({
        demoAccount: userWallets.demo_wallet,
        realAccount: userWallets.real_wallet,
        tourneyAccount: userWallets.tournament_wallet,
      })
    );
  };

  return (
    <div className="TradingPageContainer">
      <div className="TradingSideMenu">
        <div className="TradingSideMenuItems">
          <div className="TradingSideMenuItem">
            <AiFillClockCircle /> <span> Trades </span>
          </div>
          <div className="TradingSideMenuItem">
            <BsGiftFill />
            <span> Bonuses </span>
          </div>
          <div className="TradingSideMenuItem">
            <BsTrophyFill /> <span> Tournaments </span>
          </div>
          <div className="TradingSideMenuItem">
            <HiBadgeCheck /> <span> Top Traders </span>
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
