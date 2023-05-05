import axios from "axios";

const Endpoint = "http://localhost:1511/api/users";

// Endpoint for users registration:
export const UsersRegistration = async ({
  name,
  email,
  password,
  confirmPassword,
}: any) => {
  return await axios
    .post(`${Endpoint}/registeruser`, {
      name,
      email,
      password,
      confirmPassword,
    })
    .then((res) => {
      res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Endpoint for users login:
export 