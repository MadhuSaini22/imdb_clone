import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="">
      <div className="">
        <h1 className="heding">Watched Movies</h1>

        <span className="">
          {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
        </span>
      </div>

      {watched.length > 0 ? (
        <div className="">
          {watched.map((movie) => (
            <MovieCard movie={movie} key={movie.id} type="watched" />
          ))}
        </div>
      ) : (
        <h2 className="">No movies in your list! Add some!</h2>
      )}
    </div>
  );
};
