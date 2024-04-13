'use client';
import NavBarItems from './NavBarItems';

export default function NavBar() {
	return (

		<nav className="w-full flex h-14 md:max-w-5xl fixed bottom-0 md:top-20 bg-color">
			<div className="mx-10 w-full flex self-center justify-around">
				<NavBarItems />
			</div >
		</nav >
	)

}
