import { ThridaApi } from "./axios";

export const startTrade = async (tradeData) => {
  let returnData = { status: 0 };

  console.log(tradeData);

  await ThridaApi.post("/trade/start", tradeData, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaUserAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => {
      if (res.status === 201) {
        console.log(res.data);
        returnData.status = 1;
        returnData.trade = res.data.tradeDetails;
        returnData.user = res.data.userDetails;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};
