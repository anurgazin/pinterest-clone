import axios from "axios";

const USERS_API_URL = "http://localhost:8000/users/";

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const res = await axios.post(USERS_API_URL + "register", {
    username,
    email,
    password,
  });
  return res.data;
};

export const login = async (email: string, password: string) => {
  const res = await axios.post(USERS_API_URL + "login", {
    email,
    password,
  });
  if (res.data.token) {
    sessionStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

export const logout = () => {
  sessionStorage.removeItem("accessToken");
};
