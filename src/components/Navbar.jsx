import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { persistor } from "../store/store";
import { Search } from "./Search";
import unfill from "../assets/navbar/unfill.png";
import fill from "../assets/navbar/fill.png";
import logo from "../assets/navbar/logo.png";

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
    <header className="w-full bg-gray-900 text-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <img src={logo} alt="logo" className="w-10 h-10 rounded-sm" />
          <span className="text-xl font-semibold tracking-wide">
            MovieFinder
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 ml-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "hover:text-yellow-300"
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex-1">
          <Search />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/watchlist")}
            className="relative flex items-center gap-1 sm:gap-2 bg-yellow-400 text-gray-900 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-semibold hover:bg-yellow-300 transition-all duration-200"
          >
            <img
              className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
              src={watchListCount <= 0 ? unfill : fill}
              alt="watchlist icon"
            />

            <span className="text-xs sm:text-sm whitespace-nowrap">
              Watchlist
            </span>

            <span
              className="ml-1 inline-flex items-center justify-center min-w-[1.25rem] sm:min-w-[1.5rem] h-[1.25rem] sm:h-[1.5rem] 
               text-[10px] sm:text-xs font-semibold bg-white text-gray-900 rounded-full 
               shrink-0 leading-none"
            >
              {watchListCount}
            </span>
          </button>

          {loginName?.fullname ? (
            <button
              onClick={logoutHandler}
              className="bg-transparent border border-yellow-400 text-yellow-400 px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Logout {loginName.fullname.split(" ")[0]}
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-transparent border border-white text-white px-3 py-2 rounded-md hover:bg-white hover:text-gray-900 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
