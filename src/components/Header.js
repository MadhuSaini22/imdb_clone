import React, { useState, useContext } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import "../index.css";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalState";
import { ResultCard } from "./ResultCard";

const Header = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { watchlist } = useContext(GlobalContext);
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results.slice(0, 8));
        } else {
          setResults([]);
        }
      });
  };

  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();
  const history = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history("/signIn");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="flex px-2 justify-center items-center ">
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
      {/* {console.log(JSON.stringify(error))} */}
      {error && alert(JSON.stringify(error))}
      {/* <div>{currentUser ? currentUser.email : ""}</div>
        <button onClick={handleLogout}>logout</button> */}
      <div className="flex-1  relative">
        <div>
          <input
            type="text"
            className="text-sm focus:border-yellow-400 focus:border-2 px-2 placeholder:text-slate-500 text-black flex-1 w-full rounded h-8 outline-none border bg-right  m-1"
            placeholder="Search IMDB"
            value={query}
            onChange={onChange}
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
        <div className="container z-10 m-auto absolute ">
          <div className="bg-dark-lightBlack">
            {results
              ? results.length > 0 && (
                  <div className="">
                    {results.map((movie) => (
                      <div key={movie.id}>
                        <ResultCard movie={movie} />
                      </div>
                    ))}
                  </div>
                )
              : ""}
          </div>
        </div>
      </div>
      {/* <svg class="ipc-watchlist-ribbon__bg" width="24px" height="34px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation"><polygon class="ipc-watchlist-ribbon__bg-ribbon" fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon class="ipc-watchlist-ribbon__bg-hover" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon class="ipc-watchlist-ribbon__bg-shadow" points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon></svg> */}

      {/* <div className="add-content">
          <div className="input-wrapper text-black">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results
            ? results.length > 0 && (
                <ul className="results">
                  {results.map((movie) => (
                    <li key={movie.id}>
                      <ResultCard movie={movie} />
                    </li>
                  ))}
                </ul>
              )
            : ""}
        </div> */}

      <div className="">
        <Link  to={currentUser? "/watchlist" :"/signInCover" }>
          <div className=" hover:bg-slate-800  m-2 py-2 px-3 rounded align-middle justify-center flex">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className="ipc-icon ipc-icon--watchlist ipc-button__icon ipc-button__icon--pre"
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
            <div>
              <span className="text-sm font-semibold mt-1">
                Watchlist
                {currentUser ? (
                  <span className="m-1 bg-yellow-500 px-2 text-black rounded-xl">
                    {watchlist.length}
                  </span>
                ) : (
                  ""
                )}
              </span>
            </div>           
          </div>
        </Link>
      </div>
      <Link to={`${currentUser ? "/signIn" : "/signInCover"}`}>
        <div className="menuContainer  hover:bg-slate-800  m-2 py-2 px-4 rounded align-middle justify-center flex">
          {currentUser ? (
            <span className="text-sm font-semibold " onClick={handleLogout}>
              Log Out
            </span>
          ) : (
            <span className="text-sm font-semibold ">Sign In </span>
          )}
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
