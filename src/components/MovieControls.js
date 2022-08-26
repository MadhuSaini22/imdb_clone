import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

export const MovieControls = ({ type, movie }) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);

  return (
    <div className="">
      {type === "watchlist" && (
        <>
          <button
            className="absolute left-0 top-0"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
