'use client'

import { useState } from 'react'
import { Title } from '@/components/ui/Title/Title'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { MarkdownEditor } from '@/features/submission/components/MarkdownEditor/MarkdownEditor'
import { DeleteIcon } from '@/components/ui/Delete-icon/delete-icon' // 追加: DeleteIconのインポート

type ArticleEditProps = {
  defaultTitle?: string
  defaultContent?: string
  onSubmit?: (title: string, content: string) => void | Promise<void>
  onDelete?: () => void
}

export function ArticleEdit({
  defaultTitle = '',
  defaultContent = '',
  onSubmit,
  onDelete,
}: ArticleEditProps) {
  const [title, setTitle] = useState(defaultTitle)
  const [content, setContent] = useState(defaultContent)
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
      {/* タイトル */}
      <div className="mb-8">
        <Title>記事を編集する</Title>
      </div>

      {/* タイトル入力 */}
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

      {/* 本文 */}
      <div className="mb-8">
        <MarkdownEditor
          id="article-content"
          name="content"
          label="内容"
          required
          value={content}
          onChange={setContent}
          placeholder="内容を入力してください（マークダウン可）"
        />
      </div>

      {/* ボタンエリア */}
      <div className="flex justify-end items-center gap-4">
        {onDelete && (
          <DeleteIcon onClick={onDelete} />
        )}

        <Button
          label="更新"
          onClick={handleSubmit}
          disabled={isSubmitting || !title.trim() || !content.trim()}
        />
      </div>
    </section>
  )
}