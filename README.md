# Dev Hub

神戸電子専門学校の学生向け Q&A・制作物共有プラットフォーム「Dev Hub」のフロントエンド実装です。
Next.js (App Router) + TypeScript + Tailwind CSS で構築し、API は MSW でモック化しています。

## 技術スタック

| 種別 | 技術 |
|------|------|
| フレームワーク | [Next.js 16](https://nextjs.org/) (App Router, React Compiler) |
| 言語 | TypeScript / React 19 |
| スタイリング | Tailwind CSS v4 / `tailwind-merge` / `clsx` |
| データ取得 | [SWR](https://swr.vercel.app/) |
| API モック | [MSW](https://mswjs.io/) |
| Markdown | `react-markdown` |
| アイコン | `lucide-react` / `react-icons` |
| UI カタログ | [Storybook](https://storybook.js.org/) |
| テスト | Vitest + Playwright |

## 必要環境

- Node.js `20.19.0`（`.nvmrc` 参照）
- npm / pnpm / yarn いずれか

## セットアップ

```bash
nvm use         # .nvmrc に従って Node.js のバージョンを揃える
npm install
```

`.env.local` で MSW を有効化します。

```bash
NEXT_PUBLIC_API_MOCKING=enabled
```

## 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開くと、ルート (`/`) からログイン画面 (`/login`) にリダイレクトされます。

## 主なコマンド

| コマンド | 説明 |
|----------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番ビルド |
| `npm run start` | 本番ビルドの起動 |
| `npm run lint` | ESLint によるチェック |
| `npm run storybook` | Storybook を起動（`http://localhost:6006`） |
| `npm run build-storybook` | Storybook の静的ビルド |

## 画面構成

| パス | 概要 |
|------|------|
| `/` | `/login` へリダイレクト |
| `/login` | ログイン画面 |
| `/articles` | 記事一覧（質問 / 制作物） |
| `/articles/ranking` | いいね数によるランキング |
| `/articles/new` | 記事投稿 |
| `/articles/[id]` | 記事詳細・コメント・いいね |
| `/articles/edit/[id]` | 記事編集 |
| `/articles/profile` | プロフィール |

## ディレクトリ構成

```
src/
├── app/                       # Next.js App Router
│   ├── (auth)/login/          # 認証関連の画面
│   └── (app)/articles/        # 認証後のアプリ画面
├── components/                # 共通 UI コンポーネント
│   ├── ui/                    # ボタン・タグ・PostDate など
│   └── layouts/               # Header / Footer
├── features/                  # 機能単位のドメイン
│   ├── article/               # 記事の一覧・詳細・編集・ランキング・いいね
│   ├── comment/               # コメント
│   ├── submission/            # 記事投稿フォーム・Markdown エディタ
│   ├── tag/                   # タグ
│   ├── profile/               # プロフィール
│   └── user/                  # ログイン
├── mocks/                     # MSW のハンドラとモックデータ
│   ├── handlers/
│   ├── data/
│   ├── browser.ts
│   └── MSWProvider.tsx
├── constants/                 # 定数（いいね、認証、一覧表示制限など）
├── types/                     # 共通型定義
└── lib/                       # ユーティリティ
```

`features/<domain>/` の内部はドメインごとに以下を分けています。

- `components/` … 画面・複合コンポーネント
- `hooks/` … SWR を使ったデータ取得などのカスタムフック
- `actions/` … モック API を叩くクライアント関数
- `api/` / `types/` / `constants/` / `utils/` … 必要に応じて

## API モック（MSW）

開発中はバックエンド API の代わりに MSW のハンドラがレスポンスを返します。

- ハンドラ: `src/mocks/handlers/`
- モックデータ: `src/mocks/data/`
- ブラウザ起動: `src/mocks/browser.ts` / `src/mocks/MSWProvider.tsx`

主なエンドポイント:

| メソッド | パス | 概要 |
|----------|------|------|
| `GET` | `/api/articles?item=question\|work` | 記事一覧 |
| `POST` | `/api/articles/update` | 一覧の追加更新（リフレッシュ） |
| `GET` | `/api/articles/ranking?type=question\|work` | ランキング |
| `GET` | `/api/article/detail/:id` | 記事詳細 |
| `POST` | `/api/article/post?item=` | 記事投稿 |
| `PUT` | `/api/article/edit/:id` | 記事編集 |
| `DELETE` | `/api/article/delete/:id` | 記事削除 |
| `POST` | `/api/articles/:id/like` | いいねトグル |
| `POST` | `/api/articles/:id/comments` | コメント投稿 |
| `GET` | `/api/tags` | タグ一覧 |
| `GET` | `/api/profile` | プロフィール |
| `POST` | `/api/login` | ログイン |

## Storybook

UI コンポーネント・機能コンポーネントは Storybook でカタログ化しています。

```bash
npm run storybook
```

## コーディング規約

- App Router 上の Client Component には `"use client"` を明示する
- 共有可能な数値はマジックナンバーにせず `src/constants/` に定義する
- 機能単位のロジックは `src/features/<domain>/` 配下に閉じ込める
- API 呼び出しは `actions/`（または `api/`）に集約し、コンポーネントから直接 `fetch` しない
- SWR のキャッシュキーは API パスまたは配列で統一し、更新時は `mutate` で invalidate する

## トラブルシュート

- **ログイン後に画面が真っ白**: `.env.local` で `NEXT_PUBLIC_API_MOCKING=enabled` になっているか確認
- **モックデータが反映されない**: ブラウザを再読み込みして MSW の Service Worker を再登録
- **型エラーが出る**: `npm run lint` と `npx tsc --noEmit` で確認
