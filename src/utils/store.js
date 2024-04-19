import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configSlice";
import youTubeVideoSlice from "./youTubeVideoSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    config: configSlice,
    youTubeVideos: youTubeVideoSlice,
    search: searchSlice,
  },
});

export default store;
