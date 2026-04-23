import { Item } from "./Item";
import "./Item.css";

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

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>質問一覧</h1>

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