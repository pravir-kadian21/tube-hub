import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeSidebar } from "../utils/configSlice";

const VideoCards = ({ video, watchPage = false }) => {
  const id = typeof video?.id === "string" ? video.id : video.id?.videoId || "";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { snippet, statistics } = video;
  const {
    channelTitle,
    publishedAt,
    title,
    thumbnails: {
      high: { url },
    },
  } = snippet;
  const { viewCount } = statistics || {};

  const handleVideoCardClick = (id) => () => {
    navigate(`/watch?v=${id}`);
    dispatch(closeSidebar());
  };

  return (
    <div
      style={{ width: `${watchPage ? "100%" : "20%"}` }}
      className={`cursor-pointer ${watchPage ? "pb-8" : "pb-0"}`}
      onClick={handleVideoCardClick(id)}
    >
      <img src={url} alt="img" className="rounded-lg" />
      <div className="mt-1 font-bold">{title}</div>
      <div className="mt-2">{channelTitle}</div>
      {viewCount && (
        <div className="flex gap-4">
          <div>{viewCount} views</div>
          <div>{moment(publishedAt).fromNow()}</div>
        </div>
      )}
    </div>
  );
};

export default VideoCards;
