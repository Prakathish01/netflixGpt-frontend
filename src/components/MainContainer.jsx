// src/components/MainContainer.jsx
import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video at base layer */}
      <div className="absolute inset-0 z-0">
        <VideoBackground movieId={id} />
      </div>

      {/* Left-to-right gradient (darker on left, lighter on right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10 pointer-events-none" />

      {/* Bottom-to-top gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black z-10 pointer-events-none" />

      {/* Title overlay */}
      <div className="absolute inset-0 z-30 flex items-start pointer-events-auto">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;




