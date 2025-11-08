import React from "react";
import { Img_CDN_URL } from "../utils/Constant";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-40 flex-shrink-0 relative z-auto">
      {posterPath ? (
        <img
          className="rounded-xl shadow-md hover:scale-125 transition-transform duration-300 object-cover object-center"
          src={Img_CDN_URL + posterPath}
          alt={title || "Movie"}
        />
      ) : (
        <div className="rounded-xl shadow-md w-full h-60 flex items-center justify-center backdrop-blur-sm bg-gray-800/50 z-20">
          <p className="text-white font-bold text-center text-sm px-3">
            Turn On VPN Please
          </p>
        </div>
      )}

      {title && (
        <p className="mt-2 text-sm text-center line-clamp-2">{title}</p>
      )}
    </div>
  );
};

export default MovieCard;
