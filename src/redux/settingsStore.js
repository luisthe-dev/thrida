import { createSlice } from "@reduxjs/toolkit";

export const settingsStore = createSlice({
  name: "settingsStore",
  initialState: {
    themeMode: "dark",
  },
  reducers: {
    setThemeMode: (state, action) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThemeMode } = settingsStore.actions;

export default settingsStore.reducer;
