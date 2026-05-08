import { PostDate } from "../PostDate/PostDate";
import { Tag } from "../tag/tag";
import type { Tag as TagType } from "@/types/tag";

type Props = {
    title: string;
    content: string;
    date: string;
    tags?: TagType[];
    selectedTagIds?: string[];
    onTagClick?: (tagId: string) => void;
};

export const Item = ({ title, content, date, tags, selectedTagIds = [], onTagClick }: Props) => {
    return (
        <div className="bg-blue-400 p-4 rounded-md mb-4 transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-white text-xl font-bold mb-3">
                {title}
            </h2>

            <div className="bg-gray-100 p-3 rounded-sm mb-3 whitespace-pre-wrap">
                <p className="text-gray-800">{content}</p>
            </div>

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                        <Tag
                            key={tag.id}
                            tagId={tag.id}
                            label={tag.label}
                            isActive={selectedTagIds.includes(tag.id)}
                            onClick={onTagClick ? () => onTagClick(tag.id) : undefined}
                        />
                    ))}
                </div>
            )}

            <div className="text-right text-white text-xs opacity-80">
                <PostDate date={date} />
            </div>
        </div>
    );
};
