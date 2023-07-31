// store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice"; // Import your dataSlice reducer

const Store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default Store;
