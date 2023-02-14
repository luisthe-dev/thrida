import { ThridaApi } from "./axios";

export const getAllTourneys = async (pageNumber) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/tournaments?page=${pageNumber}`)
    .then((response) => {
      if (response.status === 200) {
        returnData = { status: 1, data: response.data.data };
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return returnData;
};

export const getActiveTourneys = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get("/tournaments/active")
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

export const getSingleTourney = async (tourneyId) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/tournaments/${tourneyId}`)
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

export const toggleTournament = async (tourneyId) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/tournaments/${tourneyId}/toggle`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
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

export const deleteTournament = async (tourneyId) => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/tournaments/${tourneyId}/delete`, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
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

export const createAdminTourney = async (tourneyData) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/admin/tournaments", tourneyData, {
    headers: {
      Authorization: `Bearer ${
        localStorage.getItem("thridaAdminAuthToken").split("|")[1]
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

export const createTourney = async (tourneyData) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/tournaments", tourneyData, {
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

export const appliedTourney = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get(`/tournaments/registered`, {
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

export const applyTourney = async (tourneyId) => {
  let returnData = { status: 0 };

  await ThridaApi.put(
    `/tournaments/${tourneyId}`,
    {},
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
      returnData.message = err.response.data.message;
    });

  return returnData;
};
