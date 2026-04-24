'use client'

import { useState, type ChangeEvent } from 'react'
import { Label } from '@/components/ui/Label/Label'
import { MarkdownPreview } from '@/components/ui/MarkdownPreview/MarkdownPreview'
import { Textarea } from '@/components/ui/Textarea/Textarea'
import { ModeTabs } from './ModeTabs'
import type { EditorMode } from '@/features/submission/types/EditorMode'

type MarkdownEditorProps = {
  label: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  placeholder?: string
  id?: string
  name?: string
  rows?: number
}

export function MarkdownEditor({
  label,
  value,
  onChange,
  required = false,
  placeholder = '',
  id,
  name,
  rows = 10,
}: MarkdownEditorProps) {
  const [mode, setMode] = useState<EditorMode>('edit')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
        <ModeTabs mode={mode} onChange={setMode} />
      </div>

      <div className="relative rounded-xl bg-[#f3f4f8] border border-gray-200">
        {mode === 'edit' ? (
          <Textarea
            id={id}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            rows={rows}
          />
        ) : (
          <MarkdownPreview content={value} minRows={rows} />
        )}

        <span className="pointer-events-none absolute bottom-2 right-4 text-[11px] font-semibold tracking-wider text-gray-400 select-none">
          MARKDOWN SUPPORTED
        </span>
      </div>
    </div>
  )
}
