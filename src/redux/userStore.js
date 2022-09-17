import { createSlice } from "@reduxjs/toolkit";

export const userStore = createSlice({
  name: "userStore",
  initialState: {
    userDetails: {
      name: "",
      email: "",
    },
    userWallets: {
      demoAccount: 0,
      realAccount: 0,
      tourneyAccount: 0,
    },
    userLoggedIn: 0,
    userAuthToken: null,
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
    },
  },
});

export const {
  setUserDetails,
  setUserWallets,
  setUserLoggedIn,
  setUserAuthToken,
} = userStore.actions;

export default userStore.reducer;
