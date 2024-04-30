import canMod from '@/app/actions/moderation/canMod'
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { GoBackIcon } from '@/app/ui/icons';

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
			<Link href="/" className="w-fit md:active:scale-90 active:scale-50 duration-300 dark:bg-darkbutton bg-button dark:hover:text-darkactive hover:text-active ring-1 ring-border dark:ring-darkborder mt-4 flex p-2 gap-2 rounded-lg"><span>Back</span> {GoBackIcon}</Link>
		</div>
	)
}
