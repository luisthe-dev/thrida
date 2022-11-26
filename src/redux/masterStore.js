import { configureStore } from "@reduxjs/toolkit";
import userStore from "./userStore";
import settingsStore from "./settingsStore";
import chartStore from "./chartStore";
import adminStore from "./adminStore";

export const masterStore = configureStore({
  reducer: {
    userStore,
    settingsStore,
    chartStore,
    adminStore,
  },
});
