import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="bg-dark-lightBlack justify-center flex h-full w-full myclass fixed z-[2] inset-0">
      <div className="w-2/4 mt-5 ">
        <div className="flex mt-2 justify-between">
          <div className="  grid  justify-center ">
            <Link to="/ ">
              <img
                className=" h-12"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                alt="img"
              /> 
            </Link>
          </div>
          <Link to="/ ">
            <div className="bg-yellow-400 hover:opacity-90 rounded-full h-max p-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="ipc-icon ipc-icon--clear  "
                id="iconContext-clear"
                viewBox="0 0 24 24"
                fill="black"
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex justify-between mt-11">
          <div className="flex flex-col ">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="ipc-icon ipc-icon--movie mx-3"
                id="iconContext-movie"
                viewBox="0 0 24 24"
                fill="#FACC15"
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path>
              </svg>
              <p className="font-bold text-2xl">Movies</p>
            </div>
            <div className="flex flex-col mt-1">
              <div className="ml-12 mt-3">
                <Link className="hover:underline" to="/movies/popular">
                  <span className="text-white  ">Most Popular Movies</span>
                </Link>
              </div>
              <div className="ml-12 mt-3">
                <Link className="hover:underline" to="/movies/top_rated">
                  <span className="text-white  ">Top Rated Movies</span>
                </Link>
              </div>
              <div className="ml-12 mt-3">
                <Link className="hover:underline" to="/movies/upcoming">
                  <span className="text-white  ">Upcoming Interesting</span>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="ipc-icon ipc-icon--video-library mx-3"
                id="iconContext-video-library"
                viewBox="0 0 24 24"
                fill="#FACC15"
                role="presentation"
              >
                <path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z"></path>
              </svg>
              <p className="font-bold text-2xl">Watch</p>
            </div>
            <div className="flex flex-col mt-1">
              <div className="hover:underline ml-12 mt-3">
                <a href="https://www.imdb.com/">Explore IMDb</a>
              </div>

              <div className="hover:underline ml-12 mt-3">
                <a href="https://www.imdb.com/podcasts/?ref_=nv_pod">
                  Explore IMDb Podcasts
                </a>
              </div>
              <div className="hover:underline  ml-12 mt-3">
                <Link to="/signInCover">Sign In</Link>
              </div>
            </div>
          </div>

          <div>
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="ipc-icon ipc-icon--television mx-3"
                id="iconContext-television"
                viewBox="0 0 24 24"
                fill="#FACC15 "
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"></path>
              </svg>
              <p className="font-bold text-2xl">Watch</p>
            </div>
            <div className="flex flex-col mt-1">
              <div className="hover:underline ml-12 mt-3">
                <a href="https://www.imdb.com/">Explore IMDb</a>
              </div>

              <div className="hover:underline ml-12 mt-3">
                <a href="https://www.imdb.com/podcasts/?ref_=nv_pod">
                  Explore IMDb Podcasts
                </a>
              </div>
              <div className="hover:underline  ml-12 mt-3">
                <Link to="/signInCover">Sign In</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
