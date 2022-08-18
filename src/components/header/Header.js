import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MenuIcon, BookmarkIcon } from "@heroicons/react/outline";
import "../../index.css";

const Header = () => {
  return (
    <div className="headerLeft justify-center items-center flex">
      <Link to="/">
        <img
          className="py-1 h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          alt="img"
        />
      </Link>

      <Link to="/">
        <div className="menuContainer  hover:bg-slate-800  m-2 py-2 px-3 rounded align-middle justify-center flex">
          <MenuIcon className=" hover:opacity-100  opacity-50 w-6 h-5 mr-1 " />
          <span className="text-sm font-semibold ">Menu</span>
        </div>
      </Link>

      <input
        type="text"
        className="text-sm focus:border-yellow-400 focus:border-2 text-black flex-1 w-full rounded h-8 outline-none border-slate-300 border p-1  bg-no-repeat bg-right  m-1"
        placeholder="Search IMDB"
      />
      <Link to="/">
        <div className="menuContainer  hover:bg-slate-800  m-2 py-2 px-3 rounded align-middle justify-center flex">
          <BookmarkIcon className=" hover:opacity-100  opacity-50 w-6 h-5 mr-1 " />
          <span className="text-sm font-semibold ">Watchlist</span>
        </div>
      </Link>

      <Link to="/">
        <div className="menuContainer  hover:bg-slate-800  m-2 py-2 px-3 rounded align-middle justify-center flex">
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
  );
};

export default Header;
