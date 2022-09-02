import React  from "react";
import Moment from "react-moment";

export const ResultCard = ({ movie }) => {
   

  return (
    <div className="grid grid-cols-12 gap-2  border-t border-gray-500">
      <div className="col-span-1 p-2">
        {movie.poster_path ? (
          <img
            className="max-w-100"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="" />
        )}
      </div>

      <div className="col-span-11 justify-start flex items-center">
        <div className="">
          <h3 className="">{movie.title}</h3>
          <h4 className="text-sm text-gray-400">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
          <p className="text-sm text-gray-400 ">{movie.original_title}</p>
        </div>
 
      </div>
    </div>
  );
};
