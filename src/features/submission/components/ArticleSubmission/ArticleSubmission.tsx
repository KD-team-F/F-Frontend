'use client'

import { Title } from '@/components/ui/Title/Title'
import { Button } from '@/components/ui/Button/Button'
import { Input } from '@/components/ui/Input/Input'
import { MarkdownEditor } from '@/features/submission/components/MarkdownEditor/MarkdownEditor'
import { CategorySelector } from '@/features/submission/components/ArticleSubmission/CategorySelector'
import { TagSelector } from '@/features/submission/components/ArticleSubmission/TagSelector'
import { useArticleSubmission } from '@/features/submission/hooks/useArticleSubmission'
import type { ArticleSubmissionProps } from '@/features/submission/types/articleSubmission'

export type { ArticleSubmissionProps } from '@/features/submission/types/articleSubmission'

export function ArticleSubmission(props: ArticleSubmissionProps) {
  const form = useArticleSubmission(props)

  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      {form.submitError ? (
        <p role="alert" className="mb-6 text-center text-sm text-red-600">
          {form.submitError}
        </p>
      ) : null}

      <Title className="mb-8">記事を投稿する</Title>

      <CategorySelector
        selectedItem={form.selectedItem}
        onSelect={form.setSelectedItem}
      />

      <div className="mb-8">
        <Input
          id="article-title"
          name="title"
          label="タイトル"
          required
          value={form.title}
          onChange={(e) => form.setTitle(e.target.value)}
          placeholder="記事のタイトルを入力してください"
        />
      </div>

      <TagSelector
        selectedTagIds={form.selectedTagIds}
        selectedTags={form.selectedTags}
        filteredTags={form.filteredTags}
        tagFilter={form.tagFilter}
        onTagFilterChange={form.setTagFilter}
        onToggleTag={form.toggleTag}
        onClearTags={form.clearTags}
        isLoading={form.isTagsLoading}
        error={form.tagsError}
        onRetry={form.retryTags}
      />

      <div className="mb-8">
        <MarkdownEditor
          id="article-content"
          name="content"
          label={form.contentLabel}
          required
          value={form.content}
          onChange={form.setContent}
          placeholder={form.contentPlaceholder}
        />
      </div>

      <div className="flex justify-end">
        <Button
          label="投稿"
          onClick={form.handleSubmit}
          disabled={form.isSubmitDisabled}
        />
      </div>
    </section>
  )
}
