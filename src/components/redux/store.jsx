// store.js
import { configureStore } from "@reduxjs/toolkit";
import screensSlice from "./slice"; // Import your dataSlice reducer

const Store = configureStore({
  reducer: {
    data: screensSlice,
  },
});

export default Store;
