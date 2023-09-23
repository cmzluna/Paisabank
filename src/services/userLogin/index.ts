import callApi from "../callApi";

interface Login {
  success: boolean;
  data: {
    name: string;
  };
}

const userLogin = async (body) =>
  await callApi<Login>("/paisabank/login", "post", body, "Credenciales invalidas 🤔");

export default userLogin;
