import GenresBar from '@/app/ui/GenresBar';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<>
			<GenresBar />
			<div className="mt-6 md:mt-10">
				{children}
			</div>
		</>
	)
}
