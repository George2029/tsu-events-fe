'use client'

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon, PCIcon } from '@/app/ui/icons';

export default function ThemeToggler() {
	const { theme, setTheme, systemTheme } = useTheme()
	const [expanded, setExpanded] = useState(false);
	let currentThemeIcon: any;
	if (systemTheme === theme) {
		currentThemeIcon = PCIcon;
	} else {
		if (theme === 'light') {
			currentThemeIcon = SunIcon;
		} else {
			currentThemeIcon = MoonIcon;
		}
	}
	const liStyle = `list-none hover:bg-background/20 hover:dark:text-darktitle dark:focus:bg-darkgenreBarBG focus:bg-background/20 focus:text-darktitle dark:focus:text-darktitle px-2 flex dark:hover:bg-darkgenreBarBG/30 gap-2 cursor-pointer p-1 focus:outline-none`;

	return (
		<div className="flex items-center absolute top-5 right-5 z-50">
			<details open={expanded} id="detailsToggler" onToggle={(e) => {
				let state = e.currentTarget.open;
				setExpanded(state);
				if (state) {
					if (theme === 'system') {
						document.getElementById('system')?.focus()
						return;
					} else {
						if (theme) {
							document.getElementById(theme)?.focus()
						}
					}
				}
			}} >
				<summary id="themeSummary" tabIndex={0} className="dark:text-darktitle cursor-pointer">{currentThemeIcon}</summary>
				<ul className="absolute top-10 right-0 rounded-lg bg-themeTogglerBG ring-1 ring-border dark:ring-darkborder dark:bg-darkthemeTogglerBG py-1">
					<li id="light" tabIndex={1} onClick={() => {
						if (theme === 'light') {
							setExpanded(false);
						} else {
							setExpanded(false);
							setTheme('light');
						}
					}} className={liStyle}>
						{SunIcon}
						<span>Light</span>
					</li>
					<li id="dark" tabIndex={2} onClick={() => {
						if (theme === 'light' || theme === 'system') {
							setExpanded(false);
							setTheme('dark');

						} else {
							setExpanded(false);
						}
					}} className={liStyle}>
						{MoonIcon}
						<span>Dark</span>
					</li>
					<li id="system" tabIndex={3} onClick={() => {
						if (theme === 'system') {
							setExpanded(false);
						}
						setExpanded(false);
						setTheme('system');
					}} className={liStyle}>
						{PCIcon}
						<span>System</span>
					</li>
				</ul>
			</details>
		</div>
	)
}
