import { ThridaApi } from "./axios";

export const GetTransactions = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get("/transactions", {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaUserAuthToken").split("|")[1]
      }`,
    },
  })
    .then(function (response) {
      if (response.status === 200) {
        returnData = { status: 1, data: response.data };
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  return returnData;
};

export const MakeDeposit = async (amount, depositChannel) => {
  let returnData = { status: 0 };

  await ThridaApi.post(
    "/transactions",
    {
      amount: amount,
      type: "Deposit",
      channel: depositChannel,
    },
    {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("thridaUserAuthToken").split("|")[1]
        }`,
      },
    }
  )
    .then(function (response) {
      if (response.status === 201) {
        returnData = { status: 1 };
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  return returnData;
};
