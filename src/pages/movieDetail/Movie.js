import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="max-w-container m-auto ">
      <div className="w-full relative flex flex-col items-center">
        <div className=" w-4/5">
          <img
            className=" object-cover  w-full h-500"
            src={`https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.backdrop_path : ""
            }`}
            alt="img"
          />
        </div>
        <div className=" items-center w-9/12 flex relative bottom-64">
          <div className=" mr-8">
            <div>
              <img
                className=" w-80 rounded-lg shadow-details"
                src={`https://image.tmdb.org/t/p/original${
                  currentMovieDetail ? currentMovieDetail.poster_path : ""
                }`}
                alt="img"
              />
            </div>
          </div>
          <div className=" text-white flex flex-col justify-between h-auto">
            <div className=" mb-3">
              <div className="font-semibold text-5xl">
                {currentMovieDetail ? currentMovieDetail.original_title : ""}
              </div>
              <div className="">
                {currentMovieDetail ? currentMovieDetail.tagline : ""}
              </div>
              <div className="">
                {currentMovieDetail ? currentMovieDetail.vote_average : ""}
                <i className="fas fa-star" />
                <span className=" ml-5">
                  {currentMovieDetail
                    ? "(" + currentMovieDetail.vote_count + ") votes"
                    : ""}
                </span>
              </div>
              <div className="">
                {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
              </div>
              <div className="">
                {currentMovieDetail
                  ? "Release date: " + currentMovieDetail.release_date
                  : ""}
              </div>
              <div className="my-7">
                {currentMovieDetail && currentMovieDetail.genres
                  ? currentMovieDetail.genres.map((genre) => (
                      <>
                        <span className=" p-3 border-2 border-white rounded-3xl mr-1" id={genre.id}>
                          {genre.name}
                        </span>
                      </>
                    ))
                  : ""}
              </div>
            </div>
            <div className="   my-5 flex-1">
              <div className="text-2xl mb-5 font-semibold flex relative items-center">Synopsis</div>
              <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
            </div>
          </div>
        </div>
        <div className="relative bottom-32 flex justify-between w-9/12">
          <div className="text-3xl">Useful Links</div>
          {currentMovieDetail && currentMovieDetail.homepage && (
            <a
              href={currentMovieDetail.homepage}
              target="_blank"
              rel="noreferrer"
            >
              <p>
                <span className="  bg-red-600 flex justify-center items-middle py-3 px-4 rounded-2xl cursor-pointer w-40 text-black font-bold ">
                  Homepage <i className="ml-3 "></i>
                </span>
              </p>
            </a>
          )}
          {currentMovieDetail && currentMovieDetail.imdb_id && (
            <a
              href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              <p>
                <span className="bg-yellow-400 flex justify-center items-middle py-3 px-4 rounded-2xl cursor-pointer w-40 text-black font-bold">
                  IMDb<i className="newTab fas fa-external-link-alt"></i>
                </span>
              </p>
            </a>
          )}
        </div>
        <div className=" text-3xl">Production companies</div>
        <div className=" w-10/12 flex justify-center items-end mb-5">
          {currentMovieDetail &&
            currentMovieDetail.production_companies &&
            currentMovieDetail.production_companies.map((company) => (
              <>
                {company.logo_path && (
                  <span className="flex flex-col items-center justify-center">
                    <img
                      className="w-52 m-6"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        company.logo_path
                      }
                      alt="img"
                    />
                    <span>{company.name}</span>
                  </span>
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
