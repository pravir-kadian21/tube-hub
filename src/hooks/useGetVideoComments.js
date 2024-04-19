import { useEffect } from "react";
import {
  YOUTUBE_COMMENTS_API,
  YOUTUBE_COMMENT_BY_COMMENT_ID_API,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import {
  updateNestedComments,
  updateYouTubeVideosComments,
} from "../utils/youTubeVideoSlice";

const getComments = async (videoId) => {
  const url = YOUTUBE_COMMENTS_API;
  const updatedUrl = url.replace("$videoId$", videoId);

  const data = await fetch(updatedUrl);
  const json = await data.json();

  return json;
};

const getRepliedComment = async (commentId) => {
  const url = YOUTUBE_COMMENT_BY_COMMENT_ID_API;
  const updatedUrl = url.replace("$commentId$", commentId);

  const data = await fetch(updatedUrl);
  const json = await data.json();

  return json;
};

const filterCommentWithReplies = (dataArr) => {
  return dataArr
    .filter((data) => data?.snippet?.totalReplyCount > 0)
    .map((data) => data?.id);
};

const create = async (commentIds) => {
  const promiseArr = commentIds.map((commentId) =>
    getRepliedComment(commentId)
  );
  const comments = await Promise.all(promiseArr);

  let obj = {};
  if (comments) {
    // eslint-disable-next-line array-callback-return
    comments.map((comment, idx) => {
      const id = commentIds[idx];
      obj = { ...obj, [id]: comment };
    });
  }

  return obj;
};

export const useGetVideoComments = ({ videoId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchComments = async () => {
      const jsonData = await getComments(videoId);

      if (jsonData) {
        // filter comments that have replies
        const commentsWithReplies = filterCommentWithReplies(
          jsonData?.items || []
        );

        if (commentsWithReplies.length > 0) {
          const repliedCommentsObj = await create(commentsWithReplies);
          dispatch(updateNestedComments(repliedCommentsObj));
        }

        dispatch(updateYouTubeVideosComments(jsonData));
      }
    };

    fetchComments();
  }, [videoId]);
};
