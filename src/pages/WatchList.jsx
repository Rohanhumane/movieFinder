import React, { useEffect, useState } from "react";
import { MovieWatchList } from "../components/MovieWatchList";
import { Search } from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import up from "../assets/watchList/up.png";
import down from "../assets/watchList/down.png";
import {
  selectFilteredWatchList,
  watchListActions,
} from "../store/slices/watchListSlice";

export const WatchList = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(true);

  const searchQuery = useSelector((state) => state.searchQuery.query);
  const movies = useSelector(selectFilteredWatchList(searchQuery));

  useEffect(() => {
    if (sort) {
      dispatch(watchListActions.sortUpwards());
    } else {
      dispatch(watchListActions.sortDownwards());
    }
  }, [sort, dispatch]);

  return (
    <>
      <Search />
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">{movies.length} Titles</h3>
          <button
            onClick={() => setSort((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            <img
              alt="sort arrow img"
              src={sort ? up : down}
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">Sort</span>
          </button>
        </div>

        <MovieWatchList movies={movies} />
      </div>
    </>
  );
};
