import Genre from '@/app/ui/Genre';

let data = {
	title: 'contests',
	options: [
		{
			title: 'movies',
			href: '/requests/movies',
		},
		{
			title: 'board games',
			href: '/requests/boardgames',
		},
		{
			title: 'custom',
			href: '/requests/custom',
		},
		{
			title: 'all requests',
			href: '/requests',
		},
	]
}

export default function Requests() {
	return (
		<div className="flex w-full">
			<div className="w-full mx-2 md:w-auto absolute md:static md:max-w-3xl py-4">
				<Genre {...data} />
			</div>
			<div className="mt-20 md:mt-0 grow mx-10">
				<div className="text-center">Contest Requests Page</div>
			</div>
		</div>
	)
}
