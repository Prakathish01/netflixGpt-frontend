import React from "react";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.gpt.gptMovies);

  if (!gptMovies || Object.keys(gptMovies).length === 0) {
    return (
      <div className="bg-black/70 text-white rounded-lg p-4 sm:p-6 shadow-lg w-[90%] sm:w-[80%] mx-auto">
        <h2 className="text-lg sm:text-xl font-bold mb-3">Movie Suggestions</h2>
        <p className="text-gray-400 text-sm sm:text-base">
          No suggestions yet. Try searching!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-black/70 text-white rounded-lg p-4 sm:p-6 shadow-lg w-[90%] sm:w-[80%] max-h-[60vh] overflow-y-auto mx-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
        Movie Suggestions
      </h2>

      <ul className="space-y-4">
        {Object.entries(gptMovies).map(([title, description]) => (
          <li
            key={title}
            className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-6 border-b border-gray-700 pb-2"
          >
            <span className="font-bold text-red-400 text-sm sm:text-base break-words">
              {title}
            </span>
            <span className="text-gray-200 text-sm sm:text-base leading-relaxed">
              {description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GptMovieSuggestions;
