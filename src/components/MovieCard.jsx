import React from "react";
import { Img_CDN_URL } from "../utils/Constant";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-28 sm:w-40 flex-shrink-0 relative z-auto mx-2">
      {posterPath ? (
        <img
          className="rounded-lg sm:rounded-xl shadow-md hover:scale-105 sm:hover:scale-125 transition-transform duration-300 object-cover object-center w-full h-44 sm:h-60"
          src={Img_CDN_URL + posterPath}
          alt={title || 'Movie'}
        />
      ) : (
        <div className="rounded-lg sm:rounded-xl shadow-md w-full h-44 sm:h-60 flex items-center justify-center backdrop-blur-sm bg-gray-800/50 z-20">
          <p className="text-white font-bold text-center text-xs sm:text-sm px-2">
            Turn On VPN Please
          </p>
        </div>
      )}

      {title && (
        <p className="mt-2 text-xs sm:text-sm text-center line-clamp-2 px-1">
          {title}
        </p>
      )}
    </div>
  );
};

export default MovieCard;
