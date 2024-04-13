'use client'
import Link from 'next/link';
import { MovieIcon, BoardGameIcon, ContestIcon, OtherEventIcon, AllEventsIcon } from '@/app/ui/icons/eventsBarIcons';
import { usePathname } from 'next/navigation';

const genreTypes = [
	{
		title: 'all types',
		href: '/',
		icon: AllEventsIcon
	},
	{
		title: 'movies',
		href: '/movies',
		icon: MovieIcon,
	},
	{
		title: 'boardgames',
		href: '/boardgames',
		icon: BoardGameIcon,
	},
	{
		title: 'contests',
		href: '/contests',
		icon: ContestIcon,
	},
	{
		title: 'others',
		href: '/others',
		icon: OtherEventIcon,
	},
];
//const eventStatus = ['ongoing', 'passed'];

export default function GenresBar() {

	const pathname = usePathname();

	const check = (href: string): boolean => {
		if (pathname === href) return true; // for event-routes like /[genre]

		if ((pathname === '/requests') && href === '/') {
			return true; // to catch start-page-routes like /, /requests
		} else {
			return '/requests' + href === pathname; // to catch request-routes like /requests/[genre]
		}
	}

	return (
		<div className="w-full justify-between flex md:mt-10">
			{genreTypes.map(genre => {


				return (
					<Link
						key={genre.title}
						href={pathname.startsWith('/requests') ? '/requests' + genre.href : genre.href}
						className={
							`flex flex-col align-center md:gap-2 md:flex-row 
							${check(genre.href) && 'text-blue-600 dark:text-yellow-600'}`
						}
					>
						<div className="self-center">{genre.icon}</div>
						<div className="text-xs md:text-lg">{genre.title}</div>

					</Link>)
			}
			)
			}
		</div>
	);
}
