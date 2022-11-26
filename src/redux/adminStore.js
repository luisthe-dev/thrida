import { createSlice } from "@reduxjs/toolkit";

export const adminStore = createSlice({
  name: "adminStore",
  initialState: {
    adminDetails: {
      name: "",
      email: "",
    },
    adminLoggedIn: localStorage.getItem("thridaAdminAuthToken") ? true : false,
    adminAuthToken: localStorage.getItem("thridaAdminAuthToken") | "",
  },
  reducers: {
    setAdminDetails: (state, action) => {
      state.adminDetails = action.payload;
    },
    setAdminLoggedIn: (state, action) => {
      state.adminLoggedIn = action.payload;
    },
    setAdminAuthToken: (state, action) => {
      state.adminAuthToken = action.payload;
      localStorage.setItem("thridaAdminAuthToken", action.payload);
    },
    setActiveWallet: (state, action) => {
      state.activeWallet = action.payload;
      localStorage.setItem("thridaActiveWallet", action.payload);
    },
    clearAdminStore: (state) => {
      state.adminDetails = {
        name: "",
        email: "",
      };
      state.adminWallets = {
        demoAccount: 0,
        realAccount: 0,
        tourneyAccount: 0,
      };
      state.adminLoggedIn = false;
      state.adminAuthToken = null;
      localStorage.removeItem("thridaAdminAuthToken");
    },
  },
});

export const {
  setAdminDetails,
  setAdminLoggedIn,
  setAdminAuthToken,
  clearAdminStore,
  setActiveWallet,
} = adminStore.actions;

export default adminStore.reducer;
