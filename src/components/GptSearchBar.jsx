import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleGptSearchClick = async () => {
    const userQuery = searchText.current.value.trim();
    if (!userQuery) return;

    const prompt = `You are a movie recommendation assistant.
User query: "${userQuery}"
Return a JSON object with exactly 10 relevant movies matching the query in this format:
{
  "Movie Title (year)": "Two-line description including genre, director, and main theme/plot.(lead roles if known in hastag format)",
}
Do NOT include markdown, code blocks, or extra text. Only return raw JSON.`;

    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/api/movies", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const json = await response.json();

      let parsed = json;
      if (typeof json === "string") parsed = JSON.parse(json);
      if (json.text && typeof json.text === "string") {
        parsed = JSON.parse(json.text);
      }

      dispatch(addGptMovieResult(parsed));
    } catch (err) {
      console.error("Error fetching GPT movies:", err);
      dispatch(
        addGptMovieResult({
          Error: "Could not fetch movie suggestions. Please try again.",
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl flex">
      <input
        ref={searchText}
        type="text"
        placeholder={lang[langKey].gptSearchPlaceholder}
        className="flex-1 px-4 py-3 rounded-l-lg bg-black/70 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-red-600"
        onKeyDown={(e) => e.key === "Enter" && handleGptSearchClick()}
      />
      <button
        onClick={handleGptSearchClick}
        disabled={loading}
        className={`px-6 py-3 font-semibold rounded-r-lg transition ${
          loading
            ? "bg-gray-600 text-gray-300 cursor-not-allowed"
            : "bg-red-600 text-white hover:bg-red-700"
        }`}
      >
        {loading ? "Searching..." : lang[langKey].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
