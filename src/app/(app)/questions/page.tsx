import { ArticleList } from '@/features/article/components/ArticleList/ArticleList'

export default async function QuestionsPage() {
  // TODO: APIからデータを取得する
  const questionItems = [
    {
      title: '質問タイトル1',
      content: '質問の内容がここに入ります。',
      date: '2026-04-24',
    },
    {
      title: '質問タイトル2',
      content: '質問の内容がここに入ります。',
      date: '2026-04-23',
    },
  ]

  return <ArticleList questionItems={questionItems} workItems={[]} />
}
