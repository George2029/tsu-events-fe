import BackButton from '@/app/ui/buttons/Back';

export default async function ModLayout({ children }: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="px-5 w-full md:mt-5 mt-16 flex max-w-xl  flex-col">
			<div className="bg-cardBG dark:bg-darkcardBG ring-1 rounded-xl ring-border dark:ring-darkborder px-3 w-full">
				<div className="p-3 relative rounded-lg">
					{children}
				</div>
			</div>
			<BackButton />
		</div>
	)
}
