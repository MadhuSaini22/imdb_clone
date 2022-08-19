import React from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";
import "../index.css";

const Header = () => {
  return (
    <div className="headerLeft ">
      <div className="flex justify-center items-center ">
        <div className="flex ">
          <Link to="/" className="">
            <img
              className="mt-2 h-8"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt="img"
            />
          </Link>

          <Link to="/">
            <div className="menuContainer group hover:bg-slate-800  m-2 py-2 px-3 rounded align-middle justify-center flex">
              <MenuIcon className=" group-hover:opacity-100  opacity-50 w-6 h-5 mr-1 " />
              <span className="text-sm font-semibold ">Menu</span>
            </div>
          </Link>
        </div>

        <div className="flex-1  relative">
          <input
            type="text"
            className="text-sm focus:border-yellow-400 focus:border-2 px-2 placeholder:text-slate-500 text-black flex-1 w-full rounded h-8 outline-none border bg-right  m-1"
            placeholder="Search IMDB"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 absolute right-4 text-slate-500 top-1/4 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="">
          <Link to="/">
            <div className="menuContainer  hover:bg-slate-800  m-2 py-2 px-3 rounded align-middle justify-center flex">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                class="ipc-icon ipc-icon--watchlist ipc-button__icon ipc-button__icon--pre"
                id="iconContext-watchlist"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path
                  d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
                  fill="currentColor"
                ></path>
              </svg>
              {/* <BookmarkIcon className=" hover:opacity-100  opacity-50 w-6 h-5 mr-1 " /> */}
              <span className="text-sm font-semibold mt-1">Watchlist</span>
            </div>
          </Link>
        </div>
        <Link to="/signIn">
          <div className="menuContainer  hover:bg-slate-800  m-2 py-2 px-4 rounded align-middle justify-center flex">
            <span className="text-sm font-semibold ">Sign In</span>
          </div>
        </Link>

        {/* <Link to="/movies/popular">
        <span className="text-white w-32 justify-center grid text-base font-bold">
          Popular
        </span>
      </Link>
      <Link to="/movies/top_rated">
        <span className="text-white w-32 justify-center grid text-base font-bold">
          Top Rated
        </span>
      </Link>
      <Link to="/movies/upcoming">
        <span className="text-white w-32 justify-center grid text-base font-bold">
          Upcoming
        </span>
      </Link> */}
      </div>
    </div>
  );
};

export default Header;
