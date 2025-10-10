import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const recentViewSlice = createSlice({
  name: "recentViewMovie",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return [];
    });
  },
  reducers: {
    getViewRecentMovie(state, action) {
      const checkAlreadyPresent = state.some(
        (m) => m["#IMDB_ID"] === action.payload["#IMDB_ID"]
      );
      if (!checkAlreadyPresent) state.push(action.payload);
    },
  },
});

export const recentViewActions = recentViewSlice.actions;
export default recentViewSlice.reducer;
