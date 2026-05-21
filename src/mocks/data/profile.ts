export const profile = {
  userName: 'yamada tarou',
  grade: '4年生',
  specialty: 'ITエキスパート',
  bio: 'ITエキスパートコースの4年生です。フロントエンド開発を中心に、ReactやNext.jsを使ったプロジェクトに取り組んでいます。趣味はカフェ巡りと旅行です。',
  questionItems: [
    {
	  id: 'question-1',
	  title: 'ReactのuseEffectはいつ使うべきですか？',
	  content: 'useEffectの適切な使いどころが分からず困っています。どのような場合に使うべきか教えてください。',
      date: '2026-04-24T10:30:00',
	},
	{
	  id: 'question-2',
	  title: 'TypeScriptのジェネリクスについて',
	  content: 'ジェネリクスの概念は理解しているつもりですが、実際のコードでどう活用すればいいか分かりません。',
	  date: '2026-04-23T15:00:00',
	},
	{
	  id: 'question-3',
	  title: 'Next.jsのApp RouterとPages Routerの違いは？',
	  content: '既存プロジェクトをApp Routerに移行すべきか悩んでいます。メリット・デメリットを教えてください。',
	  date: '2026-04-22T09:15:00',
	},
  ],
  workItems: [
	{
        id: 'work-1',
        title: 'SNSアプリ',
        content: 'Next.jsとFirebaseを使ったSNSアプリです。認証機能も実装しています。',
        date: '2026-04-25T12:30:00',
	},
	{
        id: 'work-2',
        title: 'タスク管理アプリ',
        content: 'ReactとFirebaseを使ったリアルタイムタスク管理アプリです。認証機能も実装しています。',
        date: '2026-04-20T14:45:00',
	},
	{
        id: 'work-3',
        title: 'ポートフォリオサイト',
        content: 'Next.jsを使ったポートフォリオサイトです。レスポンシブデザインを採用しています。',
        date: '2026-04-18T11:00:00',
	},
  ],
}
