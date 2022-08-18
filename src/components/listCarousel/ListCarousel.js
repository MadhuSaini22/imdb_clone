import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Card from "../card/Card";

const ListCarousel = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

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
      <div className="headContainer">
        <div className="w-100 ">
          <h2 className="font-bold text-3xl my-3 text-yellow-400">
            Featured Popular
          </h2>

          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={5}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Autoplay, EffectFade, Navigation]}
            className="mySwiper  hover:opacity-95"
            loop={true}
            
            
          >
            {popularMovies.map((movie) => (
              <SwiperSlide>
                <Link to={`/movie/${movie.id}`}>
                  <div className="flex flex-col">
                    <div className="posterImage ">
                      <img
                        className="cards__img"
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="img"
                      />
                    </div>

                    <div className="">
                      <div className="text-large">
                        {movie ? movie.original_title : ""}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-100 mt-44 ">
          <h2 className="font-bold text-3xl my-3 text-yellow-400">
            Featured Top Rated
          </h2>

          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            slidesPerGroup={6}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Autoplay, EffectFade, Navigation]}
            className="mySwiper  hover:opacity-95"
            loop={true}
           
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
          >
            {topMovies.map((movie) => (
              <SwiperSlide>
                <Card movie={movie} />
              </SwiperSlide>
            ))}
            {/* {popularMovies.map((movie) => (
              <SwiperSlide>
                <Link to={`/movie/${movie.id}`}>
                  <div className="flex flex-col">
                    <div className="posterImage ">
                      <img
                        src={`https://image.tmdb.org/t/p/original${
                          movie ? movie.backdrop_path : ""
                        }`}
                        className="w-96"
                        alt="img"
                      />
                    </div>

                    <div className="">
                      <div className="text-large">
                        {movie ? movie.original_title : ""}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))} */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ListCarousel;
