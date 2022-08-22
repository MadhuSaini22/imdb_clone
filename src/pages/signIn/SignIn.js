import React from "react";
import { Link } from "react-router-dom";

import ButtonComp from "../../components/ButtonComp";
import InputComp from "../../components/InputComp";
function SignIn() {
  return (
    <div className="downContainerMain bg-white">
      <div className="container bg-white">
        <div className=" w-full justify-items-center  font-sans p-2">
          <div className=" mb-5  mt-2 grid  justify-center ">
            <img
              className=" h-14"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt="img"
            />
          </div>
          <div className="max-w-sm border rounded px-7 m-5 py-6 border-slate-200 !text-slate-800 mx-auto">
            <div className="rounded  mb-2">
              <h2 className="text-3xl font-normal">Sign In</h2>
            </div>
            <div className="rounded  mb-3  mt-1">
              <InputComp labelName={"Email"} />
            </div>

            <div className="rounded grid mb-6  mt-1 ">
              <div className="justify-between flex">
                <label for="" className="font-bold text-sm">
                  Password
                </label>
                <Link to="/">
                  <label
                    for=""
                    className="text-sm cursor-pointer hover:underline hover:decoration-amber-700 text-dark-forgot hover:text-amber-700"
                  >
                    Forgot your password?
                  </label>
                </Link>
              </div>

              <input class="w-full  text-slate-600 text-sm py-1 focus:border-amber-400 focus:border-2 px-2 border border-gray-400 rounded outline-none " />
            </div>
            <div className="rounded mb-4 border-slate-300 mt-1 shadow-sm">
              <ButtonComp backColor="bg-submit" label="Sign-In" />
            </div>
            <div className="rounded w-full text-sm mb-10 mt-1 ">
              <input
                type="checkbox"
                name="rememberMe"
                value="true"
                tabindex="4"
                className="mr-2 "
              />
              Keep me signed in.
            </div>
            <div className="my-5 relative w-full flex justify-center border-t   ">
              <p className="top-2/4 -translate-y-2/4 text-gray-500  absolute bg-white text-xs  py-0 px-2">
                New to IMDb?
              </p>
            </div>
            <div className=" mt-1 ">
              <ButtonComp
                backColor="bg-slate-200"
                label=" Create your IMDB account"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-full bg-transparent content-none bg-gradient-to-b from-neutral-50  border-t-2 shadow-md">
        <div className="max-w-sm rounded px-7 m-5 py-6 mx-auto">
          <div className="flex justify-center">
            <a
              className="text-dark-forgot text-xs mr-3"
              target="_blank"
              rel="noopener noreferrer"
              href="https://help.imdb.com/article/imdb/general-information/why-should-i-register-on-imdb/GHB62T7USTMYMCDC?ref_=cons_ap_ftr_help"
            >
              Help
            </a>
            <span className="auth-footer-seperator"></span>

            <a
              className=" text-xs text-dark-forgot mr-3"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.imdb.com/help/show_article?conditions"
            >
              Conditions of Use
            </a>
            <span className="auth-footer-seperator"></span>

            <a
              className=" text-dark-forgot text-xs mr-3"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.imdb.com/privacy"
            >
              Privacy Notice
            </a>
            <span className="auth-footer-seperator"></span>
          </div>
          <div className="flex justify-center mt-3 ">
            <p className="text-slate-500 text-xs mr-3">
              © 1996-2022, Amazon.com, Inc. or its affiliates
            </p>
            <span className="auth-footer-seperator"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
