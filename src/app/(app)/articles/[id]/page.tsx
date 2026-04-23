import { ArticleDetail } from '@/features/article/components/ArticleDetail'

type Props = {
  params: Promise<{ id: string }>
}

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = await params

  // TODO: idを使ってAPIからデータを取得する
  const article = {
    title: 'サンプル記事タイトル',
    date: '2026-04-23',
    content: '## はじめに\n\nここに記事の本文が入ります。',
  }

  return <ArticleDetail {...article} />
}
