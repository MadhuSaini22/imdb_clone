import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { MovieCard } from "../components/MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="min-h-screen justify-center flex">
      

      {watchlist.length > 0 ? (
       

        <div className="container justify-center font-coverFont flex">
          <div className="max-w-5xl">
            <div className="grid  grid-cols-5 gap-1 ">
              <div className="bg-gray-100 col-span-3">
                <h1
                  className="text-gray-800  pl-5 text-2xl  pt-3"
                >
                  Your Watchlist
                </h1>
                <div className="pl-5 text-sm flex text-gray-400 font-coverFont font-bold pb-5">
                  <div className="max-w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      style={{ width: "13px" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <div className="  items-center align-middle flex">
                    Private
                  </div>
                </div>
                <div className=" border-t border-slate-300"></div>
                <div className="text-gray-600 flex py-4 text-sm justify-between pl-5 pr-4">
                  <div>
                    <span className="">
                      {watchlist.length}

                      {watchlist.length === 1 ? " Tile" : " Tiles"}
                    </span>
                  </div>

                  <div>
                    <div>
                      <span>Sort by </span>
                      <select
                        className="rounded border px-2 w-48 py-1 outline-none border-gray-300  "
                        name="cars"
                        id="cars"
                      >
                        <option value="List Order">List Order</option>
                        <option value="Vote_count">Vote_count</option>
                        <option value="alphabatically">alphabatically</option>
                        <option value="vote_average">vote_average</option>
                        <option value="vote_average">vote_average</option>
                        <option value="popularity">popularity</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="border-t border-slate-300"></div>
                <div className=" bg-white py-1">
                  {watchlist.map((movie) => (
                    <div key={movie.id}>
                      <MovieCard
                        movie={movie}
                        key={movie.id}
                        type="watchlist"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className=" text-black col-span-2 px-3  bg-gray-100">
                <div className=" pt-3 font-semibold font-sans text-lg ">
                  Create a new list{" "}
                </div>
                <div className="pt-3  text-xs text-gray-600">
                  List your movie, TV & celebrity picks.
                </div>
                <div className="pt-3 text-dark-forgot  text-xs">
                  Create a new list{" "}
                </div>
                <div className="mt-4 border-t border-slate-300"></div>
                <div className=" text-dark-forgot pt-4 text-xs">
                  <span className=" text-black font-bold ">Feedback? </span>Tell
                  us what you think about this feature
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="">No movies in your list! Add some!</h2>
      )}
    </div>
  );
};
