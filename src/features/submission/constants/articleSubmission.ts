import type { ArticleCategory } from '@/types/article'

export const CATEGORY_OPTIONS: { id: ArticleCategory; label: string }[] = [
  { id: 'question', label: '質問' },
  { id: 'work', label: '制作物' },
]

const CONTENT_BY_CATEGORY: Record<
  ArticleCategory,
  { label: string; placeholder: string }
> = {
  question: {
    label: '質問の内容',
    placeholder:
      'エラーメッセージ、期待する動作、試したことなどを詳しく記載してください（マークダウン形式が使えます）...',
  },
  work: {
    label: '制作物の説明',
    placeholder:
      '作ったもの、使った技術、工夫した点、リンクなどを記載してください（マークダウン形式が使えます）...',
  },
}

export function getContentFields(item: ArticleCategory) {
  return CONTENT_BY_CATEGORY[item]
}
