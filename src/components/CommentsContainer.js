import React from "react";
import { useSelector } from "react-redux";
import CommentsCard from "./CommentsCard";

const CommentsContainer = () => {
  const comments =
    useSelector((store) => store.youTubeVideos.youTubeVideoComments?.items) ||
    [];
  const replies =
    useSelector((store) => store.youTubeVideos.nestedComments) || {};

  return (
    <div className="ml-4 mt-4">
      <div className="mb-4 text-2xl font-bold">Comments</div>
      {comments.map((comment) => {
        const id = comment.id;
        const commentObj = comment.snippet.topLevelComment.snippet;

        const repliedComments = (replies[id] || {})?.items || [];

        const {
          authorProfileImageUrl,
          authorDisplayName,
          publishedAt,
          textOriginal,
        } = commentObj;
        return (
          <div>
            <CommentsCard
              authorProfileImageUrl={authorProfileImageUrl}
              authorDisplayName={authorDisplayName}
              publishedAt={publishedAt}
              textOriginal={textOriginal}
            />
            <div className="ml-8">
              {repliedComments.map((comment) => {
                const {
                  authorProfileImageUrl,
                  authorDisplayName,
                  publishedAt,
                  textOriginal,
                } = comment?.snippet;
                return (
                  <CommentsCard
                    authorProfileImageUrl={authorProfileImageUrl}
                    authorDisplayName={authorDisplayName}
                    publishedAt={publishedAt}
                    textOriginal={textOriginal}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsContainer;
