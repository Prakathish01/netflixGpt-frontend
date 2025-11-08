import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NEtFLIX_LOGO, SUPPORTED_LANGUAGE } from "../utils/Constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/confligSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div
      className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/90 via-black/60 to-transparent
                flex items-center justify-between px-12 z-30"
    >
      <img className="w-32" src={NEtFLIX_LOGO} alt="netflix-logo" />

      {user && (
        <div className="flex items-center gap-4">
          {gptSearchView && (
            <select
              className=" from-black/70 text-white px-3 py-2 rounded focus:outline-none
              border-0 hover:bg-black/70 transition duration-200"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="bg-black/70 border-0 text-white" 
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-red-600 hover:bg-red-700 text-white cursor-pointer font-semibold 
                   px-4 py-2 rounded transition duration-200 shadow-sm"
            onClick={handleGptSearchClick}
          >
            {gptSearchView ? "Home" : "GPT Search"}
          </button>

          <button
            onClick={handleSignOut}
            className="bg-black/50 hover:bg-black/70 cursor-pointer text-white border border-gray-500 
                   px-4 py-2 rounded transition duration-200"
          >
            Sign Out
          </button>

          {/* Profile */}
          <img
            className="w-10 h-10 rounded object-cover"
            src={user.photoURL}
            alt="profile-logo"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
