import React from "react";
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-1/3 left-12 pt-8 z-20 max-w-xl">
      <h1 className="text-white text-4xl font-extrabold drop-shadow-lg">{title}</h1>

      <p className="text-white text-md mt-4 line-clamp-3 max-w-md">{overview}</p>

      <div className="flex gap-4 mt-6">
        <button className="flex items-center  gap-2 bg-red-600 hover:bg-red-400 text-white cursor-pointer px-6 py-3 rounded-md font-bold text-md opacity-80  transition">
          <Play size={21} /> Play
        </button>
        <button className="flex items-center gap-2  bg-gray-700 cursor-pointer text-white px-6 py-3 rounded-md font-bold text-md opacity-80 hover:bg-gray-600 transition">
          <Info size={21} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
