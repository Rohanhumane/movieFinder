import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoviesData,
  getErrorState,
  getLoadingState,
  getMovieData,
} from "../store/slices/movieSlice";
import watchListIconUn from "../assets/home/bookmarkUn.png";
import watchListIconS from "../assets/home/bookmarkS.png";
import { watchListActions } from "../store/slices/watchListSlice";
import { recentViewActions } from "../store/slices/recentViewSlice";

const ID = "#IMDB_ID";
export const Movie = () => {
  const dispatch = useDispatch();
  const movieData = useSelector(getMovieData);
  const loading = useSelector(getLoadingState);
  const error = useSelector(getErrorState);

  const watchListMovies = useSelector(
    (state) => state.watchList.watchListMovies
  );

  useEffect(() => {
    if (!movieData || movieData.length === 0) {
      dispatch(fetchMoviesData());
    }
  }, [dispatch, movieData]);

  const watchListHandler = (id) => {
    const isBookmarked = watchListMovies.some((m) => m[ID] === id);
    const movie = movieData.find((m) => m[ID] === id);

    if (!isBookmarked) {
      dispatch(watchListActions.addWatchList(movie));
    } else {
      dispatch(watchListActions.removeWatchList(id));
    }
  };

  const movieSelectedHandler = (movie) => {
    dispatch(recentViewActions.getViewRecentMovie(movie));
  };

  return (
    <div className="container mx-auto p-4">
      {(movieData.length === 0 || error) && !loading && (
        <h1 className="text-red-500 text-center col-span-full font-bold">
          Search Movie not Found
        </h1>
      )}
      {loading ? (
        <div className="flex justify-center items-center py-6">
          <div className="w-14 h-14 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movieData.map((movie, idx) => {
            const id = movie[ID];
            return (
              <article
                key={`${id}_${idx}`}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition hover:shadow-lg cursor-pointer"
                onClick={() => movieSelectedHandler(movie)}
              >
                {/* Poster Image */}
                <img
                  src={movie["#IMG_POSTER"]}
                  alt={movie["#TITLE"] || "poster"}
                  className="w-full h-56 object-cover"
                />

                {/* Movie Details */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {movie["#TITLE"]}
                  </h3>
                  <p className="text-sm text-gray-500">{movie["#YEAR"]}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    <span className="text-green-800">RANK:</span>
                    {movie["#RANK"]}
                  </p>

                  {movie["#ACTORS"] && (
                    <p className="text-sm text-gray-600 mt-2">
                      <span className="font-medium">Actors:</span>
                      {movie["#ACTORS"]}
                    </p>
                  )}

                  {movie["#IMDB_URL"] && (
                    <a
                      href={movie["#IMDB_URL"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 mb-3 inline-block text-blue-600 text-sm hover:underline"
                    >
                      View on IMDB
                    </a>
                  )}

                  <div className="flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        watchListHandler(id);
                      }}
                      className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
                    >
                      <img
                        src={
                          watchListMovies.some((m) => m[ID] === id)
                            ? watchListIconS
                            : watchListIconUn
                        }
                        alt="bookmark"
                        className="w-6 h-6"
                      />
                      <span className="text-sm font-medium">
                        {watchListMovies.some((m) => m[ID] === id)
                          ? "Bookmarked"
                          : "Add to Watchlist"}
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
