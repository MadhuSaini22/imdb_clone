import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_END, IMAGE_PATH } from "../Config";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `    https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&${ IMAGE_END}`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="max-w-container m-auto ">
      <div className="w-full relative flex flex-col justify-center items-center">
        <div className=" justify-center items-center w-11/12">
          <img
            className=" object-cover  justify-center items-center  w-full h-500"
            src={`  ${process.env.REACT_APP_IMAGE_PATH}/${
              currentMovieDetail ? currentMovieDetail.backdrop_path : ""
            }`}
            alt="img"
          />
        </div>
        <div className=" w-11/12 lg:w-9/12 flex justify-center items-center top-24 lg:absolute md:absolute sm:absolute">
          <div className="lg:block md:block sm:block hidden mr-8  ">
            <div>
              <img
                className="w-80 rounded-lg  "
                src={`  ${process.env.REACT_APP_IMAGE_PATH}/${
                  currentMovieDetail ? currentMovieDetail.poster_path : ""
                }`}
                alt="img"
              />
            </div>
          </div>
          <div className=" text-white flex flex-col justify-between  ">
            <div className="lg:text-md text-sm ">
              <div className="font-semibold lg:text-4xl md:text-3xl sm:text-3xl text-2xl">
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
              <div className="mt-5 flex lg:flex-row md:flex-row  sm:flex-row  flex-col">
                {currentMovieDetail && currentMovieDetail.genres
                  ? currentMovieDetail.genres.map((genre) => (
                      <div key={genre.id}>
                        <div className="mt-8">
                          <span
                            className="p-3  lg:mt-0  m-5 border-2 border-white rounded-3xl mr-1"
                            id={genre.id}
                          >
                            {genre.name}
                          </span>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
            <div className="mt-7 text-sm  flex-1">
              <div className=" lg:text-2xl md:text-2xl sm:text-2xl text-xl font-semibold flex relative items-center">
                Synopsis
              </div>
              <div className="line-clamp-2">
                {currentMovieDetail ? currentMovieDetail.overview : ""}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center   lg:flex-row flex-col  mt-5">
          <div className="lg:text-3xl text-2xl mt-2">Useful Links</div>
          <div className="flex  flex-row  ">
            <div className="justify-center items-center  mt-2 flex">
              {currentMovieDetail && currentMovieDetail.homepage && (
                <a
                  href={currentMovieDetail.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-4 "
                >
                  <p>
                    <span className="  bg-red-600 flex justify-center items-middle py-3 px-4 rounded-2xl cursor-pointer w-40 text-black font-bold ">
                      Homepage <i className="ml-3 "></i>
                    </span>
                  </p>
                </a>
              )}
            </div>
            <div className="justify-center  mt-2 items-center flex">
              {currentMovieDetail && currentMovieDetail.imdb_id && (
                <a
                  href={
                    "https://www.imdb.com/title/" + currentMovieDetail.imdb_id
                  }
                  target="_blank"
                  style={{ textDecoration: "none" }}
                  rel="noreferrer"
                  className="ml-4"
                >
                  <p>
                    <span className="bg-yellow-400 flex justify-center items-middle py-3 px-4 rounded-2xl cursor-pointer w-40 text-black font-bold">
                      IMDb<i className="newTab fas fa-external-link-alt"></i>
                    </span>
                  </p>
                </a>
              )}
            </div>{" "}
          </div>
        </div>
        <div className=" lg:text-3xl text-2xl mt-5">Production companies</div>
        <div className=" w-10/12 flex justify-center items-end mb-5">
          {currentMovieDetail &&
            currentMovieDetail.production_companies &&
            currentMovieDetail.production_companies.map((company) => (
              <div key={company.logo_path}>
                {company.logo_path && (
                  <span className="flex flex-col items-center justify-center">
                    <img
                      className="w-52 m-6"
                      src= {
                        `${IMAGE_PATH }` +
                        company.logo_path
                      }
                       
                      alt="img"
                    />
                    <span>{company.name}</span>
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
