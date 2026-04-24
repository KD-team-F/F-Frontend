import { PostDate } from "../PostDate/PostDate";

type Props = {
    title: string;
    content: string;
    date: string;
};

export const Item = ({ title, content, date }: Props) => {
    return (
        <div className="bg-blue-400 p-4 rounded-md mb-4 transition hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-white text-xl font-bold mb-3">
                {title}
            </h2>

            <div className="bg-gray-100 p-3 rounded-sm mb-3 whitespace-pre-wrap">
                <p className="text-gray-800">{content}</p>
            </div>

            <div className="text-right text-white text-xs opacity-80">
                <PostDate date={date} />
            </div>
        </div>
    );
};
