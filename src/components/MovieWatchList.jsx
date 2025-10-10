import React from "react";

import { useSelector } from "react-redux";

export const MovieWatchList = ({ movies: watchListData }) => {
  const watchListOverAllLength = useSelector(
    (state) => state.watchList.watchListMovies.length
  );

  if (watchListData.length === 0 && watchListOverAllLength === 0) {
    return (
      <h2 className="text-center text-lg font-medium mt-6">
        Oops! Your WatchList is empty
      </h2>
    );
  }

  if (watchListData.length === 0 && watchListOverAllLength !== 0) {
    return (
      <h2 className="text-center text-lg font-medium mt-6">
        Oops! Your movie is not in the WatchList 
      </h2>
    );
  }

  return (
    <ul className="grid grid-row-1 sm:grid-row-2 lg:grid-row-3 gap-6">
      {watchListData.map((watch, _id) => {
        return (
          <li
            key={`${watch["#IMDB_ID"]}_${_id}`}
            className="bg-white rounded-lg shadow p-4 flex flex-col"
          >
            <img
              className="w-full h-48 object-cover rounded"
              src={watch["#IMG_POSTER"]}
              alt={watch["#TITLE"]}
            />

            <div className="mt-3 flex-1">
              <h3 className="text-lg font-semibold">{watch["#TITLE"]}</h3>
              <p className="text-sm text-gray-500">Year: {watch["#YEAR"]}</p>
              <p className="text-sm text-gray-400">Rank: {watch["#RANK"]}</p>
              <p className="text-sm text-gray-600 mt-1">
                Actors: {watch["#ACTORS"]}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
