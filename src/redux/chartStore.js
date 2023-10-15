import { createSlice } from "@reduxjs/toolkit";

export const chartStore = createSlice({
  name: "chartStore",
  initialState: {
    chartDetails: localStorage.chartDetails
      ? JSON.parse(localStorage.chartDetails)
      : {},
    chartActiveAsset: localStorage.getItem("activeAsset")
      ? localStorage.getItem("activeAsset")
      : "",
  },
  reducers: {
    updateChartStore: (state, action) => {
      const lastItem =
        state.chartDetails[action.payload][
          state.chartDetails[action.payload].length - 1
        ];
      const newOpen = lastItem.close;
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
      const newTime = Math.floor(new Date().getTime() / 1000);

      const updateData = {
        time: lastItem.time === newTime ? newTime + 1 : newTime,
        open: newOpen,
        high: newHigh,
        low: newLow,
        close: newClose,
        value: newValue,
      };

      state.chartDetails[action.payload].push(updateData);

      if (state.chartDetails[action.payload].length > 800) {
        state.chartDetails[action.payload].splice(
          0,
          state.chartDetails[action.payload].length - 800
        );
      }

      const allChartData = localStorage.getItem("chartDetails")
        ? JSON.parse(localStorage.chartDetails)
        : [];
      const mychartData = allChartData[action.payload];
      mychartData.push(updateData);
      allChartData[action.payload] = mychartData;

      if (allChartData[action.payload].length > 800) {
        allChartData[action.payload].splice(
          0,
          allChartData[action.payload].length - 800
        );
      }

      localStorage.setItem("chartDetails", JSON.stringify(allChartData));
    },
    intializeChartStoreData: (state, action) => {
      if (
        localStorage.chartDetails &&
        JSON.parse(localStorage.chartDetails)[action.payload] &&
        JSON.parse(localStorage.chartDetails)[action.payload].length > 1
      )
        return;

      const mychartData = localStorage.chartDetails
        ? JSON.parse(localStorage.chartDetails)
        : {};
      const allChartData = [];
      const currentTime = Math.floor(new Date().getTime() / 1000);
      for (let i = 0; i < 1000; i++) {
        const lastItem =
          allChartData.length > 0
            ? allChartData[allChartData.length - 1]
            : null;

        const newOpen = lastItem
          ? allChartData[allChartData.length - 1].close
          : Number(Math.floor(Math.random() * (50 - 20 + 1) + 20).toFixed(5));
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
                (
                  Math.random() * (newOpen + 10 - newOpen + 1) +
                  newOpen
                ).toFixed(5)
              )
            : Number(
                (
                  Math.random() * (newClose + 10 - newClose + 1) +
                  newClose
                ).toFixed(5)
              );
        const newValue = (newOpen + newClose) / 2;

        const newTime = currentTime - (1000 - i);

        const generatedData = {
          time: newTime,
          open: newOpen,
          high: newHigh,
          low: newLow,
          close: newClose,
          value: newValue,
        };

        allChartData.push(generatedData);
        mychartData[action.payload] = allChartData;
        state.chartDetails = mychartData;
        localStorage.setItem("chartDetails", JSON.stringify(mychartData));
      }
      console.log(allChartData[allChartData.length - 1]);
      // return mychartData;
    },
    updateActiveAsset: (state, action) => {
      state.chartActiveAsset = action.payload;
    },
  },
});

export const { intializeChartStoreData, updateChartStore, updateActiveAsset } =
  chartStore.actions;

export default chartStore.reducer;
