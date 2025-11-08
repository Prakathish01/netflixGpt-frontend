import React from "react";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt.gptMovies);

  if (!gptMovies || Object.keys(gptMovies).length === 0) {
    return (
      <div className="bg-black/70 text-white rounded-lg p-3 sm:p-6 shadow-lg w-[95%] sm:w-[80%] mx-auto mt-4 sm:mt-8">
        <h2 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 text-center sm:text-left">
          Movie Suggestions
        </h2>
        <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
          No suggestions yet. Try searching!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-black/70 text-white rounded-lg p-3 sm:p-6 shadow-lg w-[95%] sm:w-[80%] max-h-[65vh] overflow-y-auto mx-auto mt-4 sm:mt-8 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <h2 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 border-b border-gray-700 pb-2 text-center sm:text-left">
        Movie Suggestions
      </h2>

      <ul className="space-y-3 sm:space-y-4">
        {Object.entries(gptMovies).map(([title, description]) => (
          <li
            key={title}
            className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 border-b border-gray-700 pb-2"
          >
            <span className="font-bold text-red-400 text-sm sm:text-base break-words text-center sm:text-left">
              {title}
            </span>
            <span className="text-gray-200 text-sm sm:text-base leading-relaxed text-center sm:text-left">
              {description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GptMovieSuggestions;
