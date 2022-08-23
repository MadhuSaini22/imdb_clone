import React from "react";
import logoImg from "../../assets/google.png";
import { ChevronDownIcon } from "@heroicons/react/outline";

// import { Link } from "react-router-dom";
import ButtonComp from "../../components/ButtonComp";
// import InputComp from "../../components/InputComp";
import LabelComp from "../../components/LabelComp";
function SignInCover() {
  return (
    <div className="downContainerMain h-screen bg-cover">
      <div className="container ">
        <div className=" w-full  justify-items-center  font-coverFont">
          <div className=" max-w-5xl flex bg-white m-5  !text-slate-800 mx-auto">
            <div className=" w-5/12  grid justify-center">
              <div className="w-full mb-4">
                <p className="text-xl mt-7 m-auto font-bold">Sign in</p>
                <LabelComp icon={logoImg} authName="Sign In with Google" />
                <LabelComp icon={logoImg} authName="Sign In with IMDb" />
                <div className="flex justify-center">
                  <p className="flex text-sm text-blue-700">
                    Show more options <ChevronDownIcon className="h-5 mt-1" />
                  </p>
                </div>
                <div className=" w-56 relative ml-7 flex justify-center border-t border-black my-5">
                  <p className="top-0/4 -translate-y-2/4 text-gray-500 !mb-2 absolute bg-white text-xs  py-0 px-4">
                    or
                  </p>
                </div>
                <div className="rounded mb-4 border-slate-300 mt-1 shadow-sm">
                  <button
                    className=" bg-amber-400 font-bold text-sm w-full rounded border outline-none cursor-pointer h-8 text-slate-900"
                    type="submit"
                  >
                    Create a New Account
                  </button>
                </div>
              </div>
              <div className="flex w-64 text-xs text-center justify-center">
                <p className="text-sm text-blue-700">
                  By signing in, you agree to IMDb's Conditions of Use and
                  Privacy Policy.
                </p>
              </div>
            </div>
            <div className=" w-6/12 text-xs  ">
              <div className="border-l border-slate-200 m-6 px-6">
                <p className="font-bold text-xl">
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
