import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div
      className="relative z-[50] w-full bg-gradient-to-b from-transparent via-black/80 to-black 
                 -mt-20 sm:-mt-48 pt-8 sm:pt-16 overflow-hidden"
    >
      <div className="space-y-4 sm:space-y-8">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.TopRatedMovies} />
        <MovieList title={"Popular"} movies={movies.PopularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
