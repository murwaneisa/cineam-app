// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screens: [],
  movies: [],
  seats: [],
  category: 0,
  genres: [],
};

const screensSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setScreens: (state, action) => {
      state.screens = action.payload;
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSeats: (state, action) => {
      state.seats = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setGenre: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { setScreens, setMovies, setSeats, setCategory, setGenre } =
  screensSlice.actions;
export default screensSlice.reducer;
