import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import { Link } from "react-router-dom";
export const TopRated = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);
  console.log("Stiredmovie", storedMovie);
  console.log("storedMoviwList", storedMovieWatched);
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  return (
    <div>
      <Link to={`/movie/${movie.id}`} className="relative">
        <div className=" hover:opacity-90 flex-col inline-block transition duration-300 ease-in-out relative rounded overflow-hidden cursor-pointer border-white/50 border min-w-min h-72">
          <div className="relative">
            <img
              className=" min-h-max"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="img"
            />
            {/* { console.log(watchlistDisabled)} */}
            <button 
            className="myz"
              onClick={() => {
                alert("clicked");
                addMovieToWatchlist(movie);
              }}
            >
              <svg
                className="ipc-watchlist-ribbon__bg h-20 w-20 absolute overflow-hidden   top-0 left-0 text-3xl text-red-500 "
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

          <div className="absolute p-3 bottom-0 h-40 flex flex-col w-10/12 justify-end opacity-0 hover:opacity-100">
            <div className="card__title text-base font-black mb-1.5">
              {movie.original_title}
            </div>
            <div className=" text-xs m-1">
              {movie.release_date}
              <span className="float-right">
                {movie.vote_average} <i className="fas fa-star"></i>
              </span>
            </div>
            <div className="truncate">
              {movie.overview.slice(0, 118) + "..."}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
