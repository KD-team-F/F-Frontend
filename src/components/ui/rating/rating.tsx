"use client";
import { useEffect, useState } from "react";
import { toggleArticleLikeWithMockApi } from "@/features/article/actions/toggleArticleLikeWithMockApi";
import { LIKE_COUNT_STEP } from "@/constants/articleLike";

type Props = {
  articleId?: string;
  defaultLiked?: boolean;
  defaultCount?: number;
  isReadOnly?: boolean;
};

export const RatingHeart = ({
  articleId,
  defaultLiked = false,
  defaultCount = 0,
  isReadOnly = false,
}: Props) => {
  const [isLiked, setIsLiked] = useState(defaultLiked);
  const [likeCount, setLikeCount] = useState(defaultCount);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLiked(defaultLiked);
    setLikeCount(defaultCount);
  }, [defaultLiked, defaultCount]);

  const heartStrokeColor = isLiked ? "#ff0062" : "#5b5f6d";

  const handleHeartClick = async () => {
    if (isReadOnly || isLoading) {
      return;
    }

    if (articleId) {
      setIsLoading(true);
      try {
        const result = await toggleArticleLikeWithMockApi(articleId);
        setIsLiked(result.isLikedByCurrentUser);
        setLikeCount(result.likeCount);
      } catch {
        // 失敗時は state を維持
      } finally {
        setIsLoading(false);
      }
      return;
    }

    if (isLiked) {
      setLikeCount((prev) => prev - LIKE_COUNT_STEP);
    } else {
      setLikeCount((prev) => prev + LIKE_COUNT_STEP);
    }

    setIsLiked((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={handleHeartClick}
      disabled={isLoading}
      className={`flex items-center gap-2 select-none ${isReadOnly ? "cursor-default" : "cursor-pointer"} ${isLoading ? "opacity-60" : ""}`}
      aria-label={`likes: ${likeCount}`}
      aria-disabled={isReadOnly || isLoading}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke={heartStrokeColor}
        strokeWidth={2}
        className="w-6 h-6 transition-colors"
        fill={isLiked ? heartStrokeColor : "none"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.015-4.5-4.5-4.5-1.74 0-3.255 1.007-4.5 2.568C10.755 4.757 9.24 3.75 7.5 3.75 5.015 3.75 3 5.765 3 8.25c0 6.75 9 11.25 9 11.25s9-4.5 9-11.25z"
        />
      </svg>

      <span className="text-lg font-medium">{likeCount}</span>
    </button>
  );
};
