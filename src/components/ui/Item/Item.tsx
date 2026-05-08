import { PostDate } from "../PostDate/PostDate";
import { RatingHeart } from "../rating/rating";

type Props = {
    title: string;
    content: string;
    date: string;
    likeCount?: number;
    isLikedByCurrentUser?: boolean;
};

export const Item = ({ title, content, date, likeCount, isLikedByCurrentUser }: Props) => {
    return (
        <div className="bg-blue-400 p-4 rounded-md mb-4 transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="text-white text-xl font-bold leading-tight flex-1">
                    {title}
                </h2>
                <RatingHeart defaultCount={likeCount} defaultLiked={isLikedByCurrentUser} isReadOnly />
            </div>

            <div className="bg-gray-100 p-3 rounded-sm mb-3 whitespace-pre-wrap">
                <p className="text-gray-800">{content}</p>
            </div>

            <div className="text-right text-white text-xs opacity-80">
                <PostDate date={date} />
            </div>
        </div>
    );
};
