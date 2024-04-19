import { useEffect } from "react";
import { SEARCH_YOUTUBE_API, YOUTUBE_VIDEOS_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { updateYouTubeVideos } from "../utils/youTubeVideoSlice";

const getVideos = async (searchString) => {
  let url =
    window.location.href.includes("live") || searchString.length > 0
      ? SEARCH_YOUTUBE_API
      : YOUTUBE_VIDEOS_API;

  if (searchString.length > 0) {
    url = url + `&q=${searchString}`;
  }
  const data = await fetch(url);
  const json = await data.json();

  return json;
};

export const useGetYoutubeVideos = (searchString = "") => {
  const showLiveStreams = useSelector((store) => store.config.showLiveStreams);
  const makeCall = useSelector((store) => store.config.activeSidebarItem);

  const dispatch = useDispatch();

  useEffect(() => {
    if (makeCall !== "home") return;
    const fetchData = async () => {
      try {
        const videos = await getVideos(searchString);
        if (videos) dispatch(updateYouTubeVideos(videos));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [showLiveStreams]);
};
