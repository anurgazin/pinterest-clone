import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "@/classes/userType";
import { getUser, logout as logoutUser } from "@/services/auth";
import { AppDispatch } from "../store";

// Define the initial state interface
interface UserState {
  user: UserType | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      logoutUser();
    },
    restore: (state) => {
      const user = getUser();
      if (user) {
        state.user = user;
        state.isAuthenticated = true;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, restore } = userSlice.actions;

export const selectUser = (state: any) => state.user;

export const restoreUser = () => (dispatch: AppDispatch) => {
  dispatch(restore());
};

export default userSlice.reducer;
