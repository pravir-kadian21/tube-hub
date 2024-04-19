import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/configSlice";
import {
  SEARCH_YOUTUBE_API,
  YOUTUBE_AUTOCOMPLETE_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { updateYouTubeVideos } from "../utils/youTubeVideoSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [showSuggestionList, setShowSuggestionList] = useState(false);

  const suggestionListRef = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleSideBar = () => {
    dispatch(toggleSidebar());
  };

  const cache = useSelector((store) => store.search);

  const getVideosWithSearchString = async (searchString) => {
    const data = await fetch(SEARCH_YOUTUBE_API + `&q=${searchString}`);
    const json = await data.json();

    return json;
  };

  const handleSearch = async (e, searchString = searchValue) => {
    navigate("/");
    const videoData = await getVideosWithSearchString(searchString);
    dispatch(updateYouTubeVideos(videoData));
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_AUTOCOMPLETE_API + searchValue);
    const json = await data.json();

    dispatch(cacheResults({ [searchValue]: json[1] }));
    setSuggestionList(json[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchValue]) {
        setSuggestionList(cache[searchValue]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        typeof event?.target?.value !== "string" &&
        suggestionListRef.current &&
        !suggestionListRef.current.contains(event.target)
      ) {
        setShowSuggestionList(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [setShowSuggestionList]);

  return (
    <div className="grid grid-flow-col shadow-lg p-4">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="hamburger-menu"
          onClick={toggleSideBar}
        />
        <img
          className="h-6 mt-1 pl-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="youtube-icon"
        />
      </div>
      <div className="col-span-10 m-auto">
        <input
          type="text"
          className="w-96 border border-gray-400 rounded-l-full py-1 px-4"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={(e) => {
            setShowSuggestionList(true);
          }}
        />
        <button
          className="border border-gray-400 rounded-r-full py-1 px-2"
          onClick={() => {
            if (!searchValue) return;
            setShowSuggestionList(false);
            handleSearch();
          }}
        >
          search
        </button>
        <div
          className="bg-white w-96 px-4 rounded-xl mt-1 shadow-xl z-50 absolute"
          ref={suggestionListRef}
        >
          <ul>
            {showSuggestionList &&
              suggestionList.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-1 px-3 hover:bg-gray-100 rounded-lg cursor-pointer"
                  onClick={(e) => {
                    setSearchValue(suggestion);
                    handleSearch(e, suggestion);
                  }}
                >
                  {suggestion}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Header;
