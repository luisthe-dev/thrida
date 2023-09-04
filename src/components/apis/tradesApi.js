import { ThridaApi } from "./axios";

export const getTrades = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get("/trade", {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaUserAuthToken").split("|")[1]
      }`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        returnData = { status: 1, data: response.data };
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return returnData;
};

export const startTrade = async (tradeData) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/trade", tradeData, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaUserAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => {
      if (res.status === 201) {
        returnData.status = 1;
        returnData.trade = res.data.tradeDetails;
        returnData.user = res.data.userDetails;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const endTrade = async (tradeId, walletType) => {
  let returnData = { status: 0 };

  await ThridaApi.put(
    `/trade/${tradeId}`,
    { walletType: walletType },
    {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("thridaUserAuthToken").split("|")[1]
        }`,
      },
    }
  )
    .then((res) => {
      if (res.status === 200) {
        returnData.status = 1;
        returnData.trade = res.data.tradeDetails;
        returnData.user = res.data.userDetails;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const initCopyTrading = async (copyTradeData) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/trade/copy", copyTradeData, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaUserAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        returnData.status = 1;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const checkCopyStatus = async (proId) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/trade/copy/${proId}`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaUserAuthToken").split("|")[1]
      }`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        returnData = { status: 1, data: response.data };
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};
