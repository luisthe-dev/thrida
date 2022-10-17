import { createSlice } from "@reduxjs/toolkit";

export const chartStore = createSlice({
  name: "chartStore",
  initialState: {
    chartDetails: [],
  },
  reducers: {
    addChartStoreData: (state, action) => {
      state.chartDetails.push(action.payload);
    },
  },
});

export const { addChartStoreData } = chartStore.actions;

export default chartStore.reducer;
