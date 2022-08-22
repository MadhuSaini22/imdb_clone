import React from "react";
import { Link } from "react-router-dom";

import ButtonComp from "../../components/ButtonComp";
import InputComp from "../../components/InputComp";
function Register() {
  return (
    <div>
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
                <h2 className="text-3xl font-normal">Create account</h2>
              </div>
              <div className="rounded  mb-3  mt-1">
                <InputComp
                  labelName={"Your name"}
                  placeholderValue={"First and last name"}
                />
              </div>
              <div className="rounded  mb-3  mt-1">
                <InputComp labelName={"Email"} />
              </div>

              <div className="rounded  mb-3  mt-1">
                <InputComp
                  labelName={"Password"}
                  placeholderValue={"at least 8 characters"}
                />
                <p className="text-sm ">
                  Passwords must be at least 8 characters.
                </p>
              </div>
              <div className="rounded  mb-3  mt-1">
                <InputComp labelName={"Re-enter password"} />
              </div>

              <div className=" mt-1 ">
                <ButtonComp
                  backColor="bg-submit"
                  label="Create your IMDb account"
                />
              </div>

              <div className="rounded grid mb-1  mt-10 ">
            
                  <Link to="/">
                    <label for="" className="text-sm ">
                      Already have an account?{" "}
                      <Link
                        to="/signIn"
                        className="cursor-pointer hover:underline hover:decoration-amber-700 text-dark-forgot hover:text-amber-700"
                      >
                        Sign-In
                      </Link>
                    </label>
                  </Link>
            
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
    </div>
  );
}

export default Register;
