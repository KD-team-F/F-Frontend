import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Profile } from './Profile'

const meta: Meta<typeof Profile> = {
	title: 'UI/Profile',
	component: Profile,
	parameters: {
		layout: 'padded',
	},
}

export default meta

type Story = StoryObj<typeof Profile>

const baseArgs = {
	userName: 'ユーザー名',
	grade: '4年生',
	specialty: 'ITエキスパート',
	bio: 'ITエキスパートコースの4年生です。フロントエンド開発を中心に、ReactやNext.jsを使ったプロジェクトに取り組んでいます。趣味はカフェ巡りと旅行です。',
}

const questionItems = [
	{
		id: 'question-1',
		title: 'ReactのuseEffectはいつ使うべきですか？',
		content:
			'useEffectの適切な使いどころが分からず困っています。どのような場合に使うべきか教えてください。',
		date: '2026-04-24',
	},
	{
		id: 'question-2',
		title: 'TypeScriptのジェネリクスについて',
		content:
			'ジェネリクスの概念は理解しているつもりですが、実際のコードでどう活用すればいいか分かりません。',
		date: '2026-04-23',
	},
	{
		id: 'question-3',
		title: 'Next.jsのApp RouterとPages Routerの違いは？',
		content:
			'既存プロジェクトをApp Routerに移行すべきか悩んでいます。メリット・デメリットを教えてください。',
		date: '2026-04-22',
	},
]

const workItems = [
	{
		id: 'work-1',
		title: 'ポートフォリオサイト',
		content:
			'Next.js + TailwindCSSで制作した個人ポートフォリオです。Storybookも導入しています。',
		date: '2026-04-24',
	},
	{
		id: 'work-2',
		title: 'タスク管理アプリ',
		content:
			'ReactとFirebaseを使ったリアルタイムタスク管理アプリです。認証機能も実装しています。',
		date: '2026-04-20',
	},
	{
		id: 'work-3',
		title: 'ECサイトLP',
		content:
			'クライアント案件で制作したランディングページです。レスポンシブ対応済み。',
		date: '2026-04-15',
	},
]

export const Default: Story = {
	args: {
		...baseArgs,
		questionItems,
		workItems,
		defaultTab: 'questions',
	},
}

export const WorksTab: Story = {
	args: {
		...baseArgs,
		questionItems,
		workItems,
		defaultTab: 'works',
	},
}

export const QuestionTableOnly: Story = {
	name: '質問テーブル表示',
	args: {
		...baseArgs,
		questionItems,
		workItems: [],
		defaultTab: 'questions',
	},
	parameters: {
		docs: {
			description: {
				story: '質問テーブルのみを表示して、質問一覧の見え方を確認するストーリーです。',
			},
		},
	},
}

export const WorkTableOnly: Story = {
	name: '制作物テーブル表示',
	args: {
		...baseArgs,
		questionItems: [],
		workItems,
		defaultTab: 'works',
	},
	parameters: {
		docs: {
			description: {
				story: '制作物テーブルのみを表示して、制作物一覧の見え方を確認するストーリーです。',
			},
		},
	},
}
