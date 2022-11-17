import React, { useEffect } from "react";
import { createChart } from "lightweight-charts";
import { useSelector, useDispatch } from "react-redux";
import { addChartStoreData } from "../../redux/chartStore";
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

const Trading = () => {
  const myDispatch = useDispatch();

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

    setInterval(() => {
      const newOpen = chartData[chartData.length - 1].close;
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

      const updateData = {
        time: Math.floor(new Date().getTime() / 1000),
        open: newOpen,
        high: newHigh,
        low: newLow,
        close: newClose,
        value: newValue,
      };

      chart.timeScale().scrollPosition() < 0
        ? (document.getElementById("ScrollToBtn").style.display = "flex")
        : (document.getElementById("ScrollToBtn").style.display = "none");

      chartData.push(updateData);
      myDispatch(addChartStoreData(updateData));
      candlestickSeries.update(updateData);
      areastickSeries.update(updateData);
      linestickSeries.update(updateData);
      barstickSeries.update(updateData);
    }, 1500);
  }, [myDispatch]);

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
        <button className="ScrollToBtn" id="ScrollToBtn">
          <BsChevronDoubleRight />
        </button>
      </div>
      <div className="TradingRuns">
        <div className="TradingRunsBlock">
          <div className="TradingBlock">
            <label> Amount </label>
            <div className="TradingBlockInput">
              <input type="text" />
              <div className="TradingBlockInputStackBtns">
                <button>
                  <AiOutlinePlus />
                </button>
                <button>
                  <AiOutlineMinus />
                </button>
              </div>
            </div>
          </div>
          <div className="TradingBlock">
            <label> Time </label>
            <div className="TradingBlockInput">
              <input type="text" />
              <div className="TradingBlockInputStackBtns">
                <button>
                  <AiOutlinePlus />
                </button>
                <button>
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
