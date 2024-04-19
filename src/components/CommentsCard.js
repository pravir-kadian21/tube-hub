import moment from "moment";
import React from "react";

const CommentsCard = ({
  authorProfileImageUrl,
  authorDisplayName,
  publishedAt,
  textOriginal,
}) => {
  return (
    <div className="flex gap-4 mb-4 w-2/4">
      <div className="w-8 rounded-lg">
        <img
          className="rounded-full min-w-8"
          src={authorProfileImageUrl}
          alt={authorDisplayName}
        />
      </div>
      <div>
        <div className="flex items-baseline gap-2">
          <div className="text-sm font-bold">{authorDisplayName}</div>
          <div className="text-xs text-gray-700">
            {moment(publishedAt).fromNow()}
          </div>
        </div>
        <div className="mt-1">{textOriginal}</div>
      </div>
    </div>
  );
};

export default CommentsCard;
