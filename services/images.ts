import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8000/images/";

export const getImages = async () => {
  const data = await axios.get(API_URL, { headers: authHeader() });
};
