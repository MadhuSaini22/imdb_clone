import React from "react";
import logoImg from "../../assets/google.png"
import { ChevronDownIcon } from "@heroicons/react/outline";

// import { Link } from "react-router-dom";
// import ButtonComp from "../../components/ButtonComp";
// import InputComp from "../../components/InputComp";
import LabelComp from "../../components/LabelComp";
 function SignInCover() {
  return (
    <div className="downContainerMain h-screen bg-cover">
      <div className="container ">
        <div className=" w-full  justify-items-center  font-coverFont">
          <div className=" max-w-5xl flex bg-white m-5  !text-slate-800 mx-auto">
            <div className=" w-5/12 bg-slate-500 grid justify-center">
                <p className="text-xl mt-7 m-auto font-bold">Sign in</p>
              <LabelComp icon={logoImg} authName="Sign In with Google"/> 
              <p className="flex">Show more options <ChevronDownIcon className="h-5"/></p>            
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
