import React from "react";
import logoImg from "../../assets/google.png";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import LabelCard from "../../components/LabelCard";

function SignInCover() {
  return (
    <div className="downContainerMain   bg-gradient-to-t from-gray-50 to-cover">
      <div className="max-w-container m-auto ">
        <div className=" w-full  justify-items-center  font-coverFont">
          <div className=" max-w-5xl flex bg-white p-5  !text-slate-800 mx-auto">
            <div className=" w-5/12  grid justify-center">
              <div className="w-full mb-4 text-center">
                <p className="text-xl mt-7 m-auto font-bold">Sign in</p>
                <Link to="/signIn">
                  <LabelCard
                    icon={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                    }
                    authName="Sign In with IMDb"
                  />
                </Link>
                <LabelCard icon={logoImg} authName="Sign In with Google" />
                <div className="flex mt-5 mb-7 justify-center text-sm">
                  <p className="flex  text-dark-forgot">
                    Show more options{" "}
                    <ChevronDownIcon className="h-5 ml-1 w-4" />
                  </p>
                </div>
                <div className=" w-56 relative ml-7 flex justify-center border-t border-black my-5">
                  <p className="top-0/4 -translate-y-2/4 text-gray-500 !mb-2 absolute bg-white text-xs  py-0 px-4">
                    or
                  </p>
                </div>
                <div className="rounded mb-4 px-3 mt-1 ">
                  <button
                    className=" bg-yellow-500 font-bold text-sm w-full rounded border outline-none cursor-pointer h-9 text-slate-900"
                    type="submit"
                  >
                    <Link to="/register">Create a New Account</Link>
                  </button>
                </div>
              </div>
              <div className="flex w-64 !text-xs text-center justify-center">
                <p className=" text-xss">
                  By signing in, you agree to IMDb's
                  <Link to="" className="cursor-pointer text-dark-forgot  ">
                    Conditions
                  </Link>
                  of Use and
                  <Link to="" className="cursor-pointer text-dark-forgot  ">
                    Privacy Policy.
                  </Link>
                </p>
              </div>
            </div>
            <div className=" w-6/12 text-xs  ">
              <div className="border-l border-slate-200 m-6 px-6">
                <p className="font-extrabold leading-6 text-xl">
                  Benefits of your free IMDb account
                </p>
                <p className="font-bold mt-3">Personalized Recommendations</p>
                <p>Discover shows you'll love.</p>
                <p className="font-bold mt-3">Your Watchlist</p>
                <p>
                  Track everything you want to watch and receive e-mail when
                  movies open in theaters.
                </p>
                <p className="font-bold mt-3">Your Ratings</p>
                <p>Rate and remember everything you've seen.</p>
                <p className="font-bold mt-3">Contribute to IMDb</p>
                <p>
                  Add data that will be seen by millions of people and get cool
                  badges.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100    max-w-5xl h-64  mx-auto flex justify-between">
            <div className="">
              <p className="text-lg text-gray-500  p-3 font-bold">
                Recently Viewed
              </p>
            </div>
            <div className="">
              <p className="text-dark-forgot p-5 text-xss">
                Clear your history
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-screen w-full bg-transparent content-none bg-gradient-to-b from-neutral-50  border-t-2 shadow-md">
        <div className="max-w-sm rounded px-7 m-5 py-6 mx-auto">
          <div className="flex justify-center"></div>
        </div>
      </div> */}
    </div>
  );
}

export default SignInCover;
