import { ThridaApi } from "./axios";

export const SignInAdmin = async (userId, userPass) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/admin/login", {
    username: userId,
    password: userPass,
    remember_me: true,
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

export const SignUpAdmin = async (userId, userEmail, userPass) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/admin/register", {
    username: userId,
    email: userEmail,
    password: userPass,
  })
    .then((response) => {
      if (response.status === 201) {
        returnData = { status: 1 };
      }
    })
    .catch((err) => {
      if (err.response.status === 422)
        returnData = { message: err.response.data.message };
    });

  return returnData;
};

export const GetAllSettings = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/settings`, {
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

export const GetAllUsers = async (pageNumber) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/users?page=${pageNumber}`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        returnData.status = 1;
        returnData.data = res.data.data;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const GetAllUserTransactions = async (pageNumber) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/transactions?page=${pageNumber}`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        returnData.status = 1;
        returnData.data = res.data.data;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const GetAllPendingWithdrawal = async (pageNumber) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/transactions/withdrawal?page=${pageNumber}`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        returnData.status = 1;
        returnData.data = res.data.data;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const approveSingleWthdrawal = async (type, id) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/transactions/withdrawal/${type}/${id}/approve`, {
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

export const denySingleWthdrawal = async (type, id) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/transactions/withdrawal/${type}/${id}/deny`, {
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

export const getSinglePendingWithdrawal = async (id, type) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/transactions/withdrawal/${type}/${id}`, {
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

export const GetProUsers = async (pageNumber) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/prousers?page${pageNumber}`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        returnData.status = 1;
        returnData.data = res.data.data;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const GetProRequests = async (pageNumber) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/pro/requests?page${pageNumber}`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        returnData.status = 1;
        returnData.data = res.data.data;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const getAllStats = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get("/admin/stats", {
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

export const getSingleUser = async (userId) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/user/${userId}`, {
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

export const getSingleRequest = async (requuestId) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/pro/request/${requuestId}`, {
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

export const approveSingleRequest = async (requuestId) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/pro/request/${requuestId}/approve`, {
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

export const denySingleRequest = async (requuestId) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/pro/request/${requuestId}/deny`, {
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

export const updateSingleUser = async (userId, userData) => {
  let returnData = { status: 0 };

  await ThridaApi.patch(`/admin/user/${userId}`, userData, {
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

export const freezeSingleUser = async (userId) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/user/${userId}/freeze`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
      }`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        returnData.status = 1;
        returnData.message = res.data.message;
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};

export const deleteSingleUser = async (userId) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/admin/user/${userId}/delete`, {
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

export const updateSettingsValue = async (settingData) => {
  let returnData = { status: 0 };

  await ThridaApi.patch(`/admin/setting`, settingData, {
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


export const RequestPro = async (requestData) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/admin/prouser/add", requestData, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
      }`,
    },
  })
    .then((response) => {
      console.log(response);
      if (response.status === 201) {
        returnData = { status: 1, data: response.data };
      }
    })
    .catch((err) => console.log(err));

  return returnData;
};


// [
//   'amount' => '2000', 
// 'currency' => 'Naira', 
// 'ruleFactor' => 'anytime', 
// 'timeTrade' => ''
// ]