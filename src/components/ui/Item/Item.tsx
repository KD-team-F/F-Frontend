type Props = {
  title: string;
  content: string;
  date: string;
};

import "./Item.css";

export const Item = ({ title, content, date }: Props) => {
  return (
    <div className="item">
      <h2 className="item-title">{title}</h2>

      <div className="item-content">
        <p>{content}</p>
      </div>

      <div className="item-date">投稿日：{date}</div>
    </div>
  );
};