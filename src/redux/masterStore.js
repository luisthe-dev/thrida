import { configureStore } from "@reduxjs/toolkit";
import userStore from "./userStore";
import settingsStore from "./settingsStore";

export const masterStore = configureStore({
  reducer: {
    userStore,
    settingsStore,
  },
});
