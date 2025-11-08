import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="relative w-full h-full overflow-hidden z-0">
      {/* Background Trailer */}
      <iframe
        id="yt-player"
        className="absolute top-1/2 left-1/2 w-[200%] sm:w-[130%] h-[200%] sm:h-[130%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        src={
          trailerVideo?.key
            ? `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&rel=0&showinfo=0`
            : ""
        }
        title="YouTube trailer"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />

      {/* Gradient overlays for original cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-20"></div>
    </div>
  );
};

export default VideoBackground;
