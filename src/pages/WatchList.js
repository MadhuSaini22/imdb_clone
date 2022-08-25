import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
// import Card from "./Card";
import { MovieCard } from "../components/MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="">
      <div className="">
        <h1 className="">Your Watchlist</h1>

        <span className="">
          {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
        </span>
      </div>

      {watchlist.length > 0 ? (
        <div className="">
          {watchlist.map((movie) => (
            <MovieCard movie={movie} key={movie.id} type="watchlist" />
          ))}
        </div>
      ) : (
        <h2 className="">No movies in your list! Add some!</h2>
      )}
    </div>
  );
};
