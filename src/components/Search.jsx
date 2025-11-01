import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { searchActions } from "../store/slices/searchSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("War");

  // Debounce function
  const debounceFunc = useCallback((fnc, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fnc(...args);
      }, delay);
    };
  }, []);

  // Debounced dispatch
  const debouncedSearch = useMemo(
    () => debounceFunc((query) => dispatch(searchActions.setSearchQuery(query)), 300),
    [dispatch, debounceFunc]
  );

  useEffect(() => {
    dispatch(searchActions.setSearchQuery("War"));
  }, [dispatch]);

  
  const handleChange = (e) => {
    const _value = e.target.value;
    setInputValue(_value);
    debouncedSearch(_value);
  };

  const onBlurHandler = () => {
    if (inputValue.trim() === "") {
      setInputValue("War");
      dispatch(searchActions.setSearchQuery("War"));
    }
  };

  return (
    <div className="flex items-center justify-center px-4">
      <label htmlFor="movie-search" className="sr-only">
        Search movies
      </label>

      <div className="relative w-full max-w-xl">
        {/* Search icon */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>

        <input
          id="movie-search"
          type="search"
          aria-label="search movies"
          placeholder="Search movies, actors, genres..."
          value={inputValue}
          onChange={handleChange}
          onBlur={onBlurHandler}
          autoComplete="off"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-gray-700"
        />
      </div>
    </div>
  );
};
