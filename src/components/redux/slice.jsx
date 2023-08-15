// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screens: [],
  movies: [],
  seats: [],
};

const screensSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setScreens(state, action) {
      state.screens = action.payload;
    },
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setSeats(state, action) {
      state.seats = action.payload;
    },
  },
});

export const { setScreens, setMovies, setSeats } = screensSlice.actions;
export default screensSlice.reducer;
