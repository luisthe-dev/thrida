import { ThridaApi } from "./axios";

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
