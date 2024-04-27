import NavBarItems from './NavBarItems';

export default function NavBar() {
	return (

		<nav className="md:ml-3 w-full flex justify-between h-14 fixed md:relative bottom-0 md:top-0  bg-background dark:bg-darkbackground z-40">
			<div className="mx-10 md:mt-2 md:mx-0 w-full max-w-xl flex self-center justify-between">
				<NavBarItems />
			</div >
		</nav >
	)

}
