import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const MAXVIEW = 5;

export const RecentViewMovie = () => {
  const [startIndex, setStartIndex] = useState(0);
  const recentViewMovie = useSelector((state) => state.recentViewMovie);
  const overAllLength = recentViewMovie.length;

  // handle next/previous click
  const handleNext = () => {
    if (startIndex < overAllLength - MAXVIEW) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleMovies = recentViewMovie.slice(startIndex, startIndex + MAXVIEW);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-3 text-gray-100 text-center">
        Recently Viewed
      </h2>

      <div className="flex items-center justify-center gap-3">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`p-2 rounded-full border border-gray-500 hover:bg-gray-600 transition ${
            startIndex === 0
              ? "opacity-40 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <ChevronLeftIcon className="w-5 h-5 text-white" />
        </button>

        {/* Movie List */}
        <ul className="flex gap-4">
          {visibleMovies.map((movie) => (
            <li
              key={movie["#IMDB_ID"]}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-32"
            >
              <img
                src={movie["#IMG_POSTER"]}
                alt={movie["#TITLE"] || "poster"}
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm text-white text-center line-clamp-2">
                  {movie["#TITLE"]}
                </h3>
              </div>
            </li>
          ))}
        </ul>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={startIndex >= overAllLength - MAXVIEW}
          className={`p-2 rounded-full border border-gray-500 hover:bg-gray-600 transition ${
            startIndex >= overAllLength - MAXVIEW
              ? "opacity-40 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <ChevronRightIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};