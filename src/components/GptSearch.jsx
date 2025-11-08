import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG_IMG } from "../utils/Constant";

const GptSearch = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={NETFLIX_BG_IMG}
        alt="login-bg"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/80"></div>

      {/* Foreground */}
      <div className="relative z-20 flex flex-col items-center pt-24 sm:pt-32 px-3 sm:px-6">
        {/* Search Bar */}
        <GptSearchBar />

        {/* Suggestions Section */}
        <div className="mt-6 sm:mt-10 w-full flex justify-center px-2 sm:px-4">
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
