import { useState } from "react";

type Props = {
  defaultLiked?: boolean;
};

export const RatingHeart = ({ defaultLiked = false }: Props) => {
  const [liked, setLiked] = useState(defaultLiked);

  const count = liked ? 1 : 0;

  const handleClick = () => {
    setLiked((prev) => !prev);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 cursor-pointer select-none"
    >
      {/* ハート */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-6 h-6 transition-colors"
        fill={liked ? "currentColor" : "none"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.015-4.5-4.5-4.5-1.74 0-3.255 1.007-4.5 2.568C10.755 4.757 9.24 3.75 7.5 3.75 5.015 3.75 3 5.765 3 8.25c0 6.75 9 11.25 9 11.25s9-4.5 9-11.25z"
        />
      </svg>

      {/* 数字 */}
      <span className="text-lg font-medium">{count}</span>
    </button>
  );
};
