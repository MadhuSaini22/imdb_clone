import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { IMAGE_PATH } from "../Config";

const Card = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // This is component for rendering individual card
  return (
    <>
      {isLoading ? (
        <div className="">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={4} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          className="flex justify-center items-center"
        >
          <div className="!inline-block transition duration-300 ease-in-out relative rounded overflow-hidden cursor-pointer z-0  ">
            <img
              className=" "
              src={`  ${IMAGE_PATH}/${movie.poster_path}`}
              alt="img"
            />
            <div className=" absolute p-3 bottom-0 h-72 flex flex-col w-10/12 justify-end opacity-0 hover:opacity-100">
              <div className=" text-base font-black mb-1.5">
                {movie.original_title}
              </div>
              <div className=" text-xs m-1">
                {movie.release_date}
                <span className="float-right">
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
