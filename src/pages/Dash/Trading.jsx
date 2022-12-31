import React, { useEffect, useState } from "react";
import { createChart } from "lightweight-charts";
import { useSelector } from "react-redux";
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

const Trading = () => {
  const [amount, setAmount] = useState(100);
  const [time, setTime] = useState("");

  const myChart = useRef();
  const myAreaSeries = useRef();
  const myCandleSeries = useRef();
  const myLineSeries = useRef();
  const myBarSeries = useRef();

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
    const chartData = [];
    chartData.push(...chartDetails);

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
      visible: true,
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

    candlestickSeries.setData(chartDetails);
    areastickSeries.setData(chartDetails);
    linestickSeries.setData(chartDetails);
    barstickSeries.setData(chartDetails);

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
          ? candlestickSeries.applyOptions({ visible: true })
          : candlestickSeries.applyOptions({ visible: false });
        btn.getAttribute("data-type") === "area"
          ? areastickSeries.applyOptions({ visible: true })
          : areastickSeries.applyOptions({ visible: false });
        btn.getAttribute("data-type") === "line"
          ? linestickSeries.applyOptions({ visible: true })
          : linestickSeries.applyOptions({ visible: false });
        btn.getAttribute("data-type") === "bar"
          ? barstickSeries.applyOptions({ visible: true })
          : barstickSeries.applyOptions({ visible: false });
      });
    });
  }, []);

  useEffect(() => {
    const updateData = chartDetails[chartDetails.length - 1];
    myChart?.current?.timeScale()?.scrollPosition() < 0
      ? (document.getElementById("ScrollToBtn").style.display = "flex")
      : (document.getElementById("ScrollToBtn").style.display = "none");

    myCandleSeries?.current?.update(updateData);
    myAreaSeries?.current?.update(updateData);
    myLineSeries?.current?.update(updateData);
    myBarSeries?.current?.update(updateData);
  }, [chartDetails]);

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
          <button className="TradingRunsBtnsBuy">
            <BiUpvote />
          </button>
          <button className="TradingRunsBtnsSell">
            <BiDownvote />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trading;
