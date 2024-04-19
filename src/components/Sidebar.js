import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  setActiveSidebaritem,
  toggleShowLiveStreams,
} from "../utils/configSlice";
import { EXPLORE_LIST, SEARCH_YOUTUBE_API, SUB_LIST } from "../utils/constants";
import { updateYouTubeVideos } from "../utils/youTubeVideoSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const watchPage = searchParams.get("v") !== null;

  const isSidebarOpen = useSelector((store) => store.config.isSidebarOpen);

  if (!isSidebarOpen) return null;

  const handleOnLiveClick = () => {
    navigate("/live");
    dispatch(setActiveSidebaritem("live"));
    dispatch(toggleShowLiveStreams(true));
  };

  const handleHomeClick = () => {
    navigate("/");
    dispatch(setActiveSidebaritem("home"));
    dispatch(toggleShowLiveStreams(false));
  };

  const getVideosWithSearchString = async (item) => {
    const data = await fetch(SEARCH_YOUTUBE_API + `&q=${item}`);
    const json = await data.json();

    return json;
  };

  const handleClick = (item) => async () => {
    navigate("/");
    dispatch(setActiveSidebaritem(item));
    const videoData = await getVideosWithSearchString(item);
    dispatch(updateYouTubeVideos(videoData));
  };

  return (
    <div
      className={`w-48 h-[100%] px-8 pt-4 bg-white ${
        watchPage ? "absolute" : "static"
      } ${watchPage ? "opacity-90" : "opacity-100"}`}
    >
      <ul>
        <li onClick={handleHomeClick} className="cursor-pointer">
          Home
        </li>
        <li className="mt-2 cursor-pointer" onClick={handleOnLiveClick}>
          Live
        </li>
      </ul>
      <h1 className="font-bold mt-10">Subscriptions</h1>
      <ul>
        {SUB_LIST.map((item) => {
          return (
            <li
              className="mt-2 cursor-pointer"
              key={item}
              onClick={handleClick(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <h1 className="font-bold mt-10">Explore</h1>
      <ul>
        {EXPLORE_LIST.map((item) => {
          return (
            <li
              className="mt-2 cursor-pointer"
              key={item}
              onClick={handleClick(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
