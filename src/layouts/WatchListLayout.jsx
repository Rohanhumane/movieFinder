import React from "react";
import { Outlet } from "react-router-dom";

export const WatchListLayout = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your WatchList</h1>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Your Watchlist is the place to track the titles you want to watch. You
        can sort your Watchlist by the IMDb rating or popularity score and
        arrange your titles in the order you want to see them.
      </p>

      <Outlet />
    </div>
  );
};
