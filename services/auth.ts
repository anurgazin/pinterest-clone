import axios from "axios";
import { getCookie, removeCookie, setCookie } from "typescript-cookie";
import { UserType } from "@/classes/userType";

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
  const user = await login(email, password);
  return user.user
    ? { message: res.data.message, user: user }
    : { message: res.data.message, user: null };
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

export const getUser = () => {
  if (typeof window !== "undefined") {
    const data = getCookie("user");
    if (data) {
      const user = JSON.parse(data);
      return user;
    }
  }
  return null;
};
