import { createSlice } from "@reduxjs/toolkit";

export const chartStore = createSlice({
  name: "chartStore",
  initialState: {
    chartDetails: localStorage.chartDetails
      ? JSON.parse(localStorage.chartDetails)
      : [],
    chartIntervalId: 0,
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
    setChartInterval: (state, action) => {
      state.chartIntervalId = action.payload;
    },
    clearChartInterval: (state) => {
      clearInterval(state.chartIntervalId);
      state.chartIntervalId = 0;
    },
    updateChartStore: (state) => {
      const newOpen = state.chartDetails[state.chartDetails.length - 1].close;
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

      state.chartDetails.push(updateData);

      const allChartData = localStorage.getItem("chartDetails")
        ? JSON.parse(localStorage.chartDetails)
        : [];
      allChartData.push(updateData);
      localStorage.setItem("chartDetails", JSON.stringify(allChartData));
    },
    intializeChartStoreData: (state) => {
      if (
        localStorage.chartDetails &&
        JSON.parse(localStorage.chartDetails).length > 1
      )
        return;
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
        state.chartDetails.push(generatedData);
        localStorage.setItem("chartDetails", JSON.stringify(allChartData));
      }
    },
  },
});

export const {
  intializeChartStoreData,
  updateChartStore,
  addChartStoreData,
  setChartInterval,
  clearChartInterval,
} = chartStore.actions;

export default chartStore.reducer;
