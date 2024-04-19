import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    isSidebarOpen: true,
    showLiveStreams: false,
    activeSidebarItem: "home",
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleShowLiveStreams: (state, action) => {
      state.showLiveStreams = action.payload;
    },
    setActiveSidebaritem: (state, action) => {
      state.activeSidebarItem = action.payload;
    },
  },
});

export const {
  toggleSidebar,
  closeSidebar,
  toggleShowLiveStreams,
  setActiveSidebaritem,
} = configSlice.actions;

export default configSlice.reducer;
