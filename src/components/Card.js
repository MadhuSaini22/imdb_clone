import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards  !inline-block transition duration-300 ease-in-out relative rounded overflow-hidden ml-2 cursor-pointer border-white/50 border min-w-min z-0 h-72">
            <img
              className="cards__img min-h-max h-72"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="img"
            />
            <div className="cards__overlay absolute p-3 bottom-0 h-72 flex flex-col w-10/12 justify-end opacity-0 hover:opacity-100">
              <div className="card__title text-base font-black mb-1.5">
                {movie.original_title}
              </div>
              <div className="card__runtime text-xs m-1">
                {movie.release_date}
                <span className="card__rating float-right">
                  {movie.vote_average} <i className="fas fa-star"></i>{" "}
                </span>
              </div>
              <div className="truncate">
                {movie.overview.slice(0, 118) + "..."}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
export default Card;
