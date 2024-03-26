import axios from "axios";
import authHeader from "./authHeader";

const API_URL = process.env.NEXT_PUBLIC_API_DOMAIN + "images/";

export const getImages = async () => {
  const response = await axios.get(API_URL, { headers: authHeader() });
  return response.data.images;
};

export const getImagesByTags = async (tags: string[]) => {
  const response = await axios.get(API_URL, {
    params: { tags: tags },
    headers: authHeader(),
  });
  return response.data.images;
};

export const addImage = async (
  image: File,
  image_name: string,
  tags: string
) => {
  const payload = new FormData();
  payload.append("image", image);
  payload.append("image_name", image_name);
  payload.append("tags", tags);
  const response = await axios.post(API_URL, payload, {
    headers: authHeader(),
  });
  return response.data;
};
