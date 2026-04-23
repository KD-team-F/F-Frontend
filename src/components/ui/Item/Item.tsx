import { PostDate }  from "../PostDate/PostDate";

type Props = {
  title: string;
  content: string;
  date: string;
};

const Item = ({ title, content, date }: Props) => {
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

type Question = {
  id: number;
  title: string;
  content: string;
  date: string;
};

const questions: Question[] = [
  {
    id: 1,
    title: "質問題名(仮)",
    content: `質問内容
ooooooooooooooo
ooooooooooooooo`,
    date: "20xx/xx/xx",
  },
];

export default function ItemPage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">質問一覧</h1>

      {questions.map((q) => (
        <Item
          key={q.id}
          title={q.title}
          content={q.content}
          date={q.date}
        />
      ))}
    </div>
  );
}