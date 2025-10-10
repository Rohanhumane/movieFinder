import React from "react";
import { Movie } from "../components/Movie";
import { Search } from "../components/Search";
import { fetchMoviesData } from "../store/slices/movieSlice";

export const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4">
        <Search onSearch={fetchMoviesData} />
        <Movie />
      </div>
    </main>
  );
};
