import Link from 'next/link';

export default function NavItem({ props }: { props: { navItem: any } }) {
	const { navItem } = props;
	return (
		<Link
			href={navItem.href}
			key={navItem.title}
			className={
				`flex flex-col active:scale-50 md:active:scale-90 duration-300 md:hover:text-active md:dark:hover:text-darkactive md:gap-4 align-center md:flex-row`
			}
		>
			<div className="self-center">{navItem.icon}</div>
			<div className="text-xs md:text-lg">{navItem.title}</div>
		</Link>
	)

}
