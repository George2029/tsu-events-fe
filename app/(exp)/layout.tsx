import BackButton from '@/app/ui/buttons/Back';

export default async function ExperiencedLayout({ children }: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="px-5 w-full mt-16 md:mt-5 flex max-w-xl  flex-col">
			<div className="bg-cardBG dark:bg-darkcardBG ring-1 rounded-xl ring-border dark:ring-darkborder px-3 w-full">
				<div className="p-3 relative rounded-lg">
					{children}
				</div>
			</div>
			<BackButton />
		</div>
	)
}
