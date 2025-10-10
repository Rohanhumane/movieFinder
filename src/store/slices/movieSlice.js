import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

export const fetchMoviesData = createAsyncThunk(
  "movie/fetchMovie",
  async (search = "Batman") => {
    // eslint-disable-next-line no-useless-catch
    try {
      const valueSearch = search ? search : "Batman";
      const res = await fetch(
        `https://imdb.iamidiotareyoutoo.com/search?q=${valueSearch}`
      );
      const jsonData = await res.json();
      return jsonData;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  loading: false,
  list: [],
  error: "",
};

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoviesData.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.description || [];
        state.error = "";
      })
      .addCase(fetchMoviesData.rejected, (state, action) => {
        state.error = action.payload.messsage || "Something went Wrong";
        state.loading = false;
      })
      .addCase(PURGE, () => {
        return initialState;
      });
  },
});

export const getMovieData = (state) => state.moviesData.list;
export const getLoadingState = (state) => state.moviesData.loading;
export const getErrorState = (state) => state.moviesData.error;

export default moviesSlice.reducer;
