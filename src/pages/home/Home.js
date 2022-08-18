import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { ChevronRightIcon } from "@heroicons/react/outline";
import ListCarousel from "../../components/listCarousel/ListCarousel";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setUpcomingMovies(data.results.slice(0, 5)));
  }, []);

  return (
    <>
      <div className="headContainer">
        <div className="posterContainer flex">
          <div className="poster">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
             
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              navigation={true}
              modules={[Pagination, EffectFade, Autoplay, Navigation]}
              className="mySwiper hover:opacity-95"
            >
              {popularMovies.map((movie) => (
                <SwiperSlide>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/movie/${movie.id}`}
                  >
                    <div className="posterImage">
                      <img
                        src={`https://image.tmdb.org/t/p/original${
                          movie ? movie.backdrop_path : ""
                        }`}
                        alt="img"
                      />
                    </div>

                    <div className="posterImage__overlay">
                      <div className="posterImage__title">
                        {movie ? movie.original_title : ""}
                      </div>
                      <div className="posterImage__runtime">
                        {movie ? movie.release_date : ""}
                        <span className="posterImage__rating">
                          {movie ? movie.vote_average : ""}⭐
                        </span>
                      </div>
                      <div className="posterImage__description">
                        {movie ? movie.overview : ""}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="posterSecond  m-2 w-85">
            <p className="mx-2 text-yellow-400 my-3 font-bold text-xl">
              Up Next
            </p>
            <div className="bg-gradient-to-b from-gray-900 p-4">
              {upcomingMovies.map((movie) => (
                <div className="flex ">
                  <div className="posterImg w-24 rounded">
                    <img
                      className="rounded"
                      src={`https://image.tmdb.org/t/p/original${
                        movie ? movie.backdrop_path : ""
                      }`}
                      alt="img"
                    />
                  </div>

                  <div className="posterDesc flex ml-4 p-2 flex-col">
                    <div>{movie ? movie.original_title : ""}</div>
                    <div> {movie ? movie.release_date : ""}</div>

                    <div className="desc max-w-xs">
                      {movie ? movie.overview : ""}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/movies/upcoming"
              className="flex m-1  hover:text-yellow-400  font-bold text-xl"
            >
              <span className="ml-2">
                Browse All
              </span>
              <ChevronRightIcon className="w-5" />
            </Link>
          </div>
        </div>
        {/* <MovieList /> */}
        <ListCarousel/>
      </div>
    </>
  );
};

export default Home;
