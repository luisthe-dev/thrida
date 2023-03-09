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

export const GetDepositTransactions = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get("/transactions/deposits", {
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
    .then((response) => {
      if (response.status === 201) {
        returnData = { status: 1, data: response.data };
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return returnData;
};

export const UploadDepositSlip = async (transaction_id, depositSlip) => {
  let returnData = { status: 0 };

  let depositFormData = new FormData();
  depositFormData.append("depositSlip", depositSlip);

  await ThridaApi.post(`/updateDeposit/${transaction_id}`, depositFormData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${
        localStorage.getItem("thridaUserAuthToken").split("|")[1]
      }`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        returnData = { status: 1 };
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return returnData;
};

export const initWithdrawal = async (withdrawData) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/transactions/withdraw", withdrawData, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaUserAuthToken").split("|")[1]
      }`,
    },
  })
    .then((response) => {
      if (response.status === 201) {
        returnData = { status: 1, data: response.data };
      }
    })
    .catch((err) => {
      returnData.message = err.response.data.message;
    });

  return returnData;
};
