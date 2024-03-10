import axios from "axios";
import { getCookie, removeCookie, setCookie } from "typescript-cookie";

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
  if (res.data.user) {
    setCookie("user", JSON.stringify(res.data.user));
  }
  return res.data;
};

export const logout = () => {
  removeCookie("user");
};

export const getUsername = () => {
  const data = JSON.parse(getCookie("user") || "");
  return data.username;
};
