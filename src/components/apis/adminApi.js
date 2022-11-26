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
