'use client'
import Link from 'next/link';
import { RequestIcon, AccountIcon, HomeIcon, AboutIcon } from './icons';
import { usePathname } from 'next/navigation';
let navBarItems = [
	{
		title: 'Home',
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
	const checkPath = (href: string): boolean => pathname === href
	return navBarItems.map((navItem) => {
		return (
			<Link
				href={navItem.href}
				key={navItem.title}
				className={
					`flex flex-col md:gap-4 align-center md:flex-row ${checkPath(navItem.href) && 'text-selected'}`
				}
			>
				<div className="self-center">{navItem.icon}</div>
				<div className="text-xs md:text-lg">{navItem.title}</div>
			</Link>
		)
	})

}
