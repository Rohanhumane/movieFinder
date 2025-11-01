import React from "react";
import { useSelector } from "react-redux";
import { getImageUrl } from "../api/movieApi";

export const MovieWatchList = ({ movies: watchListData }) => {
  const watchListLength = useSelector(
    (state) => state.watchList.watchListMovies.length
  );

  // Empty state
  if (watchListData.length === 0 && watchListLength === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-12 text-center">
        <img
          src="/empty_watchlist.svg"
          alt="Empty Watchlist"
          className="w-60 opacity-80 mb-4"
        />
        <h2 className="text-gray-700 text-lg font-semibold">
          Oops! Your Watchlist is empty.
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Start adding your favorite movies to keep track of them here.
        </p>
      </div>
    );
  }

  // Not found state
  if (watchListData.length === 0 && watchListLength !== 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-12 text-center">
        <img
          src="/not_found.svg"
          alt="Movie Not Found"
          className="w-56 opacity-80 mb-4"
        />
        <h2 className="text-gray-700 text-lg font-semibold">
          This movie isn’t in your Watchlist.
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Try searching again or explore your saved movies.
        </p>
      </div>
    );
  }

  // Watchlist display
  return (
    <ul className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-6">
      {watchListData.map((watch, index) => (
        <li key={`${watch.id}_${index}`}>
          <div className="flex flex-col md:flex-row items-start bg-white rounded-xl shadow-md p-4 mb-4 hover:shadow-lg transition">
            {/* Poster */}
            <img
              src={getImageUrl(watch.poster_path)}
              alt={watch.title}
              className="w-28 h-40 md:w-32 md:h-48 rounded-lg object-cover flex-shrink-0"
            />

            {/* Info */}
            <div className="flex-1 ml-4 mt-3 md:mt-0">
              <h2 className="text-lg font-bold text-gray-800">
                {watch.title}{" "}
                <span className="text-gray-500 text-sm">
                  ({watch.release_date?.slice(0, 4) ?? "—"})
                </span>
              </h2>
              <p className="text-gray-500 text-sm mb-1">
                {watch.original_language?.toUpperCase() ?? "—"} |{" "}
                <span className="font-semibold text-yellow-600">
                  ⭐ {watch.vote_average ?? "N/A"}
                </span>{" "}
                ({watch.vote_count ?? 0} votes) | Popularity:{" "}
                {watch.popularity >= 50 ? (
                  <span className="font-semibold text-green-600">
                    {Math.round(watch.popularity)}
                  </span>
                ) : (
                  <span className="font-semibold text-red-600">
                    {Math.round(watch.popularity)}
                  </span>
                )}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <button className="text-blue-600 hover:underline">Rate</button>
                <button className="text-blue-600 hover:underline">
                  Mark as watched
                </button>
              </div>
              <div className="text-gray-600 text-xs mt-2">
                <span className="font-semibold">Genres: </span>
                {watch.genre_ids?.length > 0
                  ? watch.genre_ids.join(", ")
                  : "N/A"}
              </div>
              {/*description*/}
              <div className="mt-2">
                <p className="text-gray-700 text-sm line-clamp-4">
                  {watch.overview || "No description available."}
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
