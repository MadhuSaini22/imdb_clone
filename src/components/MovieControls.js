import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="">
      {type === "watchlist" && (
        <>
          <button className="" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className=""
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className=""
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};