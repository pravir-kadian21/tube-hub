import React from "react";
import { useGetYoutubeVideos } from "../hooks/useGetYoutubeVideos";
import VideoCards from "./VideoCards";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  useGetYoutubeVideos();
  const youTubeVideos = useSelector(
    (store) => store.youTubeVideos.youTubeVideos
  );

  if (!youTubeVideos) return null;

  const { items } = youTubeVideos;

  return (
    <div className="flex flex-wrap gap-14">
      {items.map((item) => {
        return <VideoCards video={item} />;
      })}
    </div>
  );
};

export default VideoContainer;
