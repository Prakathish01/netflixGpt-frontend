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
      className="absolute top-0 left-0 w-full h-16 sm:h-20 
                 bg-gradient-to-b from-black/90 via-black/60 to-transparent
                 flex items-center justify-between 
                 px-4 sm:px-12 z-50 pointer-events-auto"
    >
      {/* Netflix Logo (Left) */}
      <img
        className="w-24 sm:w-32 object-contain"
        src={NEtFLIX_LOGO}
        alt="netflix-logo"
      />

      {/* Right-side buttons */}
      {user && (
        <div className="flex items-center gap-2 sm:gap-4">
          {gptSearchView && (
            <select
              className="bg-black/70 text-white text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded focus:outline-none
                           border-gray-600 hover:bg-black/80 transition duration-200"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="bg-black text-white"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold 
                       px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded transition duration-200 shadow-sm"
            onClick={handleGptSearchClick}
          >
            {gptSearchView ? "Home" : "GPT Search"}
          </button>

          <button
            onClick={handleSignOut}
            className="bg-black/50 hover:bg-black/70 text-white border border-gray-500 
                       px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded transition duration-200"
          >
            Sign Out
          </button>

          <img
            className="w-8 sm:w-10 h-8 sm:h-10 rounded object-cover border border-gray-700"
            src={user.photoURL}
            alt="profile-logo"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
