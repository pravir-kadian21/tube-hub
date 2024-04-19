import { createSlice } from "@reduxjs/toolkit";

const youTubeVideoSlice = createSlice({
  name: "youTubeVideo",
  initialState: {
    youTubeVideos: null,
    youTubeVideoComments: null,
    nestedComments: null,
  },
  reducers: {
    updateYouTubeVideos: (state, action) => {
      state.youTubeVideos = action.payload;
    },
    updateYouTubeVideosComments: (state, action) => {
      state.youTubeVideoComments = action.payload;
    },
    updateNestedComments: (state, action) => {
      state.nestedComments = action.payload;
    },
  },
});

export const {
  updateYouTubeVideos,
  updateYouTubeVideosComments,
  updateNestedComments,
} = youTubeVideoSlice.actions;

export default youTubeVideoSlice.reducer;
