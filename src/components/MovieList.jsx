import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 sm:px-4 py-2 relative z-0">
      <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold py-3 sm:py-6 text-white">
        {title}
      </h1>
      <div className="flex overflow-x-auto overflow-y-visible scrollbar-hide">
        <div className="flex gap-2 sm:gap-4">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title || movie.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
