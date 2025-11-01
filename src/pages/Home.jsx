import React from "react";
import { Movie } from "../components/Movie";

export const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4">
        <Movie  />
      </div>
    </main>
  );
};
