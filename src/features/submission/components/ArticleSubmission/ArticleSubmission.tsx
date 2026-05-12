'use client'

import { useState } from 'react'
import { Title } from '@/components/ui/Title/Title'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { MarkdownEditor } from '@/features/submission/components/MarkdownEditor/MarkdownEditor'

type ArticleSubmissionProps = {
  onSubmit?: (title: string, content: string) => void | Promise<void>
}

export function ArticleSubmission({ onSubmit }: ArticleSubmissionProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      await onSubmit?.(title, content)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      <Title className="mb-8">記事を投稿する</Title>

      <div className="mb-8">
        <Input
          id="article-title"
          name="title"
          label="タイトル"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="記事のタイトルを入力してください"  
        />
      </div>

      <div className="mb-8">
        <MarkdownEditor
          id="article-content"
          name="content"
          label="質問の内容"
          required
          value={content}
          onChange={setContent}
          placeholder="エラーメッセージ、期待する動作、試したことなどを詳しく記載してください（マークダウン形式が使えます）..."
        />
      </div>

      <div className="flex justify-end">
        <Button
          label="投稿"
          onClick={handleSubmit}
          disabled={isSubmitting || !title.trim() || !content.trim()}
        />
      </div>
    </section>
  )
}