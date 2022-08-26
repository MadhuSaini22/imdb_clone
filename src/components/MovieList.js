import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };
  return (
    <div className="container">
      <div className="">
        <div className="flex text-black">
          <div>
            <h2 className="font-bold text-3xl py-5 text-yellow-400">
              {(type ? type : "POPULAR").toUpperCase()}
            </h2>
          </div >
          <div className="py-5 pl-5 ">
            <span className="text-white py-5">Filter by </span>
            <select
              className="rounded border px-2 w-48 py-1 outline-none border-gray-300  "
              name="cars"
              id="cars"
            >
              <option value="List Order">List Order</option>
              <option value="Vote_count">Vote_count</option>
              <option value="alphabatically">alphabatically</option>
              <option value="vote_average">vote_average</option>
              <option value="vote_average">vote_average</option>
              <option value="popularity">popularity</option>
            </select>
          </div>
        </div>
        <div className="">
          {movieList.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
