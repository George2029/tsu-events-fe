import { genresBarConfig } from './genresBarConfig';
import Genre from '@/app/ui/Genre';

export default async function EventsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<>
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...genresBarConfig} />
			</div>
			<div className="md:mt-0 mt-20 grow p-5">
				{children}
			</div>
		</>
	);
}

