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
		userName: 'ユーザー名',
		grade: '4年生',
		specialty: 'ITエキスパート',
		bio: 'GMOインターネットグループ公式カフェ「GMO cafe」。社員とゲストが集う憩いと共創の場。イベント・勉強会・オープン情報を発信中。 #GMOCafe',
		questionItems,
		workItems,
		defaultTab: 'questions',
	},
}

export const WorksTab: Story = {
	args: {
		userName: 'ユーザー名',
		grade: '4年生',
		specialty: 'ITエキスパート',
		bio: 'GMOインターネットグループ公式カフェ「GMO cafe」。社員とゲストが集う憩いと共創の場。イベント・勉強会・オープン情報を発信中。 #GMOCafe',
		questionItems,
		workItems,
		defaultTab: 'works',
	},
}
