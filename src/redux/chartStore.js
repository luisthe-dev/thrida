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
    addChartStoreData: (state, action) => {
      const existingChart = localStorage.chartDetails
        ? JSON.parse(localStorage.chartDetails)
        : [];
      state.chartDetails.push(action.payload);
      existingChart.push(action.payload);
      localStorage.setItem("chartDetails", JSON.stringify(existingChart));
    },
    updateChartStore: (state, action) => {
      const newOpen =
        state.chartDetails[action.payload][
          state.chartDetails[action.payload].length - 1
        ].close;
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

      state.chartDetails[action.payload].push(updateData);

      if (state.chartDetails[action.payload].length > 2000) {
        state.chartDetails[action.payload].splice(
          0,
          state.chartDetails[action.payload].length - 2000
        );
      }

      const allChartData = localStorage.getItem("chartDetails")
        ? JSON.parse(localStorage.chartDetails)
        : [];
      const mychartData = allChartData[action.payload];
      mychartData.push(updateData);
      allChartData[action.payload] = mychartData;

      if (allChartData[action.payload].length > 2000) {
        allChartData[action.payload].splice(
          0,
          allChartData[action.payload].length - 2000
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
        const newOpen =
          allChartData[allChartData.length - 1]?.close ||
          Number(Math.floor(Math.random() * (50 - 20 + 1) + 20).toFixed(5));
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

        const generatedData = {
          time: currentTime - (1000 - i),
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
    },
    updateActiveAsset: (state, action) => {
      state.chartActiveAsset = action.payload;
    },
  },
});

export const {
  intializeChartStoreData,
  updateChartStore,
  addChartStoreData,
  updateActiveAsset,
} = chartStore.actions;

export default chartStore.reducer;
