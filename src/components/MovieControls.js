import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

export const MovieControls = ({ type, movie }) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);
  

  return (
    <div className="">
      {type === "watchlist" && (
        <>
          <button
            className="absolute left-0 top-0 "
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            {/* <i className="fa-fw fa fa-times"></i> */}

            <svg
              className="ipc-watchlist-ribbon__bg h-11 w-10 mt-1 absolute justify-center flex overflow-hidden    top-0 left-0 text-3xl "
              width="27px"
              height="34px"
              viewBox="0 0 24 34"
              xmlns="http://www.w3.org/2000/svg"
              role="presentation"
            >
              <polygon
                className="ipc-watchlist-ribbon__bg-ribbon relative w-full h-auto "
                fill="rgb(245,197,24)"
                points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
              ></polygon>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#000000"
                width="20px"
                height="20px"
               
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"  
                />
              </svg>

              <polygon
                className="ipc-watchlist-ribbon__bg-shadow bg-black/30 text-white"
                points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                style={{ opacity: "0.2" }}
              ></polygon>
            </svg>
          </button>
        </>
      )}
    </div>
  );
};
