import { createSlice } from "@reduxjs/toolkit";

export const userStore = createSlice({
  name: "userStore",
  initialState: {
    userDetails: {
      id: 0,
      name: "",
      email: "",
      level: "",
    },
    userWallets: {
      demoAccount: 0,
      realAccount: 0,
      tourneyAccount: 0,
    },
    userLoggedIn: localStorage.getItem("thridaUserAuthToken") ? true : false,
    userAuthToken: localStorage.getItem("thridaUserAuthToken") | "",
    activeWallet: localStorage.getItem("thridaActiveWallet") || "demo",
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setUserWallets: (state, action) => {
      state.userWallets = action.payload;
    },
    setUserLoggedIn: (state, action) => {
      state.userLoggedIn = action.payload;
    },
    setUserAuthToken: (state, action) => {
      state.userAuthToken = action.payload;
      localStorage.setItem("thridaUserAuthToken", action.payload);
    },
    setActiveWallet: (state, action) => {
      state.activeWallet = action.payload;
      localStorage.setItem("thridaActiveWallet", action.payload);
    },
    clearUserStore: (state) => {
      state.userDetails = {
        name: "",
        email: "",
      };
      state.userWallets = {
        demoAccount: 0,
        realAccount: 0,
        tourneyAccount: 0,
      };
      state.userLoggedIn = false;
      state.userAuthToken = null;
      localStorage.removeItem("thridaUserAuthToken");
    },
  },
});

export const {
  setUserDetails,
  setUserWallets,
  setUserLoggedIn,
  setUserAuthToken,
  clearUserStore,
  setActiveWallet,
} = userStore.actions;

export default userStore.reducer;
