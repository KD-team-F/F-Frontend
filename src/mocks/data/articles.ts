import type { Article, ArticleCategory } from '@/types/article'
import type { Comment } from '@/features/comment/types/comment'

export type { ArticleCategory }

export type MockArticle = Article & {
  initialComments: Comment[]
}

export const articles: MockArticle[] = [
  {
    id: 'q-1',
    item: 'question',
    title: 'Reactのレンダリング最適化について',
    date: '2026-05-01',
    tags: [
      { id: 'react', label: 'React' },
      { id: 'performance', label: 'Performance' },
    ],
    content: `## 困っていること

\`useMemo\` と \`useCallback\` の使い分けがいまいち分かりません。

## 試したこと

- 全ての関数を \`useCallback\` でラップしてみた
- props で渡す値を \`useMemo\` で包んでみた

## 質問

- どんな基準で使い分けるのが正解でしょうか？
- React 19 の \`React Compiler\` を使えば不要になりますか？`,
    initialComments: [
      {
        id: 'c-q1-1',
        content: '基本的には「子コンポーネントが React.memo 化されている時」だけで十分です。',
        date: '2026-05-01',
      },
      {
        id: 'c-q1-2',
        content: 'React Compiler が入れば、ほとんどの memo 系最適化は手動で書く必要がなくなりますよ！',
        date: '2026-05-02',
      },
    ],
  },
  {
    id: 'q-2',
    item: 'question',
    title: 'TypeScriptの型推論が効かないケース',
    date: '2026-04-30',
    tags: [
      { id: 'typescript', label: 'TypeScript' },
      { id: 'generics', label: 'Generics' },
    ],
    content: `ジェネリクスを使うと推論が外れてしまうことがあります。

\`\`\`ts
function pick<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const user = { name: 'taro', age: 20 }
const v = pick(user, 'name') // string になってほしいが unknown になる
\`\`\`

何が原因でしょうか？`,
    initialComments: [
      {
        id: 'c-q2-1',
        content: '`as const` を付けるか、戻り値の型を `T[K]` で明示すると推論が効きますよ。',
        date: '2026-04-30',
      },
    ],
  },
  {
    id: 'q-3',
    item: 'question',
    title: 'Next.js App Routerでのデータ取得',
    date: '2026-04-28',
    tags: [
      { id: 'nextjs', label: 'Next.js' },
      { id: 'app-router', label: 'App Router' },
    ],
    content: `## 質問

サーバーコンポーネントとクライアントコンポーネントの使い分けが分かりません。

- データ取得はサーバー側？
- フォームはクライアント？
- どこに \`'use client'\` を書くのが良い？

[公式ドキュメント](https://nextjs.org/docs) は読んだのですが、実例だとどう判断していますか？`,
    initialComments: [
      {
        id: 'c-q3-1',
        content: 'デフォルトはサーバー、インタラクティブが必要な部分だけ Client にするのがおすすめです。',
        date: '2026-04-28',
      },
      {
        id: 'c-q3-2',
        content: 'フォームは React 19 の Server Actions と組み合わせるとさらにシンプルになりますよ。',
        date: '2026-04-29',
      },
    ],
  },
  {
    id: 'q-4',
    item: 'question',
    title: 'CSSのz-indexが効かない',
    date: '2026-04-25',
    tags: [
      { id: 'css', label: 'CSS' },
      { id: 'stacking-context', label: 'Stacking Context' },
    ],
    content: `親要素に \`position: relative\` を付けても上に表示されません。

\`\`\`css
.parent { position: relative; }
.child  { position: absolute; z-index: 9999; }
\`\`\`

スタッキングコンテキストの問題でしょうか？`,
    initialComments: [
      {
        id: 'c-q4-1',
        content: '親に `transform` や `filter`、`opacity < 1` などが付いていないか確認してみてください。',
        date: '2026-04-25',
      },
    ],
  },
  {
    id: 'q-5',
    item: 'question',
    title: 'GitHubでforce pushしてしまった',
    date: '2026-04-22',
    tags: [
      { id: 'git', label: 'Git' },
      { id: 'github', label: 'GitHub' },
    ],
    content: `## やってしまったこと

間違って他人のブランチに \`git push --force\` してしまいました…

## 復旧したい

- リモートで上書きされたコミットは戻せますか？
- \`git reflog\` はローカルにしか効かないですよね？

助けてください 🙏`,
    initialComments: [
      {
        id: 'c-q5-1',
        content: 'リモートにいる誰かが該当コミットを fetch していれば、そのローカルから復旧できます。',
        date: '2026-04-22',
      },
      {
        id: 'c-q5-2',
        content: 'GitHub の API で消えたコミット SHA からデータが取れる場合もありますよ (Reflog API)。',
        date: '2026-04-23',
      },
    ],
  },
  {
    id: 'q-6',
    item: 'question',
    title: 'Tailwind CSSのカスタムカラー設定',
    date: '2026-04-20',
    tags: [
      { id: 'tailwind', label: 'Tailwind CSS' },
      { id: 'css', label: 'CSS' },
    ],
    content: `\`tailwind.config.ts\` でカスタムカラーが反映されません。

\`\`\`ts
export default {
  theme: {
    extend: {
      colors: {
        brand: '#FF6B6B',
      },
    },
  },
}
\`\`\`

\`bg-brand\` を付けても効かない…**Tailwind v4** だと書き方が違うのでしょうか？`,
    initialComments: [
      {
        id: 'c-q6-1',
        content: 'Tailwind v4 から `@theme` を CSS 内に書く形式に変わりました。`globals.css` を見直してみてください。',
        date: '2026-04-20',
      },
    ],
  },
  {
    id: 'q-7',
    item: 'question',
    title: 'Dockerコンテナが起動しない',
    date: '2026-04-18',
    tags: [
      { id: 'docker', label: 'Docker' },
      { id: 'devops', label: 'DevOps' },
    ],
    content: `\`docker compose up\` で以下のエラーが出ます。

\`\`\`
Error response from daemon: driver failed programming external connectivity
\`\`\`

- ポート \`3000\` は他で使っていない
- Docker Desktop は再起動済み

何を確認すれば良いでしょうか？`,
    initialComments: [
      {
        id: 'c-q7-1',
        content: 'Windows なら `netsh interface ipv4 show excludedportrange protocol=tcp` で除外ポートを確認してみてください。',
        date: '2026-04-18',
      },
    ],
  },
  {
    id: 'w-1',
    item: 'work',
    title: 'ToDoアプリを作りました',
    date: '2026-05-02',
    tags: [
      { id: 'react', label: 'React' },
      { id: 'typescript', label: 'TypeScript' },
      { id: 'tailwind', label: 'Tailwind CSS' },
    ],
    content: `## 概要

React + TypeScript + Tailwind で作ったシンプルな ToDo アプリです。

## 使った技術

- React 19
- Vite
- Tailwind CSS v4
- Zustand (状態管理)

## リンク

- [GitHub](https://github.com/example/todo)
- [デモ](https://example.com/todo)`,
    initialComments: [
      {
        id: 'c-w1-1',
        content: 'シンプルで見やすい UI ですね！Zustand を選んだ理由が気になります。',
        date: '2026-05-02',
      },
    ],
  },
  {
    id: 'w-2',
    item: 'work',
    title: 'ポートフォリオサイトを公開しました',
    date: '2026-04-29',
    tags: [
      { id: 'nextjs', label: 'Next.js' },
      { id: 'microcms', label: 'microCMS' },
      { id: 'portfolio', label: 'Portfolio' },
    ],
    content: `## ポートフォリオを作りました 🎉

Next.js と microCMS を使って自分のポートフォリオを作成しました。

### 工夫した点

1. **App Router** を採用してパフォーマンスを最適化
2. **microCMS** で記事を CMS 管理
3. **Vercel** にデプロイして CI/CD 自動化

ぜひ見てください！`,
    initialComments: [
      {
        id: 'c-w2-1',
        content: 'デザインが洗練されていて素敵です！Lighthouse のスコアはどれくらいですか？',
        date: '2026-04-29',
      },
      {
        id: 'c-w2-2',
        content: 'microCMS の SDK は便利ですよね。私も使っています。',
        date: '2026-04-30',
      },
    ],
  },
  {
    id: 'w-3',
    item: 'work',
    title: 'マークダウンエディタを自作',
    date: '2026-04-26',
    tags: [
      { id: 'react', label: 'React' },
      { id: 'markdown', label: 'Markdown' },
    ],
    content: `## 作ったもの

リアルタイムプレビュー付きのマークダウンエディタです。

\`\`\`tsx
<MarkdownEditor
  value={content}
  onChange={setContent}
/>
\`\`\`

## こだわりポイント

- **シンタックスハイライト** 対応
- 編集 / プレビュー / 分割の **3 モード切替**
- ショートカット (\`Cmd+B\` で太字 etc.)`,
    initialComments: [
      {
        id: 'c-w3-1',
        content: '3 モード切替の UI が良いですね！どのライブラリで syntax highlight していますか？',
        date: '2026-04-26',
      },
    ],
  },
  {
    id: 'w-4',
    item: 'work',
    title: 'Slackボットを作ってみた',
    date: '2026-04-23',
    tags: [
      { id: 'slack', label: 'Slack' },
      { id: 'cloudflare', label: 'Cloudflare Workers' },
      { id: 'notion', label: 'Notion' },
    ],
    content: `## 概要

日次のスタンドアップを自動化する Slack ボットです。

### できること

- 毎朝 10 時にメンバーへ DM を送信
- 「昨日 / 今日 / ブロッカー」の回答をスレッドに集約
- 集計結果を Notion に自動転記

### スタック

- Bolt for JavaScript
- Cloudflare Workers
- Notion API`,
    initialComments: [
      {
        id: 'c-w4-1',
        content: 'チームで使ってみたいです！スケジュール管理は Cron Trigger ですか？',
        date: '2026-04-23',
      },
    ],
  },
  {
    id: 'w-5',
    item: 'work',
    title: 'CLIツールを公開しました',
    date: '2026-04-19',
    tags: [
      { id: 'cli', label: 'CLI' },
      { id: 'npm', label: 'npm' },
      { id: 'typescript', label: 'TypeScript' },
    ],
    content: `## 何を作ったか

プロジェクトのテンプレートを生成する CLI ツールを **npm に公開** しました。

\`\`\`bash
npx create-my-template my-app
\`\`\`

## 特徴

- TypeScript / ESLint / Prettier の設定済み
- インタラクティブなプロンプトでオプション選択
- monorepo 対応`,
    initialComments: [],
  },
]
