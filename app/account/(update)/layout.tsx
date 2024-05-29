import BackButton from '@/app/ui/buttons/Back';

export default function AccountEditLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (

		<div className="flex md:mx-auto max-w-xs flex-col">
			{children}
			<div>
				<BackButton />
			</div>
		</div>
	)
}
