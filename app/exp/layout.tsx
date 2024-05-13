import canMod from '@/app/actions/moderation/canMod'
import Back from '@/app/ui/Back';
import { notFound } from 'next/navigation';

export default async function ExperiencedLayout({ children }: Readonly<{
	children: React.ReactNode
}>) {
	let res = await canMod();
	if (!res) return notFound();
	return (
		<div className="px-5 w-full md:mt-5 mt-16 flex max-w-xl  flex-col">
			<div className="bg-cardBG dark:bg-darkcardBG ring-1 rounded-xl ring-border dark:ring-darkborder px-3 w-full">
				<div className="p-3 rounded-lg">
					{children}
				</div>
			</div>
			<Back />
		</div>
	)
}
