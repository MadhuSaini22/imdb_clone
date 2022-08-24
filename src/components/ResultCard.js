import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../contexts/GlobalState";

export const ResultCard = ({ movie }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="">
      <div className="">
        {movie.poster_path ? (
          <img className=" min-h-max h-72"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="" />
        )}
      </div>

      <div className="">
        <div className="">
          <h3 className="">{movie.title}</h3>
          <h4 className="">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        </div>

        <div className=" ">
          <button
            className="btn  p-3 bg-red-600 text-white"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn p-3 bg-gray-600 text-white"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
