import { getCookie } from "typescript-cookie";

export default function authHeader() {
  const data = getCookie("user");
  // const user = JSON.parse(data);
  let accessToken = "";
  if (data) {
    const user = JSON.parse(data);
    accessToken = user.token;
  }

  if (accessToken !== "") {
    return { authorization: accessToken };
  } else {
    return {};
  }
}
