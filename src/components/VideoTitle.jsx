import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="absolute top-1/4 sm:top-1/3 left-4 sm:left-12 right-4 pt-6 sm:pt-8 z-40 max-w-[90%] sm:max-w-xl pointer-events-auto"
      role="region"
      aria-label="movie title"
    >
      {/* Movie Title */}
      <h1
        className="text-white font-extrabold tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
                   text-3xl sm:text-5xl leading-snug font-sans"
      >
        {title}
      </h1>

      {/* Movie Overview */}
      <p
        className="text-gray-200 text-sm sm:text-lg mt-3 sm:mt-5 leading-relaxed font-light 
                   drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] max-w-full sm:max-w-md line-clamp-3"
      >
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-7">
        <button
          type="button"
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white 
                     px-5 sm:px-7 py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base 
                     shadow-lg shadow-black/40 transition-all duration-300 pointer-events-auto"
        >
          <Play size={20} /> Play
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 bg-gray-700/90 hover:bg-gray-600 text-white 
                     px-5 sm:px-7 py-2.5 sm:py-3 rounded-md font-semibold text-sm sm:text-base 
                     shadow-md shadow-black/30 transition-all duration-300 pointer-events-auto"
        >
          <Info size={20} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
