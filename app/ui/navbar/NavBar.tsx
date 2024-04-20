'use client';
import NavBarItems from './NavBarItems';

export default function NavBar() {
	return (

		<nav className="w-full flex justify-between h-14 fixed md:relative bottom-0 md:top-0 bg-bgColor z-50">
			<div className="hidden md:flex md:justify-start md:block md:w-32 md:font-display md:text-xl">
				<div className="ml-6 text-indigo-500 select-none self-center">TSUE</div>
			</div>
			<div className="mx-10 md:mx-0 md:mr-4 w-full max-w-xl flex self-center justify-around">
				<NavBarItems />
			</div >
		</nav >
	)

}
