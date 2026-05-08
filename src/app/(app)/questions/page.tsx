import { Suspense } from 'react'
import { ArticleList } from '@/features/article/components/ArticleList/ArticleList'

// TODO: APIからデータを取得する
const questionItems = [
  {
    title: '質問タイトル1',
    content: '質問の内容がここに入ります。',
    date: '2026-04-24',
    tags: [
      { id: 'react', label: 'React' },
      { id: 'typescript', label: 'TypeScript' },
    ],
  },
  {
    title: '質問タイトル2',
    content: '質問の内容がここに入ります。',
    date: '2026-04-23',
    tags: [
      { id: 'nextjs', label: 'Next.js' },
      { id: 'typescript', label: 'TypeScript' },
    ],
  },
]

const workItems = [
  {
    title: '制作物タイトル1',
    content: '制作物の内容がここに入ります。',
    date: '2026-04-22',
    tags: [{ id: 'react', label: 'React' }],
  },
]

export default function QuestionsPage() {
  return (
    <Suspense>
      <ArticleList questionItems={questionItems} workItems={workItems} />
    </Suspense>
  )
}
