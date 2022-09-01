import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TopRated } from "./watchListLabels/TopRated";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Heading from "./Heading";
import Slider from "./Slider";

const ListCarousel = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const loop = true;

  function StopLoop() {
    loop = false;
  }

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setTopMovies(data.results));
  }, []);

  return (
    <>
      <div className="container ">
        <div className=" sm:w-full p-3">
          <Heading heading=" Featured Popular" />
          <Slider movies={popularMovies} type="popular" />
        </div>

        <div className="mt-10  p-3 ">
          <Heading heading="Featured Top Rated" />
          <Slider movies={topMovies} />
        </div>
      </div>
    </>
  );
};

export default ListCarousel;
