import { http, HttpResponse } from "msw";

type ArticleItem = "question" | "work";

type ArticleListResponse = {
  id: string;
  title: string;
  content: string;
  date: string;
};

const questionArticles: ArticleListResponse[] = [
  {
    id: "q-1",
    title: "Reactのレンダリング最適化について",
    content: `## 困っていること

\`useMemo\` と \`useCallback\` の使い分けがいまいち分かりません。

## 試したこと

- 全ての関数を \`useCallback\` でラップしてみた
- props で渡す値を \`useMemo\` で包んでみた

## 質問

- どんな基準で使い分けるのが正解でしょうか？
- React 19 の \`React Compiler\` を使えば不要になりますか？`,
    date: "2026-05-01",
  },
  {
    id: "q-2",
    title: "TypeScriptの型推論が効かないケース",
    content: `ジェネリクスを使うと推論が外れてしまうことがあります。

\`\`\`ts
function pick<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const user = { name: 'taro', age: 20 }
const v = pick(user, 'name') // string になってほしいが unknown になる
\`\`\`

何が原因でしょうか？`,
    date: "2026-04-30",
  },
  {
    id: "q-3",
    title: "Next.js App Routerでのデータ取得",
    content: `## 質問

サーバーコンポーネントとクライアントコンポーネントの使い分けが分かりません。

- データ取得はサーバー側？
- フォームはクライアント？
- どこに \`'use client'\` を書くのが良い？

[公式ドキュメント](https://nextjs.org/docs) は読んだのですが、実例だとどう判断していますか？`,
    date: "2026-04-28",
  },
  {
    id: "q-4",
    title: "CSSのz-indexが効かない",
    content: `親要素に \`position: relative\` を付けても上に表示されません。

\`\`\`css
.parent { position: relative; }
.child  { position: absolute; z-index: 9999; }
\`\`\`

スタッキングコンテキストの問題でしょうか？`,
    date: "2026-04-25",
  },
  {
    id: "q-5",
    title: "GitHubでforce pushしてしまった",
    content: `## やってしまったこと

間違って他人のブランチに \`git push --force\` してしまいました…

## 復旧したい

- リモートで上書きされたコミットは戻せますか？
- \`git reflog\` はローカルにしか効かないですよね？

助けてください 🙏`,
    date: "2026-04-22",
  },
  {
    id: "q-6",
    title: "Tailwind CSSのカスタムカラー設定",
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
    date: "2026-04-20",
  },
  {
    id: "q-7",
    title: "Dockerコンテナが起動しない",
    content: `\`docker compose up\` で以下のエラーが出ます。

\`\`\`
Error response from daemon: driver failed programming external connectivity
\`\`\`

- ポート \`3000\` は他で使っていない
- Docker Desktop は再起動済み

何を確認すれば良いでしょうか？`,
    date: "2026-04-18",
  },
];

const workArticles: ArticleListResponse[] = [
  {
    id: "w-1",
    title: "ToDoアプリを作りました",
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
    date: "2026-05-02",
  },
  {
    id: "w-2",
    title: "ポートフォリオサイトを公開しました",
    content: `## ポートフォリオを作りました 🎉

Next.js と microCMS を使って自分のポートフォリオを作成しました。

### 工夫した点

1. **App Router** を採用してパフォーマンスを最適化
2. **microCMS** で記事を CMS 管理
3. **Vercel** にデプロイして CI/CD 自動化

ぜひ見てください！`,
    date: "2026-04-29",
  },
  {
    id: "w-3",
    title: "マークダウンエディタを自作",
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
    date: "2026-04-26",
  },
  {
    id: "w-4",
    title: "Slackボットを作ってみた",
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
    date: "2026-04-23",
  },
  {
    id: "w-5",
    title: "CLIツールを公開しました",
    content: `## 何を作ったか

プロジェクトのテンプレートを生成する CLI ツールを **npm に公開** しました。

\`\`\`bash
npx create-my-template my-app
\`\`\`

## 特徴

- TypeScript / ESLint / Prettier の設定済み
- インタラクティブなプロンプトでオプション選択
- monorepo 対応`,
    date: "2026-04-19",
  },
];

const articlesByItem: Record<ArticleItem, ArticleListResponse[]> = {
  question: questionArticles,
  work: workArticles,
};

function isArticleItem(value: string | null): value is ArticleItem {
  return value === "question" || value === "work";
}

export const articleListHandlers = [
  http.get("/api/articles", async ({ request }) => {
    try {
      const url = new URL(request.url);
      const item = url.searchParams.get("item");

      if (!isArticleItem(item)) {
        return HttpResponse.json(
          {
            message:
              "item クエリパラメータには question または work を指定してください",
          },
          { status: 400 },
        );
      }
      const data = articlesByItem[item];
      return HttpResponse.json(data);
    } catch (error) {
      console.error("MSW Handler Error:", error);
      return HttpResponse.json(
        {
          message: "Internal Server Error (MSW)",
          details: error instanceof Error ? error.message : String(error),
        },
        { status: 500 },
      );
    }
  }),
];
