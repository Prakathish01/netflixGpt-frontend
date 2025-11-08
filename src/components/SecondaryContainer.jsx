import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="relative z-[50] w-screen bg-gradient-to-b from-transparent via-black/80 to-black -mt-48 pt-16">
      <div>
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
