import Back from '@/app/ui/buttons/Back';

export default function UserPublicPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="flex flex-col px-5 w-full mx-auto max-w-xl md:mt-10 mt-20 ">
			{children}
			<div className="self-end">
				<Back />
			</div>
		</div>
	)
}
