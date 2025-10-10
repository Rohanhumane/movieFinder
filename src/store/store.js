import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import moviesReducer from "./slices/movieSlice";
import watchListReducer from "./slices/watchListSlice";
import recentViewSlice from "./slices/recentViewSlice";
import authReducer from "./slices/authSlice";

// Combine all slices
const rootReducer = combineReducers({
  moviesData: moviesReducer,
  watchList: watchListReducer,
  recentViewMovie: recentViewSlice,
  auth: authReducer,
});

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["moviesData", "watchList", "recentViewMovie", "auth"],
};

// Apply persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // disable warning from redux-persist
    }),
});

export const persistor = persistStore(store);
