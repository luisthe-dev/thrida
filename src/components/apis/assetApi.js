import { ThridaApi } from "./axios";

export const getAllActiveAssets = async () => {
  let returnData = { status: 0 };

  ThridaApi.get("/assets/active", {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaUserAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return returnData;
};
