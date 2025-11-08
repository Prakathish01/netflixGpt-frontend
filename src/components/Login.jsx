import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import Validate from "../utils/Validate";
import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/Constant";
import { NETFLIX_BG_IMG } from "../utils/Constant";

const Login = () => {
  const dispatch = useDispatch();
  const username = useRef(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = async (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const validationError = Validate({
      email: emailValue,
      password: passwordValue,
    });
    setError(validationError);
    if (validationError) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => auth.currentUser.reload())
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in successfully:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={NETFLIX_BG_IMG}
        alt="login-bg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/80"></div>
      <div className="absolute inset-0 z-10">
        <Header />
        <form className="flex justify-center items-center h-full px-4 sm:px-0">
          <div className="w-full max-w-md sm:max-w-lg bg-black/60 rounded-lg px-6 sm:px-12 py-8 sm:py-10">
            <h1 className="text-white text-2xl sm:text-3xl font-sans font-bold pb-3 text-center sm:text-left">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            <div>
              {!isSignInForm && (
                <input
                  ref={username}
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 my-2 bg-gray-800 text-white rounded text-sm sm:text-base"
                />
              )}
              <input
                ref={email}
                type="email"
                placeholder="Email"
                className="w-full p-3 my-2 bg-gray-800 text-white rounded text-sm sm:text-base"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="w-full p-3 my-2 bg-gray-800 text-white rounded text-sm sm:text-base"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                onClick={handleButtonClick}
                className="w-full p-3 my-3 bg-red-600 text-white rounded cursor-pointer text-sm sm:text-base hover:bg-red-700 transition"
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              {isSignInForm ? (
                <>
                  <h1 className="text-white text-center text-sm sm:text-base">
                    New to Netflix?{" "}
                    <span
                      className="text-blue-500 cursor-pointer hover:underline"
                      onClick={toggleSignInform}
                    >
                      Sign up now
                    </span>
                  </h1>
                </>
              ) : (
                <h1 className="text-white text-center text-sm sm:text-base">
                  Already have account?{" "}
                  <span
                    className="text-blue-500 cursor-pointer hover:underline"
                    onClick={toggleSignInform}
                  >
                    Sign In now
                  </span>
                </h1>
              )}
              {isSignInForm && (
                <h1 className="hidden md:block text-white text-center mt-4 text-xs sm:text-sm">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.{" "}
                  <span className="text-blue-500 cursor-pointer hover:underline">
                    Learn more
                  </span>
                </h1>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
