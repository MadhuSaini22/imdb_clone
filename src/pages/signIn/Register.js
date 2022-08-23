import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import ButtonComp from "../../components/ButtonComp";
// import InputComp from "../../components/InputComp";
function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(
      emailRef.current.value,
      passwordConfirmRef.current.value,
      passwordRef.current.value
    );

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      console.log(emailRef.current.value, passwordRef.current.value);
      await signup(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

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
            {/* <p className="text-black"> hello {error}</p> */}
            {console.log(JSON.stringify(error))}
            {error && alert(JSON.stringify(error))}
            {/* {error && <alert>{error}} */}
            <div className="max-w-sm border rounded px-7 m-5 py-6 border-slate-200 !text-slate-800 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="rounded  mb-2">
                  <h2 className="text-3xl font-normal">Create account</h2>
                  {currentUser && currentUser.email}
                </div>
                {/* <div className="rounded  mb-3  mt-1"> */}
                {/* <InputComp
                    labelName={"Your name"}
                    placeholderValue={"First and last name"}
                    idName={"name"}
                    typeName={"text"}
                    refName={nameRef}
                  /> */}
                {/* <label for="" className=" font-bold text-sm">
                    Your name
                  </label>
                  <input
                   className="w-full text-slate-600 text-sm py-1 focus:border-orange-600 focus:shadow-input-focus px-2 border border-gray-400 rounded outline-none "
                    placeholder="First and last name"
                    id="name"
                    type="text"
                    ref={nameRef}
                    required */}
                {/* /> */}
                {/* </div> */}
                <div className="rounded  mb-3  mt-1">
                  {/* <InputComp
                    labelName={"Email"}
                    idName={"email"}
                    typeName={"email"}
                    refName={"emailRef"}
                  /> */}
                  <label for="" className=" font-bold text-sm">
                    Email
                  </label>
                  <input
                    className="w-full text-slate-600 text-sm py-1 focus:border-orange-600 focus:shadow-input-focus px-2 border border-gray-400 rounded outline-none "
                    id="email"
                    type="email"
                    ref={emailRef}
                    required
                  />
                </div>

                <div className="rounded  mb-3  mt-1">
                  {/* <InputComp
                    labelName={"Password"}
                    idName={"password"}
                    placeholderValue={"at least 8 characters"}
                    typeName={"password"}
                    refName={"passwordRef"}
                  /> */}
                  <label for="" className=" font-bold text-sm">
                    Password
                  </label>
                  <input
                    className="w-full text-slate-600 text-sm py-1 focus:border-orange-600 focus:shadow-input-focus px-2 border border-gray-400 rounded outline-none "
                    placeholder="at least 8 characters"
                    id="password"
                    type="password"
                    ref={passwordRef}
                    required
                  />
                  <p className="text-sm ">
                    Passwords must be at least 8 characters.
                  </p>
                </div>
                <div className="rounded  mb-3  mt-1">
                  {/* <InputComp
                    labelName={"Re-enter password"}
                    typeName={"password"}
                    idName={"cpassword"}
                    refName={"confirmPasswordRef"}
                  /> */}
                  <label for="" className=" font-bold text-sm">
                    Re-enter password
                  </label>
                  <input
                    className="w-full text-slate-600 text-sm py-1 focus:border-orange-600 focus:shadow-input-focus px-2 border border-gray-400 rounded outline-none "
                    id="password"
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </div>

                <div className=" mt-1 ">
                  <button
                    className={`bg-submit border-gray-400 text-sm w-full rounded border outline-none cursor-pointer h-8 text-slate-900`}
                    type="submit"
                    disabled={loading}
                  >
                    Create your IMDb account
                  </button>
                </div>
              </form>

              <div className="rounded grid mb-1  mt-10 ">
                <Link to="/">
                  <label for="" className="text-sm ">
                    Already have an account?
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
