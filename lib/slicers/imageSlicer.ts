import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "@/classes/userType";
import { getUser, logout as logoutUser } from "@/services/auth";
import { AppDispatch } from "../store";
import { getImagesByTags } from "@/services/images";

interface ImagesState {
  images: any[]; // Update the type according to your image structure
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ImagesState = {
  images: [],
  status: "idle",
  error: null,
};

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (tags: any[]) => {
    const response = await getImagesByTags(tags);
    return response;
  }
);

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    clearImages: (state) => {
      state.images = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const selectImages = (state: any) => state.image.images;

export default imageSlice.reducer;
