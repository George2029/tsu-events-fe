'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItem({ props }: { props: { navItem: any } }) {
	const { navItem: { href, title, icon } } = props;
	const pathname = usePathname();
	return (
		<Link
			href={href}
			key={title}
			className={
				`select-none flex flex-col active:scale-50 md:active:scale-90 duration-300 md:gap-4 align-center md:flex-row ${(pathname === href) ? 'text-active dark:text-darkactive' : ''}`
			}
		>
			<div className="self-center">{icon}</div>
			<div className="text-xs md:text-lg">{title}</div>
		</Link>
	)

}
