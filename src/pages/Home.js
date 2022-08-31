import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { ChevronRightIcon } from "@heroicons/react/outline";
import ListCarousel from "../components/ListCarousel";
import { AddWatch } from "../components/watchListLabels/AddWatch";

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
      <div className="container ">
        <div className="w-full ">
          <div className="">
            <div className="grid grid-cols-12 gap-1 py-2">
              <div className="col-span-8">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter:true
                  }}
                  navigation={true}
                  modules={[Pagination, EffectFade, Autoplay, Navigation]}
                  className="mySwiper hover:opacity-95"
                >
                  {popularMovies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                      <AddWatch key={movie.id} movie={movie} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="col-span-4 mx-2 ">
                <p className=" text-yellow-400 mb-4 font-bold text-title-main">
                  Up next
                </p>
                <div className=" bg-dark-gr bg-gradient-to-b1 from-gray-9001 w-upcoming-width p-3 ">
                  {upcomingMovies.map((movie) => (
                    <div key={movie.id} className="grid grid-cols-4 gap-2 ">
                      <div className="col-span-1 ">
                        <img
                          className="p-1 pb-3 h-[125px]"
                          src={`https://image.tmdb.org/t/p/original${
                            movie ? movie.poster_path : ""
                          }`}
                          alt="img"
                        />
                      </div>

                      <div className="col-span-3 cursor-pointer group max-w-xs p-1  ">
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

                        <div className="truncate font-normal text-sm leading-5 text-stone-400  ">
                          {movie ? movie.overview : ""}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  to="/movies/upcoming"
                  className="flex hover:text-yellow-400  font-bold mt-2 text-xl"
                >
                  <span className="ml-2">Browse trailers</span>
                  <ChevronRightIcon className="w-5" />
                </Link>
              </div>
            </div>
            {/* <MovieList /> */}
            <ListCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
