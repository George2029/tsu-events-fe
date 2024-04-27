'use client'
import { useState } from 'react'

import NavBar from './ui/navbar/NavBar';
import Content from './ui/Content';
import TopBar from '@/app/ui/TopBar';

export default function Telo({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	let storedTheme = localStorage.getItem('theme');

	let chosenTheme: string;
	if (storedTheme) {
		chosenTheme = storedTheme;
	} else {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			chosenTheme = 'dark';
		} else {
			chosenTheme = 'light';
		}
	}

	let [theme, setTheme] = useState(chosenTheme);

	console.log(`telo: currentTheme:`, theme);

	return (
		<div className={theme}>
			<div className="bg-background text-text dark:text-darktext dark:bg-darkbackground">
				<main className=" overflow-hidden relative flex max-w-4xl min-h-screen flex-col items-center my-o mx-auto">
					<TopBar props={{ theme, setTheme }} />
					<NavBar />
					<Content children={children} />
				</main>
			</div>
		</div>
	)

}
