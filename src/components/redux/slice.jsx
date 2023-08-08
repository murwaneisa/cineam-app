// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screens: [],
  movies: [],
};

const screensSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setScreens(state, action) {
      state.data = action.payload;
    },
    setMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

export const { setScreens, setMovies } = screensSlice.actions;
export default screensSlice.reducer;
