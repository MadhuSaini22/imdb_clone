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
    <div className="max-w-container m-auto ">
      <div className="">
        <h2 className="m-10 text-3xl">
          {(type ? type : "POPULAR").toUpperCase()}
        </h2>
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
