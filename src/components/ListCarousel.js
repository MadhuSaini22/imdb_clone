import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Heading from "./Heading";
import Slider from "./Slider";
import { IMAGE_END, TMDB_KEY } from "../Config";

const ListCarousel = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&${IMAGE_END}`
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  useEffect(() => {
    fetch(
      ` https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&${IMAGE_END}`
    )
      .then((res) => res.json())
      .then((data) => setTopMovies(data.results));
  }, []);

  return (
    <>
      <div className="container ">
        {/* Popular Movies Carousel */}
        <div className=" sm:w-full p-3">
          <Heading heading=" Featured Popular" />
          <Slider movies={popularMovies} type="popular" />
        </div>
        {/* Top Movies Carousel */}
        <div className="mt-10  p-3 ">
          <Heading heading="Featured Top Rated" />
          <Slider movies={topMovies} />
        </div>
      </div>
    </>
  );
};

export default ListCarousel;
