import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import screensSlice from "./slice"; // Import your dataSlice reducer

// Configure the Redux Persist
const persistConfig = {
  key: "root", // Key used to persist the data in storage
  storage,
  whitelist: ["data"], // Reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, screensSlice);

const store = configureStore({
  reducer: {
    data: persistedReducer, // Use the persisted reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store); // Initialize the persistor

export default store;
