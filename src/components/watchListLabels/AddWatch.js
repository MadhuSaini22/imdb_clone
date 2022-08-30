import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import { Link } from "react-router-dom";
export const AddWatch = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  return (
    <div>
      <div className="relative group ">
        <Link to={`/movie/${movie.id}`}>
          <img
            className="m-auto block group-hover:opacity-90"
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.backdrop_path : ""
            }`}
            alt="img"
          />
        </Link>
        <button
          disabled={watchlistDisabled}
          onClick={() => addMovieToWatchlist(movie)}
          className="z-[9]"
        >
          {watchlistDisabled === false ? (
            <svg
              className="ipc-watchlist-ribbon__bg h-12 w-11 absolute overflow-hidden    top-0 left-0 text-3xl  "
              width="27px"
              height="34px"
              viewBox="0 0 24 34"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
            >
              <polygon
                className="ipc-watchlist-ribbon__bg-ribbon relative w-full h-auto "
                fill="black"
                points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                style={{ opacity: "0.7" }}
              ></polygon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="ipc-icon ipc-icon--add ipc-icon--inline"
                viewBox="0 0 24 24"
                fill="#ffffff"
                style={{ fontWidth: "15px" }}
                role="presentation"
              >
                <path
                  className="w-5"
                  d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                ></path>
              </svg>

              <polygon
                className="ipc-watchlist-ribbon__bg-shadow bg-black/30 text-white"
                points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                style={{ opacity: "0.7" }}
              ></polygon>
            </svg>
          ) : (
            <svg
              className="ipc-watchlist-ribbon__bg h-12 w-11 absolute overflow-hidden    top-0 left-0 text-3xl "
              width="27px"
              height="34px"
              viewBox="0 0 24 34"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
            >
              <polygon
                className="ipc-watchlist-ribbon__bg-ribbon relative w-full h-auto "
                fill="rgb(245,197,24)"
                points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
              ></polygon>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="30"
                class="ipc-icon ipc-icon--done ipc-icon--inline"
                viewBox="0 0 24 24"
                fill="#000000"
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M9 16.2l-3.5-3.5a.984.984 0 0 0-1.4 0 .984.984 0 0 0 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7a.984.984 0 0 0 0-1.4.984.984 0 0 0-1.4 0L9 16.2z"></path>
              </svg>
              <polygon
                className="ipc-watchlist-ribbon__bg-shadow bg-black/30 text-white"
                points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                style={{ opacity: "0.2" }}
              ></polygon>
            </svg>
          )}
        </button>
      </div>
      <Link to={`/movie/${movie.id}`}>
      <div className=" absolute p-20 bottom-0 h-4/6 flex flex-col justify-items-end items-start  transition-opacity grad">
        <div className=" text-4xl mb-2">
          {movie ? movie.original_title : ""}
        </div>
        <div className=" text-sm mb-2">
          {movie ? movie.release_date : ""}
          <span className=" text-sm mb-2">
            {movie ? movie.vote_average : ""}⭐
          </span>
        </div>
        <div className=" text-xs mb-2">{movie ? movie.overview : ""}</div>
      </div>
      </Link>
    </div>
  );
};
