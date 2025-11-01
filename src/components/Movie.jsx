import React from "react";
import { useDispatch, useSelector } from "react-redux";
import watchListIconUn from "../assets/home/bookmarkUn.png";
import watchListIconS from "../assets/home/bookmarkS.png";
import { watchListActions } from "../store/slices/watchListSlice";
import { recentViewActions } from "../store/slices/recentViewSlice";
import { useSearchQuery } from "../hook/useSearchQuery";
import { getImageUrl } from "../api/movieApi";

export const Movie = () => {
  const dispatch = useDispatch();
  const watchListMovies = useSelector(
    (state) => state.watchList.watchListMovies
  );

  const searchQuery = useSelector((state) => state.searchQuery.query);
  const { data: movieData, isLoading, error } = useSearchQuery(searchQuery);

  const watchListHandler = (id) => {
    const isBookmarked = watchListMovies.some((m) => m.id === id);
    const movie = movieData?.results?.find((m) => m.id === id);
    if (!movie) return;

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
    <div className="container mx-auto px-4 py-6">
      {/* No Movies Found */}
      {(movieData?.results?.length === 0 || error) && !isLoading && (
        <h1 className="text-red-500 text-center text-lg font-semibold">
          No movies found
        </h1>
      )}

      {/* Loader */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movieData?.results?.map((movie) => {
            const id = movie.id;
            const isBookmarked = watchListMovies.some((m) => m.id === id);

            return (
              <article
                key={`${movie.title}_${id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-200 hover:-translate-y-1"
              >
                {/* Poster */}
                <img
                  src={getImageUrl(movie.poster_path)}
                  alt={movie.title || "Movie Poster"}
                  className="w-full h-72 object-cover cursor-pointer"
                  onClick={() => movieSelectedHandler(movie)}
                />

                {/* Movie Details */}
                <div className="flex flex-col flex-grow p-4">
                  <h2
                    className="text-lg font-semibold text-gray-800 truncate cursor-pointer hover:text-blue-600"
                    onClick={() => movieSelectedHandler(movie)}
                  >
                    {movie.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {movie.release_date || "—"}
                  </p>

                  <div className="flex justify-between items-center mt-3 text-sm">
                    <span className="text-yellow-600 font-medium">
                      ⭐ {movie.vote_average?.toFixed(1) ?? "N/A"}
                    </span>
                    {movie.popularity >= 50 ? (
                      <span className="text-green-600 font-medium">
                        ↑ {Math.round(movie.popularity)}
                      </span>
                    ) : (
                      <span className="text-red-600 font-medium">
                        ↓ {Math.round(movie.popularity)}
                      </span>
                    )}
                  </div>

                  <div className="text-xs text-gray-400 mt-1">
                    Language: {movie.original_language?.toUpperCase()}
                  </div>

                  {/* Watchlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      watchListHandler(id);
                    }}
                    className={`mt-4 flex items-center gap-2 px-3 py-2 rounded-md border transition text-sm font-medium ${
                      isBookmarked
                        ? "bg-yellow-400 text-gray-800 hover:bg-yellow-300 border-yellow-500"
                        : "bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-700"
                    } cursor-pointer`}
                  >
                    <img
                      src={isBookmarked ? watchListIconS : watchListIconUn}
                      alt="bookmark"
                      className="w-5 h-5"
                    />
                    {isBookmarked ? "Bookmarked" : "Add to Watchlist"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
