import { configureStore } from "@reduxjs/toolkit";
import userStore from "./userStore";

export const masterStore = configureStore({
  reducer: {
    userStore,
  },
});
