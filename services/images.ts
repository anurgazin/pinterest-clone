import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8000/images/";

export const getImages = async () => {
  const response = await axios.get(API_URL, { headers: authHeader() });
  return response.data.images;
};

export const addImage = async (
  image: File,
  image_name: string,
  tags: string[]
) => {
  const payload = new FormData();
  const tagsArray = JSON.stringify(tags).replace(/[\[\]"]/g, "");

  payload.append("image", image);
  payload.append("image_name", image_name);
  payload.append("tags", tagsArray);
  const response = await axios.post(API_URL, payload, {
    headers: authHeader(),
  });
  return response.data;
};
