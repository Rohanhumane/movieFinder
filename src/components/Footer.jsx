// Footer.jsx
import React from "react";
import { RecentViewMovie } from "./RecentViewMovie";

const date = new Date();
export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <RecentViewMovie />
        <p className="text-center text-gray-400 text-sm mt-4">
          {`© 1990–${date.getFullYear()} by MovieFinder.com, Inc.`}
        </p>
      </div>
    </footer>
  );
};
