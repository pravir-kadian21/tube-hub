export const BUTTON_LIST_ITEMS = [
  { key: "all", text: "All" },
  { key: "music", text: "Music" },
  { key: "big bang", text: "Big Bang" },
  { key: "cricket", text: "Cricket" },
  { key: "gaming", text: "Gaming" },
  { key: "news", text: "News" },
  { key: "science", text: "Science" },
  { key: "sitcoms", text: "Sitcoms" },
  { key: "casio", text: "Casio" },
  { key: "guitar", text: "Guitar" },
  { key: "travel", text: "Travel" },
  { key: "motivation", text: "Motivation" },
  { key: "game_shows", text: "Game Shows" },
  { key: "fast_and_furious", text: "Fast and Furious" },
  { key: "songs", text: "Songs" },
  { key: "travel", text: "Travel" },
  { key: "motivation", text: "Motivation" },
  { key: "game_shows", text: "Game Shows" },
  { key: "fast_and_furious", text: "Fast and Furious" },
  { key: "songs", text: "Songs" },
];

export const SUB_LIST = ["Mr Beast", "T-Series"];

export const EXPLORE_LIST = [
  "Trending",
  "Shopping",
  "Music",
  "Movies",
  "Live",
  "Gaming",
  "News",
  "Learning",
  "Podcasts",
];

export const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`;

export const SEARCH_YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&eventType=live&type=video&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&videoId=$videoId$&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_COMMENT_BY_COMMENT_ID_API = `https://www.googleapis.com/youtube/v3/comments?part=snippet&parentId=$commentId$&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_AUTOCOMPLETE_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
