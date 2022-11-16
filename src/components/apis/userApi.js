import { ThridaApi } from "./axios";

export const SignInUser = async (userMail, userPass) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/login", {
    email: userMail,
    password: userPass,
    remember_me: true,
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

export const SignUpUser = async (userName, userMail, userPass) => {
  let returnData = { status: 0 };

  await ThridaApi.post("/register", {
    name: userName,
    email: userMail,
    password: userPass,
  })
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
