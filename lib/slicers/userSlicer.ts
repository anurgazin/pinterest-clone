import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "@/classes/userType";
import { getUser } from "@/services/auth";

// Define the initial state interface
interface UserState {
  user: UserType | null;
}

const initialState: UserState = {
  user: getUser(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export const selectUser = (state: any) => state.user;

export default userSlice.reducer;
