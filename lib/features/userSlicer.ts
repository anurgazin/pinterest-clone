import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface UserState {
  value: string;
}

// Define the initial state using that type
const initialState: UserState = {
  value: "",
};

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
