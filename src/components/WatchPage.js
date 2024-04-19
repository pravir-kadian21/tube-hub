import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetVideoComments } from "../hooks/useGetVideoComments";
import CommentsContainer from "./CommentsContainer";
import { useSelector } from "react-redux";
import VideoCards from "./VideoCards";
import { useGetYoutubeVideos } from "../hooks/useGetYoutubeVideos";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  useGetVideoComments({ videoId: searchParams.get("v") });
  useGetYoutubeVideos();
  const youTubeVideos =
    useSelector((store) => store.youTubeVideos.youTubeVideos) || {};
  const { items = [] } = youTubeVideos;

  const filteredItems = items.filter(
    (item) => item.id !== searchParams.get("v")
  );

  if (!youTubeVideos) return null;
  return (
    <div className="w-full">
      <div className="flex pl-4 pt-4">
        <div className="w-3/4">
          <div className="rounded-lg">
            <iframe
              width="1000"
              height="500"
              src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <CommentsContainer />
        </div>
        <div className="px-12">
          {filteredItems.map((item) => {
            return <VideoCards video={item} watchPage />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
