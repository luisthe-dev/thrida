import { ThridaApi } from "./axios";

export const SignInUser = async (userMail, userPass) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/login", {
    email: userMail,
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

export const SignUpUser = async (userName, userMail, userPass) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/register", {
    name: userName,
    email: userMail,
    password: userPass,
  })
    .then((response) => {
      if (response.status === 201) {
        returnData = { status: 1 };
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return returnData;
};

export const GetUserDetails = async () => {
  let returnData = { status: 0 };

  await ThridaApi.get("/user", {
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
