'use client'
import { useState } from 'react';

import { SunIcon, MoonIcon, PCIcon } from '@/app/ui/icons';

export default function TopBar({ props }: { props: { theme: any, setTheme: any } }) {
	let { theme, setTheme } = props;
	const [expanded, setExpanded] = useState(false);
	let storedTheme = localStorage.getItem('theme');
	const liStyle = `hover:bg-background/20 hover:dark:text-darktitle dark:focus:bg-darkgenreBarBG focus:bg-background/20 focus:text-darktitle dark:focus:text-darktitle px-2 flex dark:hover:bg-darkgenreBarBG/30 gap-2 cursor-pointer p-1 focus:outline-none`;

	return (
		<div className="absolute top-5 gap-2 right-5 z-50 flex justify-start">
			<div className="flex items-center">
				<details open={expanded} id="detailsToggler" onToggle={(e) => {
					let state = e.currentTarget.open;
					setExpanded(state);
					if (state) {
						if (!storedTheme) {
							document.getElementById('system')?.focus()
							return;
						} else {
							document.getElementById(storedTheme)?.focus()
						}
						console.log(document.activeElement);
					}
				}} >
					<summary id="themeSummary" tabIndex={0} className="list-none dark:text-darktitle text- cursor-pointer">{storedTheme ? (theme === 'light' ? SunIcon : MoonIcon) : PCIcon}</summary>
					<ul className="absolute top-10 right-0 rounded-lg bg-themeTogglerBG ring-1 ring-border dark:ring-darkborder dark:bg-darkthemeTogglerBG py-1">
						<li id="light" tabIndex={1} onClick={() => {
							if (storedTheme === 'light') {
								setExpanded(false);
							} else {
								localStorage.setItem('theme', 'light');
								setExpanded(false);
								setTheme('light');
							}
						}} className={liStyle}>
							{SunIcon}
							<span>Light</span>
						</li>
						<li id="dark" tabIndex={2} onClick={() => {
							if (storedTheme === 'dark') {
								setExpanded(false);

							} else {
								localStorage.setItem('theme', 'dark');
								setExpanded(false);
								setTheme('dark');
							}
						}} className={liStyle}>
							{MoonIcon}
							<span>Dark</span>
						</li>
						<li id="system" tabIndex={3} onClick={() => {
							if (!storedTheme) {
								setExpanded(false);
							}
							localStorage.removeItem('theme');
							setExpanded(false);
							if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
								setTheme('dark');
							} else {
								setTheme('light');
							}
						}} className={liStyle}>
							{PCIcon}
							<span>System</span>
						</li>
					</ul>
				</details>
			</div>
			<div className="font-bold text-xl font-display select-none self-center">TSUE</div>
		</div>
	);
}
