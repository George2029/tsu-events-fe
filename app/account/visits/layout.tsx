import BackButton from '@/app/ui/buttons/Back';

export default function AccountLayout({ children }: Readonly<{ children: React.ReactNode }>) {

	return (

		<>
			{children}
			<BackButton />
		</>
	)
}
