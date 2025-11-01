import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  watchListMovies: [],
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
        (movie) => movie.id !== action.payload
      );
    },
    sortUpwards(state) {
      state.watchListMovies.sort((a, b) => (a["#YEAR"] > b["#YEAR"] ? 1 : -1));
    },
    sortDownwards(state) {
      state.watchListMovies.sort((a, b) => (a["#YEAR"] < b["#YEAR"] ? 1 : -1));
    },
  },
});

export const watchListActions = watchListSlice.actions;
export default watchListSlice.reducer;


export const selectWatchList = (state) => state.watchList.watchListMovies;

// export const selectFilteredWatchList=(searchQuery) => createSelector(
//   [selectWatchList, searchQuery],
//   (watchListMovies, searchQuery) =>
//     watchListMovies.filter((movie) =>
//       movie.title.toLowerCase().includes(searchQuery.toLowerCase())
//     )
// );

export const selectFilteredWatchList = (searchQuery) =>
  createSelector([selectWatchList], (watchListMoviess) =>
    watchListMoviess.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

