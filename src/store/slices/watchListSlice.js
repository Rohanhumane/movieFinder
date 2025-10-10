import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  watchListMovies: [],
  searchQuery: "",
};
const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
  reducers: {
    addWatchList(state, action) {
      state.watchListMovies.push(action.payload);
    },
    removeWatchList(state, action) {
      state.watchListMovies = state.watchListMovies.filter(
        (movie) => movie["#IMDB_ID"] !== action.payload
      );
    },
    sortUpwards(state) {
      state.watchListMovies.sort((a, b) => (a["#YEAR"] > b["#YEAR"] ? 1 : -1));
    },
    sortDownwards(state) {
      state.watchListMovies.sort((a, b) => (a["#YEAR"] < b["#YEAR"] ? 1 : -1));
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const watchListActions = watchListSlice.actions;
export default watchListSlice.reducer;

// ---- SELECTORS ----
export const selectWatchList = (state) => state.watchList.watchListMovies;

export const selectFilteredWatchList = createSelector(
  [selectWatchList, (state) => state.watchList.searchQuery],
  (watchListMovies, searchQuery) =>
    watchListMovies.filter((movie) =>
      movie["#TITLE"].toLowerCase().includes(searchQuery.toLowerCase())
    )
);
