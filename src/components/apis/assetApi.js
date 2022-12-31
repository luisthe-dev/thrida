import { ThridaApi } from "./axios";

export const getAllActiveAssets = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get("/assets/active", {})
    .then((res) => {
      if (res.status === 200) {
        returnData.status = 1;
        returnData.data = res.data;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const createNewAsset = async (assetData) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/assets", assetData, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
      }`,
    },
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

export const toggleAssetStatus = async (assetId) => {
  let returnData = { status: 0 };

  await ThridaApi.patch(
    "/assets/toggle/" + assetId,
    {},
    {
      headers: {
        Authorization: `Bearer ${
          localStorage.getItem("thridaAdminAuthToken").split("|")[1]
        }`,
      },
    }
  )
    .then((res) => {
      if (res.status === 200) {
        returnData.status = 1;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const deleteAssets = async (assetId) => {
  let returnData = { status: 0 };

  await ThridaApi.delete(`/asset/${assetId}`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        returnData.status = 1;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};
