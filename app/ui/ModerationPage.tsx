'use client'

import Link from 'next/link';
import { RequestIcon, UsersIcon, EventIcon } from '@/app/ui/icons';
import { usePathname } from 'next/navigation';
let navBarItems = [
	{
		title: 'Events',
		icon: EventIcon,
		href: '/moderation'
	},
	{
		title: 'Requests',
		icon: RequestIcon,
		href: '/moderation/requests'
	},
	{
		title: 'users',
		icon: UsersIcon,
		href: '/moderation/users'
	},
];

export default function NavBarItems() {
	const pathname = usePathname();
	const checkPath = (href: string): boolean => {
		return pathname === href;
	}
	return (
		<div className="max-w-3xl w-full self-center flex justify-between mx-10 mt-4">
			{navBarItems.map((navItem) => (
				<Link
					href={navItem.href}
					key={navItem.title}
					className={
						`flex flex-col md:gap-4 align-center md:flex-row ${checkPath(navItem.href) && 'color-selected'}`
					}
				>
					<div className="self-center">{navItem.icon}</div>
					<div className="text-xs md:text-lg">{navItem.title}</div>
				</Link>
			))}
		</div>
	)
}
