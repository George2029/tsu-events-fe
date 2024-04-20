import Genre from '@/app/ui/Genre';

let data = {
	title: 'movies',
	options: [
		{
			title: 'board games',
			href: '/boardgames',
		},
		{
			title: 'contests',
			href: '/contests',
		},
		{
			title: 'custom',
			href: '/custom',
		},
		{
			title: 'all events',
			href: '/',
		},
	]
}


export default function MovieEventsPage() {
	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...data} />
			</div>
			<div className="mt-20 md:mt-0 grow mx-10">
				<div className="text-center">Movie Events Page</div>
			</div>
		</div>
	);
}
