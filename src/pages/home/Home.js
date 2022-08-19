import React, { useEffect, useState } from "react";
// import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
// import MovieList from "../../components/movieList/MovieList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { ChevronRightIcon } from "@heroicons/react/outline";
import ListCarousel from "../../components/ListCarousel";

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
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setUpcomingMovies(data.results.slice(0, 3)));
  }, []);

  return (
    <>
      <div className="headContainer">
        <div className="posterContainer flex m-2">
          <div className="poster w-poster">
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
                    <div className="posterImage hover:opacity-90 opacity-100">
                      <img
                        className="m-auto block "
                        src={`https://image.tmdb.org/t/p/original${
                          movie ? movie.backdrop_path : ""
                        }`}
                        alt="img"
                      />
                    </div>

                    <div className="posterImage__overlay absolute p-20 bottom-0 h-4/6 flex flex-col justify-items-end items-start  transition-opacity grad">
                      <div className="posterImage__title text-4xl mb-2">
                        {movie ? movie.original_title : ""}
                      </div>
                      <div className="posterImage__runtime text-sm mb-2">
                        {movie ? movie.release_date : ""}
                        <span className="posterImage__rating text-sm mb-2">
                          {movie ? movie.vote_average : ""}⭐
                        </span>
                      </div>
                      <div className="posterImage__description text-xs mb-2">
                        {movie ? movie.overview : ""}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="posterSecond  m-2 ">
            <p className="mx-2 text-yellow-400 mb-3 font-bold text-title-main">
              Up next
            </p>
            <div className="bg-dark-gr bg-gradient-to-b1 from-gray-9001 w-upcoming-width p-3 ">
              {upcomingMovies.map((movie) => (
                <div className="flex ">
                  <div className="m-1 mb-3 w-24">
                    <img
                      className=""
                      src={`https://image.tmdb.org/t/p/original${
                        movie ? movie.poster_path : ""
                      }`}
                      alt="img"
                    />
                  </div>

                  <div className="posterDesc cursor-pointer group max-w-xs  flex ml-2 p-2 flex-col ">
                    <svg
                      width="30"
                      height="30"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ipc-icon m-1 group-hover:text-yellow-400 cursor-pointer ipc-icon--play-circle-outline-large-inline ipc-icon--inline sc-4cf1171c-14 bseoUA editorial-play-icon"
                      id="iconContext-play-circle-outline-large-inline"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                      <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                    </svg>
                    <div>{movie ? movie.original_title : ""}</div>
                    <div> {movie ? movie.release_date : ""}</div>

                    <div className="desc truncate font-normal text-sm leading-5 text-stone-400  ">
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
              <span className="ml-2">Browse trailers</span>
              <ChevronRightIcon className="w-5" />
            </Link>
          </div>
        </div>
        {/* <MovieList /> */}
        <ListCarousel />
      </div>
    </>
  );
};

export default Home;
