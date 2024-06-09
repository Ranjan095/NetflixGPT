import React, { useState } from "react";
import Header from "../header/Header";
import backgroundLoginImg from "../../utils/images/backgroundLoginImg.jpg";

const Login = () => {
  let [isSignInForm, setIsSignInForm] = useState(true);

  let handleToggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img src={backgroundLoginImg} alt="backgroundImage" />
      </div>
      <div className="absolute bg-black opacity-80 w-4/12 m-auto left-0 right-0 top-[100px] px-10 py-4 rounded-md">
        <h1 className="text-white font-bold text-3xl my-[20px]">
          {isSignInForm ? "Sign in" : "Sign up"}
        </h1>
        <form>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="text-white bg-gray-800 my-2 w-full p-3 rounded-md"
            />
          )}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="text-white bg-gray-800 my-2 w-full p-3 rounded-md"
          />
          <br />
          <input
            type="password"
            placeholder="password"
            className="text-white bg-gray-800 my-2 w-full p-3 rounded-md"
          />
          <br />
          <button
            type="submit"
            className="text-white font-semibold bg-[#E50914] my-2 p-2 w-full rounded-md"
          >
            {isSignInForm ? "Sign in" : "Sign up"}
          </button>
          <p
            onClick={handleToggleForm}
            className="text-white cursor-pointer my-4"
          >
           {isSignInForm? "New to Netflix! Signup now":"Already registered sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
