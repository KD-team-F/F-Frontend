'use client'

import { useState } from 'react'

import { IconCircle } from '@/components/ui/Icon/Icon'
import { Item } from '@/components/ui/Item/Item'

type ProfileItem = {
	id: string
	title: string
	content: string
	date: string
}

type ProfileTab = 'questions' | 'works'

type Props = {
	userName: string
	grade: string
	specialty: string
	bio: string
	questionItems: ProfileItem[]
	workItems: ProfileItem[]
	defaultTab?: ProfileTab
}

const tabLabels: Record<ProfileTab, string> = {
	questions: '質問',
	works: '制作物',
}

export function Profile({
	userName,
	grade,
	specialty,
	bio,
	questionItems,
	workItems,
	defaultTab = 'questions',
}: Props) {
	const [activeTab, setActiveTab] = useState<ProfileTab>(defaultTab)
	const items = activeTab === 'questions' ? questionItems : workItems

	return (
		<section className="mx-auto w-full max-w-5xl overflow-hidden rounded-[28px] border border-gray-200 bg-[#f7f7f7] shadow-sm">
			<div className="h-24 w-full bg-[#c5e5ff] sm:h-32" />

			<div className="border-b border-gray-200 bg-white px-5 py-6 sm:px-8">
				<div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
					<div className="flex flex-col items-center gap-3 sm:min-w-32">
						<IconCircle name="user" size={88} />
						<p className="bg-gray-200 px-4 py-1 text-base font-bold text-gray-900">
							{userName}
						</p>
					</div>

					<div className="text-center text-xl font-bold text-gray-800 sm:text-left">
						<p>{grade}</p>
						<p>{specialty}</p>
					</div>

					<p className="max-w-2xl text-sm leading-7 text-gray-700 sm:text-base">
						{bio}
					</p>
				</div>
			</div>

			<div className="px-5 py-6 sm:px-8 sm:py-8">
				<div className="mb-8 flex justify-center gap-4 sm:gap-8">
					{(['questions', 'works'] as const).map((tab) => {
						const isActive = tab === activeTab

						return (
							<button
								key={tab}
								type="button"
								onClick={() => setActiveTab(tab)}
								className={[
									'min-w-28 rounded-full px-6 py-2 text-lg font-bold transition sm:min-w-40 sm:text-2xl',
									isActive
										? 'bg-[#9bcbff] text-white shadow-sm'
										: 'bg-white text-[#7aa8dd] ring-1 ring-[#9bcbff] hover:bg-[#eef7ff]',
								].join(' ')}
							>
								{tabLabels[tab]}
							</button>
						)
					})}
				</div>

				<div className="space-y-5">
					{items.length > 0 ? (
						items.map((item) => (
							<Item
								key={item.id}
								title={item.title}
								content={item.content}
								date={item.date}
							/>
						))
					) : (
						<div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center text-base text-gray-500">
							{activeTab === 'questions'
								? '投稿された質問はまだありません。'
								: '制作物はまだありません。'}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export type { ProfileItem, ProfileTab }
