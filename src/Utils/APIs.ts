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
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Endpoint for users login:
export const UsersLogin = async ({ email, password }: any) => {
  return await axios
    .post(`${Endpoint}/loginuser`, { email, password })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// Endpoint for users verification:
export const UserVerification = async (id: string) => {
  try {
    return await axios.get(`${Endpoint}/${id}/verifyuser`);
  } catch (error) {
    console.log(error);
  }
};
