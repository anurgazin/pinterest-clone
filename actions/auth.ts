// import {
//   REGISTER_SUCCESS,
//   REGISTER_FAIL,
//   LOGIN_SUCCESS,
//   LOGIN_FAIL,
//   LOGOUT,
//   SET_MESSAGE,
// } from "./types";

// import { register, login, logout } from "@/services/auth";

// export const registerUser =
//   (username: string, email: string, password: string) => (dispatch: any) => {
//     return register(username, email, password).then(
//       (response) => {
//         dispatch({
//           type: REGISTER_SUCCESS,
//         });

//         dispatch({
//           type: SET_MESSAGE,
//           payload: response.data.message,
//         });

//         return Promise.resolve();
//       },
//       (error) => {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         dispatch({
//           type: REGISTER_FAIL,
//         });

//         dispatch({
//           type: SET_MESSAGE,
//           payload: message,
//         });

//         return Promise.reject();
//       }
//     );
//   };

// export const loginUser =
//   (email: string, password: string) => (dispatch: any) => {
//     return login(email, password).then(
//       (data) => {
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: { user: data },
//         });

//         return Promise.resolve();
//       },
//       (error) => {
//         const message =
//           (error.response &&
//             error.response.data &&
//             error.response.data.message) ||
//           error.message ||
//           error.toString();

//         dispatch({
//           type: LOGIN_FAIL,
//         });

//         dispatch({
//           type: SET_MESSAGE,
//           payload: message,
//         });

//         return Promise.reject();
//       }
//     );
//   };

// export const logoutUser = () => (dispatch: any) => {
//   logout();

//   dispatch({
//     type: LOGOUT,
//   });
// };
