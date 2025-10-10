import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { persistor } from "../store/store";

export const Navbar = () => {
  const watchListCount = useSelector(
    (state) => state.watchList.watchListMovies.length
  );

  const loginName = useSelector((state) => state.auth.user);

  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
    persistor.purge();
  };


  
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md">
      <div
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/home")}
      >
        MovieFinder
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          <li>About</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          <li>Contact</li>
        </NavLink>
      </ul>

      <div className="flex items-center justify-between gap-3">
        <button
          className="bg-yellow-400 text-gray-800 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition-colors cursor-pointer"
          onClick={() => navigate("watchlist")}
        >
          {`Watchlist ${watchListCount}`}
        </button>

        {loginName?.fullname && (
          <button
            className="bg-yellow-400 text-gray-800 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition-colors cursor-pointer"
            onClick={() => logoutHandler()}
          >
            {`Logout ${loginName?.fullname}`}
          </button>
        )}
        
      </div>
    </div>
  );
};
