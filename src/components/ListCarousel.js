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
      <div className="container">
        <div className=" ">
          <h2 className="font-bold text-3xl my-3 text-yellow-400">
            Featured Popular
          </h2>

          <Swiper
            slidesPerView={6}
            spaceBetween={20}
            slidesPerGroup={6}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Autoplay, EffectFade, Navigation]}
            className="mySwiper  "
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {popularMovies.map((movie) => (
              <SwiperSlide  key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <div className="flex hover:opacity-90 flex-col">
                    <div className="">
                      <img
                        className=""
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="img"
                      />
                    </div>

                    <div className="">
                      <div className="hover:underline text-large">
                        {movie ? movie.original_title : ""}
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-10">
          <h2 className="font-bold text-3xl my-3 text-yellow-400">
            Featured Top Rated
          </h2>

          <Swiper
            slidesPerView={6}
            spaceBetween={20}
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
              <SwiperSlide  key={movie.id}>
                <TopRated movie={movie}/>
                {/* <Card movie={movie} /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ListCarousel;
