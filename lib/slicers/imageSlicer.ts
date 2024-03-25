import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getImagesByTags } from "@/services/images";
import { ImageType } from "@/classes/imageType";

interface ImagesState {
  images: ImageType[];
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
  async (tags: string[]) => {
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
