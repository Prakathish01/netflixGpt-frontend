export const NEtFLIX_LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://i.pinimg.com/1200x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg";
export const NETFLIX_BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg";

export const TMDB_NowPlaying_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const TMDB_Popular_API =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TMDB_topRated_API =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const TMDB_Upcoming_API =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
  },
};
 

export const Img_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "ta", name: "Tamil" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "te", name: "Telugu" },
  { identifier: "ml", name: "Malayalam" },
  { identifier: "kn", name: "Kannada" },
  { identifier: "bn", name: "Bengali" },
  { identifier: "gu", name: "Gujarati" },
  { identifier: "mr", name: "Marathi" },
  { identifier: "ur", name: "Urdu" },
];

// export const RAPID_TMDB_API =
//   "https://tmdb-movies-and-tv-shows-api-by-apirobots.p.rapidapi.com/v1/tmdb?name=robot&page=2";

// export const RAPID_API_OPTIONS = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": `407d744adbmsh4d752074f4c640ep16177cjsn80af18ea93f7`,
//     "x-rapidapi-host":
//       "tmdb-movies-and-tv-shows-api-by-apirobots.p.rapidapi.com",
//   },
// };



// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// export const TMDB_NowPlaying_API = `${BACKEND_URL}/api/tmdb/now_playing`;
// export const TMDB_Popular_API = `${BACKEND_URL}/api/tmdb/popular`;
// export const TMDB_topRated_API = `${BACKEND_URL}/api/tmdb/top_rated`;
// export const TMDB_Upcoming_API = `${BACKEND_URL}/api/tmdb/upcoming`;

// export const API_OPTIONS = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//   },
// };
