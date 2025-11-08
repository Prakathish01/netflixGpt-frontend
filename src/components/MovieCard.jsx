import React from "react";
import { Img_CDN_URL } from "../utils/Constant";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-40 flex-shrink-0">
      <img
        className="rounded-xl shadow-md hover:rounded-xl hover:scale-125 transition-transform duration-300 object-cover object-center"
        src={posterPath ? Img_CDN_URL + posterPath : "Turn On Vpn please"}
        alt={title || "Movie"}
      />
      {title && (
        <p className="mt-2 text-sm text-center line-clamp-2">{title}</p>
      )}
    </div>
  );
};

export default MovieCard;
