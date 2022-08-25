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
      <Link to={`/movie/${movie.id}`} className="relative">
        <div className=" hover:opacity-90  opacity-100">
          <img
            className="m-auto block  "
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.backdrop_path : ""
            }`}
            alt="img"
          />

          <button
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            <svg
              className="ipc-watchlist-ribbon__bg h-20 w-20 absolute overflow-hidden    top-0 left-0 text-3xl text-red-500 "
              width="24px"
              height="34px"
              viewBox="0 0 24 34"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
            >
              <polygon
                className="ipc-watchlist-ribbon__bg-ribbon relative w-full h-auto "
                fill="#000000"
                points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
              ></polygon>
              <polygon
                className="ipc-watchlist-ribbon__bg-hover  text-white bg-white/30  "
                points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
              ></polygon>
              <polygon
                className="ipc-watchlist-ribbon__bg-shadow bg-black/30 text-white"
                points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
              ></polygon>
            </svg>
          </button>
        </div>
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
