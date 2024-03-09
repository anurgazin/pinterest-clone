export default function authHeader() {
  const data = sessionStorage.getItem("accessToken");
  // const user = JSON.parse(data);

  let accessToken = "";
  if (data) {
    accessToken = JSON.parse(data);
  }

  if (accessToken !== "") {
    return { authorization: accessToken };
  } else {
    return {};
  }
}
