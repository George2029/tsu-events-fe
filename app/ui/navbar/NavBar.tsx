import { RequestIcon, AccountIcon, HomeIcon, AboutIcon } from './icons';
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
import NavItem from './NavItem';

export default function NavBar() {
	return (

		<nav className="md:ml-3 w-full flex justify-between h-14 fixed md:relative bottom-0 md:top-0  bg-background dark:bg-darkbackground z-40">
			<div className="mx-10 md:mt-2 md:mx-0 w-full max-w-xl flex self-center justify-between">

				{navBarItems.map((navItem) => {
					return (
						<NavItem key={navItem.title} props={{ navItem }} />
					)
				})}

			</div >
		</nav >
	)

}
