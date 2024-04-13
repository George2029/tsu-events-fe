'use client'
import Link from 'next/link';
import { RequestIcon, AccountIcon, HomeIcon, AboutIcon } from './icons';
import { usePathname } from 'next/navigation';
let navBarItems = [
	{
		title: 'Events',
		icon: HomeIcon,
		href: '/'
	},
	{
		title: 'Requests',
		icon: RequestIcon,
		href: '/requests'
	},
	{
		title: 'About',
		icon: AboutIcon,
		href: '/about'
	},
	{
		title: 'Account',
		icon: AccountIcon,
		href: '/account'
	},
];

export default function NavBarItems() {
	const pathname = usePathname();
	const checkPath = (href: string): boolean => {
		if (pathname === href) return true; // to catch exact routes
		if (['/movies', '/boardgames', '/contests', '/others'].includes(pathname) && href === '/') return true;
		let regex = /\/\d/; // to catch specific-event routes like /:id
		if (regex.test(pathname) && href === '/') return true;
		return (pathname.startsWith('/requests') && href === '/requests'); // to catch all routes that starts with /requests
	}
	return navBarItems.map((navItem) => {
		return (
			<Link
				href={navItem.href}
				key={navItem.title}
				className={
					`flex flex-col md:gap-4 align-center md:flex-row ${checkPath(navItem.href) && 'text-blue-600 dark:text-yellow-600'}`
				}
			>
				<div className="self-center">{navItem.icon}</div>
				<div className="text-xs md:text-lg">{navItem.title}</div>
			</Link>
		)
	})

}
