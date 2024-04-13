import GenresBar from '@/app/ui/GenresBar';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<>
			<GenresBar />
			{children}
		</>
	)
}
