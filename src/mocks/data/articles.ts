import type { Tag } from '@/types/tag'
import type { Comment } from '@/features/comment/types/comment'

export type ArticleItem = 'question' | 'work'

export type Article = {
  id: string
  item: ArticleItem
  title: string
  content: string
  date: string
  tags: Tag[]
  initialComments: Comment[]
  likeCount: number
  isLikedByCurrentUser: boolean
}

export const articles: Article[] = [
  {
    id: 'q-1',
    item: 'question',
    title: 'Reactのレンダリング最適化について',
    date: '2026-05-01',
    tags: [
      { id: 'react', label: 'React' },
      { id: 'performance', label: 'Performance' },
    ],
    likeCount: 120,
    isLikedByCurrentUser: false,
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
    likeCount: 85,
    isLikedByCurrentUser: true,
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
    likeCount: 85,
    isLikedByCurrentUser: false,
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
    likeCount: 42,
    isLikedByCurrentUser: false,
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
    likeCount: 200,
    isLikedByCurrentUser: false,
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
    likeCount: 30,
    isLikedByCurrentUser: false,
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
    likeCount: 50,
    isLikedByCurrentUser: false,
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
    id: 'q-8',
    item: 'question',
    title: 'Prismaのマイグレーションエラー',
    date: '2026-04-15',
    tags: [{ id: 'prisma', label: 'Prisma' }],
    likeCount: 15,
    isLikedByCurrentUser: false,
    content: 'データベースサーバーに接続できないエラーが出ます。',
    initialComments: []
  },
  {
    id: 'q-9',
    item: 'question',
    title: 'useEffectが2回実行される',
    date: '2026-04-12',
    tags: [{ id: 'react', label: 'React' }],
    likeCount: 60,
    isLikedByCurrentUser: false,
    content: 'Strict Modeによる挙動について教えてください。',
    initialComments: []
  },
  {
    id: 'q-10',
    item: 'question',
    title: 'Jestで非同期関数のテスト',
    date: '2026-04-10',
    tags: [{ id: 'jest', label: 'Jest' }],
    likeCount: 25,
    isLikedByCurrentUser: false,
    content: 'awaitしているのにテストが先に終了してしまいます。',
    initialComments: []
  },
  {
    id: 'q-11',
    item: 'question',
    title: 'Node.jsのバージョン切り替え',
    date: '2026-04-08',
    tags: [{ id: 'nodejs', label: 'Node.js' }],
    likeCount: 40,
    isLikedByCurrentUser: true,
    content: 'nvmとfnm、どちらがおすすめですか？',
    initialComments: []
  },
  {
    id: 'q-12',
    item: 'question',
    title: 'ESLintとPrettierの競合',
    date: '2026-04-05',
    tags: [{ id: 'eslint', label: 'ESLint' }],
    likeCount: 18,
    isLikedByCurrentUser: false,
    content: '保存時にフォーマットが崩れてしまいます。',
    initialComments: []
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
    likeCount: 150,
    isLikedByCurrentUser: false,
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
    likeCount: 95,
    isLikedByCurrentUser: false,
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
    likeCount: 95,
    isLikedByCurrentUser: false,
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
    likeCount: 70,
    isLikedByCurrentUser: false,
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
    likeCount: 50,
    isLikedByCurrentUser: false,
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
  {
    id: 'w-6',
    item: 'work',
    title: '個人開発用のUIコンポーネント集',
    date: '2026-04-19',
    tags: [{ id: 'react', label: 'React' }],
    likeCount: 110,
    isLikedByCurrentUser: false,
    content: 'Radix UIベースのライブラリを作りました。',
    initialComments: []
  },
  {
    id: 'w-7',
    item: 'work',
    title: '読書管理Webアプリ',
    date: '2026-04-17',
    tags: [{ id: 'nextjs', label: 'Next.js' }],
    likeCount: 130,
    isLikedByCurrentUser: false,
    content: 'Google Books APIを使った管理ツールです。',
    initialComments: []
  },
  {
    id: 'w-8',
    item: 'work',
    title: 'Rust製のCLIツール',
    date: '2026-04-14',
    tags: [{ id: 'rust', label: 'Rust' }],
    likeCount: 180,
    isLikedByCurrentUser: true,
    content: 'ディレクトリサイズを爆速で集計します。',
    initialComments: []
  },
  {
    id: 'w-9',
    item: 'work',
    title: 'Tech Blog クローン',
    date: '2026-04-11',
    tags: [{ id: 'nextjs', label: 'Next.js' }],
    likeCount: 250,
    isLikedByCurrentUser: false,
    content: 'Supabaseをバックエンドに使用したブログです。',
    initialComments: []
  },
  {
    id: 'w-10',
    item: 'work',
    title: 'オリジナルフォントの試作',
    date: '2026-04-09',
    tags: [{ id: 'design', label: 'Design' }],
    likeCount: 45,
    isLikedByCurrentUser: false,
    content: 'プログラミングで見やすいフォントをデザイン。',
    initialComments: []
  },
  {
    id: 'w-11',
    item: 'work',
    title: 'スマホで動く家計簿アプリ',
    date: '2026-04-06',
    tags: [{ id: 'react-native', label: 'React Native' }],
    likeCount: 160,
    isLikedByCurrentUser: false,
    content: 'React Native + Expo で開発しました。',
    initialComments: []
  },
  {
    id: 'w-12',
    item: 'work',
    title: 'WebGLによる3D作品集',
    date: '2026-04-03',
    tags: [{ id: 'threejs', label: 'Three.js' }],
    likeCount: 320,
    isLikedByCurrentUser: true,
    content: 'ブラウザで動く3Dアート作品集です。',
    initialComments: []
  }
]
