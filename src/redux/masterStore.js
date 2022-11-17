import { configureStore } from "@reduxjs/toolkit";
import userStore from "./userStore";
import settingsStore from "./settingsStore";
import chartStore from "./chartStore";

export const masterStore = configureStore({
  reducer: {
    userStore,
    settingsStore,
    chartStore,
  },
});
