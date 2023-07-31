// dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setScreens(state, action) {
      state.data = action.payload;
    },
  },
});

export const { findMovieDate, setScreens, addData } = dataSlice.actions;
export default dataSlice.reducer;
