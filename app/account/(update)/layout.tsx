import Back from '@/app/ui/Back';

export default function AccountEditLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (

		<div className="flex md:mx-auto max-w-xs flex-col">
			{children}
			<div className="self-end">
				<Back />
			</div>
		</div>
	)
}
