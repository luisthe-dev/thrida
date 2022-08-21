import { ThridaApi } from "./axios";

export const SignInUser = async (userMail, userPass) => {
  let returnData = { status: 0 };

  ThridaApi.post("/login", {
    email: userMail,
    password: userPass,
    remember_me: true,
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return returnData;
};
