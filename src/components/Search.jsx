import React from "react";
import { useDispatch } from "react-redux";

export const Search = ({ onSearch }) => {
  const dispatch = useDispatch();

  const debounceFunc = (fnc, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        fnc(...args);
      }, delay);
    };
  };

  // wraping dispatch inside debounce
  const debouncedSearch = debounceFunc(
    (query) => dispatch(onSearch(query)),
    300
  );

  const inputController = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className="p-4 bg-gray-100 flex justify-center">
      <input
        id="movie-search"
        type="search"
        placeholder="search movies"
        onChange={inputController}
        className="w-1/2 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
