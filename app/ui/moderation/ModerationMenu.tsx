import Link from 'next/link';
import { RequestIcon, UsersIcon, EventIcon } from '@/app/ui/icons';

let navBarItems = [
	{
		title: 'Events',
		icon: EventIcon,
		href: '/mod/events'
	},
	{
		title: 'Requests',
		icon: RequestIcon,
		href: '/mod/requests'
	},
	{
		title: 'users',
		icon: UsersIcon,
		href: '/mod/users'
	},
];

export default function NavBarItems() {
	return (
		<div className="max-w-3xl w-full space-y-2">
			{navBarItems.map((navItem) => (
				<Link
					href={navItem.href}
					key={navItem.title}
					className={
						`flex gap-2`
					}
				>
					<div className="self-center">{navItem.icon}</div>
					<div className=" self-center text-xs md:text-lg">{navItem.title}</div>
				</Link>
			))}
		</div>
	)
}
