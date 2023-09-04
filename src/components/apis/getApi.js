import { ThridaApi } from "./axios";

export const getAllAssets = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get("/assets", {
    headers: {},
  })
    .then((res) => {
      if (res.status === 200) {
        returnData.status = 1;
        returnData.data = res.data;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const getAllUsers = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get("/admin/users", {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return returnData;
};

export const getAllTransactions = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get("/admin/transactions", {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return returnData;
};
